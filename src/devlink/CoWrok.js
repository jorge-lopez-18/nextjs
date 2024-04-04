import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-61"}},"mediaQueries":["main","medium"],"target":{"id":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1702048141084},"e-62":{"id":"e-62","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-63"}},"mediaQueries":["main","medium"],"target":{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1702048189843},"e-64":{"id":"e-64","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-65"}},"mediaQueries":["main","medium"],"target":{"id":"14a60dc5-2a31-af6d-9469-cecc068ef851","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14a60dc5-2a31-af6d-9469-cecc068ef851","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1702048250971},"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main"],"target":{"selector":".cells","originalId":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"CLASS"},"targets":[{"selector":".cells","originalId":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702048846975},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main"],"target":{"selector":".cells","originalId":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"CLASS"},"targets":[{"selector":".cells","originalId":"14a60dc5-2a31-af6d-9469-cecc068ef837","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702048847039},"e-70":{"id":"e-70","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["main"],"target":{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702053496202},"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-70"}},"mediaQueries":["main"],"target":{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14a60dc5-2a31-af6d-9469-cecc068ef844","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702053496202}},"actionLists":{"a-24":{"id":"a-24","title":"work","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"14a60dc5-2a31-af6d-9469-cecc068ef837"},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-24-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"14a60dc5-2a31-af6d-9469-cecc068ef837"},"xValue":1.01,"yValue":1.01,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1702053293067},"a-25":{"id":"a-25","title":"work 2","actionItemGroups":[{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"14a60dc5-2a31-af6d-9469-cecc068ef837"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1702053293067},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoWrok({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="work"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-workservices"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="landing-title-div" tag="div">
          <_Builtin.Heading className="fs1" tag="h2">
            {"Work"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Layout
          className="quick-stack-6"
          id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef836-068ef831"
        >
          <_Builtin.Cell
            className="cells"
            id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef837-068ef831"
            data-w-id="14a60dc5-2a31-af6d-9469-cecc068ef837"
          >
            <_Builtin.Link
              className="link-block-12"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className="work-info-wrap lmi" tag="div">
                <_Builtin.Grid className="card-grid" tag="div">
                  <_Builtin.Block
                    className="work-title-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef83b-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs3 light" tag="h3">
                      {"Lend Me It"}
                      <br />
                      {"Rent Everything."}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="div-block-29"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef840-068ef831"
                    tag="div"
                  />
                  <_Builtin.Block
                    className="work-descript-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef841-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs6 light no-hover" tag="h4">
                      {"App, Web Development"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            className="cells"
            id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef844-068ef831"
            data-w-id="14a60dc5-2a31-af6d-9469-cecc068ef844"
          >
            <_Builtin.Link
              className="link-block-13"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className="work-info-wrap gbx" tag="div">
                <_Builtin.Grid className="card-grid" tag="div">
                  <_Builtin.Block
                    className="work-title-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef848-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs3 light" tag="h3">
                      {"Globexplore"}
                      <br />
                      {"Drilling and Analytics"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="div-block-29"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef84d-068ef831"
                    tag="div"
                  />
                  <_Builtin.Block
                    className="work-descript-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef84e-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs6 light no-hover" tag="h3">
                      {"Website Design, Brand Identity"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            className="cells"
            id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef851-068ef831"
            data-w-id="14a60dc5-2a31-af6d-9469-cecc068ef851"
          >
            <_Builtin.Link
              className="link-block-14"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className="work-info-wrap onyx" tag="div">
                <_Builtin.Grid className="card-grid" tag="div">
                  <_Builtin.Block
                    className="work-title-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef855-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs3 light" tag="h3">
                      {"Onyx"}
                      <br />
                      {"Record Press"}
                      {""}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="div-block-29"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef85b-068ef831"
                    tag="div"
                  />
                  <_Builtin.Block
                    className="work-descript-div"
                    id="w-node-_14a60dc5-2a31-af6d-9469-cecc068ef85c-068ef831"
                    tag="div"
                  >
                    <_Builtin.Heading className="fs6 light no-hover" tag="h3">
                      {"Web App"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Cell>
        </_Builtin.Layout>
        <_Builtin.BlockContainer
          className="container-30"
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block className="portfolio-button" tag="div">
            <_Builtin.Link
              className="link-block"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className="bubble-wrap2 dark" tag="div">
                <_Builtin.Paragraph className="fs7-1">
                  {"View Portfolio"}
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
