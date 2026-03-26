import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import DashBoard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <TodoList></TodoList>
      <hr />
      <ThemeToggle></ThemeToggle>
      <hr />
      <DashBoard></DashBoard>
    </div>
  )
}

export default App