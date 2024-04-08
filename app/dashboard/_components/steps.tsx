import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { Button } from '@/components/ui/button'

export const Steps = () => {
  return (
    <div className='my-4 max-w-xl mx-auto'>

<Card>
  <CardHeader>
    <CardTitle className='mb-3'>Welcome to stackhub coaching</CardTitle>
    <CardDescription>Things to do</CardDescription>
  </CardHeader>
  <CardContent>

    <div className='flex flex-col gap-4'>
            <p>1. Read the Teams & Conditions</p>
            <p>2. Update your bio.</p>
            <p>3. Join slack group</p>
            <Button variant="secondary"><a href="https://stackhubworkspace.slack.com/archives/C06SAS5BU0J" target='_black'>Join Slack</a></Button>

            <p>4. Create linkedin profile</p>
            <p>5. Create account with github </p>
           
    </div>
          
        
  </CardContent>

</Card>
</div>
        
  )
}
