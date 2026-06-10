import React from 'react';
import Projects from '@/components/Projects';

export const metadata = {
  title: 'Projects', 
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Projects />
    </div>
  );
}
