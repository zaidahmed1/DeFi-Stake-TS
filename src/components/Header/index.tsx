import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Dropdown, Menu } from 'antd';
import { Account } from '../Accounts';
import { WalletOptions } from '../WalletOptions';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { DownOutlined } from '@ant-design/icons';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; /* This will space out the content */
  align-items: center; /* Vertically center the content */
  padding: 16px; /* You can adjust this based on your needs */
  background-color: #fff; /* Set the background color for the header */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional, adds shadow to the header */
  position: relative; /* To position the dropdown */
`;

const Logo = styled.img`
  height: 40px; /* Adjust logo size as needed */
`;

const Header: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const { isConnected, connector } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // Sync the connection status with isWalletConnected
  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

  const menu = (
    <Menu>
      {isConnected && connector && (
        <Menu.Item key="1">
          Connected with {connector?.name}
        </Menu.Item>
      )}

      {!isConnected && connectors.map((walletConnector) => (
        <Menu.Item
          key={walletConnector.id}
          onClick={() => connect({ connector: walletConnector })}
        >
          {walletConnector.name}
        </Menu.Item>
      ))}
      
      {isConnected && (
        <Menu.Item key="disconnect" onClick={() => disconnect()}>
          Disconnect
        </Menu.Item>
      )}
    </Menu>
  );

  function ConnectWallet() {
    if (isConnected) return <Account />;
    return <WalletOptions />;
  }

  return (
    <HeaderContainer>
      <Logo src="/favicon.ico" alt="Logo" />
      
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          {isWalletConnected ? 'Disconnect Wallet' : 'Connect Wallet'} <DownOutlined />
        </Button>
      </Dropdown>
      
      {isWalletConnected && <ConnectWallet />}
    </HeaderContainer>
  );
}

export default Header;
