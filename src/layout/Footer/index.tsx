import logo from "../../assets/logo.svg";

import SocialList from "../../component/ChoicesList/SocialList";

const Footer = () => {
  return (
    <div className="footer relative px-12 py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <a
              className="inline-block text-slate-600 flex-shrink-0"
              href="/"
            >
              <img
                alt="Logo"
                width="162"
                height="46"
                decoding="async"
                className="block h-8 sm:h-10 w-auto dark:hidden"
                src={logo}
              />
            </a>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialList />
          </div>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Getting started
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Release Notes
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upgrade Guide
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browser Support
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dark Mode
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Explore
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prototyping
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design systems
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Resources
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Best practices
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developers
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn design
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Community
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discussion Forums
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contributing
              </a>
            </li>
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Reference
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
