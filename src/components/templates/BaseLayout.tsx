import React, { FC } from 'react'
import Header from './Header'

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default BaseLayout