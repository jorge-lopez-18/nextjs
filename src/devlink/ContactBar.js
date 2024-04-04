import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-66":{"id":"e-66","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-67"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2c72d3a6-1e4c-5ba2-ca14-b360681cd187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2c72d3a6-1e4c-5ba2-ca14-b360681cd187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1702048436931},"e-67":{"id":"e-67","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideOutBottom","autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2c72d3a6-1e4c-5ba2-ca14-b360681cd187","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2c72d3a6-1e4c-5ba2-ca14-b360681cd187","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":false},"createdOn":1702048436932}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideOutBottom":{"id":"slideOutBottom","actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactBar({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="work-together-section"
      data-w-id="2c72d3a6-1e4c-5ba2-ca14-b360681cd187"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="  container-25"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading className="h2 xl black" tag="h2">
          {"LET´S WORK "}
          <_Builtin.Strong>{"TOGETHER"}</_Builtin.Strong>
        </_Builtin.Heading>
        <_Builtin.Link
          className="link"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"GET IN TOUCH"}
        </_Builtin.Link>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
