export const CLIENT_ID=process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID||'1060030753845-li37pu6d85u833ui8b90jsrnv2vejfv4.apps.googleusercontent.com';
export function getUser(){if(typeof window==='undefined')return null;try{return JSON.parse(localStorage.getItem('bluetools_user')||'null')}catch{return null}}
export function saveUser(u){localStorage.setItem('bluetools_user',JSON.stringify(u))}
export function clearUser(){localStorage.removeItem('bluetools_user')}
