import styled from 'styled-components'
import { Flex } from './Flex'

const Screen = styled(Flex)`
  height: calc(100vh - 64px - 40px * 2);
  padding: 40px;
  .container {
    width: 600px;
  }
  /*  */
  @media (max-width: 768px) {
    height: calc(100vh - 64px - 16px * 2);
    padding: 16px;
    .container {
    }
  }
`

export default Screen
