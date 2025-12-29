import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import WhatWeDo from "../Pages/WhatWeDo";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <WhatWeDo></WhatWeDo>,
                loader: () => fetch("/service.json")

            },
            {
                path: '/what-we-do/:id',
                element: <WhatWeDo></WhatWeDo>
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>This is auth layout</h1>
    },
    {
        path: '*',
        element: <h1>This is error page</h1>
    }
]);

export default router;