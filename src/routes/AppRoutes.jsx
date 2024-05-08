import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//* component
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
    <Routes>
        <Route path="/" element={<Home />}>
            <Route path="sales" element={<h1>Hello</h1>}></Route>
            {/* <Route path="promotion" element={} ></Route>
        <Route path="exhibitors" element={} ></Route>
        <Route path="ranking" element={} ></Route>
        <Route path="web" element={} ></Route>
        <Route path="Information" element={} ></Route> */}
        </Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes>;
};

export default AppRoutes;
