import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import DashBoard from "./components/Dashboard";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <TodoList></TodoList>
      <hr />
      <ThemeToggle></ThemeToggle>
      <hr />
      <DashBoard></DashBoard>
      <hr />
      <ProductList></ProductList>
    </div>
  )
}

export default App