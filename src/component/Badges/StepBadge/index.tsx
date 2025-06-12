const StepBadge = ({ badgeTitle, badgeColors }: { badgeTitle: string; badgeColors: string }) => {
     return (
          <span className={"nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  relative " + badgeColors}>
               {badgeTitle}
          </span>
     )
}

export default StepBadge