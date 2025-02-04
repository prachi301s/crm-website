import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

// ----------------------------------------------------------------------

export default function GlobalStyles() {
    const inputGlobalStyles = (
        <MUIGlobalStyles
            styles={{
                "*": {
                    boxSizing: "border-box",
                },
                html: {
                    margin: 0,
                    padding: 0,
                    scrollBehavior: "smooth",
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    webkitFontSmoothing: "antialiased",
                },
                "#root": {
                    width: "100%",
                    height: "100%",
                },
                img: {
                    display: "block",
                    maxWidth: "100%",
                },
                ul: {
                    margin: 0,
                    padding: 0,
                },
            }}
        />
    );

    return inputGlobalStyles;
}
