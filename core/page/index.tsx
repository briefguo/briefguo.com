import { Card, H3, IconName, NonIdealState } from '@blueprintjs/core';
import { LexContainer, LexContent } from '@/core/layout/container';
import React, { Fragment } from 'react';
import { Flex } from '@/core/layout/flex';
import { GlobalStyle } from '@/config/theme/theme';
import Head from 'next/head';
import _ from 'lodash';
import constants from '@/config/constants';
import styled from 'styled-components';

export interface PageProps {
  className?: string;
  title?: string;
  children: any;
  style?: React.CSSProperties;
  backgroundColor?: string;
}

const ErrorContainer = styled(Flex.Auto)`
  .title {
  }
  .h1 {
    margin-bottom: 24px;
    color: #434e59;
    font-size: 72px;
    font-weight: 800;
    line-height: 72px;
  }
  .description {
    margin-bottom: 16px;
    color: #394b59;
    font-size: 20px;
    line-height: 28px;
  }
`;

interface ErrorProps {
  icon?: IconName;
  code: number;
  className?: string;
  description?: string;
  action?: any;
  visible?: boolean;
  title?: string;
}

const PageError = ({ code, description, action, className }: ErrorProps) => (
  <ErrorContainer className={className}>
    <h1 className="h1">{code}</h1>
    {description && <div className="description">{description}</div>}
    {action && <div className="action">{action}</div>}
  </ErrorContainer>
);

const EmberedError = ({ className, ...props }: ErrorProps) =>
  props.visible ? (
    <ErrorContainer className={className}>
      <NonIdealState icon={props.icon} />
      <br />
      <div className="description">
        {props.description || '抱歉，当前功能未开发完成'}
      </div>
      {props.action}
    </ErrorContainer>
  ) : null;

export const Page = _.merge(
  (props: PageProps) => {
    const title = props.title || constants.PROJECT_DESCRIPTION;
    return (
      <Fragment>
        <Head>
          <title>{`Briefguo - ${title}`}</title>
          <link rel="stylesheet" href="/static/stylesheets/main.css" />
        </Head>
        <main className={props.className} style={props.style}>
          {props.children}
        </main>
        <GlobalStyle backgroundColor={props.backgroundColor} />
      </Fragment>
    );
  },
  {
    // https://stackoverflow.com/questions/41272375/object-assign-does-not-copy-functions
    Container: LexContainer,
    Sider: styled.aside<{ offset?: number }>`
      min-height: ${props => `calc(100vh - ${props.offset || 64}px)`};
      min-width: 300px;
      padding: 0 24px;
      border-right: 1px solid rgba(16, 22, 26, 0.15);
      background: #fff;
      .bp3-divider {
        border: 0;
        margin-left: -24px;
        margin-right: -24px;
        margin-bottom: 16px;
        background-image: linear-gradient(
          90deg,
          rgba(16, 22, 26, 0) 0,
          rgba(16, 22, 26, 0.15) 20%,
          rgba(16, 22, 26, 0) 100%
        );
        height: 1px;
        padding: 0;
      }
    `,
    EmberedError: styled(EmberedError)`
      padding: 40px;
      text-align: center;
    `,
    Error: styled(PageError)`
      text-align: center;
    `,
    // 内容块
    Content: LexContent,
    Card: Object.assign(
      styled(Card)`
        width: 400px;
        padding: 40px 24px 24px;
        margin: 80px auto;
        .bp3-button[type='submit'] {
          width: 100%;
          margin-top: 16px;
        }
        .bp3-label {
          font-weight: bold;
        }
      `,
      {
        Title: styled(H3)`
          margin-bottom: 24px;
          text-align: center;
        `,
        Footer: styled.div`
          margin-top: 16px;
          text-align: center;
        `,
      },
    ),
  },
);
