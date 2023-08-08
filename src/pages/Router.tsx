import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import EstablishmentDetailPage from "./EstablishmentDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "establishments/:establishmentId",
    element: <EstablishmentDetailPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
