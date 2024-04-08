import React from 'react'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export const AdminSidebar = () => {
  return (
    <div className='w-[150px]
     border-r-2 border-red-800 p-4'>
        <div className='flex flex-col gap-4'>
        <Button asChild variant="outline"><Link href={`/dashboard/admin/users`}>Student List</Link></Button>
        </div>
    </div>
  )
}

