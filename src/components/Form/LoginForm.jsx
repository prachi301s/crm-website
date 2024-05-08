import { useState } from "react";

//* mui components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";

//* libraries
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

//* mui icon imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//* Schema
import { loginSchema } from "../../schema/LoginSchema";
import useLoginStore from "../../app/loginStore";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  const { handleAuth } = useLoginStore((state) => ({
    handleAuth: state.handleAuth,
  }));
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    // setError,
    formState: { errors },
    // reset,
  } = useForm({
    defaultValues: {
      email: "admin@mactosys.com",
      password: "admin@admin",
    },
    resolver: joiResolver(loginSchema),
    mode: "onTouched",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (data) => {
    const { email, password } = data;
    console.log(data);
    handleAuth(email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing={7}>
        <Stack spacing={2}>
          <ControllerTextField
            placeholder={"Email"}
            name={"email"}
            control={control}
            type={"email"}
            size={"md"}
            errorFlag={!!errors.email}
            errorText={t(errors?.email?.message)}
          />
          <ControllerTextField
            placeholder={"Password"}
            name={"password"}
            control={control}
            type={showPassword ? "text" : "password"}
            size={"md"}
            errorFlag={!!errors.password}
            errorText={t(errors?.password?.message)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{
              height: "50px",
              backgroundColor: "common.black",
              color: "common.white",
              "&:hover": {
                backgroundColor: "common.white",
                border: "1px solid black",
                color: "common.black",
              },
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
