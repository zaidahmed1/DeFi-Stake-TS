import React, { useState } from 'react';
import Header from '../../components/Header';
import ToggleButton from '../../components/ToggleButton';
import StakeContent from '../../components/StakeContent';
import WithdrawContent from '../../components/WithdrawContent';
import ActionButton from '../../components/ActionButton';
import { Row, Col } from 'antd';

const Home = () => {
  // State to manage selected value for the toggle button
  const [selectedOption, setSelectedOption] = useState<string>('stake');

  // Handle the toggle change
  const handleToggleChange = (value: string) => {
    setSelectedOption(value); // Update the selected option
  };

  const handleOnClick = () => {
    console.log("Lower Button Clicked");
  };

  return (
    <>
      <Header />
      
      {/* Center the ToggleButton */}
      <Row justify="center" style={{ marginTop: '70px'}}>
        <Col xs={24} sm={20} md={18} lg={12} xl={8}>
          <ToggleButton
            data={{
              firstOption: 'Stake',
              firstValue: 'stake',
              secondOption: 'Withdraw',
              secondValue: 'withdraw'
            }}
            handleChange={handleToggleChange}
            value={selectedOption}
            fullWidth={true}
          />
        </Col>
      </Row>
      
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={18} lg={12} xl={10}>
          {/* Update the width of the content to be larger */}
          {selectedOption === 'stake' ? (
            <StakeContent style={{ width: '90%' }} />
          ) : (
            <WithdrawContent style={{ width: '90%' }} />
          )}
        </Col>
      </Row>
      
      {/* Action Button with similar styling as ToggleButton */}
      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col xs={24} sm={20} md={18} lg={12} xl={8}>
          <ActionButton
            onClick={handleOnClick}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '8px', 
              backgroundColor: '#eaeaea', 
              color: '#fff',
              fontSize: '16px', 
              border: 'none',
              cursor: 'pointer', 
              display: 'block' 
            }}
          >
            Button
          </ActionButton>
        </Col>
      </Row>
    </>
  );
};

export default Home;
