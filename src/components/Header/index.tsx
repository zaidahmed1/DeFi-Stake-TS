import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Dropdown, Menu } from 'antd';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
`;

const DropdownButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const ButtonText = styled.span<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  white-space: nowrap;
  text-align: center;
`;

const Header: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showWalletConnectedText, setShowWalletConnectedText] = useState(false);
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      setIsWalletConnected(true);
      setShowWalletConnectedText(true);

      const timeout = setTimeout(() => {
        setShowWalletConnectedText(false);
      }, 2500);
      return () => clearTimeout(timeout);
    } else {
      setIsWalletConnected(false);
    }
  }, [isConnected]);

  const formatAddress = (address: string) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`;

  const menu = (
    <Menu>
      {isConnected && connector && (
        <Menu.Item key="1">Connected with {connector?.name}</Menu.Item>
      )}

      {!isConnected &&
        connectors.map((walletConnector) => (
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

  return (
    <HeaderContainer>
      <Logo src="/favicon.ico" alt="Logo" />

      <Dropdown overlay={menu} trigger={['click']}>
        <DropdownButtonWrapper>
          <ButtonText isVisible={!isWalletConnected}>
            Connect Wallet
          </ButtonText>

          <ButtonText isVisible={isWalletConnected && showWalletConnectedText}>
            Wallet Connected
          </ButtonText>
          <ButtonText isVisible={isWalletConnected && !showWalletConnectedText}>
            {isConnected && address ? formatAddress(address) : ''}
          </ButtonText>
        </DropdownButtonWrapper>
      </Dropdown>
    </HeaderContainer>
  );
};

export default Header;
