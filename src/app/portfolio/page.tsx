

import React from 'react';
import {
  CoWorkExample,
  CoOurWork,
  CoWorkTogether,
} from '../../devlink'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Work",
  description: "At Moddtech, we specialize in transforming ideas into engaging and user-friendly applications",
};

export default function Portfolio() {

  return (
    <>
      <CoOurWork />
      <CoWorkExample />
      <CoWorkTogether />
    </ >
  );
}


