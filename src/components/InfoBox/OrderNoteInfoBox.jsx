//* custom layout
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import InfoBoxLayout from "../Layout/InfoBoxLayout";
import { useTranslation } from "react-i18next";

//* mui components
import Typography from "@mui/material/Typography";
import ControllerTextField from "../Elements/TextField/ControllerTextField";


function OrderNoteInfoBox() {
  const { t } = useTranslation();
  return (
    <InfoBoxLayout headerVariant={"light"} infoTitle={"notes of the order"}>
      <Typography variant="body2">Notes</Typography>


      {/* Text field */}


      <Grid item xs={24}>
        <TextField
          variant={"filled"}
          fullWidth
          name={"notes"}
          multiline
          minRows={2}
          mainLabel={t("notes")}
        />
      </Grid>
    </InfoBoxLayout>
  );
}

export default OrderNoteInfoBox;
