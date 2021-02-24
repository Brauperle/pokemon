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
    __test__    // test folder (npm run test)    
    api/        // api layer
    app/        // application components & logic
    store/      // client side redux-like store
    index.js    // javascript entry-point
index.html      // entry-point
```
## Dependencies
- Build/Development tool: vite https://github.com/vitejs/vite
- Client state: React Context https://reactjs.org/docs/context.html
- Server state (API): react-query https://github.com/tannerlinsley/react-query
- Client Routing: react-router https://github.com/ReactTraining/react-router
- CSS-in-JS: styled-components https://github.com/styled-components/styled-components
- Javascript testing lib: jest https://github.com/facebook/jest
- React testing lib: https://github.com/testing-library/react-testing-library