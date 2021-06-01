import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import Link from "next/link";
import { URL_HOME } from "../../../src/constants/pageInfo";
import React from "react";
import { ViewListIcon } from "../icons/ViewListIcon";

export const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <Link href={URL_HOME}>
        <>
          <img alt="logo" src="/logo.png" width="30" height="30" />
          Seimei's Blog
        </>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
    </Navbar.Collapse>
    <Dropdown className="mr-sm-2">
      <DropdownButton
        variant="light"
        id="dropdown-basic"
        menuAlign="right"
        title={<ViewListIcon></ViewListIcon>}
      >
        <Dropdown.Item>
          <a href="mailto:seimei.221.921@gmail.com">Contact</a>
        </Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  </Navbar>
);
