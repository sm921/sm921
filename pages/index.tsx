import React from "react";
import { BreadCrumb } from "../components/common/Breadcrumb";
import { About } from "../components/pages/index/About";
import { Pages } from "../components/pages/index/Pages";
import { LinkHome } from "../src/constants/pageInfo";

export default () => (
  <>
    {/* <BreadCrumb links={[{ Link: LinkHome, isActive: true }]}></BreadCrumb> */}
    <About></About>
    <Pages></Pages>
  </>
);
