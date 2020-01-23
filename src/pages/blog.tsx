import React from 'react'
import Screen from '~/components/Screen'
import PageContainer from '~/components/PageContainer'
import Header from '~/components/Header'

export default () => {
  return (
    <PageContainer>
      <Header />
      <Screen justify="flex-start" align="flex-start">
        正在开发的xxx
      </Screen>
    </PageContainer>
  )
}
