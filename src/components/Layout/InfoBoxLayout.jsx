//* mui components
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import PropTypes from "prop-types";

const InfoBoxLayout = ({
    children,
    infoTitle,
    headerVariant,
    infoTextVariant,
    titleStyleProps,
    containerStyleProps,
}) => {
    const theme = useTheme();
    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 12px #0F11140F",
                ...containerStyleProps,
            }}
        >
            <Stack>
                <Box
                    sx={{
                        bgcolor:
                            headerVariant === "light"
                                ? theme.palette.primary.light
                                : theme.palette.primary.dark,
                        color:
                            headerVariant === "light"
                                ? theme.palette.grey[900]
                                : theme.palette.grey[100],
                        padding: 1,
                    }}
                >
                    <Typography
                        variant={infoTextVariant || "h6"}
                        textTransform={"capitalize"}
                        textAlign={"center"}
                        {...titleStyleProps}
                    >
                        {infoTitle}
                    </Typography>
                </Box>
                <Box p={1}>{children}</Box>
            </Stack>
        </Paper>
    );
};

InfoBoxLayout.propTypes = {
    children: PropTypes.node,
    infoTitle: PropTypes.string,
    infoTextVariant: PropTypes.string,
    headerVariant: PropTypes.string,
    titleStyleProps: PropTypes.object,
    containerStyleProps: PropTypes.object,
};

export default InfoBoxLayout;
