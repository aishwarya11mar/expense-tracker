"use client"
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useUser,UserButton } from "@clerk/nextjs";
import Link from 'next/link';
function Header() {

  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <h1 className='font-bold'>Expense Tracker</h1>
        {isSignedIn?
        <UserButton/> : 
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
            </Link>
        <Link href={'/dashboard'}>
          <Button>Get Started</Button>
        </Link>
        </div>
      }
       
    </div>
  )
}

export default Header