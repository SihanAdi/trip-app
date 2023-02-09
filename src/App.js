import React from 'react';
import Navbar from './components/Navbar';
import dataset from './data'
import Main from './components/Main'

export default function App(){
    const data = dataset.map(item => {
        return (
            <Main 
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {data}
        </div>
    )
}