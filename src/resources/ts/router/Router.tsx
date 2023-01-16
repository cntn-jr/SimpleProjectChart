import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { AfterLoginRouter } from "./AfterLoginRouter";
import { BeforeLoginRouter } from "./BeforeLoginRouter";

export const Router = () => {
    const authentication = true;
    return (
        <BrowserRouter>
            {authentication ? (
                <Routes>
                    {AfterLoginRouter.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.children}
                        />
                    ))}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            ) : (
                <Routes>
                    {BeforeLoginRouter.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.children}
                        />
                    ))}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};
