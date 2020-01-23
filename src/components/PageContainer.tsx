import styled from 'styled-components'
import Body from './Body'

const PageContainer = styled(Body)`
  width: 966px;
  margin: 0 auto;
  @media (max-width: 768px) {
    /* 平板 */
    width: 375px;
    margin: 0 auto;
  }
`

export default PageContainer
