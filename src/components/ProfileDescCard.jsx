import { Laptop, House, Stack } from "../icons";
import { ASSETS_URL } from "../constants";

const ProfileDescCard = () => {
  return (
    <article className="bg-white text-slate-400 text-sm w-full rounded-xl border border-slate-200 h-fit">
      <header className="flex justify-between border-slate-200 border-b">
        <img
          src={`${ASSETS_URL}/v1649568741/REcom/4_kyii4h.png`}
          className="w-full h-36 object-cover rounded-t-xl"
          alt="profile-cover"
        />
      </header>
      <main className="flex flex-col gap-1 items-center h-fit">
        <img
          src={`${ASSETS_URL}/v1649523258/REcom/dan_bgkcqr.jpg`}
          className="w-20 h-20 object-cover rounded-full -mt-10 mx-auto border-2 border-white"
          alt="profile-cover"
        />
        <p className="text-lg text-gray-700">Bablu Tailor</p>
        <div className="w-full px-4 pb-4">
          <div className="flex items-center gap-2 text-lg mb-2">
            <Laptop />
            <small className="text-xs">Product Designer at InvactHQ</small>
          </div>
          <div className="flex items-center gap-2 text-lg mb-2">
            <House />
            <small className="text-xs">Live in Bangalore, India</small>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Stack />
            <small className="text-xs">React, NextJS</small>
          </div>
        </div>
      </main>
    </article>
  );
};

export { ProfileDescCard };
