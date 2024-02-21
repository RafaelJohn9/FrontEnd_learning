import React from 'react';
import './App.css';
import Card from './card';
import allData from './data.json';


export default function App() {
    return (
        <div className='page'>
           { allData.map((data) => (
                <Card
                place={data.place}
                images={data.images}
                />
                ))
                }
            </div>
    )
}