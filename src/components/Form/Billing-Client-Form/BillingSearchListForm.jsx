//* mui components
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

//* mui icons
import SearchIcon from "@mui/icons-material/Search";

//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* custom components
import CustomIconButton from "../../Elements/Icons/CustomIconButton";
import ControllerSelectField from "../../Elements/TextField/ControllerSelectField";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";

const BillingSearchListForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            result: "",
            from: "",
            until: "",
        },
    });
    return (
        <Stack direction={"row"} spacing={2}>
            <Stack spacing={1}>
                <ControllerSelectField control={control} name={"result"}>
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
                <Stack direction={"row"} spacing={1}>
                    <ControllerTextField
                        control={control}
                        name={"from"}
                        placeholder={t("from")}
                        size={"small"}
                    />
                    <ControllerTextField
                        control={control}
                        name={"until"}
                        placeholder={t("until")}
                        size={"small"}
                    />
                </Stack>
            </Stack>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomIconButton
                    icon={<SearchIcon />}
                    name={"search"}
                    variant={"contained"}
                    sx={{ px: 3 }}
                />
            </Box>
        </Stack>
    );
};

export default BillingSearchListForm;
