import { createAppProps, createPageProps } from '@/core/next-compose';
import { AppContext } from 'next/app';
import Router from 'next/router';

export const createRedirect = createPageProps(ctx => {
  return (path: string) => {
    // https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    const res = ctx.res;
    if (res) {
      res.writeHead(302, {
        Location: path,
      });
      res.end();
    } else {
      Router.push(path);
    }
    return { statusCode: 302 };
  };
});

export type enhancedAppProps<T = any> = (ctx: AppContext) => T;

export const enhancedCtx = <T>(fn: enhancedAppProps<T>) =>
  createAppProps(async appCtx => {
    return fn(appCtx);
  });
