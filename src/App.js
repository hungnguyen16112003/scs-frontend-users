import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/Views/Home";
import Contact from "./components/Views/Contact";
import Event from "./components/Views/Event";
import About from "./components/Views/About";
import LoginForm from "./components/Views/Auth/LoginForm";
import RegisterForm from "./components/Views/Auth/RegisterForm";
import AuthContextProvider from "./contexts/AuthContext";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import PostDetail from "./components/posts/PostDetail";
import ConfirmAccount from "./components/Views/Auth/ConfirmAccount";
import Profile from "./components/Views/User/AccountInformation/Profile";
import ScrollToTop from "./components/layouts/ScrollToTop";
import EventDetail from "./components/events/EventDetail";
import CreateCharityCall from "./components/Views/User/Request/CreateCharityCall";
import CreateMaterialDonation from "./components/Views/User/Request/CreateMaterialDonation";
import CreateMoneyDonation from "./components/Views/User/Request/CheckOut/CreateMoneyDonation";
// import { Suspense } from "react";
// const Map = lazy(() => import("./components/Views/Map"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="" element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="posts/:id" element={<PostDetail />} />

                            <Route path="events" element={<Event />} />
                            <Route path="events/:id" element={<EventDetail />} />
                            <Route path="charity-call-request" element={<CreateCharityCall />} />
                            <Route
                                path="material-donation-request"
                                element={<CreateMaterialDonation />}
                            />

                            <Route path="about" element={<About />} />
                            <Route path="my-profile" element={<Profile />} />
                            <Route path="money-donation/:id" element={<CreateMoneyDonation />} />
                        </Route>
                        <Route path="login" element={<LoginForm />} />
                        <Route path="register" element={<RegisterForm />} />
                        <Route path="active-account" element={<ConfirmAccount />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
