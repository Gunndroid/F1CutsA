import "./index.css";
import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Racecar from "./components/racecar.js";

function App() {
  return (
    <main className="grid grid-cols-1 grid-rows-2 relative">
      <div className="row-start-1 mb-16">
        <Header />
        <Main />
      </div>
      <div id="footer">
        <Racecar />
        <Footer />
      </div>
    </main>
  );
}

export default App;
