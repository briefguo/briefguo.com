import React from 'react'
import hoo from '~/assets/hoo.svg'
import Screen from '~/components/Screen'

const Loading = () => {
  return (
    <Screen justify="center" align="center" direction="column">
      <img width="100px" src={hoo} alt="" />
    </Screen>
  )
}

export default Loading
