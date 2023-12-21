'use client';

import React from 'react'
import dynamic from 'next/dynamic';

const DashBoard = dynamic(() => import('../../components/pages/DashBoard'), { ssr: false });

const page = () => {
  return (
    <DashBoard />
  )
}

export default page;