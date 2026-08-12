import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

const base = process.env.GITHUB_ACTIONS ? "/CS336/" : "/";

export default defineConfig({
    base,
    description: "CS336.",
    head: [["link", { href: `${base}icon/dt.ico`, rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: {
        logo: "/icon/dt.png",
        notFound: {
            code: "404",
            link: "/",
            linkLabel: "Home",
            linkText: "Home",
            quote: "Living is keeping the absurd alive.",
            title: "NOTHINGNESS",
        },
        socialLinks: [{ icon: "github", link: "https://github.com/onedonedone/CS336" }],
    },
    title: "donetown",
});
