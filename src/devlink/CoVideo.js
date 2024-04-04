import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-18","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-18-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1701752078592}},"actionLists":{"a-18":{"id":"a-18","title":"scrolling lift","continuousParameterGroups":[{"id":"a-18-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25"},"value":0,"unit":""}}]},{"keyframe":5,"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25"},"yValue":47,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":22,"actionItems":[{"id":"a-18-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25"},"value":1,"unit":""}}]},{"keyframe":50,"actionItems":[{"id":"a-18-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"2226b9b1-173c-a05f-1ec2-8e46b601df25"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1701752091607}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoVideo({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className=" video-and-services"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="main-container"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Layout
          className="quick-stack"
          id="w-node-_2226b9b1-173c-a05f-1ec2-8e46b601df1d-b601df1b"
        >
          <_Builtin.Cell
            className="cell-17"
            id="w-node-_2226b9b1-173c-a05f-1ec2-8e46b601df1e-b601df1b"
          >
            <_Builtin.BackgroundVideoWrapper
              className="homevideo"
              tag="div"
              sources={[
                "https://uploads-ssl.webflow.com/659ed2501c5685a068ee7167/659ed2501c5685a068ee724c_example%20website%20reel-transcode.webm",
                "https://uploads-ssl.webflow.com/659ed2501c5685a068ee7167/659ed2501c5685a068ee724c_example%20website%20reel-transcode.mp4",
              ]}
              posterImage="https://uploads-ssl.webflow.com/64b57187e5779943563a550f/6532cdf4ea4ee6d30e7ef674_example website reel-poster-00001.jpg"
              autoPlay={true}
              loop={true}
            >
              <_Builtin.BackgroundVideoPlayPauseButton>
                <_Builtin.BackgroundVideoPlayPauseButtonPlaying>
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt="Pause video"
                    src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg"
                  />
                </_Builtin.BackgroundVideoPlayPauseButtonPlaying>
                <_Builtin.BackgroundVideoPlayPauseButtonPaused>
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt="Play video"
                    src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg"
                  />
                </_Builtin.BackgroundVideoPlayPauseButtonPaused>
              </_Builtin.BackgroundVideoPlayPauseButton>
            </_Builtin.BackgroundVideoWrapper>
          </_Builtin.Cell>
          <_Builtin.Cell
            className="cell-18"
            id="w-node-_2226b9b1-173c-a05f-1ec2-8e46b601df25-b601df1b"
            data-w-id="2226b9b1-173c-a05f-1ec2-8e46b601df25"
          >
            <_Builtin.Paragraph className="fs7-1 light">
              {
                "We offer development for web & mobile apps, product integration, custom-made software, extended development teams (nearshore), IT, CMS solutions, UX/UI design, branding, SEO and social media content."
              }
            </_Builtin.Paragraph>
          </_Builtin.Cell>
        </_Builtin.Layout>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
