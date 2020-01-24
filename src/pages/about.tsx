import React from 'react'
import Screen from '~/components/Screen'
import Page from '~/components/Page'
import Header from '~/components/Header'
import styled from 'styled-components'

const Description = styled.p`
  color: #4a4a4a;
  line-height: 1.5em;
`

const ListItem = styled.li`
  color: #4a4a4a;
  line-height: 1.5em;
`

export default () => {
  return (
    <Page>
      <Header />
      <Screen justify="center">
        <div className="container">
          <h2>关于 我</h2>
          <Description>
            我是一个前端开发者。现居上海，从2015年实习开始，至今工作4年了。
          </Description>
          <Description>
            我主要做Web前端开发，但不限于Web，还有移动Web、小程序、App、混合开发、服务端、工具插件等。
          </Description>
          <h3>会</h3>
          <ul>
            <ListItem>逛知乎</ListItem>
            <ListItem>听歌、看动画、玩游戏</ListItem>
            <ListItem>画点简单的画、拍点照片、重新设计海报</ListItem>
          </ul>
          <h3>不怎么喜欢</h3>
          <ul>
            <ListItem>尬聊</ListItem>
            <ListItem>开没目的的会</ListItem>
            <ListItem>没讲明白事由，却让我照办</ListItem>
          </ul>
          <h3>链接</h3>
          <ul>
            {/* http://github.com/briefguo/ */}
            <ListItem>GitHub</ListItem>
            <ListItem>Email</ListItem>
            {/* https://www.zhihu.com/people/guo-yong-jie-48/activities */}
            <ListItem>知乎</ListItem>
            <ListItem>
              {/* 喜欢的游戏 */}
              {/* https://steamcommunity.com/profiles/76561198304706081 */}
              网易云音乐
              {/* https://music.163.com/#/user/home?id=61684440 */}
            </ListItem>
            <ListItem>Steam</ListItem>
          </ul>
        </div>
      </Screen>
    </Page>
  )
}
