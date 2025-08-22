import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "@mui/joy/Avatar";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";

export const Header = ({ isLoggedIn, onLogout, username = "User" }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleMenuClose = () => setMenuOpen(false);

    return (
        <header style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 32px",
            background: "#030708",
            color: "#fff"
        }}>
            {/* Logo */}
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Vuniverse</Link>
            </div>

            {/* Menu */}
            <nav style={{ flex: 1, display: "flex", justifyContent: "center", gap: "32px" }}>
                <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
                <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
                <Link to="/resume" style={{ color: "#fff", textDecoration: "none" }}>Resume</Link>
                <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
                <Link to="/interview-practice" style={{ color: "#fff", textDecoration: "none" }}>Interview Practice</Link>
            </nav>

            {/* Auth status */}
            <div>
                {isLoggedIn ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Avatar sx={{ bgcolor: "#00e0ff", color: "#232526", fontWeight: 700 }}>
                            {username.charAt(0).toUpperCase()}
                        </Avatar>
                        <span style={{ marginLeft: 8, marginRight: 4, fontWeight: 500 }}>{username}</span>
                        <IconButton
                            ref={anchorRef}
                            onClick={handleMenuToggle}
                            sx={{ color: "#fff" }}
                            variant="plain"
                        >
                            <ArrowDropDownIcon />
                        </IconButton>
                        <Menu
                            open={menuOpen}
                            anchorEl={anchorRef.current}
                            onClose={handleMenuClose}
                            placement="bottom-end"
                        >
                            <MenuItem onClick={() => { handleMenuClose(); onLogout && onLogout(); }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Link
                        to="/login"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: 500,
                            padding: "6px 16px",
                            borderRadius: "4px",
                            transition: "background 0.2s",
                        }}
                        onMouseOver={e => e.currentTarget.style.background = "#222"}
                        onMouseOut={e => e.currentTarget.style.background = "transparent"}
                    >
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};