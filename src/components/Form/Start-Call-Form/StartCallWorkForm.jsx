import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NameContactPersonForm from "./NameContactPersonForm";
import { useState } from "react";
import DemoForm from "./DemoForm";
import ScheduleCallForm from "./ScheduleCallForm";
// import RescheduleCallForm from "./RescheduleCallForm";
// import PhoneNumNotExist from "./PhoneNumNotExist";
// import NumberNoLongerBelongsForm from "./NumberNoLongerBelongsForm";
// import ItHasClosedForm from "./ItHasClosedForm";
import { useTranslation } from "react-i18next";
import { startCallWorkBg, startWorkCalling } from "../../../utils/ImageImports";

function getCallForms(step) {
    switch (step) {
        case 0:
            return <NameContactPersonForm />;
        case 1:
            return <DemoForm />;
        case 2:
            return <ScheduleCallForm />;

        default:
            break;
    }
}
function StartCall({ handleFormStarted, t }) {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            py={2}
            sx={{ background: `url(${startCallWorkBg})` }}
        >
            <Stack spacing={2}>
                <Typography variant="h5">{t("start_call_work")}</Typography>
                <Button variant="contained" onClick={handleFormStarted}>
                    {t("get_started")}
                </Button>
            </Stack>
            <Stack>
                <img src={startWorkCalling} alt={"start_work_calling"} height={100} width={170} />
            </Stack>
        </Stack>
    );
}

StartCall.propTypes = {
    handleFormStarted: PropTypes.func.isRequired,
    t: PropTypes.any,
};

const StartCallWorkForm = () => {
    const { t } = useTranslation();

    const [step, setStep] = useState(0);

    const [isFormStarted, setIsFormStarted] = useState(false);

    // const [selectedCallOption, setSelectedCallOption] = useState("");

    const handleFormStarted = () => {
        setIsFormStarted(true);
    };

    const handleNext = () => {
        setStep((prevState) => {
            return prevState + 1;
        });
    };
    const handlePrev = () => {
        setStep((prevState) => {
            return prevState - 1;
        });
    };

    const FormsButtons = () => {
        if (step === 0) {
            return (
                <Stack direction="row" justifyContent="flex-end" p={2}>
                    <Button variant="contained" onClick={handleNext}>
                        {t("next")}
                    </Button>
                </Stack>
            );
        }

        if (step === 2) {
            return (
                <Stack direction={"row"} justifyContent={"flex-end"} spacing={3} p={3}>
                    <Button variant="contained" onClick={handlePrev}>
                        {t("previous")}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            alert("Successfully Submitted");
                            setStep(0);
                        }}
                    >
                        {t("finish")}
                    </Button>
                </Stack>
            );
        }

        return (
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={3} p={3}>
                <Button variant="contained" onClick={handlePrev}>
                    {t("previous")}
                </Button>
                <Button variant="contained" onClick={handleNext}>
                    {t("next")}
                </Button>
            </Stack>
        );
    };

    return (
        <Paper
            sx={{
                py: 1,
                px: 2,
                boxShadow: "0 4px 12px #0F11140F",
                borderRadius: "8px",
            }}
            variant="outlined"
        >
            {!isFormStarted ? (
                <StartCall handleFormStarted={handleFormStarted} t={t} />
            ) : (
                getCallForms(step)
            )}
            {isFormStarted && <FormsButtons />}
        </Paper>
    );
};

export default StartCallWorkForm;
