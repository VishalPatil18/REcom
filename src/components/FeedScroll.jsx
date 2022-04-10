import { PostCard, CreatePost } from "../components";

const FeedScroll = () => {
  return (
    <section className="flex flex-col gap-6 flex-1 m-auto h-fit md:w-1/2">
      <CreatePost />
      <PostCard />
      <PostCard />
    </section>
  );
};

export { FeedScroll };
