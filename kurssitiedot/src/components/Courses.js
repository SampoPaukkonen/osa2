import React from 'react';
import Course from './Course';

const Courses = ({courses}) => {
    
    return (
        courses.map(course => <Course key={course.id} parts={course.parts} courseName={course.name}/>)
    )
}

export default Courses  