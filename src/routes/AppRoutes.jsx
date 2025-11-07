import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RouteFallback from "../components/RouteFallback";
import RouteErrorBoundary from "../components/RouteErrorBoundary";

// Route-level code splitting
const Layout = lazy(() => import("../Layout"));
const Home = lazy(() => import("../pages/Home"));
const FootballMap = lazy(() => import("../pages/FootballMap"));
const BlogsNews = lazy(() => import("../pages/BlogsNews"));
const BusinessBenefits = lazy(() => import("../pages/BusinessBenefits"));
const Terms = lazy(() => import("../pages/Terms"));

const withBoundaryAndSuspense = (node) => (
  <RouteErrorBoundary>
    <Suspense fallback={<RouteFallback />}>{node}</Suspense>
  </RouteErrorBoundary>
);

const AppRoutes = () => {
  return (
    // Outer Suspense as a safety net; per-route Suspense handles most cases
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {/* App layout with nested routes */}
        <Route path="/" element={withBoundaryAndSuspense(<Layout />)}>
          <Route index element={withBoundaryAndSuspense(<Home />)} />
          <Route
            path="business-benefits"
            element={withBoundaryAndSuspense(<BusinessBenefits />)}
          />
          <Route
            path="football-map"
            element={withBoundaryAndSuspense(<FootballMap />)}
          />
          <Route
            path="blogs-news"
            element={withBoundaryAndSuspense(<BlogsNews />)}
          />
          <Route
            path="terms"
            element={withBoundaryAndSuspense(<Terms />)}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
