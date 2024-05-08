import { CLOSED_TRANSFER } from "../../../options/RadioOptions";
import RadioPopupBox from "../../InfoBox/RadioPopupBox";
import InfoBoxLayout from "../../Layout/InfoBoxLayout";

const ItHasClosedForm = () => {
    return (
        <InfoBoxLayout
            infoTitle={"IT HAS CLOSED"}
            containerStyleProps={{ boxShadow: "none" }}
        >
            <RadioPopupBox
                radioKey={"close_with_transfer"}
                OPTIONS={CLOSED_TRANSFER}
                name={"closeOrNot"}
            />
        </InfoBoxLayout>
    );
};

export default ItHasClosedForm;
