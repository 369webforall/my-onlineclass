import React from 'react'
import prisma from '@/prisma/client'
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { notFound } from 'next/navigation';
  
const UserPage = async () => {
    const users = await prisma.user.findMany();
    if(!users) return notFound();
  return (
    <div className='p-4'>
        <Table>
  <TableCaption>students table.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email </TableHead>
      <TableHead>Role</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
  {users.map((user)=>(
             <TableRow key={user.id}>
  
             <TableCell className="font-medium">
                <Link href={`/dashboard/admin/users/${user.id}`} className='cursor-pointer hover:text-red-600'>{user.name}</Link>
                
                </TableCell>
             <TableCell className="font-medium">{user.email}</TableCell>
             <TableCell className="font-medium">{user.role}</TableCell>
             
           </TableRow>
        ))}
   
  </TableBody>
</Table>

    </div>
  )
}

export default UserPage