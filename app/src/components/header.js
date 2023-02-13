import logo from "../img/f1cuts4.png";

const Header = () => (
  <header className="h-30 text-white">
    <div className="text-center grid grid-cols-2 items-center">
      <div className="">
        <img src={logo} alt="logo" className="ml-10 w-28" />
      </div>
      <div className="grid grid-cols-3">
        <h1 className="basis-3/4 font-bold text-lg">Home</h1>
        <h1 className="basis-3/4 font-bold text-lg">About</h1>
        <h1 className="basis-3/4 font-bold text-lg">Make a Cut</h1>
      </div>
    </div>
  </header>
);

export default Header;
