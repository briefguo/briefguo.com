import styled from 'styled-components'

interface ScreenProps {
  justify?: 'center' | 'flex-start'
  align?: 'center' | 'flex-start'
}

const Screen = styled.div<ScreenProps>`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-direction: column;
`

export default Screen
