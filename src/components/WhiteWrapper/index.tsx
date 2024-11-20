import styled from 'styled-components'
import { Card } from 'antd'

interface GrayCardWrapperProps {
  fullHeight?: boolean
  background?: string
  backgroundImage?: string
}

const GrayCardWrapper = styled(Card)<GrayCardWrapperProps>`
  border: none;
  border-radius: 24px;
  background: ${({ background }) => (background ? background : '')};
  background-image: ${({ backgroundImage }) => (backgroundImage ? backgroundImage : '')};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  .ant-card-body {
    padding: 32px;
    height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  }
`
export default GrayCardWrapper
