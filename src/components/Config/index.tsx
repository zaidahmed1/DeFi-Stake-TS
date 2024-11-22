import { http, createConfig } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';
import { coinbaseWallet } from 'wagmi/connectors';
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    metaMask(), 
    coinbaseWallet({ appName: 'Cashflow Stake' }), 
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
