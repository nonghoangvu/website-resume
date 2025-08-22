import { useForm } from "react-hook-form";
import { Box, Typography, Input, Textarea, Button, Sheet } from "@mui/joy";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";

export const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Contact form submitted:", data);
        alert("Thank you for contacting! (Check console for submitted data)");
        reset();
    };

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #232526 0%, #414345 40%, #283e51 80%, #232526 100%)",
                py: 6,
            }}
        >
            <Typography level="h2" sx={{ mb: 3, color: "#00e0ff", fontWeight: 700, letterSpacing: 1 }}>
                Contact Me
            </Typography>
            <Sheet
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    background: "rgba(30,34,40,0.98)",
                    p: 5,
                    borderRadius: 3,
                    boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25)",
                    minWidth: 320,
                    maxWidth: 400,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    border: "1px solid #222",
                }}
            >
                <Input
                    startDecorator={<PersonIcon sx={{ color: "#00e0ff" }} />}
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    required
                    sx={{
                        background: "#232526",
                        color: "#fff",
                        borderColor: "#414345",
                        "&::placeholder": { color: "#aaa" }
                    }}
                />
                {errors.name && (
                    <Typography level="body3" color="danger" sx={{ ml: 1, mt: -2, mb: -1 }}>
                        {errors.name.message}
                    </Typography>
                )}
                <Input
                    type="email"
                    startDecorator={<EmailIcon sx={{ color: "#00e0ff" }} />}
                    placeholder="Your Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        }
                    })}
                    error={!!errors.email}
                    required
                    sx={{
                        background: "#232526",
                        color: "#fff",
                        borderColor: "#414345",
                        "&::placeholder": { color: "#aaa" }
                    }}
                />
                {errors.email && (
                    <Typography level="body3" color="danger" sx={{ ml: 1, mt: -2, mb: -1 }}>
                        {errors.email.message}
                    </Typography>
                )}
                <Input
                    startDecorator={<SubjectIcon sx={{ color: "#00e0ff" }} />}
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is required" })}
                    error={!!errors.subject}
                    required
                    sx={{
                        background: "#232526",
                        color: "#fff",
                        borderColor: "#414345",
                        "&::placeholder": { color: "#aaa" }
                    }}
                />
                {errors.subject && (
                    <Typography level="body3" color="danger" sx={{ ml: 1, mt: -2, mb: -1 }}>
                        {errors.subject.message}
                    </Typography>
                )}
                <Textarea
                    minRows={5}
                    startDecorator={<MessageIcon sx={{ color: "#00e0ff", mb: "auto" }} />}
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    error={!!errors.message}
                    required
                    sx={{
                        background: "#232526",
                        color: "#fff",
                        borderColor: "#414345",
                        "&::placeholder": { color: "#aaa" }
                    }}
                />
                {errors.message && (
                    <Typography level="body3" color="danger" sx={{ ml: 1, mt: -2, mb: -1 }}>
                        {errors.message.message}
                    </Typography>
                )}
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
                            background: "linear-gradient(90deg, #485563 0%, #00e0ff 100%)"
                        }
                    }}
                >
                    Send Message
                </Button>
            </Sheet>
        </Box>
    );
};