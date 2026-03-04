/// <reference types="vite/client" />

// Add these lines if they're not already there (or extend the file)
// declare module '*.svg' {
//   const ref: string;
//   export default ref;
// }

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}