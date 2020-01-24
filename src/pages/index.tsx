import React from 'react'
import Screen from '~/components/Screen'
import styled from 'styled-components'
import Page from '~/components/Page'
import Header from '~/components/Header'
import ParticleBackground from '~/components/ParticleBackground'

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
  line-height: 1.5em;
`

export default () => {
  return (
    <Page backgroundImage="linear-gradient(#eee, #ccc)">
      <Header />
      <Screen justify="center" align="center" direction="column">
        <CircleImage width="150px" src={briefguoPng} alt="" />
        <Name>郭永杰(briefguo)</Name>
        <Title>前端开发</Title>
        <Description>
          🧑🏻‍💻最近专注于小程序开发、为 Pont 贡献代码
        </Description>
      </Screen>
      <ParticleBackground></ParticleBackground>
    </Page>
  )
}
