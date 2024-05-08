// import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none",
                    },
                    textTransform: "none",
                },
                // sizeLarge: {
                //     height: 30,
                // },
                contained: {
                    outline: `${theme.palette.primary.main} solid 1px`,
                    // border: "none",
                    color: theme.palette.secondary.light,
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.secondary.light,
                    },
                },
                outlined: {
                    // outline: `${theme.palette.primary.main} solid 1px`,
                    borderColor: `${theme.palette.primary.main}`,
                    padding: "4px 10px",
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.secondary.light,
                    "&:hover": {
                        color: theme.palette.secondary.light,
                        backgroundColor: theme.palette.primary.main,
                    },
                },
                textInherit: {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                    },
                },
            },
        },
    };
}
