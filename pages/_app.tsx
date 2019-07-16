import '@/config/initializer';
import { AppProps, Container } from 'next/app';
import ErrorBoundary from '@/config/error';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lexTheme } from '@/config/theme/theme';
import { composePageProps, PagePropsContext } from '@/core/next-compose';
import { enhancedCtx } from '@/helpers/page-props';
import { logger } from '@/core/logger';

type Props = AppProps<any> & { statusCode: any };

const initialAppProps = enhancedCtx(async ({ Component, ctx }) => {
  // 初始化页面参数
  let pageProps = {};
  let statusCode = (ctx.res && ctx.res.statusCode) || 200;
  if (Component.getInitialProps) {
    try {
      pageProps = await Component.getInitialProps(ctx);
    } catch (error) {
      logger.error(error);
      // FetchError
      statusCode = error.code || 500;
    }
  }
  return { pageProps, statusCode };
});

export default composePageProps(initialAppProps)((props: Props) => {
  const { Component, pageProps, statusCode } = props;
  return (
    <ThemeProvider theme={lexTheme}>
      <PagePropsContext.Provider value={pageProps}>
        <ErrorBoundary statusCode={statusCode}>
          <Container>
            <Component />
          </Container>
        </ErrorBoundary>
      </PagePropsContext.Provider>
    </ThemeProvider>
  );
});
