import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Input,
  Button,
  Sheet,
  Link as JoyLink,
} from "@mui/joy";
import { Link } from "react-router-dom";

export const Login = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login form submitted:", data);
    if (onLogin) onLogin(data);
    // Add your login logic here
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #232526 0%, #414345 40%, #283e51 80%, #232526 100%)",
        py: 6,
      }}
    >
      <Typography
        level="h2"
        sx={{ mb: 3, color: "#00e0ff", fontWeight: 700, letterSpacing: 1 }}
      >
        Login to Vuniverse
      </Typography>
      <Sheet
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          background: "rgba(30,34,40,0.98)",
          p: 5,
          borderRadius: 3,
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25)",
          minWidth: 340,
          maxWidth: 420,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          border: "1px solid #222",
        }}
      >
        <Box>
          <Typography level="body2" sx={{ color: "#aaa", mb: 0.5, ml: 0.5 }}>
            Email Address
          </Typography>
          <Input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            required
            sx={{
              background: "#232526",
              color: "#fff",
              borderColor: "#414345",
              "&::placeholder": { color: "#aaa" },
              fontSize: "1.15rem",
              height: 52,
            }}
          />
          {errors.email && (
            <Typography
              level="body3"
              color="danger"
              sx={{
                ml: 1,
                mt: 1, // tăng margin top
                mb: 0,
                fontSize: "0.98rem",
                minHeight: 22,
                display: "block",
              }}
            >
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography level="body2" sx={{ color: "#aaa", mb: 0.5, ml: 0.5 }}>
            Password
          </Typography>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            required
            sx={{
              background: "#232526",
              color: "#fff",
              borderColor: "#414345",
              "&::placeholder": { color: "#aaa" },
              fontSize: "1.15rem",
              height: 52,
            }}
          />
          {errors.password && (
            <Typography
              level="body3"
              color="danger"
              sx={{
                ml: 1,
                mt: 1, // tăng margin top
                mb: 0,
                fontSize: "0.98rem",
                minHeight: 22,
                display: "block",
              }}
            >
              {errors.password.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ textAlign: "right", mb: 1 }}>
          <JoyLink
            component={Link}
            to="/forgot-password"
            sx={{
              color: "#00e0ff",
              fontSize: "0.98rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot your password?
          </JoyLink>
        </Box>
        <Button
          type="submit"
          color="primary"
          size="lg"
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #00e0ff 0%, #485563 100%)",
            color: "#fff",
            boxShadow: "0 2px 8px 0 rgba(0,224,255,0.10)",
            "&:hover": {
              background: "linear-gradient(90deg, #485563 0%, #00e0ff 100%)",
            },
          }}
        >
          Login
        </Button>
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Typography level="body2" sx={{ color: "#aaa" }}>
            Don't have an Account?{" "}
            <JoyLink
              component={Link}
              to="/register"
              sx={{
                color: "#00e0ff",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Sign Up
            </JoyLink>
          </Typography>
        </Box>
      </Sheet>
    </Box>
  );
};
