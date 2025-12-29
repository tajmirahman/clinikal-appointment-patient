import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>
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