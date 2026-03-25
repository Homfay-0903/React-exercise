# React19 + Redux Toolkit + TS 练习题

1.基于 TS 定义 Todo 类型（id、content、status），使用 RTK 的 createSlice 封装 todoSlice，包含「添加 / 删除 / 修改 Todo 状态」的 reducer，且通过 configureStore 配置根 Store，在组件中用 useSelector（带 TS 类型）和 useDispatch 操作 Todo 数据。

2.使用 RTK 的 createAsyncThunk 封装异步请求（获取远程 Todo 列表），要求 TS 约束请求参数、响应数据类型，且处理「pending/fulfilled/rejected」三种状态的类型提示。

3.用 Zustand + TS 实现轻量状态管理：封装一个 themeStore，支持切换「亮色 / 暗色」主题，要求 TS 约束主题类型（仅允许指定值），且组件中调用时无类型报错。

4.实现 RTK 的模块化拆分：将 userSlice 和 orderSlice 拆分到不同文件，通过 combineSlices 合并，要求 TS 定义 RootState 类型，让 useSelector 能自动推导状态类型。

5.基于 RTK Query（RTK 内置请求库）+ TS 封装商品接口，包含「获取商品列表、获取商品详情」，要求 TS 约束请求参数、响应数据类型，且在组件中无感使用接口数据（自动处理加载 / 错误状态）。
