

import React from 'react';
import {
  CoAbout,
  CoWorkTogether,
  CoEasy,
  CoNearshoring,
  CoEmbrace,
  CoPreloader
} from '../../devlink'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "We have you covered whether it's web development, mobile app development, or custom software development.",
};

export default function About() {

  return (
    <>
      <CoAbout />
      <CoEasy />
      <CoNearshoring />
      <CoEmbrace />
      <CoWorkTogether />
    </ >
  );
}


