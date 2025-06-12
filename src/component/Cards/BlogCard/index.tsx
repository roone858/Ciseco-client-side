import avatar from "../../../assets/avatar.webp";
import blog from "../../../assets/blog-1.webp";
const BlogCard = () => {
  return (
    <div className="nc-Card13 relative flex " data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className="nc-card-title block font-semibold text-base">
          <a
            className="line-clamp-2 capitalize"
            title="title"
            href="/blog-single"
          >
            sagittis vitae et leo duis ut diam quam nulla porttitor
          </a>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem voluptatibus numquam ut pariatur officiis?
          </span>
        </span>
        <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          May 20, 2021 · 2 min read
        </span>
        <div className="mt-auto hidden sm:block">
          <div
            className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
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
                Juliet Macp
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
      <a
        className="block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5"
        href="/blog-single"
      >
        <div className="absolute inset-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
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
            sizes="400px"
            src={blog}
          />
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
