import ReactDOM from 'react-dom/client';
import './main.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import type { Router as RemixRouter } from "@remix-run/router";
import { loginRoutes } from './modules/login/routes.tsx';


const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Pagin não encontrada</div>,
  },
];

const router: RemixRouter = createBrowserRouter ([...mainRoutes, ...loginRoutes])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
