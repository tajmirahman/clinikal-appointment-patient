import { createBrowserRouter } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";


const router=createBrowserRouter([
    {
        path:'/',
        element:<h1>This is Home layout</h1>
    },
    {
        path:'/auth',
        element:<h1>This is auth layout</h1>
    },
    {
        path:'*',
        element:<h1>This is Home layout</h1>
    }
]);

export default router;