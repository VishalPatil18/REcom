import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `RECom | ${title}`;
  }, [title]);
};

export { useDocumentTitle };
