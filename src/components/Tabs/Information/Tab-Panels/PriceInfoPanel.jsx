//* custom layout
import InfoBoxLayout from "../../../Layout/InfoBoxLayout";

//* mui components
import Box from "@mui/material/Box";

function PriceInfoPanel() {
    return (
        <InfoBoxLayout infoTitle={"price list"}>
            <Box height={170}>Image</Box>
        </InfoBoxLayout>
    );
}

export default PriceInfoPanel;
