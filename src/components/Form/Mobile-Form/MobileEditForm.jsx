//* mui components
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import { Container } from "@mui/material";

const MobileEditForm = () => {
    const { control } = useForm({
        defaultValues: {
            modificationOfThisPhone: "",
        },
    });
    return (
        <Container maxWidth='md'>
            <Stack p={3}>
                <ControllerTextField
                    control={control}
                    name={"modificationOfThisPhone"}
                    variant={"filled"}
                />
            </Stack>
        </Container>
    );
};

export default MobileEditForm;
