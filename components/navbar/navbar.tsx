"use client"
import React from 'react'
import { School2Icon } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { UserMenu } from './user-menu'
const Navbar = () => {
    const links = [{id:1, href:"/", label:'Home'},{id:2, href:"/courses", label:'Courses'},{id:3, href:"/dashboard", label:'Dashboard'}]
  return (
   <header className='py-4 px-4 border-b sticky top-0 left-0 bg-primary-foreground w-full'>

    <div className='flex space-x-4 items-center justify-between'>
        <Link href='/' className='flex items-center gap-1 mr-4'>
            <School2Icon className='text-red-800'/><h1 className='text-orange-600 font-semibold'>stackhub school</h1>
        </Link>

        <nav className='flex items-center gap-3'>{links.map((link)=>(
           <Button asChild key={link.id} variant="outline"><Link href={link.href}>{link.label}</Link></Button> 
        ))}
        
     
        </nav>

        <div className='flex items-center gap-6'>
           <UserMenu />
            <ModeToggle />

        </div>
    </div>

   </header>
  )
}

export default Navbar