import React, { useState, Suspense } from 'react'
import BaseLayout from '@/components/layout/index'
import { Spin } from 'antd'
import '@/styles/variable.less'

const App = (props) => {
  const { children } = props
  const [currentAccount] = useState({ name: '张三', email: 'test@email.com' })
  return (
    <Suspense
      fallback={
        <div style={{ width: '100%', height: '100%' }}>
          <Spin tip="Loading..." />
        </div>
      }
    >
      <BaseLayout accountInfo={currentAccount}>{children}</BaseLayout>
    </Suspense>
  )
}

export default App
