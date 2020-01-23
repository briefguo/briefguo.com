// https://github.com/greensock/GSAP
// http://www.bootstrapmb.com/item/6816

function random(low: number, high: number) {
  return Math.random() * (high - low) + low
}

interface Particle {
  id: number
  x: number
  y: number
  startY: number
  radius: number
  defaultRadius: number
  startAngle: 0
  endAngle: number
  alpha: number
  color: { r: number; g: number; b: number }
  speed: number
  amplitude: number
  isBurst: false
}

class Visual {
  canvasWidth = 0
  canvasHeight = 0
  particleLength = 32
  particles: Particle[] = []
  particleMaxRadius = 8

  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.initialize()
    this.render()
  }

  initialize() {
    this.resizeCanvas()
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i))
    }
    this.bind()
  }

  bind() {
    window.addEventListener('resize', this.handleResize, false)
  }

  unbind() {
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    this.resizeCanvas()
  }

  resizeCanvas() {
    this.canvasWidth = document.body.offsetWidth
    this.canvasHeight = document.body.offsetHeight
    this.canvas.width = this.canvasWidth * window.devicePixelRatio
    this.canvas.height = this.canvasHeight * window.devicePixelRatio
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  createParticle(id: number, isRecreate?: boolean): Particle {
    const radius = random(1, this.particleMaxRadius)
    const x = isRecreate
      ? -radius - random(this.particleMaxRadius * 2, this.canvasWidth)
      : random(0, this.canvasWidth)
    let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150)
    y += random(-100, 100)
    const alpha = random(0.05, 1)

    return {
      id: id,
      x: x,
      y: y,
      startY: y,
      radius: radius,
      defaultRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      alpha: alpha,
      color: { r: random(0, 30), g: random(0, 10), b: 0 },
      speed: alpha + 1,
      amplitude: random(50, 200),
      isBurst: false,
    }
  }

  drawParticles() {
    this.particles.forEach(particle => {
      // 位置情報更新
      this.moveParticle(particle)

      // particle描画
      this.context.beginPath()
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`
      this.context.arc(
        particle.x,
        particle.y,
        particle.radius,
        particle.startAngle,
        particle.endAngle,
      )
      this.context.fill()
    })
  }

  moveParticle(particle: Particle) {
    particle.x += particle.speed
    particle.y =
      particle.startY +
      particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180)
  }

  render = () => {
    // canvas初期化
    this.context.clearRect(
      0,
      0,
      this.canvasWidth + this.particleMaxRadius * 2,
      this.canvasHeight,
    )

    // particleを描画
    this.drawParticles()

    // 画面から消えたら新しいparticleに差し替え
    this.particles.forEach(particle => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true)
      }
    })
    requestAnimationFrame(this.render)
  }
}

import React, { useEffect } from 'react'
import styled from 'styled-components'

const MyCanvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  filter: blur(4px);
`

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.querySelector('#particle-bg') as HTMLCanvasElement
    new Visual(canvas)
  }, [])
  return <MyCanvas id="particle-bg"></MyCanvas>
}

export default ParticleBackground
