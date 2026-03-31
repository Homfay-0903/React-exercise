# React19 + React Router 6+ + TS 练习题

1.基于 TS 定义路由配置类型，使用 createBrowserRouter 配置路由（首页、登录、用户列表、用户详情、404），要求 loader/action/meta 均通过 TS 类型约束，且 useParams 获取用户详情 ID 时能自动推导类型。

2.实现受保护路由：基于 meta.requiresAuth 封装鉴权组件，未登录时重定向到登录页，要求 TS 约束组件的 props 类型，且路由嵌套时无类型报错。

3.实现路由懒加载：使用 React.lazy + Suspense 拆分路由组件，要求 TS 约束懒加载组件的类型，且加载中显示骨架屏。

4.基于 loader + TS 实现路由预加载：进入商品详情页前，通过 loader 请求商品数据，要求 TS 约束 loader 的返回值类型，组件中通过 useLoaderData 自动推导数据类型。

5.封装一个通用的路由跳转 Hook（基于 useNavigate），要求 TS 约束跳转的路径、参数类型，且支持「替换历史记录」「返回上一页」等操作，无类型报错。
