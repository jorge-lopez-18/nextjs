import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-130":{"id":"e-130","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-131"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25bc4983-110f-89eb-320a-f9b5646d695f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25bc4983-110f-89eb-320a-f9b5646d695f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1703258611112},"e-131":{"id":"e-131","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideOutBottom","autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25bc4983-110f-89eb-320a-f9b5646d695f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25bc4983-110f-89eb-320a-f9b5646d695f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":false},"createdOn":1703258611112}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideOutBottom":{"id":"slideOutBottom","actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoWorkTogether({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="work-together-section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className="yellow-wrap"
        data-w-id="25bc4983-110f-89eb-320a-f9b5646d695f"
        tag="div"
      >
        <_Builtin.Block className="card_sg_wrap--bw1-br2-pd2 center" tag="div">
          <_Builtin.Block className="div-block-22" tag="div">
            <_Builtin.Heading className="fs1" tag="h2">
              {"LET´S WORK "}
              <_Builtin.Strong>{"TOGETHER"}</_Builtin.Strong>
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block className="get-in-touch" tag="div">
            <_Builtin.Link
              className="fs7-1"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"GET IN TOUCH"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
