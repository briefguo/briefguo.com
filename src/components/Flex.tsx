import styled from 'styled-components'

interface StyledFlexProps {
  align?: 'flex-start' | 'center' | 'flex-end'
  justify?:
    | 'flex-end'
    | 'center'
    | 'flex-start'
    | 'space-between'
    | 'space-around'
  gutter?: number
  direction?: 'row' | 'column'
  wrap?: 'wrap' | 'nowrap'
}

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => (props.wrap ? props.wrap : 'nowrap')};
  margin: ${props => (props.gutter ? `0 -${props.gutter / 2}px` : '')};
  & > * {
    margin: ${props => (props.gutter ? `0 ${props.gutter / 2}px` : '')};
  }
`

export const Flex = Object.assign(StyledFlex, {
  Auto: styled.div`
    flex: 1 1;
  `,
  Center: styled(StyledFlex)`
    justify-content: center;
  `,
  SpaceBetween: styled(StyledFlex)`
    justify-content: space-between;
  `,
})
