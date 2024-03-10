import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index/page.tsx';
import Developers from './pages/Developers/page.tsx';
import Close from './pages/Close/page.tsx';
import Offer from './pages/Offer/page.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/close",
        element: <Close />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
