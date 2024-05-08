import {
  Box,
  Card,
  CardContent,
  DialogActions,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import ControllerCheckbox from "../../Elements/Checkbox/ControllerCheckbox";
import CustomIconButton from "../../Elements/Icons/CustomIconButton";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BillingPayOderForm() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { t } = useTranslation();
  const { control } = useForm({
    defaultValues: {
      result: "",
      worth: "",
    },
  });

  return (
    <Card sx={{ Width: 200 }}>
      <CardContent sx={{ padding: 3 }}>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "10rem",
            marginBottom: "1.5rem",
          }}
        >
          <ThumbsUpDownIcon />
          <Typography variant="h4">Pay Order</Typography>
        </Box> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "1.5rem",
          }}
        >
          {" "}
          <Typography>Expedition Number</Typography>
          <ControllerTextField
            // name={"Enter Key"}
            placeholder={"Enter Key"}
            control={control}
            name={"Enter Key"}
            mainLabel={""}
            variant={"filled"}
          />
        </Box>

        <Grid item xs={24}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <Typography>Reason</Typography>

            <TextField
              variant={"filled"}
              fullWidth
              // name={"Rea"}
              placeholder="Reason"
              multiline
              minRows={2}
              // mainLabel={t("notes")}
            />
          </Box>
        </Grid>

        {/* Rediobtn  */}

        {/* <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <ControllerCheckbox
              control={control}
              name="hasNoEmail"
              checkboxLabel={"Don’t pay shipping"}
              disableMainLabelSpace
            />
          </Grid>
          <Grid item xs={12}>
            <ControllerCheckbox
              control={control}
              name="noCallWanted"
              checkboxLabel={"Amazon return"}
              disableMainLabelSpace
            />
          </Grid>
          <Grid item xs={12}>
            <ControllerCheckbox
              control={control}
              name="noEmailWanted"
              checkboxLabel={"Client only previous payment"}
              disableMainLabelSpace
            />
          </Grid>
        </Grid>
      </CardContent> */}

        <RadioGroup
          sx={{ padding: 1 }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Don’t pay shipping"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Don’t pay shipping"
            control={<Radio />}
            label="Don’t pay shippingle"
          />
          <FormControlLabel
            value="Amazon return"
            control={<Radio />}
            label="Amazon return"
          />
          <FormControlLabel
            value="Client only previous payment"
            control={<Radio />}
            label="Client only previous payment"
          />
        </RadioGroup>
      </CardContent>

      {/* Button  */}
      {/* <DialogActions sx={{ my: 1, mx: 2 }}>
        <CustomIconButton
          sx={{ px: 5 }}
          variant={"contained"}
          icon={<TaskAltOutlinedIcon fontSize="small" />}
          name={"accept"}
        />
        <CustomIconButton
          sx={{ px: 5 }}
          variant={"outlined"}
          icon={<CancelOutlinedIcon fontSize="small" />}
          name={"cancel"}
          // onClick={handleClose}
        />
      </DialogActions> */}
    </Card>
  );
}
