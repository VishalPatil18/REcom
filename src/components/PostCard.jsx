import { ASSETS_URL } from "../constants";
import { Comment, Like, Liked, Link, Vmenu } from "../icons";

const PostCard = () => {
  return (
    <article className="rounded-xl bg-white border-slate-200 border">
      <header className="flex gap-3 items-center p-4 pb-0">
        <div>
          <img
            src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
            className="h-11 w-11 rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h5 className="text-lg">Bablu Tailor</h5>
          <small className="text-slate-400 text-xs">
            July 26 2018, 01:03pm
          </small>
        </div>
        <button className="h-8 w-8 flex items-center justify-center rounded-full ml-auto text-slate-400 text-xl transition-colors duration-200 hover:bg-slate-100">
          <Vmenu />
        </button>
      </header>
      <main className="p-4 flex flex-col gap-2">
        <p className="text-sm text-slate-500">
          Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla
          concert in LA. Was totally fantastic! People were really excited about
          this one!
        </p>
        <img
          src={`${ASSETS_URL}/v1649523259/REcom/1_fdldrl.jpg`}
          className="rounded-xl"
          alt="post-image"
        />
      </main>
      <footer className="flex gap-3 justify-between items-center p-4 relative">
        <header className="flex gap-1 absolute right-6 -top-10">
          <button className="p-4 bg-blue-400 rounded-full text-white shadow-blue-200 shadow-md transition-colors duration-300 hover:bg-blue-300">
            <Comment />
          </button>
          <button className="p-4 bg-green-400 rounded-full text-white shadow-blue-200 shadow-md transition-colors duration-300 hover:bg-green-300">
            <Link />
          </button>
          <button className="p-4 bg-red-400 rounded-full text-white shadow-red-200 shadow-md transition-colors duration-300 hover:bg-red-300">
            <Liked />
          </button>
        </header>
        <div className="flex">
          <img
            src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
            className="h-9 w-9 rounded-full border-2 border-white"
            alt="profile"
          />
          <img
            src={`${ASSETS_URL}/v1649523259/REcom/elise_g3zs02.jpg`}
            className="h-9 w-9 -ml-2 rounded-full border-2 border-white"
            alt="profile"
          />
          <img
            src={`${ASSETS_URL}/v1649523258/REcom/edward_p1s1zr.jpg`}
            className="h-9 w-9 -ml-2 rounded-full border-2 border-white"
            alt="profile"
          />
          <img
            src={`${ASSETS_URL}/v1649523259/REcom/milly_ml8vyh.jpg`}
            className="h-9 w-9 -ml-2 rounded-full border-2 border-white"
            alt="profile"
          />
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-lg text-slate-400 flex items-center gap-1">
            <Like /> <small>27</small>
          </button>
          <button className="text-lg text-slate-400 flex items-center gap-1">
            <Link /> <small>9</small>
          </button>
          <button className="text-lg text-slate-400 flex items-center gap-1">
            <Comment /> <small>3</small>
          </button>
        </div>
      </footer>
    </article>
  );
};

export { PostCard };
