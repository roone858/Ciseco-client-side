import SocialList from "../../component/ChoicesList/SocialList";
import { CloseIcon, SearchIcon, SunIcon } from "../../component/icons";
import logo from "../../assets/logo.svg"
const ResponsiveNavbar = ({ setToggle }: { setToggle: (toggle: boolean) => void }) => {
     return (
          <div className="fixed inset-0 z-50 overflow-y-auto" >
               <div className="fixed left-0 top-0 bottom-0 w-full max-w-md md:w-auto z-max outline-none focus:outline-none">
                    <div className="z-20 relative opacity-100 translate-x-0">
                         <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                              <div className="py-6 px-5">
                                   <a className=" inline-block text-slate-600 flex-shrink-0" href="/"  >
                                        <img
                                             alt="Logo"
                                             width="162"
                                             height="46"
                                             className="block h-8 sm:h-10 w-auto dark:hidden"
                                             src={logo}
                                        />
                                   </a>
                                   <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm">
                                        <span>
                                             Discover the most outstanding articles on all topics of life.
                                             Write your stories and share them
                                        </span>
                                        <div className="flex justify-between items-center mt-4">
                                             <SocialList />
                                             <span className="block">
                                                  <button className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                                                       <span className="sr-only">Enable dark mode</span>
                                                       <SunIcon />
                                                  </button>
                                             </span>
                                        </div>
                                   </div>
                                   <span className="absolute right-2 top-2 p-1">
                                        <button onClick={() => setToggle(false)} className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none">
                                             <span className="sr-only">Close</span>
                                             <CloseIcon />
                                        </button>
                                   </span>
                                   <div className="mt-5">
                                        <form
                                             action=""
                                             method="POST"
                                             className="flex-1 text-slate-900 dark:text-slate-200"
                                        >
                                             <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full">
                                                  <SearchIcon />
                                                  <input
                                                       placeholder="Type and press enter"
                                                       className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
                                                       type="search"
                                                  />
                                             </div>
                                             <input type="submit" value="" />
                                        </form>
                                   </div>
                              </div>
                              <ul className="flex flex-col py-6 px-2 space-y-1">
                                   <li className="text-slate-900 dark:text-white" >
                                        <a
                                             className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                             href="/collection"
                                        >
                                             <span className="block w-full">Men</span>
                                        </a>
                                   </li>
                                   <li className="text-slate-900 dark:text-white" >
                                        <a
                                             className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                             href="/collection-2"
                                        >
                                             <span className="block w-full">Women</span>
                                        </a>
                                   </li>
                                   <li className="text-slate-900 dark:text-white" >
                                        <a
                                             className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                             href="/collection"
                                        >
                                             <span className="block w-full">Beauty</span>
                                        </a>
                                   </li>
                                   <li className="text-slate-900 dark:text-white" >
                                        <a
                                             className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                             href="/collection-2"
                                        >
                                             <span className="block w-full">Sport</span>
                                        </a>
                                   </li>

                                   <li className="text-slate-900 dark:text-white" >
                                        <a
                                             className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                             href="/search"
                                        >
                                             <span className="">Explore</span>
                                             <span className="block flex-grow">
                                                  <span className="flex justify-end flex-grow"   >
                                                  </span>
                                             </span>
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div
                         className="fixed inset-0 bg-neutral-900/60 opacity-100"
                    ></div>
               </div>
          </div>
     );
};

export default ResponsiveNavbar;
