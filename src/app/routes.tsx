import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage.tsx";
import { RootLayout } from "./layout/RootLayout.tsx";
import { Marketplace } from "./pages/MarketPlace.tsx";
import { ListingDetail } from "./pages/ListingDetails.tsx";
import { HustlerDashboard } from "./pages/HustlersDashboard.tsx";
import { BuyerDashboard } from "./pages/BuyerDashboard.tsx";
import { HustleForge } from "./pages/HustleForge.tsx";
import { SocialMediaManagement } from "./pages/SocialMediaMgt.tsx";
// import { SignUp } from "./pages/SignUp";
// import { Login } from "./pages/Login";
// import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: "/marketplace",
        Component: Marketplace,
      },

      {
        path: "/listing/:id",
        Component: ListingDetail,
      },

      {
        path: "/dashboard/hustler",
        Component: HustlerDashboard,
      },

      {
        path: "/dashboard/buyer",
        Component: BuyerDashboard,
      },

      {
        path: "/hustleforge",
        Component: HustleForge,
      },

      {
        path: "/social-media",
        Component: SocialMediaManagement,
      },

    //   {
    //     path: "/signup",
    //     Component: SignUp,
    //   },

    //   {
    //     path: "/login",
    //     Component: Login,
    //   },

      {
        path: "*",
        element: <div>404 - Not Found</div>,
      },
    ],
  },
]);