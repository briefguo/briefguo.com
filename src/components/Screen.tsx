import styled from 'styled-components'
import { Flex } from './Flex'

const Screen = styled(Flex)`
  height: calc(100vh - 64px - 80px);
  padding: 40px;
  .container {
    width: 600px;
  }
  /*  */
  @media (max-width: 768px) {
    .container {
    }
  }
`

export default Screen
