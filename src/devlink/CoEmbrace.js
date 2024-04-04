import React from "react";
import * as _Builtin from "./_Builtin";

export function CoEmbrace({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="embrace-section"
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
          <_Builtin.Grid className="embrace-grid" tag="div">
            <_Builtin.Block className="about-div" tag="div">
              <_Builtin.Block className="div-title-about" tag="div">
                <_Builtin.Heading className="fs3" tag="h3">
                  {"We Embrace Challenges"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph className="fs7-1">
                {
                  "From concept to production, our team is flexible and ready to design and deliver. We take pride in launching every project tested and optimized to its full potential."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block className="embrace-slider-wrap" tag="div">
              <_Builtin.SliderWrapper
                className="slider-about"
                navSpacing={3}
                navShadow={false}
                autoplay={true}
                delay={2500}
                iconArrows={true}
                animation="cross"
                navNumbers={true}
                easing="ease"
                navRound={true}
                hideArrows={false}
                disableSwipe={true}
                duration={500}
                infinite={true}
                autoMax={0}
                navInvert={false}
              >
                <_Builtin.SliderMask className="mask-2">
                  <_Builtin.SliderSlide className="slide" tag="div" />
                  <_Builtin.SliderSlide className="slide-2" tag="div" />
                  <_Builtin.SliderSlide className="slide-3" tag="div" />
                </_Builtin.SliderMask>
                <_Builtin.SliderArrow className="left-arrow-2" dir="left">
                  <_Builtin.Icon
                    widget={{
                      type: "icon",
                      icon: "slider-left",
                    }}
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderArrow className="right-arrow-2" dir="right">
                  <_Builtin.Icon
                    widget={{
                      type: "icon",
                      icon: "slider-right",
                    }}
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderNav className="slide-nav-2" />
              </_Builtin.SliderWrapper>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
