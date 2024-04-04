import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-31","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fec60aea-da71-66d9-ca93-a7b7f35d2883","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fec60aea-da71-66d9-ca93-a7b7f35d2883","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-31-p","smoothing":95,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":100}],"createdOn":1702588168072}},"actionLists":{"a-31":{"id":"a-31","title":"services scroll","continuousParameterGroups":[{"id":"a-31-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".service-bubbles._1","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","c829afb8-5cbb-9c60-c415-02517e1f818c"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._2","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","97f646b3-16d3-42a1-5027-f75178423358"]},"xValue":10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._3","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","5ff10884-8cdb-bfbb-9f62-c7b33d85d2c8"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._4","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","34c738ee-d37e-c792-1cf4-2b911f7c58c3"]},"xValue":10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._5","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","78c21698-5310-590b-d2d0-38b501fab3b3"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-31-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".service-bubbles._1","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","c829afb8-5cbb-9c60-c415-02517e1f818c"]},"xValue":10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._2","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","97f646b3-16d3-42a1-5027-f75178423358"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._3","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","5ff10884-8cdb-bfbb-9f62-c7b33d85d2c8"]},"xValue":10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._4","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","34c738ee-d37e-c792-1cf4-2b911f7c58c3"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".service-bubbles._5","selectorGuids":["c79e6c53-2a83-78bd-3edc-a40106effc8a","78c21698-5310-590b-d2d0-38b501fab3b3"]},"xValue":10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1702588176300}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoServicesContainer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="services-container" tag="div">
      <_Builtin.Block
        className="service-bubbles _1"
        data-w-id="fec60aea-da71-66d9-ca93-a7b7f35d2883"
        tag="div"
      >
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"NEARSHORE"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CUSTOM APPS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Paragraph className="fs7-1 light">
              {"UI/UX"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB APPS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"APPLE IOS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"NEARSHORE"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CUSTOM APPS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Paragraph className="fs7-1 light">
              {"UI/UX"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB APPS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"APPLE IOS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="service-bubbles _2" tag="div">
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"UI/UX"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB DESIGN"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"ITSERVICES"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"ANGULAR"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"UI/UX"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"UI/UX"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB DESIGN"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"ITSERVICES"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"ANGULAR"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB DESIGN"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="service-bubbles _3" tag="div">
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CMS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"AGILE ENGINEERING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"SOCIAL MEDIA"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CLOUD INFRASTRUCTURE"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"AGILE ENGINEERING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"AGILE ENGINEERING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"SOCIAL MEDIA"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CLOUD INFRASTRUCTURE"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CMS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"AGILE ENGINEERING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="service-bubbles _4" tag="div">
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB DESIGN"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"VIRTUALIZATION"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"SOFTWARE TESTING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"REACTJS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"GOOGLE ANDROID"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="service-bubbles _5" tag="div">
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"MOBILE APPS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"UI/UX"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"CMS"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"BRANDING"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="bubble" tag="div">
          <_Builtin.Block className="bubble-wrap" tag="div">
            <_Builtin.Heading className="fs7-1 light" tag="h3">
              {"WEB DESIGN"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.TabsWrapper
        className="row flex-center"
        data-easing="linear"
        current="Tab 1"
        easing="linear"
        fadeIn={0}
        fadeOut={0}
      >
        <_Builtin.TabsMenu className="col _2col tab-menu" tag="div">
          <_Builtin.TabsLink
            className="tab-link"
            data-w-tab="Tab 1"
            block="inline"
          >
            <_Builtin.Heading className="h3 mb-0" tag="h3">
              {"NEARSHORING"}
            </_Builtin.Heading>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className="tab-link"
            data-w-tab="Tab 2"
            block="inline"
          >
            <_Builtin.Heading className="h3 mb-0" tag="h2">
              {"CUSTOM APP DEVELOPMENT"}
            </_Builtin.Heading>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className="tab-link"
            data-w-tab="Tab 3"
            block="inline"
          >
            <_Builtin.Heading className="h3 mb-0" tag="h2">
              {"WEB & MOBILE APP DESIGN"}
            </_Builtin.Heading>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className="tab-link"
            data-w-tab="Tab 4"
            block="inline"
          >
            <_Builtin.Heading className="h3 mb-0" tag="h2">
              {"SOFTWARE & TESTING QUALITY ASSURANCE"}
            </_Builtin.Heading>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className="tab-link"
            data-w-tab="Tab 5"
            block="inline"
          >
            <_Builtin.Heading className="h3 mb-0" tag="h2">
              {"IT SERVICES"}
            </_Builtin.Heading>
          </_Builtin.TabsLink>
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent className="col _2col overflow-visible" tag="div">
          <_Builtin.TabsPane className="tab_pane" tag="div" data-w-tab="Tab 1">
            <_Builtin.BlockContainer
              className="card-container image-nearshore"
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Paragraph className="card-text">
                {
                  "Experience increased productivity and cost savings by leveraging our nearshoring services. Our team of skilled professionals will seamlessly integrate with your business, delivering high-quality results on time and within budget."
                }
              </_Builtin.Paragraph>
              <_Builtin.VFlex className="flex-block-2" tag="div">
                <_Builtin.Paragraph className="card-pill">
                  {"Agile Engineering"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Cloud Infrastructure"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Google Android"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Apple iOS"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Web Platform"}
                </_Builtin.Paragraph>
              </_Builtin.VFlex>
              <_Builtin.Paragraph className="card-text">
                {"NEARSHORE"}
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane className="tab_pane" tag="div" data-w-tab="Tab 2">
            <_Builtin.BlockContainer
              className="card-container  image-custom-app"
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Paragraph className="card-text">
                {
                  "Our developers have experience in different technologies such as Flutter, ReactJS, Angular and other technologies for creating web and mobile applications."
                }
              </_Builtin.Paragraph>
              <_Builtin.VFlex className="flex-block-2" tag="div">
                <_Builtin.Paragraph className="card-pill">
                  {"Agile Engineering"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Cloud Infrastructure"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Google Android"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Apple iOS"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Web Platform"}
                </_Builtin.Paragraph>
              </_Builtin.VFlex>
              <_Builtin.Paragraph className="card-text">
                {"CUSTOM APP DEVELOPMENT"}
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane className="tab_pane" tag="div" data-w-tab="Tab 3">
            <_Builtin.BlockContainer
              className="card-container "
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Paragraph className="card-text">
                {
                  "We’ll help you build a solution from the ground up that includes researching, prototyping, testing and validation. We also provide services to optimize your existing solutions, making them easy to navigate, intuitive and reliable."
                }
              </_Builtin.Paragraph>
              <_Builtin.VFlex className="flex-block-2" tag="div">
                <_Builtin.Paragraph className="card-pill">
                  {"UX Architecture"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Content Strategy"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"UI Redesign"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Usability"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Accesibility"}
                </_Builtin.Paragraph>
              </_Builtin.VFlex>
              <_Builtin.Paragraph className="card-text">
                {"WEB & MOBILE AGILE DESIGN"}
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane className="tab_pane" tag="div" data-w-tab="Tab 4">
            <_Builtin.BlockContainer
              className="card-container image2"
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Paragraph className="card-text">
                {
                  "Our priority is to keep our products in optimal condition. We apply control tests and quality control, manually or automatically, throughout custom development, integrations, and other processes."
                }
              </_Builtin.Paragraph>
              <_Builtin.VFlex className="flex-block-2" tag="div">
                <_Builtin.Paragraph className="card-pill">
                  {"Quality by Design"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Front-end & QA"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Test Automation"}
                </_Builtin.Paragraph>
              </_Builtin.VFlex>
              <_Builtin.Paragraph className="card-text">
                {"SOFTWARE AND TESTING QUALITY ASSURANCE"}
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane className="tab_pane" tag="div" data-w-tab="Tab 5">
            <_Builtin.BlockContainer
              className="card-container image-it"
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Paragraph className="card-text">
                {
                  "We provide implementation plans that fit the client’s needs to ensure the process of profitable applications and apply quality controls to ensure the software works correctly."
                }
              </_Builtin.Paragraph>
              <_Builtin.VFlex className="flex-block-2" tag="div">
                <_Builtin.Paragraph className="card-pill">
                  {"CI/CD"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Software Deployment"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Cyber Security"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="card-pill">
                  {"Virtualization"}
                </_Builtin.Paragraph>
              </_Builtin.VFlex>
              <_Builtin.Paragraph className="card-text">
                {"IT SERVICES"}
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}
