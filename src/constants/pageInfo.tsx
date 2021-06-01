import Link from "next/link";

export const URL_HOME = "/";
export const URL_FASHION = "/fashion";
export const URL_PROGRAMMING = "/programming";
export const NAME_FASHION = "Fashion";
export const NAME_PROGRAMMING = "Programming";

export const LinkFashion = () => <Link href={URL_FASHION}>{NAME_FASHION}</Link>;
export const LinkGitHub = () => (
  <a href="https://github.com/sm921" target="_blank">
    GitHub
  </a>
);
export const LinkHome = () => <Link href={URL_HOME}>Home</Link>;
export const LinkProgramming = () => (
  <Link href={URL_PROGRAMMING}>{NAME_PROGRAMMING}</Link>
);
