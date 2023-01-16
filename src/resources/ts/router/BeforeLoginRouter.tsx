import { Login } from "../components/pages/Login";
import { Signup } from "../components/pages/Signup";

export const BeforeLoginRouter = [
    {
        path: "/login",
        name: "Log in",
        children: <Login />,
        icon: <></>,
    },
    {
        path: "/signup",
        name: "Sign up",
        children: <Signup />,
        icon: <></>,
    },
];
