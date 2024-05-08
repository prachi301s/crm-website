import { outlinedInputClasses } from "@mui/material/OutlinedInput";

export default function TextField(theme) {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "--TextField-brandBorderColor": theme.palette.primary.light,
                    "--TextField-brandBorderHoverColor": theme.palette.primary.main,
                    "--TextField-brandBorderFocusedColor": theme.palette.primary.main,
                    "& label.Mui-focused": {
                        color: "var(--TextField-brandBorderFocusedColor)",
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: "var(--TextField-brandBorderColor)",
                },
                root: {
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: "var(--TextField-brandBorderHoverColor)",
                    },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: "var(--TextField-brandBorderFocusedColor)",
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    "&:before, &:after": {
                        borderBottom: "none",
                    },
                    "&:hover:not(.Mui-disabled, .Mui-error):before": {
                        borderBottom: "none",
                    },
                    "&.Mui-focused:after": {
                        borderBottom: "none",
                    },
                    bbackgroundColor: "rgba(231, 231, 231, 0.50)",
                    borderRadius: 4,
                },
                // sizeSmall: {
                //     // minHeight: 32,
                //     // padding: 5,
                //     "& input::placeholder": {
                //         fontSize: 14,
                //     },
                //     "& input": {
                //         height: "1em",
                //     },
                // },
            },
        },
    };
}
