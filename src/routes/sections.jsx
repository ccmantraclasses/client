import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import AboutIndex from 'src/pages/about';
import ContactIndex from 'src/pages/contact';
import CoursesIndex from 'src/pages/courses';
import GalleryIndex from 'src/pages/gallery';
import LecturesIndex from 'src/pages/lectures';
import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/home'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'about-us', element: <AboutIndex /> },
        { path: 'lectures', element: <LecturesIndex /> },
        { path: 'courses', element: <CoursesIndex /> },
        { path: 'gallery', element: <GalleryIndex /> },
        { path: 'contact', element: <ContactIndex /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
