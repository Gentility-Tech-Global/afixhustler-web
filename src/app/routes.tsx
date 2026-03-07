import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RootLayout } from "./layout/RootLayout";
// import { Marketplace } from "./pages/Marketplace";
// import { ListingDetail } from "./pages/ListingDetail";
// import { HustlerDashboard } from "./pages/HustlerDashboard";
import { BuyerDashboard } from "./pages/BuyerDashboard";
import { HustleForge } from "./pages/HustleForge";
// import { SocialMediaManagement } from "./pages/SocialMediaManagement";
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

    //   {
    //     path: "/marketplace",
    //     Component: Marketplace,
    //   },

    //   {
    //     path: "/listing/:id",
    //     Component: ListingDetail,
    //   },

    //   {
    //     path: "/dashboard/hustler",
    //     Component: HustlerDashboard,
    //   },

      {
        path: "/dashboard/buyer",
        Component: BuyerDashboard,
      },

      {
        path: "/hustleforge",
        Component: HustleForge,
      },

    //   {
    //     path: "/social-media",
    //     Component: SocialMediaManagement,
    //   },

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