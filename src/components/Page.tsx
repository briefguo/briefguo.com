import styled from 'styled-components'
import React from 'react'

interface BodyProps {
  backgroundColor?: string
  backgroundImage?: string
  color?: string
}

const Body: React.FC<BodyProps> = props => {
  const inlineStyle = `
    body {
      color:${props.color};
      background-color:${props.backgroundColor};
      background-image:${props.backgroundImage};
    }
  `
  return (
    <>
      <style>{inlineStyle}</style>
      <main>{props.children}</main>
    </>
  )
}

const Page = styled(Body)`
  main {
  }
`

export default Page
