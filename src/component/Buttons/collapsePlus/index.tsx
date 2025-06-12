import { ReactNode } from "react";
import "./collapsePlus.css";
const CollapsePlus = ({
  title,
  Content,
}: {
  title: string;
  Content: ReactNode;
}) => {
  return (
    <details className="collapse collapse-plus ">
      <summary className="collapse-title text-base fw-light  flex justify-center items-center  w-full px-4  font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
        {title}
      </summary>
      <div className="collapse-content">{Content}</div>
    </details>
  );
};

export default CollapsePlus;
