import { ConfigProvider } from 'antd'
import React from 'react'

import { colors } from './colors'

interface ThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      components: {
        Layout: { colorBgHeader: colors.whiteSmoke, colorBgTrigger: colors.black },
        Menu: {
          colorItemBg: colors.whiteSmoke,
          colorItemBgSelected: colors.white,
        },
        // Checkbox:{
        //   colorPrimaryActive:colors.clownNose
        // },
        Steps: {
          // colorTextDescription: colors.black,
        },
        Select: {
          colorBgContainer: 'transparent',
          
        },
        Typography: {
          colorPrimaryText: colors.black,
          colorTextSecondary: colors.black,
        },
      },
      token: {
        colorPrimary: colors.white,
        colorBgLayout: colors.whiteSmoke,
        colorBgBase: colors.whiteSmoke,
        colorBgContainer: colors.white,
        colorText: colors.black,
        colorPrimaryText: colors.black,
        colorTextSecondary: colors.black,
        fontFamily: 'Plus Jakarta Sans',
      },
    }}
  >
    {children}
  </ConfigProvider>
)

export default ThemeWrapper
