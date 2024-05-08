//* mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* forms
import LoginForm from "../../components/Form/LoginForm";

//* image imports
import { logo, backgroundImg } from "../../utils/ImageImports";

//* libraries
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container maxWidth='sm'>
                <Paper sx={{ px: 5, py: 7, borderRadius: "38px" }}>
                    <Stack spacing={7}>
                        <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                            spacing={1}
                        >
                            <img
                                src={logo}
                                alt='LAROME_PARIS'
                                width='130px'
                                height='43px'
                            />
                            <Typography
                                variant='caption'
                                sx={{ fontSize: 14, textAlign: "center" }}
                            >
                                {t(
                                    "empowering_relationships_unleashing_success"
                                )}
                            </Typography>
                        </Stack>
                        <LoginForm />
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
