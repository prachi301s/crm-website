import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import { ControllerDateField } from "../../Elements/TextField/ControllerDateField";
import { ControllerTimeField } from "../../Elements/TextField/ControllerTimeField";
import ControllerCheckbox from "../../Elements/Checkbox/ControllerCheckbox";
import InfoBoxLayout from "../../Layout/InfoBoxLayout";

function RescheduleCallForm() {
    const { control } = useForm({
        defaultValues: {
            time: null,
            date: null,
        },
    });
    return (
        <InfoBoxLayout
            infoTitle={"THEY ANSWER ME BUT THEY CAN'T TALK NOW"}
            containerStyleProps={{ boxShadow: "none" }}
        >
            <Box>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            mb: 2,
                        }}
                    >
                        <Typography variant="body1">
                            Select date and time to contact the cutomer again
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack flexDirection={"row"} justifyContent={"space-between"}>
                            <Typography variant="h5">Schedule a call</Typography>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                <Typography>Set an alarm</Typography>
                                <ControllerCheckbox
                                    name={"claimCall"}
                                    control={control}
                                    disableMainLabelSpace
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <ControllerTextField
                            control={control}
                            name={"contact"}
                            variant="filled"
                            mainLabel={"Contact"}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <ControllerTextField
                            control={control}
                            name={"reference"}
                            variant="filled"
                            mainLabel={"Reference"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerTextField
                            control={control}
                            name={"user"}
                            variant="filled"
                            mainLabel={"User"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerDateField
                            control={control}
                            name={"date"}
                            variant="filled"
                            mainLabel={"Date"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerTimeField
                            control={control}
                            name={"time"}
                            variant="filled"
                            mainLabel={"Time"}
                        />
                    </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <ControllerTextField
                    mainLabel={"Write a short note"}
                    name={"note"}
                    variant="filled"
                    control={control}
                    multiline
                    rows={4}
                />
            </Box>
        </InfoBoxLayout>
    );
}

export default RescheduleCallForm;
