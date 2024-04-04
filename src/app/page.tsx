

 import React from 'react';
import {
  CoPreloader, CoNavbar, PageCodeWrap,
  CoHeroe, CoVideo, CoHtml, CoTrack, CoWrok, CoServices, CoServicesInstance, CoServicesContainer,
  CoWorkTogether, CoFooter, CoHome
} from '../devlink'
import { Heroe } from '../components/heroe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moddtech | Software Development",
  description: "We offer development for websites & mobile apps, product integration, custom-made software, extended development teams (offshoring), and UX/UI design.",
};

export default function Home() {

  return (
    <>
      <Heroe />
      <CoVideo />
      <CoHtml />
      <CoTrack />
      <CoWrok />
      <CoServices />
      <CoServicesInstance />
      <CoServicesContainer />
      <CoWorkTogether />
    </>
  );
}

