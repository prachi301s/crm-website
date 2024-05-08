//* mui components
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import ControllerRadioField from "../Elements/TextField/ControllerRadioField";
import { useForm } from "react-hook-form";
import { FormControlLabel, Radio } from "@mui/material";
import { useTranslation } from "react-i18next";
import { KNOW_THE_DATA } from "../../options/RadioOptions";
import { Fragment } from "react";

const RadioPopupBox = ({ radioKey, OPTIONS, title, name }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { control, watch } = useForm({
        defaultValues: {
            numberNoLongerBelongs: "",
            shortNote: "",
            closeOrNot: "",
            newData: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",
        },
    });

    const watchNumberNoLongerBelongs = watch("numberNoLongerBelongs");

    const watchCloseOrNot = watch("closeOrNot");

    const watchNewData = watch("newData");

    return (
        <Grid container spacing={3} p={3}>
            {title && (
                <Grid item xs={12} mb={2}>
                    <Typography variant='body1'>{t(title)}</Typography>
                </Grid>
            )}

            <Grid item xs={12}>
                <Grid item container columnSpacing={3}>
                    <Grid item xs={6}>
                        <Paper
                            sx={{
                                backgroundColor: theme.palette.common.white,
                                border: theme.palette.primary.light,
                                boxShadow: "0 4px 12px #0F11140F",
                                padding: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            <ControllerRadioField
                                control={control}
                                name={name}
                                row={false}
                            >
                                {OPTIONS?.map((option) => (
                                    <Grid item xs={6} key={option?.id}>
                                        <FormControlLabel
                                            slotProps={{
                                                typography: {
                                                    variant: "body2",
                                                },
                                            }}
                                            label={t(option?.label)}
                                            value={option?.value}
                                            control={<Radio size='small' />}
                                        />
                                    </Grid>
                                ))}
                            </ControllerRadioField>
                        </Paper>
                    </Grid>

                    {radioKey === watchNumberNoLongerBelongs && (
                        <Grid item xs={6}>
                            <ControllerTextField
                                control={control}
                                name={"customerNewNumber"}
                                mainLabel={"Enter The new customer number"}
                                variant={"filled"}
                            />
                        </Grid>
                    )}

                    {radioKey === watchCloseOrNot && (
                        <Grid item xs={6}>
                            <Paper
                                sx={{
                                    backgroundColor: theme.palette.common.white,
                                    border: theme.palette.primary.light,
                                    boxShadow: "0 4px 12px #0F11140F",
                                    padding: "10px",
                                    borderRadius: "10px",
                                }}
                            >
                                <ControllerRadioField
                                    control={control}
                                    name={"newData"}
                                    row={false}
                                >
                                    {KNOW_THE_DATA?.map((option) => (
                                        <Fragment key={option?.id}>
                                            <FormControlLabel
                                                slotProps={{
                                                    typography: {
                                                        variant: "body2",
                                                    },
                                                }}
                                                label={t(option?.label)}
                                                value={option?.value}
                                                control={<Radio size='small' />}
                                            />
                                        </Fragment>
                                    ))}
                                </ControllerRadioField>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </Grid>

            {watchNewData === "know_the_new_data" &&
                watchCloseOrNot === "close_with_transfer" && (
                    <Grid item xs={12}>
                        <Grid container rowSpacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='h6'>
                                    Add the new information
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container columnSpacing={2}>
                                    <Grid item xs={6}>
                                        <ControllerTextField
                                            control={control}
                                            name={"address"}
                                            mainLabel={t("address")}
                                            variant={"filled"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ControllerTextField
                                            control={control}
                                            name={"city"}
                                            mainLabel={t("city")}
                                            variant={"filled"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ControllerTextField
                                            control={control}
                                            name={"state"}
                                            mainLabel={t("state")}
                                            variant={"filled"}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid item container columnSpacing={2}>
                                    <Grid item xs={6}>
                                        <ControllerTextField
                                            control={control}
                                            name={"country"}
                                            mainLabel={t("country")}
                                            variant={"filled"}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ControllerTextField
                                            control={control}
                                            name={"zipCode"}
                                            mainLabel={t("zip_code")}
                                            variant={"filled"}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}

            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"shortNote"}
                    mainLabel={"Write a short note"}
                    variant={"filled"}
                    multiline
                    minRows={3}
                />
            </Grid>
        </Grid>
    );
};

RadioPopupBox.propTypes = {
    OPTIONS: PropTypes.array,
    radioKey: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
};

export default RadioPopupBox;
