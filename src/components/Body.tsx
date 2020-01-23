import React from 'react'
import ParticleBackground from './ParticleBackground'

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
      {props.children}
    </>
  )
}

export default Body
