import React, { useEffect } from 'react';

export default function PropsComponent(props: {name?: string, age: number}) {
    useEffect(() => {
        console.log(props.name)
        console.log(props.age)
    }, [props.age])
    return (
        <div>
            <h2>This is a test component {props.name ?? 'no name'}</h2>
            <h3>My age is {props.age}</h3>
        </div>
    );
}