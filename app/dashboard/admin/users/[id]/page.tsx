import React from 'react'
import prisma from '@/prisma/client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  params: {id: string}
}

const UserDetailsPage = async ({params}:Props) => {
  const user = await prisma.user.findUnique({where: {id:params.id}})
if(!user) notFound();

  return (
    <div>
      <Card>
    <CardHeader>
      <CardTitle>Name: {user?.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className='mb-4'>Email: {user.email}</p>
      <p>UserRole:{user.role}</p>
    </CardContent>
    <CardFooter>
     <Button variant="link"><Link href={`/dashboard/admin/users/${user.id}/edit`}>Edit User</Link></Button>
    </CardFooter>
  </Card>
  </div>
  )
}

export default UserDetailsPage