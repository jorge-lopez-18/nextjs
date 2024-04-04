import React from "react";
import * as _Builtin from "./_Builtin";

export function CoInTouch({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="our-work-section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-intro"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading className="fs2 work" tag="h2">
          {"Get In Touch"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="fs7-1 work">
          {
            "We are just an email or phone call away. For general FAQs, try our our ai chatbot!"
          }
        </_Builtin.Paragraph>
        <_Builtin.List className="list-3" tag="ul" unstyled={true}>
          <_Builtin.ListItem className="projects-pills">
            {"Web Apps"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"Branding"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"UI/UX"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"CMS"}
          </_Builtin.ListItem>
        </_Builtin.List>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
