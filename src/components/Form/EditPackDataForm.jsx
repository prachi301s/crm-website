//*  mui component
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

//* mui icon
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

//* libraries
import { useForm } from "react-hook-form";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import { InputAdornment } from "@mui/material";

function EditPackDataForm() {
    const { control } = useForm({
        defaultValues: {
            phone: "",
            label: "",
        },
    });
    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                padding: 1.5,
                width: "100%",
                boxShadow: "0 4px 12px #0F11140F",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ControllerTextField
                        control={control}
                        name={"code"}
                        mainLabel={"Code"}
                        variant="filled"
                        disabled
                    />
                </Grid>

                <Grid item xs={6}>
                    <ControllerTextField
                        control={control}
                        name={"retailPrice"}
                        mainLabel={"Price"}
                        variant="filled"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <EuroSymbolIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControllerTextField
                        control={control}
                        name={"weight"}
                        mainLabel={"Weight"}
                        variant="filled"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControllerTextField
                        control={control}
                        name={"description"}
                        variant="filled"
                        placeholder={"Type description here..."}
                        multiline
                        rows={2}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default EditPackDataForm;
