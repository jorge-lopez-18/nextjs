import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-20","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218462","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218462","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-20-p","smoothing":75,"startsEntering":false,"addStartOffset":false,"addOffsetValue":0,"startsExiting":false,"addEndOffset":true,"endOffsetValue":25}],"createdOn":1696711459698},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702666515632},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702666515633},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":66,"startsEntering":false,"addStartOffset":false,"addOffsetValue":14,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1702679118229}},"actionLists":{"a-20":{"id":"a-20","title":"Horizontal scroll","continuousParameterGroups":[{"id":"a-20-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".frame","selectorGuids":["67d93967-5844-186f-997e-3fd1b843f245"]},"xValue":0,"yValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".frame","selectorGuids":["67d93967-5844-186f-997e-3fd1b843f245"]},"xValue":-300,"yValue":null,"xUnit":"vw","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1696711472163},"a-39":{"id":"a-39","title":"quote bubble mouse on","actionItemGroups":[{"actionItems":[{"id":"a-39-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".quote-bubble","selectorGuids":["82f5280b-7d18-3a4b-9f52-cf33085d040b"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".quote-bubble","selectorGuids":["82f5280b-7d18-3a4b-9f52-cf33085d040b"]},"globalSwatchId":"","rValue":230,"bValue":110,"gValue":250,"aValue":1}},{"id":"a-39-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".quote-text","selectorGuids":["062dc90a-5518-cebd-6de7-44f838001c59"]},"globalSwatchId":"","rValue":32,"bValue":32,"gValue":32,"aValue":1}},{"id":"a-39-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".quote-bubble","selectorGuids":["82f5280b-7d18-3a4b-9f52-cf33085d040b"]},"xValue":1.2,"yValue":1.2,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1702666532903},"a-40":{"id":"a-40","title":"quote bubble mouse on out","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".quote-bubble","selectorGuids":["82f5280b-7d18-3a4b-9f52-cf33085d040b"]},"globalSwatchId":"","rValue":0,"bValue":230,"gValue":69,"aValue":1}},{"id":"a-40-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".quote-text","selectorGuids":["062dc90a-5518-cebd-6de7-44f838001c59"]},"globalSwatchId":"","rValue":250,"bValue":250,"gValue":250,"aValue":1}},{"id":"a-40-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".quote-bubble","selectorGuids":["82f5280b-7d18-3a4b-9f52-cf33085d040b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1702666532903},"a-41":{"id":"a-41","title":"bubble scroll in","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487"},"xValue":0,"yValue":0,"locked":true}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"fd5980b1-b6c4-355d-7b1e-969b8a218487"},"xValue":1.3,"yValue":1.3,"locked":true}}]}]}],"createdOn":1702679123528}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoTrack({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="track"
      data-w-id="fd5980b1-b6c4-355d-7b1e-969b8a218462"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className="camera" tag="div">
        <_Builtin.Block className="frame" tag="div">
          <_Builtin.Block className="item-1" tag="div">
            <_Builtin.Block className="tracker-item-wrapper" tag="div">
              <_Builtin.Grid className="grid-2" tag="div">
                <_Builtin.Block
                  className="tracker-image"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218468-8a218462"
                  tag="div"
                >
                  <_Builtin.Image
                    className="image-14"
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt="IT staffing\n\n"
                    src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45464_guys%20copy.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="tracker-text"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a21846a-8a218462"
                  tag="div"
                >
                  <_Builtin.Heading className="fs7-1 light" tag="h2">
                    {
                      "Moddtech is a team of passionate designers and developers, fluent in both Spanish and English."
                    }
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="item-2 code" tag="div">
            <_Builtin.Block className="tracker-item-wrapper" tag="div">
              <_Builtin.Grid className="grid-2" tag="div">
                <_Builtin.Block
                  className="tracker-image"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218470-8a218462"
                  tag="div"
                >
                  <_Builtin.Image
                    className="image-14"
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt="Proximity outsourcing\n\n"
                    src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d4547a_phone2.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="tracker-text"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218472-8a218462"
                  tag="div"
                >
                  <_Builtin.Heading className="fs7-1 light" tag="h2">
                    {
                      "We code in Flutter, Swift, Kotlin, C#, Java, ReactJS, Angular, Vue, SQL, MySQL, Mongo, Dynamo, Stripe, AWS and more."
                    }
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="item-3 integrate" tag="div">
            <_Builtin.Block className="tracker-item-wrapper" tag="div">
              <_Builtin.Grid className="grid-2" tag="div">
                <_Builtin.Block
                  className="tracker-image"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218478-8a218462"
                  tag="div"
                >
                  <_Builtin.Image
                    className="image-14"
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt="Offshore collaboration\n\n"
                    src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45472_typing.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="tracker-text"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a21847a-8a218462"
                  tag="div"
                >
                  <_Builtin.Heading className="fs7-1" tag="h2">
                    {
                      "We’re ready to integrate into your business architecture using Atlassian apps, Figma, Slack etc."
                    }
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="item-4 contact" tag="div">
            <_Builtin.Block className="tracker-item-wrapper" tag="div">
              <_Builtin.Grid className="grid-2" tag="div">
                <_Builtin.Block
                  className="tracker-image"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218480-8a218462"
                  tag="div"
                >
                  <_Builtin.Image
                    className="image-14"
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d454b8_map2%20(1).webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="tracker-text"
                  id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218482-8a218462"
                  tag="div"
                >
                  <_Builtin.Heading className="fs7-1" tag="h2">
                    {
                      "We are located in Hermosillo MX, Portland OR and Los Angeles CA. "
                    }
                    <br />
                    {""}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
            <_Builtin.Block
              className="quote-bubble"
              id="w-node-fd5980b1-b6c4-355d-7b1e-969b8a218487-8a218462"
              data-w-id="fd5980b1-b6c4-355d-7b1e-969b8a218487"
              tag="div"
            >
              <_Builtin.Block className="quote-text" tag="div">
                {"GET A QUOTE"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
