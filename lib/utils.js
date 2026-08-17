export const icon=`<svg viewBox="0 0 24 24"><path d="M13 2 3 14h8l-1 8 11-14h-8z"/></svg>`;
export function decodeJWT(token){try{return JSON.parse(decodeURIComponent(atob(token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join('')))}catch{return null}}
