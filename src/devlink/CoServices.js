import React from "react";
import * as _Builtin from "./_Builtin";

export function CoServices({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="services"
      grid={{
        type: "section",
      }}
      tag="section"
      id="services"
    >
      <_Builtin.BlockContainer
        className="container-service"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className="landing-title-div" tag="div">
          <_Builtin.Heading className="fs1 light" tag="h2">
            {"Our Services"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
