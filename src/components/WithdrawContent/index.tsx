import React, { useState } from 'react';
import Slider from '../Slider';
import Input from '../Input';
import Wrapper from '../WhiteWrapper';
import { Row, Col } from 'antd';

interface WithdrawContentProps {
  style?: React.CSSProperties; // Add the style prop here
}

const WithdrawContent: React.FC<WithdrawContentProps> = ({ style }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleOnChange = (value: number) => {
    setSliderValue(value);
    console.log("Slided to:", value);
  };

  return (
    <Wrapper
      style={{
        padding: '20px',
        width: '100%',
        maxWidth: '100%',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        ...style,
      }}
    >
      <Row justify="center" align="middle">
        <Col xs={24} style={{ padding: '10px 0' }}>
          <Slider value={sliderValue} onChange={handleOnChange} />
        </Col>

        <Col xs={24} style={{ padding: '10px 0' }}>
          <Input />
        </Col>

        <Col xs={24} style={{ padding: '10px 0' }}>
          <p>
            <strong>Total withdrawable amount:</strong> $123.45 <br /><br />
            <strong>Unstaked:</strong> 0.0
          </p>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default WithdrawContent;
