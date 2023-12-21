'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const LoginPage = dynamic(() => import('../../components/pages/LoginPage'), { ssr: false });

const page = () => {
  return (
    <LoginPage />
  )
}

export default page