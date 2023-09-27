import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import TopPage from './Components/TopPage';
import TodoDetails from './Components/TodoDetails';
import ErrorPage from './Components/ErrorPage';
const AppLayout = () => {
  return (
    <React.Fragment>
      <App />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <TopPage />,
      },
      {
        path: '/todo/:todoId',
        element: <TodoDetails />,
      },
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={appRouter} />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
