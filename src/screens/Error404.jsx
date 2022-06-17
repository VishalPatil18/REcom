import { Link } from "react-router-dom";
import { ASSETS_URL } from "../constants";
import { useDocumentTitle, useScrollToTop } from "../hooks";

const Error404 = () => {
  useDocumentTitle("Page not found!");
  useScrollToTop();

  return (
    <section className="flex items-center justify-center h-full w-full m-auto">
      <div className="relative h-fit w-full flex flex-col justify-center items-center">
        <p className="text-[200px] md:text-[350px] text-gray-300 font-extrabold z-0">
          404
        </p>
        <img
          src={`${ASSETS_URL}/v1655395783/REcom/3_qak74i.svg`}
          className="absolute top-8 md:top-32 w-80 md:h-80 md:w-10/12 z-1"
          alt="error404"
        />
        <p className="text-3xl font-medium text-center">
          We couldn't find that page
        </p>
        <Link
          className="px-6 py-2 bg-blue-400 text-white rounded-lg mt-6"
          to="/home"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export { Error404 };
