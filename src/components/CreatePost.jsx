import { ASSETS_URL } from "../constants";
import { Pencil, Camera, Hmenu } from "../icons";

const CreatePost = () => {
  return (
    <article className="rounded-xl bg-white border-slate-200 border">
      <header className="p-4 border-b border-slate-200 flex gap-2 items-center text-md text-gray-800 uppercase">
        <Pencil />
        Create New Post
      </header>
      <main className="p-4 border-b border-slate-200 flex gap-5">
        <img
          src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
          className="h-11 w-11 rounded-full"
          alt="profile"
        />
        <textarea
          rows="4"
          className="textarea text-sm font-light w-full"
          placeholder="Have something to share? Why not post it here!"
        ></textarea>
      </main>
      <footer className="flex gap-2 px-4 py-2 items-center text-slate-400">
        <button className="flex gap-1 items-center bg-slate-100 py-1 px-4 rounded-full transition-colors duration-200 hover:bg-slate-200 hover:text-slate-800">
          <Camera />
          <small className="text-sm font-light">Media</small>
        </button>
        <button>😀</button>
        <button className="flex gap-1 items-center bg-slate-100 p-1 rounded-full ml-auto transition-colors duration-200 hover:bg-slate-200 hover:text-slate-800">
          <Hmenu />
        </button>
      </footer>
    </article>
  );
};

export { CreatePost };
