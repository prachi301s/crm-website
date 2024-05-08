import { NUMBER_NO_LONGER_BELONGS } from "../../../options/RadioOptions";
import RadioPopupBox from "../../InfoBox/RadioPopupBox";
import InfoBoxLayout from "../../Layout/InfoBoxLayout";

const NumberNoLongerBelongsForm = () => {
    return (
        <InfoBoxLayout
            infoTitle={"THE PHONE NUMBER NO LONGER BELONG TO THE CUSTOMER"}
            containerStyleProps={{ boxShadow: "none" }}
        >
            <RadioPopupBox
                radioKey={"update_number"}
                OPTIONS={NUMBER_NO_LONGER_BELONGS}
                title={
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem, iure."
                }
                name={"numberNoLongerBelongs"}
            />
        </InfoBoxLayout>
    );
};

export default NumberNoLongerBelongsForm;
