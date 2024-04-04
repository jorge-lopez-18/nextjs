import React from "react";
import * as _Builtin from "./_Builtin";

export function CoHeroe({
  as: _Component = _Builtin.Section,
  splineSceneRuntimeProps = {},
  divSplineSpot,
  divSplineRun = {},
  slotText,
  fs0Text = "DIGITALSOLUTIONS",
}) {
  return (
    <_Component
      className="hero-main"
      grid={{
        type: "section",
      }}
      tag="section"
      id="Home-section"
    >
      <_Builtin.Block className="container-wrap" tag="div">
        <_Builtin.Grid className="grid" tag="div">
          <_Builtin.Block
            className="card_sg_wrap--bw1-br2-pd2 hero"
            id="w-node-_78e5b0fd-9724-8578-950b-c172ac0af919-ac0af916"
            tag="div"
          >
            <_Builtin.Heading className="fs0 light" tag="h1">
              {slotText ?? fs0Text}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className="div-block-11"
            id="w-node-_78e5b0fd-9724-8578-950b-c172ac0af91c-ac0af916"
            tag="div"
            {...divSplineRun}
          >
            {divSplineSpot ?? (
              <>
                <_Builtin.NotSupported _atom="Spline" />
                <_Builtin.Image
                  className="image-15"
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt="moddtech cubes"
                  src="https://uploads-ssl.webflow.com/65eba9992b4f6f1467d453cf/65eba9992b4f6f1467d45462_blue-cubes-vertic2.png"
                />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
