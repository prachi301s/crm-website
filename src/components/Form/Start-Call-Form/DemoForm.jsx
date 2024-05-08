import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import HeaderBoxLayout from "../../Layout/HeaderBoxLayout";
import { Controller, useForm } from "react-hook-form";
import { perfume3 } from "../../../utils/ImageImports";
import { useTheme } from "@mui/material";

const demoNum = ["A", "B", "C", "D"];

function QuestionStack({ children, label }) {
    return (
        <Stack
            sx={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="body2">{label}</Typography>
            <Box>{children}</Box>
        </Stack>
    );
}

QuestionStack.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
};

function DemoForm() {
    const theme = useTheme();
    const [age, setAge] = useState("");

    const { control } = useForm();

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <HeaderBoxLayout title={"Title here"}>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolores
                            modi possimus porro voluptatem esse, asperiores quam obcaecati
                            perspiciatis voluptas non rem. Ea unde odit error ipsa illo numquam nam!
                        </Typography>
                    </HeaderBoxLayout>
                </Grid>
                <Grid item xs={6}>
                    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Box
                            elevation={0}
                            sx={{
                                height: 200,
                                padding: 0.5,
                                width: 210,
                                border: `1px solid ${theme.palette.primary.light}`,
                                boxShadow: "0 4px 12px #0F11140F",
                            }}
                        >
                            <img
                                src={perfume3}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <HeaderBoxLayout title={"questions"} capitalize>
                <Grid container>
                    <Grid item xs={6}>
                        <QuestionStack label={"Checkbox Question"}>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                {demoNum?.map((num) => (
                                    <Checkbox
                                        key={num}
                                        size="small"
                                        value={num}
                                        name="checkbox"
                                        inputProps={{ "aria-label": "A" }}
                                    />
                                ))}
                            </Stack>
                        </QuestionStack>
                        <QuestionStack label={"Radio Question"}>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                {demoNum?.map((num) => (
                                    <Radio
                                        key={num}
                                        size="small"
                                        value={num}
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "A" }}
                                    />
                                ))}
                            </Stack>
                        </QuestionStack>
                        <QuestionStack label={"Rating Question"}>
                            <Controller
                                name="no-value"
                                control={control}
                                render={({ field }) => (
                                    <Rating {...field} precision={1} size="large" />
                                )}
                            />
                        </QuestionStack>
                        <QuestionStack label={"Checkbox Question"}>
                            <FormControl
                                sx={{ minWidth: 150, maxHeight: 32 }}
                                size="small"
                                variant="filled"
                            >
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </QuestionStack>
                    </Grid>
                </Grid>
            </HeaderBoxLayout>
        </Box>
    );
}

export default DemoForm;
