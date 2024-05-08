import { useState } from "react";
import { Button, MenuItem, Paper, Stack, TextField, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import { useForm } from "react-hook-form";
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";

import IconButton from "@mui/material/IconButton";
//* mui icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function ChangeStockForm() {
    const theme = useTheme();
    const { control } = useForm();
    const [quantity, setQuantity] = useState(0);

    const handleQuantity = (e) => {
        const onlyDigits = /^[0-9\b]+$/;
        if (e.target.value === "" || onlyDigits.test(e.target.value)) {
            setQuantity(e.target.value);
        }
    };

    const handleIncreaseQty = () => {
        if (quantity === "") return setQuantity(0);
        if (isNaN(quantity)) return setQuantity(0);
        setQuantity((prevState) => {
            let num = parseInt(prevState);
            return num + 1;
        });
    };

    const handleDecreaseQty = () => {
        if (quantity === "") return setQuantity(0);
        if (isNaN(quantity)) return setQuantity(0);
        if (quantity <= 0) return setQuantity(0);
        setQuantity((prevState) => {
            let num = parseInt(prevState);
            return num - 1;
        });
    };

    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5">Stock Data</Typography>
            </Grid>
            <Grid item xs={4}>
                <Card
                    elevation={0}
                    sx={{
                        padding: 3,
                        height: 145,
                        width: "100%",
                        border: `1px solid ${theme.palette.primary.light}`,
                        boxShadow: "0 4px 12px #0F11140F",
                    }}
                >
                    <ControllerTextField
                        control={control}
                        name={"code"}
                        mainLabel={"Code"}
                        variant="filled"
                        disabled
                    />
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        width: "100%",
                        boxShadow: "0 4px 12px #0F11140F",
                    }}
                >
                    <Grid container columnSpacing={2} rowSpacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h5">Change the stock of this prodcut</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ControllerSelectField
                                control={control}
                                name={"action"}
                                mainLabel={"Action"}
                                size={"large"}
                            >
                                {["action-1", "action-2", "action-3"].map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </ControllerSelectField>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography component={"label"} fontWeight={500}>
                                Quantity
                            </Typography>
                            <Stack
                                flexDirection={"row"}
                                alignItems={"center"}
                                sx={{
                                    bgcolor: "rgba(0, 0, 0, 0.06)",
                                    borderRadius: 1,
                                }}
                            >
                                <TextField
                                    name={"quantity"}
                                    size={"medium"}
                                    variant="filled"
                                    value={quantity}
                                    onChange={handleQuantity}
                                    placeholder={"NOº"}
                                    hiddenLabel
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 1)",
                                        borderRadius: 0,
                                        "& .MuiInputBase-root": {
                                            borderRadius: 0,
                                        },
                                    }}
                                />
                                <Stack>
                                    <IconButton
                                        sx={{
                                            padding: 0,
                                        }}
                                        onClick={handleIncreaseQty}
                                    >
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            padding: 0,
                                        }}
                                        onClick={handleDecreaseQty}
                                    >
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 4,
                                    px: 1,
                                }}
                            >
                                Adjust Current Stock
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ChangeStockForm;
