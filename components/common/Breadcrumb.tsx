import { Breadcrumb } from "react-bootstrap";
import { LinkHome } from "../../src/constants/pageInfo";

export const BreadCrumb = (props: { links: (() => JSX.Element)[] }) => (
  <Breadcrumb>
    {props.links.map((Link, i) => (
      <Breadcrumb.Item key={i} active={i < props.links.length - 1}>
        <Link></Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
