import logo from './logo.svg';
//import './main.css';
import MainContent from "./components/maincontent";
import Header from "./components/header";
import Footer from "./components/footer";
import HeaderLoggedout from "./components/header-loggedout";

function App() {
  return (
    <div className="App">
      <HeaderLoggedout />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
