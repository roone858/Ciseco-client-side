
const ContactSection = () => {
  return (
    <div className="">
      <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        Contact
      </h2>
      <div className="container max-w-7xl mx-auto">
        <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="max-w-sm space-y-8">
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                🗺 ADDRESS
              </h3>
              <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </span>
            </div>
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                💌 EMAIL
              </h3>
              <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                nc.example@example.com
              </span>
            </div>
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                ☎ PHONE
              </h3>
              <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                000-123-456-7890
              </span>
            </div>
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                🌏 SOCIALS
              </h3>
              <nav className="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 mt-2">
                <a
                  className="block w-6 h-6"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <img alt="" src="/_next/static/media/facebook.b22e79d5.svg" />
                </a>
                <a
                  className="block w-6 h-6"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <img alt="" src="/_next/static/media/twitter.d12eec73.svg" />
                </a>
                <a
                  className="block w-6 h-6"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <img alt="" src="/_next/static/media/youtube.bcae2a7a.svg" />
                </a>
                <a
                  className="block w-6 h-6"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <img alt="" src="/_next/static/media/telegram.a3c75624.svg" />
                </a>
              </nav>
            </div>
          </div>
          <div>
            <form className="grid grid-cols-1 gap-6" action="#" method="post">
              <label className="block">
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 "
                  data-nc-id="Label"
                >
                  Full name
                </label>
                <input
                  className="block w-full border border-neutral-200 focus-within:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white  rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                  placeholder="Example Doe"
                  type="text"
                />
              </label>
              <label className="block">
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 "
                  data-nc-id="Label"
                >
                  Email address
                </label>
                <input
                  className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                  placeholder="example@example.com"
                  type="email"
                />
              </label>
              <label className="block">
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 "
                  data-nc-id="Label"
                >
                  Message
                </label>
                <textarea
                  className="block w-full border text-sm rounded-2xl border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                  rows={6}
                ></textarea>
              </label>
              <div>
                <button
                  className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-Buttonsky disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 dark:focus:ring-offset-0"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
