import React from 'react'
import Screen from '~/components/Screen'
import styled from 'styled-components'
import PageContainer from '~/components/PageContainer'
import Header from '~/components/Header'

import briefguoPng from '../assets/briefguo.png'

const CircleImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`

const Name = styled.h1`
  margin-bottom: 10px;
`

const Title = styled.h2`
  margin: 0;
  font-weight: 400;
  margin-bottom: 20px;
  color: #777;
`

const Description = styled.p`
  margin: 0;
  color: #4a4a4a;
  margin-bottom: 60px;
`

export default () => {
  return (
    <PageContainer backgroundImage="linear-gradient(#eee, #f4f5f6)">
      <Header />
      <Screen>
        <CircleImage width="150px" src={briefguoPng} alt="" />
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
  )
}
