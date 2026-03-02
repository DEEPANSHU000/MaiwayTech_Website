import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Suspense fallback={<LoadingSpinner />}><HomePage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<LoadingSpinner />}><AboutPage /></Suspense> },
      { path: 'services', element: <Suspense fallback={<LoadingSpinner />}><ServicesPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<LoadingSpinner />}><ContactPage /></Suspense> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>,
)
