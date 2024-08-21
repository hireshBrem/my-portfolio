export default function Articles() {
  const items = [
    {
        title: "Studia",
        link: "https://studiaai.com",
        source: "AI ",
        description:
        "Studia is a AI education platform that helps students learn using AI agents.",
    },
    {
      title: "Langgraph agent that creates SEO-optimized blogs.",
      link: "/",
      source: "AI",
      description:
        "This project aims to create a tool that can generate SEO-optimized blogs for a website.",
    }
    ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Side Projects :)
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
          >
            <div
              className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
              <svg
                className="fill-current opacity-80 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="space-y-1.5 mb-2">
              <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                {item.source}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a>
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
