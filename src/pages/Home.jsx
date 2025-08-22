import { Button } from "@mui/joy"

export const Home = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #232526 0%, #414345 40%, #283e51 80%, #485563 100%)",
                color: "#fff",
                borderRadius: "0",
                boxShadow: "none",
                margin: 0,
                padding: 0,
            }}
        >
            <h1 style={{
                fontSize: "2.8rem",
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: 1
            }}>
                Welcome to <span style={{ color: "#00e0ff" }}>Vuniverse</span>
            </h1>
            <p style={{
                fontSize: "1.25rem",
                marginBottom: 32,
                maxWidth: 540,
                lineHeight: 1.6,
                opacity: 0.92,
                textAlign: "center"
            }}>
                <b>Vuniverse</b> is my personal platform by <b>Nong Hoang Vu</b> for interview practice and self-introduction. Here I improve my skills and document my growth.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
                <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        px: 3,
                        borderRadius: "8px"
                    }}
                    onClick={() => window.location.href = "/resume"}
                >
                    View My CV
                </Button>
                <Button
                    size="lg"
                    variant="outlined"
                    color="neutral"
                    sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        px: 3,
                        borderRadius: "8px",
                        color: "#fff",
                        borderColor: "#00e0ff"
                    }}
                    onClick={() => window.location.href = "/interview-practice"}
                >
                    Interview Practice
                </Button>
            </div>
        </div>
    )
}