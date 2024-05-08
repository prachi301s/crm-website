import { useState } from "react";

//* custom layout
import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

//* mui icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

//* libraries
import { useForm } from "react-hook-form";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";

const roundButtonSx = {
    borderRadius: "20px",
    padding: "8px 30px",
};

function QuickOrderLineInfoBox() {
    const { control } = useForm({
        defaultValues: {
            other: "other product",
        },
    });
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
        <InfoBoxLayout infoTitle={"Quick Order Line"}>
            <Box>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <Stack flexDirection={"row"} columnGap={1} justifyContent={"space-around"}>
                            <Button variant="outlined" sx={roundButtonSx}>
                                100ml
                            </Button>
                            <Button variant="outlined" sx={roundButtonSx}>
                                50ml
                            </Button>
                            <Button variant="outlined" sx={roundButtonSx}>
                                20ml
                            </Button>
                            <Button variant="outlined" sx={roundButtonSx}>
                                Tester
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack flexDirection={"row"} justifyContent={"center"} columnGap={1}>
                            <Button variant="outlined">Men</Button>
                            <Button variant="outlined">Women</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack alignItems={"center"} justifyContent={"center"} my={1}>
                    <form>
                        <ControllerTextField
                            control={control}
                            name={"noOfItem"}
                            size={"medium"}
                            variant="filled"
                            placeholder={"NOº"}
                        />
                        <Stack
                            flexDirection={"row"}
                            alignItems={"center"}
                            sx={{
                                bgcolor: "rgba(0, 0, 0, 0.06)",
                                borderRadius: 1,
                                my: 1,
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
                        <Stack flexDirection={"row"} justifyContent={"center"}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    px: 4,
                                }}
                            >
                                Add
                            </Button>
                        </Stack>
                    </form>
                    <Box mt={1}>
                        <ControllerSelectField control={control} name={"other"} si>
                            {["other product", "product-1", "product-2", "product-3"].map(
                                (item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                )
                            )}
                        </ControllerSelectField>
                    </Box>
                </Stack>
            </Box>
        </InfoBoxLayout>
    );
}

export default QuickOrderLineInfoBox;
