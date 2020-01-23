import React from 'react'
import ParticleBackground from './ParticleBackground'

interface BodyProps {
  backgroundColor?: string
  color?: string
}

const Body: React.FC<BodyProps> = props => {
  const inlineStyle = `
    body {
      color:${props.color};
      background-color:${props.backgroundColor}
    }
    @media (max-width: 768px) {
      body {
        min-width: 375px;
      }
    }
  `
  return (
    <>
      <style>{inlineStyle}</style>
      {props.children}
    </>
  )
}

export default Body
