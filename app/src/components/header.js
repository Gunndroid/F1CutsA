import logo from "../img/f1cuts4.png";
import About from "./about.js";

const Header = () => (
  <header className="h-30 text-white">
    <div className="text-center grid grid-cols-2 items-center">
      <div className="">
        <img src={logo} alt="logo" className="ml-10 w-28" />
      </div>
      {/* <div className="grid grid-cols-4 mr-8">
        <Link to="/about.js" className="basis-3/4 font-bold text-lg">
          Home
        </Link>
        <Link to="/another-component" className="basis-3/4 font-bold text-lg">
          About
        </Link>
        <Link to="/another-component" className="basis-3/4 font-bold text-lg">
          Services
        </Link>
        <Link to="/another-component" className="basis-3/4 font-bold text-lg">
          Make a Cut
        </Link>
      </div> */}
    </div>
  </header>
);

export default Header;
