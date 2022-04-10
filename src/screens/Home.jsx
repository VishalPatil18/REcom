import { FeedScroll, ProfileDescCard, SuggestedFriends } from "../components";

const Home = () => {
  return (
    <section className="pt-4 mx-auto max-w-screen-xl flex gap-6 flex-col md:flex-row">
      <aside className="flex-col gap-6 w-full max-w-xs hidden h-full overflow-y-auto sticky top-20 md:flex">
        <ProfileDescCard />
        <SuggestedFriends />
      </aside>
      <FeedScroll />
      <aside className="flex-col gap-3 w-full md:max-w-xs flex sticky h-full top-20 md:hidden lg:flex">
        <SuggestedFriends />
      </aside>
    </section>
  );
};

export { Home };
