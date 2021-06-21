import Navbar from "./components/shell/Navbar";
import Sidebar from "./components/shell/Sidebar";
import RouterView from "./components/interior/RouterView";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/utilities.css";
function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <RouterView className="main" />
        </main>
      </Router>
    </>
  );
}

export default App;
