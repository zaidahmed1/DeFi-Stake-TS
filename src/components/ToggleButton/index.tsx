import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

const ToggleContainer = styled.div<{ fullWidth?: boolean; background?: boolean }>`
  display: inline-flex;
  border: 1px solid ${colors.lightGrayishBlue};
  background: ${({ background }) => (background ? colors.white : 'transparent')};
  border-radius: 100px;
  overflow: hidden;
  padding: 4px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`;

const StyledToggleButton = styled.button<{
  fullWidth?: boolean;
  selected: boolean;
  innerBorder?: boolean;
  padding?: string;
}>`
  background-color: ${({ selected }) => (selected ? colors.white : 'transparent')};
  color: ${({ selected }) => (selected ? colors.lightGreen : colors.davysGrey)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? '700' : 'normal')};
  padding: ${({ padding }) => (padding ? padding : '8px 20px')};
  border: ${({ selected }) => (selected ? `1px solid ${colors.lightGreen}` : 'none')};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 100px;
  width: ${({ fullWidth }) => fullWidth && '100%'};

  svg {
    width: 18px;
    height: 18px;
    path {
      fill: ${({ selected }) => (selected ? colors.lightGreen : colors.eerieBlack)};
    }
  }
`;

interface Data {
  firstOption: string | React.ReactElement;
  firstValue: string;
  secondOption: string | React.ReactElement;
  secondValue: string;
  thirdOption?: string | React.ReactElement;
  thirdValue?: string;
  fourthOption?: string | React.ReactElement;
  fourthValue?: string;
}

export interface ToggleButtonProps {
  data: Data;
  handleChange(value: string): void;
  value: string;
}

const ToggleButton: React.FC<
  ToggleButtonProps & {
    fullWidth?: boolean;
    background?: boolean;
    padding?: string;
  }
> = ({ data, handleChange, value, fullWidth = false, background, padding }) => {
  return (
    <div>
      <ToggleContainer fullWidth={fullWidth} background={background}>
        <StyledToggleButton
          onClick={() => handleChange(data.firstValue)}
          selected={value === data.firstValue}
          fullWidth={fullWidth}
          padding={padding}
          data-testid="toggle-button"
        >
          {data.firstOption}
        </StyledToggleButton>
        <StyledToggleButton
          onClick={() => handleChange(data.secondValue)}
          selected={value === data.secondValue}
          fullWidth={fullWidth}
          padding={padding}
          data-testid="toggle-button"
        >
          {data.secondOption}
        </StyledToggleButton>
        {data.thirdOption && (
          <StyledToggleButton
            onClick={() => handleChange(data.thirdValue ? data.thirdValue : '')}
            selected={value === data.thirdValue}
            padding={padding}
            data-testid="toggle-button"
          >
            {data.thirdOption}
          </StyledToggleButton>
        )}
        {data.fourthOption && (
          <StyledToggleButton
            onClick={() => handleChange(data.fourthValue ? data.fourthValue : '')}
            selected={value === data.fourthValue}
            data-testid="toggle-button"
          >
            {data.fourthOption}
          </StyledToggleButton>
        )}
      </ToggleContainer>
    </div>
  );
};

export default ToggleButton;
