import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"94974e39-6f5d-d2b2-5b8f-5fc713cf9735","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"94974e39-6f5d-d2b2-5b8f-5fc713cf9735","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1702596388389},"e-84":{"id":"e-84","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-83"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"94974e39-6f5d-d2b2-5b8f-5fc713cf9735","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"94974e39-6f5d-d2b2-5b8f-5fc713cf9735","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1702596388389},"e-118":{"id":"e-118","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a1fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a1fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702938603259},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a1fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a1fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702938603261},"e-124":{"id":"e-124","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-125"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99f3c004-99a7-9e05-1c7f-0dc988a278d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99f3c004-99a7-9e05-1c7f-0dc988a278d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703197269453},"e-125":{"id":"e-125","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99f3c004-99a7-9e05-1c7f-0dc988a278d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99f3c004-99a7-9e05-1c7f-0dc988a278d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703197269453}},"actionLists":{"a-32":{"id":"a-32","title":"lottie menu open 2","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a20c"},"value":26}}]},{"actionItems":[{"id":"a-32-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a20c"},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1702086269759},"a-33":{"id":"a-33","title":"lottie menu close 2","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b2e0856c-c63a-f4a5-25d2-9e92ccd2a20c"},"value":26}}]}],"useFirstGroupAsInitialState":false,"createdOn":1702086269759},"a-44":{"id":"a-44","title":"navbar lottie landing open","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-lottie","selectorGuids":["9132fb5b-4ce2-2326-f4ce-1652476b72ee"]},"value":26}}]},{"actionItems":[{"id":"a-44-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-lottie","selectorGuids":["9132fb5b-4ce2-2326-f4ce-1652476b72ee"]},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1702938614090},"a-45":{"id":"a-45","title":"navbar lottie landing close","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-lottie","selectorGuids":["9132fb5b-4ce2-2326-f4ce-1652476b72ee"]},"value":26}}]}],"useFirstGroupAsInitialState":false,"createdOn":1702938614090}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavOtherPages({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar-page"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: true,
        duration: 800,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className="div-block-14" tag="div">
        <_Builtin.Link
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="190"
            height="auto"
            alt="Moddtech"
            src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45412_Logo1%20white%20(1).svg"
          />
        </_Builtin.Link>
        <_Builtin.NavbarMenu
          className="nav-menu-2"
          tag="address"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="menu-btn"
            options={{
              href: "#",
            }}
          >
            {"About Us"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="menu-btn"
            options={{
              href: "/index.html#services",
            }}
          >
            {"Services"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="menu-btn"
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
          <_Builtin.Paragraph className="fs7-2 menu">
            {"ESP"}
          </_Builtin.Paragraph>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="menu-button" tag="div">
          <_Builtin.NotSupported _atom="Animation" />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
