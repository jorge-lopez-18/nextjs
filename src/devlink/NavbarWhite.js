import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarWhite({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className="navbar-3"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer className=" container-28" tag="div">
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="mt-logo"
            loading="lazy"
            width="208"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45411_MT_Logo.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu className="nav-menu-2" tag="nav" role="navigation">
          <_Builtin.NavbarLink
            className="menu-btn-black"
            options={{
              href: "#",
            }}
          >
            {"About Us"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="menu-btn-black"
            options={{
              href: "#",
            }}
          >
            {"Services"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="menu-btn-black"
            options={{
              href: "#",
            }}
          >
            {"Work"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="menu-btn contact"
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
