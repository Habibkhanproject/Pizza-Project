import "./App.css";
import { Header } from "./Component/UI/Pizza/Header.jsx";
import { Footer } from "./Component/UI/Pizza/Footer.jsx";
import { Menu } from "./Component/UI/Pizza/Menu.jsx";
import "../src/style/component/UI/Pizzastyle/pizzacontainer.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
