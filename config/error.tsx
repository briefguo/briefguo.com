import React from 'react';
import { logger } from '@/core/logger';
import Error403 from '@/pages/expections/403';
import Error404 from '@/pages/expections/404';
import Error500 from '@/pages/expections/500';
import Error503 from '@/pages/expections/503';

// ErrorRoute
// 只要错误码 添加进来， 就会被catch到
const ErrorRoute = {
  403: Error403,
  404: Error404,
  500: Error500,
  503: Error503,
};

export const CATCHED_CODE = Object.keys(ErrorRoute).map(Number);
export type CatchedCode = keyof typeof ErrorRoute;

export class FetchError implements Error {
  name: string;
  message: string;
  code: number;
  constructor(code: number, message?: string) {
    this.name = `接口异常`;
    this.code = code;
    this.message = message || `接口异常[${code}]`;
  }
}

export function reportError(_error: any) {
  logger.error(_error);
}

// fetch异常
export const onUnhandledrejection = (e: any) => {
  if (process.env.SUNMI_ENV === 'pub') {
    reportError(e);
    e.preventDefault();
  }
};

export const onWindowError = (e: any) => {
  if (process.env.SUNMI_ENV === 'pub') {
    reportError(e);
    e.preventDefault();
  }
};

// https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends React.Component<{ statusCode: CatchedCode }> {
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {};
  }

  componentDidCatch(error: any, info: any) {
    console.error(error);
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (CATCHED_CODE.includes(this.props.statusCode)) {
      const Error = ErrorRoute[this.props.statusCode];
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;