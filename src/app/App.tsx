import "@/global.scss";
import Header from "@/shared/components/Header/Header.component";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
