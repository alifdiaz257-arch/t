'use client';
import {useEffect} from 'react';
export default function AnimationSystem({enabled=true}){useEffect(()=>{if(!enabled)return;const els=document.querySelectorAll('.reveal');const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.08});els.forEach(e=>o.observe(e));return()=>o.disconnect()},[enabled]);return null}
