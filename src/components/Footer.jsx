import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
    <footer style={{
        background: "#030708",
        color: "#fff",
        padding: "20px 0 15px 0",
        textAlign: "center"
    }}>
        <div style={{ marginBottom: "16px" }}>
            <div>Email: <a href="mailto:nonghoangvu04@gmail.com" style={{ color: "#fff" }}>nonghoangvu04@gmail.com</a></div>
            <div>Điện thoại: <a href="tel:0777049085" style={{ color: "#fff" }}>0777 049 085</a></div>
            <div>Zalo: <a href="https://zalo.me/0777049085" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>0777 049 085</a></div>
        </div>
        <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
            <a href="https://facebook.com/NongHoangVu04" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                <FaFacebook />
            </a>
            <a href="https://instagram.com/NongHoangVu04" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/nonghoangvu04" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                <FaLinkedin />
            </a>
        </div>
        <div style={{ fontSize: "0.95rem", opacity: 0.7 }}>
            © {new Date().getFullYear()} Công ty TNHH Vuniverse. All rights reserved.
        </div>
    </footer>
)