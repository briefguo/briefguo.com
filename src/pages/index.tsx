import React from 'react';
import Header from '~components/Header';
import PageContainer from '~components/PageContainer';
import Screen from '~components/Screen';
import logo from '~assets/briefguo.png';
import styled from 'styled-components';
import Body from '~components/Body';

const CircleImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;
const Name = styled.h1`
  margin-bottom: 10px;
`;
const Title = styled.h2`
  margin: 0;
  font-weight: 400;
  margin-bottom: 20px;
  color: #777;
`;
const Description = styled.p`
  margin: 0;
  color: #4a4a4a;
  margin-bottom: 60px;
`;

export default () => {
  return (
    <PageContainer>
      <Header></Header>
      <Screen>
        <CircleImage width="150px" src={logo} alt="" />
        <Name>郭永杰</Name>
        <Title>前端开发</Title>
        <Description>有问必答不知道</Description>
        {/* https://www.zhihu.com/people/guo-yong-jie-48/activities */}
        {/* 喜欢的游戏 */}
        {/* https://steamcommunity.com/profiles/76561198304706081 */}
        {/* 喜欢的动画 */}
        {/* https://space.bilibili.com/3058088 */}
      </Screen>
    </PageContainer>
  );
};
