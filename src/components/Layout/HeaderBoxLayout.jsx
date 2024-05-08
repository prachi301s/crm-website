import PropTypes from "prop-types";

//* mui component
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

function HeaderBoxLayout({ children, title, capitalize, titleStyleProps }) {
    const theme = useTheme();
    return (
        <Grid container rowSpacing={1}>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    sx={{
                        borderRadius: "8px",
                        // fontWeight: 400,
                        p: 1,
                        bgcolor: theme.palette.secondary.dark,
                        color: theme.palette.primary.dark,
                        ...titleStyleProps,
                    }}
                    {...(capitalize ? { textTransform: "capitalize" } : {})}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box>{children}</Box>
            </Grid>
        </Grid>
    );
}

HeaderBoxLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    capitalize: PropTypes.bool,
    titleStyleProps: PropTypes.object,
};

export default HeaderBoxLayout;
