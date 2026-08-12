import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";
import { parseCache } from "vue/compiler-sfc";

const base = process.env.GITHUB_ACTIONS ? "/CS336/" : "/";

export default defineConfig({
    base,
    description: "LLM notebook by done",
    head: [["link", { href: `${base}icon/dt.ico`, rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: {
        logo: "/icon/dt.png",
        notFound: {
            linkLabel: "Home",
            linkText: "Home",
            quote: "Living is keeping the absurd alive.",
            title: "NOTHINGNESS",
        },
        socialLinks: [
            {
                ariaLabel: "course",
                icon: "internetarchive",
                link: "https://cs336.stanford.edu/",
            },
            { icon: "github", link: "https://github.com/onedonedone/CS336" },
        ],
    },
    title: "donetown",
    vite: { plugins: [{ handleHotUpdate: () => void parseCache.clear(), name: "clear-cache" }] },
});
