import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HeaderBoxLayout from "../../Layout/HeaderBoxLayout";
import ControllerRadioField from "../../Elements/TextField/ControllerRadioField";
import CALL_WORK_OPTION from "../../../options/CallWorkOptions";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomIconButton from "../../Elements/Icons/CustomIconButton";

import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";

const NameContactPersonForm = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { control } = useForm({
        defaultValues: {
            updateInfoOption: "",
        },
    });

    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Stack
                        direction='row'
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography variant='h5'>
                            {t("name_contact_person")}
                        </Typography>
                        <CustomIconButton
                            variant={"text"}
                            icon={
                                <BackHandOutlinedIcon
                                    sx={{ color: theme.palette.error.light }}
                                />
                            }
                            name={"stop_mode"}
                            size={"large"}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <HeaderBoxLayout capitalize title={"Call Title"}>
                        <Typography variant='body2'>Phone calls</Typography>
                    </HeaderBoxLayout>
                </Grid>
                <Grid item xs={6}>
                    <HeaderBoxLayout capitalize title={"Call Description"}>
                        <Typography variant='body2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Earum labore culpa blanditiis reprehenderit,
                            temporibus aliquam ipsa quasi nemo dolor magnam.
                        </Typography>
                    </HeaderBoxLayout>
                </Grid>
                <Grid item xs={12}>
                    <HeaderBoxLayout title={"Introduction text to the call"}>
                        <Grid container>
                            <ControllerRadioField
                                row
                                control={control}
                                name='updateInfoOption'
                            >
                                {CALL_WORK_OPTION.map((option) => (
                                    <Grid item xs={6} key={option.id}>
                                        <FormControlLabel
                                            slotProps={{
                                                typography: {
                                                    variant: "body2",
                                                },
                                            }}
                                            label={option.label}
                                            value={option.value}
                                            control={<Radio size='small' />}
                                        />
                                    </Grid>
                                ))}
                            </ControllerRadioField>
                        </Grid>
                    </HeaderBoxLayout>
                </Grid>
                <Grid item xs={12}>
                    <HeaderBoxLayout title={"Notes from Previous Calls"}>
                        <Card
                            elevation={0}
                            sx={{
                                height: 150,
                                padding: 1.5,
                                width: "100%",
                                border: `1px solid ${theme.palette.primary.light}`,
                                boxShadow: "0 4px 12px #0F11140F",
                            }}
                        >
                            <Typography variant='body2'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet, quisquam explicabo
                                praesentium ducimus harum tempora magnam
                                delectus ipsum distinctio culpa. Nulla
                                voluptatem debitis non soluta fugit natus, quae
                                ab modi!
                            </Typography>
                        </Card>
                    </HeaderBoxLayout>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NameContactPersonForm;
