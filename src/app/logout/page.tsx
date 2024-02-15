"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/utils/api'
export default function page() {
    const router =useRouter()
    const success =  logout()
    if (success){
        router.push("/login")
    }
  return (
    <div>
      
    </div>
  )
}
