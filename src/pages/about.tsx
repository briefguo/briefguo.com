import React from 'react'
import Screen from '~/components/Screen'
import Page from '~/components/Page'
import Header from '~/components/Header'

export default () => {
  return (
    <Page>
      <Header />
      <Screen justify="center">
        <div className="container">
          <h2>关于 我</h2>
          <p>我是一个前端开发者。现居上海，从2015年实习开始，至今工作4年了。</p>
          <p>
            我主要做Web前端开发，但不限于Web，还有移动Web、小程序、App、混合开发、服务端、工具插件等。
          </p>
          <h3>会</h3>
          <ul>
            <li>逛知乎</li>
            <li>听歌、看动画、玩游戏</li>
            <li>画点简单的画、拍点照片、重新设计海报</li>
          </ul>
          <h3>不怎么喜欢</h3>
          <ul>
            <li>尬聊</li>
            <li>开没目的的会</li>
            <li>没讲明白事由，却让我照办</li>
          </ul>
          <h3>链接</h3>
          <ul>
            {/* http://github.com/briefguo/ */}
            <li>GitHub</li>
            <li>Email</li>
            <li>知乎</li>
            {/* https://www.zhihu.com/people/guo-yong-jie-48/activities */}
            <li>
              {/* 喜欢的游戏 */}
              {/* https://steamcommunity.com/profiles/76561198304706081 */}
              {/* 喜欢的动画 */}
              {/* https://space.bilibili.com/3058088 */}
              网易云音乐
              {/* https://music.163.com/#/user/home?id=61684440 */}
            </li>
            <li>Steam</li>
          </ul>
        </div>
      </Screen>
    </Page>
  )
}
