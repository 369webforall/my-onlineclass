import React from 'react'
import EditUserForm from '../../_components/editForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';


const EditPage = async ({params}:{params:{id:string}}) => {
    const user = await prisma.user.findUnique({where:{id:params.id}})
    if(!user) notFound();
  return (
  
        <EditUserForm user={user}/>
   
  )
}

export default EditPage