import { ReactNode } from "react";
import { Jumbotron } from "react-bootstrap";
import { BreadCrumb } from "../Breadcrumb";

export const PageTemplate = (props: {
  children: ReactNode;
  links: (() => JSX.Element)[];
  title: string;
}) => (
  <>
    <BreadCrumb links={props.links}></BreadCrumb>
    <Jumbotron>
      <h1>{props.title}</h1>
    </Jumbotron>
    {props.children}
  </>
);
