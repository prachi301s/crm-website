import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../../Elements/TextField/ControllerSelectField";
import { ControllerDateField } from "../../Elements/TextField/ControllerDateField";
import { ControllerTimeField } from "../../Elements/TextField/ControllerTimeField";
import ControllerCheckbox from "../../Elements/Checkbox/ControllerCheckbox";

function ScheduleCallForm() {
    const { control } = useForm({
        defaultValues: {
            time: null,
            date: null,
        },
    });
    return (
        <Box>
            <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                <Stack flexDirection={"row"} alignItems={"center"}>
                    <ControllerCheckbox
                        name={"claimCall"}
                        control={control}
                        disableMainLabelSpace
                    />
                    <Typography>Claim a call</Typography>
                </Stack>
            </Stack>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                        Send Email With Call Information
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                        Send WhatsApp With Call Information
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <ControllerTextField
                        control={control}
                        type="email"
                        name={"email"}
                        placeholder={"email"}
                        variant="filled"
                    />
                </Grid>

                <Grid item xs={6}>
                    <ControllerTextField
                        control={control}
                        name={"whatsappNum"}
                        placeholder={"789452146"}
                        variant="filled"
                    />
                </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        mb: 2,
                    }}
                >
                    <Grid item container alignItems={"center"}>
                        <Grid item xs={3}>
                            <Typography variant="body2">Will you call a customer back ?</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <ControllerSelectField control={control} name={"callCustomerBack"}>
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </ControllerSelectField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">Schedule a call</Typography>
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
                control={control}
                multiline
                rows={4}
            />
        </Box>
    );
}

export default ScheduleCallForm;
