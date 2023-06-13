'use client';

import React from 'react';
import ProvaCard from '../Desktop/ProvaCard';

const diocane = () => {
  console.log('diocane!');
};

function ProvaCardModal() {
  return <ProvaCard format=".txt" title="vitatitololungolorem.txt" action={diocane} />;
}

export default ProvaCardModal;
