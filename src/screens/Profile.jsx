import { useDispatch } from "react-redux";
import { PostCard } from "../components";
import { Camera, Plus } from "../icons";
import { ASSETS_URL } from "../constants";
import { logoutHandler } from "../utilities/auth";
import { useDocumentTitle, useScrollToTop } from "../hooks";

const Profile = () => {
  const dispatch = useDispatch();

  useDocumentTitle("Profile");
  useScrollToTop();

  return (
    <section className="pt-4 mx-auto max-w-screen-lg flex flex-col">
      <header className="relative flex justify-between border-slate-200 border-b">
        <img
          src={`${ASSETS_URL}/v1649568741/REcom/4_kyii4h.png`}
          className="w-full h-48 object-cover rounded-xl"
          alt="profile-cover"
        />
        <button className="absolute right-2 top-2 flex items-center justify-center gap-1 text-lg border border-white text-white w-fit py-1 px-2 rounded-lg m-auto transition-shadow duration-200 hover:shadow">
          <Camera />
          <p className="text-sm">Update Cover</p>
        </button>
      </header>
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row w-full relative">
          <div className="flex flex-col shrink-0 w-fit h-fit -mt-14 md:-mt-20 mx-auto md:mx-10">
            <div className="relative">
              <img
                src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
                className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-white"
                alt="profile"
              />
              <button className="absolute bottom-2 right-0 flex items-center justify-center bg-blue-400 rounded-full h-8 w-8 text-white text-md border-2 border-white">
                <Plus />
              </button>
            </div>
            <button className="px-4 py-1 bg-blue-400 text-white rounded-lg mt-4">
              Edit Profile
            </button>
            <button
              className="px-4 py-1 bg-red-400 text-white rounded-lg mt-2"
              onClick={() => logoutHandler(dispatch)}
            >
              Logout
            </button>
          </div>
          <div className="realtive w-full text-center md:text-left py-2 px-6">
            <h5 className="text-2xl font-medium">Bablu Tailor</h5>
            <div className="flex gap-4 my-1 justify-center md:justify-start text-slate-400 text-lg">
              <small>12 Posts</small>
              <small>120 Followers</small>
              <small>42 Following</small>
            </div>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam enim
              adesse poterit. Quis est tam dissimile homini. At ille pellit, qui
              permulcet sensum voluptate. Vide, quaeso, rectumne sit. Primum
              quid tu dicis breve?
            </p>
          </div>
        </div>
      </main>
      <footer className="grid gap-2 mt-10 postsGrid">
        <PostCard />
        <PostCard />
        <PostCard />
      </footer>
    </section>
  );
};

export { Profile };
