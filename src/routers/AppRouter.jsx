import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Resume } from "../pages/Resume";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header isLoggedIn={false} />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace={true} />} />

          {/* Public routers */}
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
