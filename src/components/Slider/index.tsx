import React from 'react'
import { Slider } from 'antd'
import styled from 'styled-components'
import { colors } from '../../theme/colors'

interface PercentageSliderProps {
  value: number
  onChange(value: number): void
}

const marks = {
  0: '0%',
  10: '10%',
  20: '20%',
  30: '30%',
  40: '40%',
  50: '50%',
  60: '60%',
  70: '70%',
  80: '80%',
  90: '90%',
  100: '100%',
}

const StyledSlider = styled(Slider)<PercentageSliderProps>`
  width: auto;
  // margin: 0px 0px !important;

  .ant-slider-track {
    background: ${colors.myrtleGreen} !important;
  }

  .ant-slider-dot {
    background-color: transparent;
    width: 4px;
    border: 0px;
    border-radius: 0px;
  }

  .ant-slider-handle::after {
    background-color: ${colors.darkPrimary};
    box-shadow: none;
  }

  .ant-slider-mark-text {
    // color: ${colors.black} !important;
    font-size: 13px;
  }
`

const PercentageSlider: React.FC<PercentageSliderProps> = ({ value, onChange }) => {
  return (
    <StyledSlider
      min={0}
      max={100}
      value={value}
      marks={marks}
      onChange={onChange}
      tooltipVisible={false}
    />
  )
}

export default PercentageSlider
