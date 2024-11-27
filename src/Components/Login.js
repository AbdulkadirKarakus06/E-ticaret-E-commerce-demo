import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { signInWithPopup, auth, provider, signOut } from "./Firebase";
import "./Login.css";

import React, { useState } from "react";
import Women from "./GiyimComponents/Women"
import WomenPage from "./Pages/WomenPage";
import Men from "./GiyimComponents/Men"
import Menpage from "./Pages/MenPage";
import Children from "./GiyimComponents/Children"
import ChildrenPage from "./Pages/ChildrenPage";
import Hakkimizda from "../Hakkimizda";

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during login: ", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <Router>
      <div>
        {!user ? (
          <div style={{ textAlign: "center", marginTop: "300px" }}>
            <h1>Giyim Mağazası</h1>
            <button
              onClick={handleLogin}
            >
              Google ile Giriş Yap
            </button>
          </div>
        ) : (
          <>
            <nav
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 60vh 10px",
                backgroundColor: "green",
                color: "white",
                boxShadow: "0px 4px 2px -2px gray",
              }}
            >
              <div>
                <Link
                  to="/"
                  style={{
                    margin: "0 15px",
                    backgroundColor: "white",
                    color: "green",
                    textDecoration: "none",
                  }}
                >
                  Kadın Giyim
                </Link>
                <Link
                  to="/menPage"
                  style={{
                    margin: "0 15px",
                    backgroundColor: "white",
                    color: "green",
                    textDecoration: "none",
                  }}
                >
                  Erkek Giyim
                </Link>
                <Link
                  to="/childPage"
                  style={{
                    margin: "0 15px",
                    backgroundColor: "white",
                    color: "green",
                    textDecoration: "none",
                  }}
                >
                  Çocuk Giyim
                </Link>
                <Link
                  to="/hakkimizda"
                  style={{
                    margin: "0 15px",
                    backgroundColor: "white",
                    color: "green",
                    textDecoration: "none",
                  }}
                >
                  Hakkımızda
                </Link>
              </div>
              <button
                onClick={handleLogout}
                style={{
                  padding: "5px 10px",
                  fontSize: "14px",
                  backgroundColor: "red",
                }}
              >
                Çıkış Yap
              </button>
            </nav>
            <Routes>
              <Route path="/" element={<WomenPage />} />
              <Route path="/women/:id" element={<Women />} />
              <Route path="/menpage" element={<Menpage />} />
              <Route path="/men/:id" element={<Men />} />
              <Route path="/childpage" element={<ChildrenPage />} />
              <Route path="/children/:id" element={<Children />} />
              <Route path="/hakkimizda" element={<Hakkimizda />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default Login;
