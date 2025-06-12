import StepBadge from "../../Badges/StepBadge";

const FeatureCard = ({
  image,
  badgeColors,
  badgeTitle,
  title,
  text,
}: {
  image: string;
  badgeColors: string;
  badgeTitle: string;

  title: string;
  text: string;
}) => {
  return (
    <div className="relative flex flex-col items-center max-w-xs mx-auto">
      <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
        <img
          alt="HIW"
          loading="lazy"
          width="450"
          height="451"
          className="rounded-3xl"
          src={image}
        />
      </div>
      <div className="text-center mt-auto space-y-5">
        <StepBadge badgeColors={badgeColors} badgeTitle={badgeTitle} />
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
          {text}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
