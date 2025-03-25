import { Suspense, lazy } from 'react';
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const SignInPage = lazy(() => import('@/pages/auth/signin'));

const DashboardDefault = lazy(() => import('@/pages/dashboard/default'));
const WebsiteAnalytics = lazy(
  () => import('@/pages/dashboard/website-analytics')
);
const CrmPage = lazy(() => import('@/pages/dashboard/crm'));

// Table
const DataTablePage = lazy(() => import('@/pages/table/data-table'));
const ProTable = lazy(() => import('@/pages/table/pro-table'));

// Form
const BasicForm = lazy(() => import('@/pages/form/basic-form'));

// Charts
const ChartsLayout = lazy(() => import('@/pages/charts/layout'));
const AreaCharts = lazy(() => import('@/pages/charts/area-chart'));
const BarChart = lazy(() => import('@/pages/charts/bar-chart'));
const LineChart = lazy(() => import('@/pages/charts/line-chart'));
const PieChart = lazy(() => import('@/pages/charts/pie-chart'));
const RadarChart = lazy(() => import('@/pages/charts/radar-chart'));
const RadialChart = lazy(() => import('@/pages/charts/radial-chart'));
const Tooltip = lazy(() => import('@/pages/charts/tooltip-chart'));

// Error Pages
const NotFound = lazy(() => import('@/pages/error/404'));
const Forbidden = lazy(() => import('@/pages/error/403'));
const ServerError = lazy(() => import('@/pages/error/500'));

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes: RouteObject[] = [
    {
      // path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { index: true, element: <Navigate to="/dashboard/default" replace /> },
        { path: '/dashboard/default', element: <DashboardDefault /> },
        { path: '/dashboard/crm', element: <CrmPage /> },
        {
          path: '/dashboard/website-analytics',
          element: <WebsiteAnalytics />
        },
        {
          path: 'form',
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Navigate to="/form/basic-form" replace />
            },
            { path: 'basic-form', element: <BasicForm /> },
            { path: 'step-form', element: <div>step form</div> },
            { path: 'advanced-form', element: <div>advanced form</div> }
          ]
        },
        {
          path: 'list',
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Navigate to="/list/data-table" replace />
            },
            { path: 'data-table', element: <DataTablePage /> },
            { path: 'pro-table', element: <ProTable /> },
            { path: 'table-list', element: <div>table list</div> },
            { path: 'card-tabble', element: <div>card table</div> }
          ]
        },
        {
          path: 'charts',
          element: (
            <ChartsLayout>
              <Outlet />
            </ChartsLayout>
          ),
          children: [
            {
              index: true,
              element: <Navigate to="/charts/area-chart" replace />
            },
            { path: 'area-chart', element: <AreaCharts /> },
            { path: 'bar-chart', element: <BarChart /> },
            { path: 'line-chart', element: <LineChart /> },
            { path: 'pie-chart', element: <PieChart /> },
            { path: 'radar-chart', element: <RadarChart /> },
            { path: 'radial-chart', element: <RadialChart /> },
            { path: 'tooltip', element: <Tooltip /> }
          ]
        },
        {
          path: 'pages',
          children: [
            { path: '404', element: <NotFound /> },
            { path: '403', element: <Forbidden /> },
            { path: '500', element: <ServerError /> }
          ]
        },
        {
          path: 'settings',
          element: <div>settings</div>
        },
        {
          path: 'system',
          element: <div>system</div>
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
