import { createBrowserRouter } from 'react-router-dom';
import AllUser from '../Alluser/Alluser';
import ErrorPage from '../ErrorPages/ErrorPage';
import DashBoardLayout from '../Layout/DashBoardLayout';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Contract from '../Pages/Contract/Contract';
import AddProducts from '../Pages/DashBoard/AddProducts/AddProducts';
import AllBuyer from '../Pages/DashBoard/AllBuyer/AllBuyer';
import Allseler from '../Pages/DashBoard/Allseller/Allseler';
import MyOrder from '../Pages/DashBoard/MyOrder/MyOrder';
import MyProducts from '../Pages/DashBoard/MyProducts/MyProducts';
import Home from '../Pages/Home/Home/Home';
import DetailsProduct from '../Pages/Phones/DetailsProduct';
import Phones from '../Pages/Phones/Phones';
import Login from '../Share/Login/Login';
import Signup from '../Share/Login/Signup';
import AdminRoutes from './AdminRoutes';
import PrivateRoutes from './privateRoutes';
import Payment from '../Pages/Payments/Payment';
import ProductDetails from '../Pages/Home/Home/NewArrival/ProductDetails';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contract></Contract>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/cetagorie/:id',
                element: <PrivateRoutes><Phones></Phones></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://phones-resells-server.vercel.app/cetagorie/${params?.id}`)
            },
            {
                path: "/details/:id",
                element: <DetailsProduct></DetailsProduct>,
                loader: ({ params }) => fetch(`https://phones-resells-server.vercel.app/details/${params?.id}`)
            },
            {
                path: "/newArrival/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://phones-resells-server.vercel.app/newArrival/${params.id}`)
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://phones-resells-server.vercel.app/details/${params?.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/orders',
                element: <PrivateRoutes><MyOrder></MyOrder></PrivateRoutes>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path: '/dashboard/AddProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoutes><AllBuyer></AllBuyer></AdminRoutes>
            },
            {
                path: '/dashboard/allSeller',
                element: <AdminRoutes><Allseler></Allseler></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://phones-resells-server.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])