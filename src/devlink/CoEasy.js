import React from "react";
import * as _Builtin from "./_Builtin";

export function CoEasy({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="communication-section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-39"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="div-block-34" tag="div">
          <_Builtin.Grid className="about-grid" tag="div">
            <_Builtin.Block className="about-div" tag="div">
              <_Builtin.Block className="div-title-about" tag="div">
                <_Builtin.Heading className="fs3 mobile" tag="h3">
                  {"Easy Communication"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="fs7-1">
                {
                  "Our team is bi-lingual in Spanish and English for easy communication, and we are ready to integrate across Jira, Slack and all tools for organizing and tracking deliverables."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block className="about-pics" tag="div">
              <_Builtin.Image
                className="image-42"
                loading="lazy"
                width="auto"
                height="auto"
                alt="Offshore collaboration\n\n"
                src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45472_typing.webp"
              />
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
