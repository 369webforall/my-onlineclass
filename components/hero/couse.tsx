import React from 'react'

const Course = () => {
    const frontendCourses = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Next.js',
        'TypeScript',
        'Authentication',
        'Next-Auth',
        'Radix UI',
        'Shadcn',
        'zod'
      ];

      const backendCourses = [
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Prisma',
        'Serverless Backend'
      ];

      const devOpsCourses = [
        'Docker',
        'Turbo & Monorepo',
        'Git',
        'Continuous Integration and Continuous Deployment (CI/CD)',
        'AWS hosting',
        
      ];
                  
  return (
    <div className='max-w-6xl mx-auto flex gap-4 flex-1 my-5'>
        <CourseCard title="FrontEnd" courses={frontendCourses}/>
        <CourseCard title="BackEnd" courses={backendCourses}/>
        <CourseCard title="DevOps" courses={devOpsCourses}/>
       
    </div>
  )
}

export default Course

interface CourseProps {
    title:string;
    courses:string[]
}


const CourseCard = ({ title, courses }:CourseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-wrap">
          {courses.map((course, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

