import React from 'react'
import styled from 'styled-components'
import Screen from '~/components/Screen'
import Page from '~/components/Page'
import Header from '~/components/Header'
import { Flex } from '~/components/Flex'

import mp from '../assets/mp.svg'
import app from '../assets/app.svg'
import code from '../assets/code.svg'
import micorfront from '../assets/micorfront.png'
import pipeline from '../assets/pipeline.svg'
import framework from '../assets/framework.svg'
import server from '../assets/server.svg'
import tool from '../assets/tool.svg'

const CategoryDescription = styled.p`
  color: #4a4a4a;
  line-height: 1.5em;
`

const CategoryItem = styled(Flex)`
  margin-bottom: 10px;
  .categoryitem {
    &__name {
      margin-left: 1em;
      font-weight: bold;
    }
  }
`

interface CategoryProps {
  name: string
  icon: string
}

const CategoryTitle = ({ name, icon }: CategoryProps) => {
  return (
    <CategoryItem className="categoryitem" align="center">
      <img width="42px" src={icon} alt="" />
      <span className="categoryitem__name">{name}</span>
    </CategoryItem>
  )
}
const CategorySection = styled.div`
  margin-bottom: 32px;
`

export default () => {
  return (
    <Page>
      <Header />
      <Screen justify="center">
        <div className="container">
          <h2>项目</h2>
          <CategorySection>
            <CategoryTitle name="小程序" icon={mp} />
            <CategoryDescription>
              原生小程序 Wepy Taro实践 Remax实践 代生成小程序
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="框架及库" icon={framework} />
            <CategoryDescription>
              React 状态管理 Nextjs Stenciljs Rails
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="工程及流程化" icon={pipeline} />
            <CategoryDescription>
              Jenkins CircleCI GithubActions Docker
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="服务端" icon={server} />
            <CategoryDescription>
              Koa Express Nestjs Nestjs-nextjs Wechaty-robot Redis Mongodb
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="微前端" icon={micorfront} />
            <CategoryDescription>
              Stenciljs SingleSPA Qiankun
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="编程语言" icon={code} />
            <CategoryDescription>Typescript Ruby Golang</CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="工具及插件" icon={tool} />
            <CategoryDescription>
              Lex项目 Rap2定制专注模式 Pont
            </CategoryDescription>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="移动应用" icon={app} />
            <CategoryDescription>
              Flutter Flutter amap_maps_flutter 混合开发
            </CategoryDescription>
          </CategorySection>
        </div>
      </Screen>
    </Page>
  )
}
