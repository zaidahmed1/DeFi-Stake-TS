import React from 'react';
import Input from '../Input';
import Wrapper from '../WhiteWrapper';
import { Row, Col } from 'antd';

interface StakeContentProps {
  style?: React.CSSProperties; // Add the style prop here
}

const StakeContent: React.FC<StakeContentProps> = ({ style }) => {
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
        ...style, // Spread the passed style
      }}
    >
      <Row justify="center" align="middle">
        <Col xs={24} style={{ padding: '10px 0' }}>
          <Input />
        </Col>

        <Col xs={24} style={{ padding: '10px 0' }}>
          <p>
            <strong>Total stakable amount:</strong> $456.78 <br /><br />
            <strong>Unstaked:</strong> 0.0
          </p>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default StakeContent;
