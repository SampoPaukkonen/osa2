import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({parts, courseName}) => {
    
    return (
        <div>
        <Header courseName={courseName}/>
        <Content courses={parts}/>
        <Total exercises={parts.map(part => part.exercises)}/>
        </div>
    )
}

export default Course
