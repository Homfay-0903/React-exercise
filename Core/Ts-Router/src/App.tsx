import { Outlet, Link } from 'react-router-dom';

// 定义应用布局组件
const App = () => {
  return (
    <div className="app-container">
      {/* 导航栏 */}
      <nav className="app-navbar">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登录</Link></li>
        </ul>
      </nav>

      {/* 路由内容区域 */}
      <main className="app-content">
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className="app-footer">
        <p>React 19 + React Router 6 + TS 练习题</p>
      </footer>
    </div>
  );
};

export default App;