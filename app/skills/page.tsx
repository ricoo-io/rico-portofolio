import React from 'react';
import Skills from '@/components/Skills';

export const metadata = {
  title: 'Skills & Tech', 
};

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-20">
      <Skills />
    </div>
  );
}
