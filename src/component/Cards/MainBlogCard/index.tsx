import blog from "../../../assets/main-blog.webp";
import avatar from "../../../assets/avatar.webp";
const MainBlogCard = () => {
  return (
    <div className="nc-Card12 group relative flex flex-col h-full">
      <a
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
        href="/blog-single"
      >
        <div className="absolute inset-0">
          <img
            alt="title"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover w-full h-full"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={blog}
          />
        </div>
      </a>
      <div
        className="nc-SocialsShare absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"
        data-nc-id="SocialsShare"
      >
        <a
          href="#"
          className="rounded-full leading-none flex items-center justify-center bg-white text-neutral-6000 w-7 h-7  hover:bg-neutral-100"
          title="Share on Facebook"
        >
          <i className="fa-brands fa-facebook-f text-gray-600"></i>
        </a>
        <a
          href="#"
          className="rounded-full leading-none flex items-center justify-center bg-white text-neutral-6000 w-7 h-7  hover:bg-neutral-100"
          title="Share on Twitter"
        >
          <i className="fa-brands fa-twitter text-gray-600"></i>
        </a>
        <a
          href="#"
          className="rounded-full leading-none flex items-center justify-center  bg-white text-neutral-6000 w-7 h-7      hover:bg-neutral-100"
          title="Share on Linkedin"
        >
          <i className="fa-brands  fa-linkedin-in text-gray-600"></i>
        </a>
        <a
          href="#"
          className="rounded-full leading-none flex items-center justify-center bg-white text-neutral-6000 w-7 h-7  hover:bg-neutral-100"
          title="Share on Instagram"
        >
          <i className="fa-brands  fa-instagram text-gray-600"></i>
        </a>
      </div>
      <div className=" mt-8 pr-10 flex flex-col">
        <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl">
          <a
            className="line-clamp-2 capitalize"
            title="title"
            href="/blog-single"
          >
            sagittis vitae et leo duis ut diam quam nulla porttitor
          </a>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vero perspiciatis ullam ea? Nihil accusamus similique debitis
            tempore mollitia? Aperiam.
          </span>
        </span>
        <div
          className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm mt-5"
          data-nc-id="PostCardMeta"
        >
          <a
            className="flex-shrink-0 relative flex items-center space-x-2"
            href="/blog"
          >
            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
              <img
                alt="John Doe"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  color: "transparent",
                }}
                sizes="100px"
                src={avatar}
              />
              <span className="wil-avatar__name">J</span>
            </div>
            <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              Kailey Greer
            </span>
          </a>
          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
            ·
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
            May 20, 2021
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCard;
