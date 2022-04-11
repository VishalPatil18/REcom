import { Vmenu } from "../icons";
import { AddFriendCard } from "../components";

const SuggestedFriends = () => {
  return (
    <section className="bg-white text-slate-400 text-sm w-full rounded-xl border border-slate-200 h-fit">
      <header className="flex justify-between p-4 border-slate-200 border-b">
        <p className="text-sm font-light">Suggested Friends</p>
        <button className="h-7 w-7 flex items-center justify-center rounded-full ml-auto text-slate-400 text-lg transition-colors duration-200 hover:bg-slate-100">
          <Vmenu />
        </button>
      </header>
      <AddFriendCard />
      <AddFriendCard />
      <AddFriendCard />
      <AddFriendCard />
    </section>
  );
};

export { SuggestedFriends };
