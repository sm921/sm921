import Link from "next/link";

const url = (base: string) =>
  base + (process.env.NODE_ENV === "production" ? ".html" : "");
const getLink = (label: string, href: string) => () =>
  <Link href={href}>{label}</Link>;

export const URL_HOME = "/";
export const URL_FASHION = "/fashion";
export const URL_PROGRAMMING = "/programming";
export const NAME_FASHION = "Fashion";
export const NAME_PROGRAMMING = "Programming";

export const LinkProgramming = getLink(NAME_PROGRAMMING, url(URL_PROGRAMMING));
export const LinkFashion = getLink(NAME_FASHION, url(URL_FASHION));
export const LinkHome = getLink("Home", URL_HOME);
export const LinkGitHub = () => (
  <a href="https://github.com/sm921" target="_blank">
    GitHub
  </a>
);
