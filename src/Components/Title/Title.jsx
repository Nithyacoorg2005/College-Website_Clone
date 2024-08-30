import './Title.css';
import React from 'react';
export default function Title({subtitle,Title}){
    return<>
    <div className="title">
        <p>{subtitle}</p>
        <h2>{Title}</h2>
    </div>
    </>
}