import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import InfoBoxLayout from "../../Layout/InfoBoxLayout";

import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";

function PhoneNumNotExist() {
    return (
        <InfoBoxLayout
            infoTitle={"THE PHONE NUMBER DOES NOT EXIST"}
            containerStyleProps={{ boxShadow: "none" }}
        >
            <Stack alignItems={"center"} justifyContent={"center"} minHeight={250} rowGap={7}>
                {/* <Stack justifyContent={"center"} alignItems={"center"}> */}
                <PhoneDisabledIcon fontSize="large" />
                {/* </Stack> */}
                <Typography variant="h5" textAlign={"center"} sx={{ width: 500 }}>
                    The telephone operator indicates that the telephone number does not exist.
                </Typography>
            </Stack>
        </InfoBoxLayout>
    );
}

export default PhoneNumNotExist;
