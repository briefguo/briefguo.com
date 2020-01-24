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
            <div>原生小程序 Wepy Taro实践 Remax实践 代生成小程序</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="框架及库" icon={framework} />
            <div>React 状态管理 Nextjs Stenciljs Rails</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="工程及流程化" icon={pipeline} />
            <div>Jenkins CircleCI GithubActions Docker</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="服务端" icon={server} />
            <div>
              Koa Express Nestjs Nestjs-nextjs Wechaty-robot Redis Mongodb
            </div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="微前端" icon={micorfront} />
            <div>Stenciljs SingleSPA Qiankun</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="编程语言" icon={code} />
            <div>Typescript Ruby Golang</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="工具及插件" icon={tool} />
            <div>Lex项目 Rap2定制专注模式 Pont</div>
          </CategorySection>
          <CategorySection>
            <CategoryTitle name="移动应用" icon={app} />
            <div>Flutter Flutter amap_maps_flutter 混合开发</div>
          </CategorySection>
        </div>
      </Screen>
    </Page>
  )
}
