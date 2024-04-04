'use client'

import React, { Suspense } from "react";
import { CoHeroe } from "@/devlink";

export function Heroe() {
  const Spline = React.lazy(() => import('@splinetool/react-spline'));

  return (
    <>
      <CoHeroe
        slotText="DIGITAL SOLUTIONS"
        divSplineSpot={
          <Suspense fallback={<div>Loading...</div>}>
            <Spline className="spline-scene" style={{ width: '1000px', height: '60rem' }} scene="https://prod.spline.design/XDLQ-RJtsVWWZlel/scene.splinecode" />
          </Suspense>
        } />

    </>
  );
}