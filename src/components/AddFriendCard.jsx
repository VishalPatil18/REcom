import { ASSETS_URL } from "../constants";
import { AddFriend } from "../icons";

const AddFriendCard = () => {
  return (
    <article className="p-4 flex items-center gap-3 border-b border-slate-200">
      <div>
        <img
          src={`${ASSETS_URL}/v1649523258/REcom/edward_p1s1zr.jpg`}
          className="h-11 w-11 rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="text-md text-black">Aan Dabramov</h5>
        <small className="text-slate-400 text-xxs">Frontend Dev</small>
      </div>
      <button className="h-10 w-10 flex items-center justify-center rounded-full ml-auto text-slate-400 text-xl transition-colors duration-200 hover:bg-slate-100 hover:text-blue-400">
        <AddFriend />
      </button>
    </article>
  );
};

export { AddFriendCard };
