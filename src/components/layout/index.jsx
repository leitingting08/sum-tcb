import React, { useState, useEffect } from 'react'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import MENU from './menu'
import { Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './index.less'
const { Content } = Layout

const BaseLayout = (props) => {
  const { accountInfo, children } = props
  const [ready, setReady] = useState(false)
  const [pathname, setPathname] = useState('/')

  const location = useLocation()
  useEffect(() => {
    setReady(true)
    setPathname(location.pathname)
  }, [location.pathname, pathname])

  const settings = {
    navTheme: 'light',
    layout: 'mix',
    collapsedWidth: 80,
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: false,
    collapsedButtonRender: false,
    menu: {
      locale: true
    },
    headerHeight: 64,
    siderWidth: 150,
    title: '',
    location: {
      pathname
    },
    breakpoint: false,
    splitMenus: false,
    openKeys: false,
    selectedKeys: [pathname.split('/')[2]],
    headerTitleRender: () => (
      <div style={{ height: '100%', padding: '5px', display: 'flex' }}>
        <img
          style={{ height: '100%' }}
          src="//7072-production-8glbr0en403e1a62-1301855795.tcb.qcloud.la/logo2.jpg"
          alt=""
        />
      </div>
    ),
    rightContentRender: () => (
      <div>
        <span style={{ color: '#fff' }}>{accountInfo?.name}</span>
      </div>
    )
  }

  return (
    ready && (
      <div
        style={{
          height: '100vh'
        }}
      >
        <ProLayout
          {...settings}
          menuDataRender={() => MENU}
          menuItemRender={(item, dom) => (
            <Link key={item.key} to={item.path}>
              {dom}
            </Link>
          )}
        >
          <PageContainer
            header={{
              title: ''
            }}
          />
          <Content className="content_container">{children}</Content>
        </ProLayout>
      </div>
    )
  )
}

export default BaseLayout
