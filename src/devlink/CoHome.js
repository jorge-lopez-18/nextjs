import React from "react";
import * as _Builtin from "./_Builtin";
import { PageCodeWrap } from "./PageCodeWrap";
import { CoHeroe } from "./CoHeroe";
import { CoVideo } from "./CoVideo";
import { CoHtml } from "./CoHtml";
import { CoTrack } from "./CoTrack";
import { CoWrok } from "./CoWrok";
import { CoServices } from "./CoServices";
import { CoServicesInstance } from "./CoServicesInstance";
import { CoServicesContainer } from "./CoServicesContainer";
import { CoWorkTogether } from "./CoWorkTogether";
import { CoFooter } from "./CoFooter";

export function CoHome({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrap-landing" tag="div">
      <PageCodeWrap />
      <CoHeroe />
      <CoVideo />
      <CoHtml />
      <CoTrack />
      <CoWrok />
      <CoServices />
      <CoServicesInstance />
      <CoServicesContainer />
      <CoWorkTogether />
      <CoFooter />
    </_Component>
  );
}
