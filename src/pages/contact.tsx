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
          <h2>联系</h2>
          <p>你可能没什么事情会找我，我也希望你没什么事情不要找我</p>
          <p>非得找我</p>
          <p>
            <a href="mailto:gyj9094@gmail.com">gyj9094@gmail.com</a>
          </p>
          <p>🤣讲真的，实在想不到你要往我邮箱里发些什么</p>
        </div>
      </Screen>
    </Page>
  )
}
