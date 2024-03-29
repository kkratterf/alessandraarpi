'use client';

// Import core
import React from 'react';
// Import customs

function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-screen-lg py-20 px-4 sm:px-6">{children}</div>;
}

export default PageContainer;
