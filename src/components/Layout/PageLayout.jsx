import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icons
import ArticleIcon from "@mui/icons-material/Article";

//* libraries
import { useTranslation } from "react-i18next";

//* custom components
import CustomIconButton from "../Elements/Icons/CustomIconButton";

const PageLayout = ({ pageHeading, button, children }) => {
    const { t } = useTranslation();
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Stack
                    sx={{
                        flexDirection: "row",
                        backgroundColor: "#fff",
                        border: "1px solid #E7E7E7",
                        boxShadow: "0 4px 12px #0F11140F",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                    {...(button ? { justifyContent: "space-between" } : {})}
                >
                    <Typography variant={"h4"}>{t(pageHeading)}</Typography>
                    {button?.includes("send_to_excel") && (
                        <CustomIconButton
                            icon={<ArticleIcon />}
                            variant={"contained"}
                            name={"send_to_excel"}
                        />
                    )}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Box>{children}</Box>
            </Grid>

            {button && (
                <Grid item xs={12}>
                    <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
                        {button?.includes("save") && (
                            <Button variant={"contained"} sx={{ px: 7 }}>
                                {t("save")}
                            </Button>
                        )}
                        {button?.includes("cancel") && (
                            <Button variant={"contained"} sx={{ px: 7 }}>
                                {t("cancel")}
                            </Button>
                        )}
                    </Stack>
                </Grid>
            )}
        </Grid>
    );
};

PageLayout.propTypes = {
    pageHeading: PropTypes.string,
    button: PropTypes.array,
    children: PropTypes.node,
};

export default PageLayout;
