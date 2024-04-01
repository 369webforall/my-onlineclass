import React from 'react';
import CourseCard from './course-card';

const courses = [
    {
      title: 'HTML',
      description: 'Learn the basics of HTML for building web pages.'
    },
    {
      title: 'CSS',
      description: 'Master CSS for styling your HTML documents.'
    },
    {
      title: 'JavaScript',
      description: 'Dive deep into JavaScript for adding interactivity to your web pages.'
    },
    {
      title: 'React',
      description: 'Build dynamic and interactive user interfaces with React.js.'
    },
    {
      title: 'Node.js',
      description: 'Learn how to build scalable server-side applications with Node.js.'
    },
    {
      title: 'Express',
      description: 'Explore the popular web application framework for Node.js - Express.'
    },
    {
      title: 'MongoDB',
      description: 'Get hands-on experience with MongoDB, the leading NoSQL database.'
    },
    {
      title: 'MySQL',
      description: 'Master MySQL, a powerful relational database management system.'
    },
    {
      title: 'PostgreSQL',
      description: 'Learn PostgreSQL, an open-source relational database management system.'
    },
    {
      title: 'Tailwind CSS',
      description: 'Discover Tailwind CSS, a utility-first CSS framework for building custom designs.'
    },
    {
      title: 'Next.js',
      description: 'Create production-ready React applications with Next.js.'
    },
    {
      title: 'Chakra UI',
      description: 'Explore Chakra UI, a simple, modular, and accessible component library.'
    },
    {
      title: 'Radix UI',
      description: 'Learn Radix UI, a collection of accessible and responsive UI components.'
    },
    {
      title: 'Data Structures and Algorithms',
      description: 'Master fundamental data structures and algorithms for solving complex problems.'
    },
    {
      title: 'Form Validation',
      description: 'Implement robust form validation techniques to enhance user experience.'
    }
  ];
  

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} description={course.description} />
      ))}
    </div>
  );
}

export default CourseList;
