import facebook from "../../../assets/facebook.svg";
import telegram from "../../../assets/telegram.svg";
import youtube from "../../../assets/youtube.svg";
import twitter from "../../../assets/twitter.svg";
const SocialList = () => {
     return (
          <div
               className="nc-SocialsList1 flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start"
               data-nc-id="SocialsList1"
          >
               <a
                    href="#"
                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
               >
                    <div className="flex-shrink-0 w-5 ">
                         <img
                              alt=""
                              loading="lazy"
                              width="136"
                              height="136"
                              src={facebook}
                         />
                    </div>
                    <span className="hidden lg:block text-sm">Facebook</span>
               </a>
               <a
                    href="#"
                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
               >
                    <div className="flex-shrink-0 w-5 ">
                         <img
                              alt=""
                              loading="lazy"
                              width="136"
                              height="135"
                              src={youtube}
                         />
                    </div>
                    <span className="hidden lg:block text-sm">Youtube</span>
               </a>
               <a
                    href="#"
                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
               >
                    <div className="flex-shrink-0 w-5 ">
                         <img
                              alt=""
                              loading="lazy"
                              width="136"
                              height="136"
                              src={telegram}
                         />
                    </div>
                    <span className="hidden lg:block text-sm">Telegram</span>
               </a>
               <a
                    href="#"
                    className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
               >
                    <div className="flex-shrink-0 w-5 ">
                         <img
                              alt=""
                              loading="lazy"
                              width="136"
                              height="136"
                              src={twitter}
                         />
                    </div>
                    <span className="hidden lg:block text-sm">Twitter</span>
               </a>
          </div>
     )
}

export default SocialList