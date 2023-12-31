import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./components/navbar";
import { Orders } from "./pages/orders";
import { Cart } from "./pages/cart";
import { SignIn } from "./pages/signIn";
import { SignUp } from "./pages/signup";
import { Loader } from "./components/loader";
import { Provider } from "react-redux";
import { store } from "./redux/store";



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
      element:<SignUp/>}
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
