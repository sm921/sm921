import { Breadcrumb } from "react-bootstrap";

export interface BreadcrumbInfo {
  isActive?: boolean;
  Link: () => JSX.Element;
}

export const BreadCrumb = (props: { links: BreadcrumbInfo[] }) => (
  <Breadcrumb>
    {props.links.map((info, i) => (
      <Breadcrumb.Item key={i} active={info.isActive ?? false}>
        <info.Link></info.Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
