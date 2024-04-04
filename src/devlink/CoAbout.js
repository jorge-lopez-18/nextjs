import React from "react";
import * as _Builtin from "./_Builtin";

export function CoAbout({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="about-us-intro"
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
          {"About Us"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="fs7-1 work">
          {
            "We have you covered whether it's web development, mobile app development, or custom software development."
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
