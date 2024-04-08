import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const LeftBar = () => {
  return (
    <div className='w-[150px]
    border-r-2 border-red-800 p-4'>
       <div className='flex flex-col gap-4'>
       <Button asChild variant="outline"><Link href={`/dashboard/student`}>Student Dashboard</Link></Button>
       </div>
   </div>
  )
}

export default LeftBar