import React from "react";
import * as _Builtin from "./_Builtin";

export function CoOurWork({ as: _Component = _Builtin.Section }) {
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
          {"Our Work"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="fs7-1 work">
          {
            "At Moddtech, we specialize in transforming ideas into engaging and user-friendly applications. Whether it's iOS, Android, or the Web, our team excels in creating apps that combine elegance with seamless functionality. Also, our expertise extends to custom software development and tailoring solutions to meet your unique business requirements. Below are some examples of our creations."
          }
        </_Builtin.Paragraph>
        <_Builtin.List className="list-3" tag="ul" unstyled={true}>
          <_Builtin.ListItem className="projects-pills">
            {"App Development"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"Content Strategy"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"UI Design"}
          </_Builtin.ListItem>
          <_Builtin.ListItem className="projects-pills">
            {"ITConsulting"}
          </_Builtin.ListItem>
        </_Builtin.List>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
