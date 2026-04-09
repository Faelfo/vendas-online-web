import LoginScreen from "./screens/LoginScreen";
import {type RouteObject} from 'react-router-dom';


export const loginRoutes: RouteObject []= [
    {
        path: "/login",
        element: <LoginScreen />,
    },
];