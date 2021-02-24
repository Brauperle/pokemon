## See demo
https://pokemon-brauperle.vercel.app/
## Setup
```
npm run dev     // dev server
npm run build   // build project
```
## Architecture
```
dist            // compiled assets (npm run build)
public          // public assets un-touched by the application
src/        
    api/        // api layer
    app/        // application components & logic
    store/      // client side redux-like store
    index.js    // javascript entry-point
index.html      // entry-point
```
## Packages
- Application is using vite as build system/dev server
- Client state is manage by out of the box React.Context
- Server state (API) is manage by react-query
- React-router is used for client side routing
- Tests are using Jest & react-testing-library 
- styled-components for styles