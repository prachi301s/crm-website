import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, TextField, Typography } from "@mui/material";
import InfoBoxLayout from "../../Layout/InfoBoxLayout";
import { useTranslation } from "react-i18next";
import palette from "../../../theme/palette";

const BillingAuthorizeGift = () => {

  const { t } = useTranslation();
  return (
    <Card sx={{ minWidth: 100  ,p:2    }}>
      <CardContent     >
        <Grid>
          <Typography variant="body1">Reason</Typography>

          <Box

            sx={{
              bgcolor:palette.primary.light,
              marginTop: "5px",
              p: "10px",
              borderRadius: 1,
              marginBottom: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem Ipsum{" "}
            </Typography>
          </Box>

          <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
            Do you want to authorize the gift of the order ?
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BillingAuthorizeGift;
