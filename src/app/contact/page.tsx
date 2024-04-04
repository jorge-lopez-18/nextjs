

import React from 'react';
import {
  CoInTouch,
  CoForm,
} from '../../devlink'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "We are just an email or phone call away.",
};

export default function Contact() {

  return (
    <>
      <CoInTouch />
      <CoForm />
    </ >
  );
}


