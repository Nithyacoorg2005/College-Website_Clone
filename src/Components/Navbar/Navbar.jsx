import './Navbar.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
export default function Navbar(){
    const[sticky,setsticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50? setsticky(true):setsticky(false);
        })
    },[])
    return<>
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src="https://www.kindpng.com/picc/m/136-1368252_education-logo-no-background-hd-png-download.png" alt="logoimage"/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Program</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Campus</a></li>
            <li><a href="/">Testimonals</a></li>
            <li><a href="/"><button className="btn">Contact Us</button></a></li>
        </ul>
    </nav>
    </>
}