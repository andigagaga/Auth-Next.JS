"use client"

import { AuthProvider } from '@/contexts/AuthContext'
import React from 'react'

type PropsT = {
    children:React.ReactNode
}

const ProviderNext:React.FC<PropsT> = ({children}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default ProviderNext
