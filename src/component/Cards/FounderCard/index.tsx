import avatar from "../../../assets/user-avatar.png";

const FounderCard = () => {
  return (
    <div className="max-w-sm">
      <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
        <img alt="" className="absolute inset-0 object-cover" src={avatar} />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
        Niamh O'Shea
      </h3>
      <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
        Co-founder and Chief Executive
      </span>
    </div>
  );
};

export default FounderCard;
