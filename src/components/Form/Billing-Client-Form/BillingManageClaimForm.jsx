import {
  Box,
  Card,
  CardContent,
  DialogActions,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import CustomIconButton from "../../Elements/Icons/CustomIconButton";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const BillingManageClaimForm = () => {
  const { t } = useTranslation();
  const { control } = useForm({
    defaultValues: {
      result: "",
      worth: "",
    },
  });

  return (
    <Card sx={{ p:2 }}>
      <CardContent>
        

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "1.5rem",
          }}
        >
          {" "}
          <Typography  sx={{fontSize:'14px'}}     >Write amount of the claim</Typography>
          <ControllerTextField
            icon={<EuroOutlinedIcon fontSize="small" />} // Pass the icon here
            placeholder={"Enter Amount"}
            control={control}
            name={"Enter Key"}
            variant={"filled"}
          />
        </Box>
        <Typography sx={{fontWeight:500 ,fontSize:'14px'}}>
          Do you want to continue with the claim process ?
        </Typography>

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
      </CardContent>
    </Card>
  );
};

export default BillingManageClaimForm;
