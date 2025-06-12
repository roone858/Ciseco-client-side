import { NewIcon } from "../../icons";

const NewBadge = () => {
  return (
    <div className="hidden sm:flex items-center text-sm">
      <NewIcon />
      <span className="ml-1 leading-none">New in</span>
    </div>
  );
};

export default NewBadge;
