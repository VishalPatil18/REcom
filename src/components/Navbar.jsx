import { ASSETS_URL } from "../constants";
import { Apps, Like, Message, Notification, Search } from "../icons";

const Navbar = () => {
  return (
    <nav className="p-2 bg-white text-slate-400 shadow-md flex items-center text-xl gap-3 fixed top-0 left-0 w-full z-10">
      <div className="shrink-0">
        <img
          src={`${ASSETS_URL}/v1649485162/REcom/logo_oahebo.png`}
          className="h-10 w-10"
          alt="logo"
        />
      </div>
      <div className="flex gap-3 md:order-2 md:ml-auto">
        <button
          className={`p-2 rounded-lg transition-colors ${
            false ? "bg-blue-400 text-white shadow-md shadow-blue-200" : ""
          }`}
        >
          <Like />
        </button>
        <button
          className={`p-2 rounded-lg transition-colors ${
            false ? "bg-blue-400 text-white shadow-md shadow-blue-200" : ""
          }`}
        >
          <Notification />
        </button>
        <button
          className={`p-2 rounded-lg transition-colors ${
            true ? "bg-blue-400 text-white shadow-md shadow-blue-200" : ""
          }`}
        >
          <Message />
        </button>
        <button
          className={`p-2 rounded-lg transition-colors ${
            false ? "bg-blue-400 text-white shadow-md shadow-blue-200" : ""
          }`}
        >
          <Apps />
        </button>
      </div>
      <div className="md:order-1">
        <button
          className={`p-2 rounded-lg transition-colors ${
            false ? "bg-blue-400 text-white shadow-md shadow-blue-200" : ""
          }`}
        >
          <Search />
        </button>
      </div>
      <div className="ml-auto md:ml-0 order-3">
        <button className="p-2 rounded-lg transition-colors">
          <img
            src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
            className="h-8 w-8 rounded-full"
            alt="profile"
          />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
