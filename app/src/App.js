import "./index.css";
import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Racecar from "./components/racecar.js";

function App() {
  return (
    <main className="grid grid-cols-1 grid-rows-3 relative">
      <div className="row-start-1 mb-36">
        <Header />
        <Main />
      </div>
      <div id="footer" className="">
        <Racecar />
        <Footer />
      </div>
    </main>
  );
}

export default App;
