import React from 'react'
import { Input as AntdInput } from 'antd'
import styled from 'styled-components'

import { colors } from '../../theme/colors'

interface InputProps {
  addonAfter?: React.ReactNode
  prefix?: React.ReactNode
  autoComplete?:string
  size?:string
  suffix?: React.ReactNode
  disabled?: true
  height?: string
  placeholder?: string
  placeholderColor?: string
  opacity?: string
  fontWeight?: string
  value?: string
  borderColor?: string
  transparent?: boolean
  testId?: string
  id?: string
}

const StyledInput: React.FC<InputProps> = styled(AntdInput)<InputProps>`
  border-radius: 12px;
  box-shadow: none;
  // font-size: 14px;
  border: ${({ transparent, borderColor }) =>
    transparent ? `1px solid ${borderColor ? borderColor : colors.lightGrayishBlue}` : 'none'};
  background-color: ${({ transparent }) => (transparent ? 'transparent' : colors.lightLcyBlue)};
  height: ${({ height }) => (height ? height : '52px')};

  &:hover {
    border-inline-end-width: 0px;
    border: ${({ transparent, borderColor }) =>
      transparent ? `1px solid ${borderColor ? borderColor : colors.lightGrayishBlue}` : 'none'};
  }

  &:focus {
    border-inline-end-width: 0px;
    border: ${({ transparent, borderColor }) =>
      transparent ? `1px solid ${borderColor ? borderColor : colors.lightGrayishBlue}` : 'none'};
  }

  &::placeholder {
    color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : colors.slateGray)};
    opacity: 0.5;
  }

  input:disabled {
    // font-color of disable input
    color: ${colors.black};
  }

  //for input boxes with addons

  .ant-input {
    background: transparent;
    // display:flex;
    align-items: center;
    &::placeholder {
      color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : colors.slateGray)};
      // font-size: 24px;
      font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '600')};
      // opacity: ${({ opacity }) => (opacity ? opacity : '0.5')};
    }
  }

  .ant-input-wrapper {
    height: 100%;
    .ant-input {
      border: none;
      height: 100%;
      background: transparent;
    }

    .ant-input-affix-wrapper-lg {
      width: 100%;
      height: 100%;
      border: 0px;
      background: transparent;
    }

    .ant-input-group-addon {
      // padding: 0px 32px;
      // color: ${colors.lightGreen};
      background-color: transparent;
      border: none;
      cursor: pointer;
      border-radius: 0px 4px 4px 0px;
    }
  }
`

const Input: React.FC<InputProps> = ({
  prefix,
  suffix,
  addonAfter,
  value,
  placeholder,
  borderColor,
  placeholderColor,
  opacity,
  disabled,
  fontWeight,
  height,
  transparent,
  testId,
  id,
}) => {
  return (
    <StyledInput
      id={id}
      autoComplete='off'
      size='large'
      addonAfter={addonAfter}
      prefix={prefix}
      suffix={suffix}
      value={value}
      placeholder={placeholder}
      borderColor={borderColor}
      placeholderColor={placeholderColor}
      opacity={opacity}
      disabled={disabled}
      height={height}
      fontWeight={fontWeight}
      transparent={transparent}
      data-testid={testId}
    />
  )
}

export default Input
