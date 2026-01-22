import React from 'react';
import AboutMe from '@/components/AboutMe';

export const metadata = {
  title: 'About', 
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <AboutMe/>
    </div>
  );
}
