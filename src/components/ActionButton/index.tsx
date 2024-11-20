import { Button as AntdButton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors'

export interface ButtonProps {
  children: React.ReactNode
  onClick(): void
  icon?: React.ReactNode
  iconPosition?: string
  padding?: string
  fullHeight?: boolean
  fullWidth?: boolean
  theme?: 'filled' | 'outlined'
  style?: object
  disabled?: boolean
}

const StyledButton = styled(AntdButton)<
  ButtonProps & { fullheight?: boolean; fullwidth?: boolean; iconPosition?: string }
>`
  background-color: ${({ theme, disabled }) =>
    disabled
      ? colors.coolGray + '!important'
      : theme === 'filled'
      ? colors.tertiry
      : 'transparent'};
  border-color: ${({ theme }) => (theme === 'outlined' ? colors.tertiry : 'transparent')};
  color: ${({ theme, disabled }) =>
    disabled ? colors.white + '!important' : theme === 'filled' ? colors.white : colors.tertiry};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: ${({ padding }) => (padding ? padding : 'auto')};
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
  height: ${({ fullheight }) => (fullheight ? '100%' : 'auto')};

  &:not(:disabled):hover {
    color: ${({ theme }) => (theme === 'filled' ? colors.white : colors.tertiry)};
    border-color: ${({ theme }) => (theme === 'outlined' ? colors.tertiry : 'transparent')};
  }

  .ant-btn-icon {
    margin-left: ${({ iconPosition }) => (iconPosition === 'right' ? '8px' : '0px')};
    margin-right: ${({ iconPosition }) => (iconPosition === 'right' ? '0px' : '8px')};
    order: ${({ iconPosition }) => (iconPosition === 'right' ? '1' : '0')};
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  iconPosition,
  padding,
  fullHeight,
  fullWidth,
  theme,
  style,
  disabled,
}) => {
  return (
    <StyledButton
      fullheight={fullHeight}
      fullwidth={fullWidth}
      padding={padding}
      onClick={onClick}
      icon={icon}
      iconPosition={iconPosition}
      theme={theme}
      style={{ ...style }}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
