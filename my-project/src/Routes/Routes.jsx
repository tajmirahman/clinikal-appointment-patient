import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import ShowAllService from "../Pages/WhatWeDo/ShowAllService";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <WhatWeDo></WhatWeDo>,
                loader: () => fetch("/service.json")

            }
        ]
    },
    {
        path: '/show-more',
        element: <ShowAllService></ShowAllService>,
        loader: () => fetch("/service.json")
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