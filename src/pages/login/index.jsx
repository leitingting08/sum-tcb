import React, { useEffect, useState } from 'react'
import './index.less'

const Login = () => {
  const [isLogin, setLogin] = useState(true)

  useEffect(() => {
    const doodle = document.querySelector('css-doodle')
    doodle.update(`
    :doodle {
      @grid: 20 / 100vmax;
      background: #0a0c27;
      font-family: sans-serif;
      overflow: hidden;
      position: absolute;
      top: 0;
    }
    :after {
      content: \\@hex.@r(0x2500, 0x257f);
      color: hsla(@r360, 70%, 70%, @r.9);
      font-size: 8vmin;
    }`)
  }, [])

  return (
    <div>
      <css-doodle></css-doodle>
      <div className="content">
        <ul className="tab">
          <li className={isLogin ? 'active' : ''} onClick={() => setLogin(true)}>
            登录
          </li>
          <li className={!isLogin ? 'active' : ''} onClick={() => setLogin(false)}>
            注册
          </li>
        </ul>
        {isLogin && (
          <div className="login">
            <fc-input placeholder="用户名"></fc-input>
            <fc-input placeholder="密码" type="password"></fc-input>
          </div>
        )}
        {!isLogin && (
          <div className="register">
            <fc-input placeholder="用户名"></fc-input>
            <fc-input placeholder="密码" type="password"></fc-input>
            <fc-input placeholder="确认密码" type="password"></fc-input>
          </div>
        )}
        <div className="error">错误信息</div>
        <fc-bubbles click>
          <fc-btn>{isLogin ? '登录' : '注册'}</fc-btn>
        </fc-bubbles>
      </div>
    </div>
  )
}

export default Login
