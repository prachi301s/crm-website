import React from "react";
import InfoBoxLayout from "../Layout/InfoBoxLayout";
import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const OrderDescriptionBox = () => {
  return (
    <>
      <InfoBoxLayout headerVariant={"dark"} infoTitle={"Description"}>
        <Grid container spacing={2} padding="20px">
          <Grid item container xs={6} rowGap={5} padding="10px">
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "20px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={1}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={6}>
                    <Typography>Number Order</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      // mainLabel={"notes"}
                      size="small"
                      hiddenLabel
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Date</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      // mainLabel={"notes"}
                      hiddenLabel
                      size="small"
                    />
                  </Grid>
                </Stack>
                <Grid item xs={12}>
                  <Typography>Operator</Typography>
                  <TextField
                    variant={"filled"}
                    name={"notes"}
                    fullWidth
                    // mainLabel={"notes"}
                    size="small"
                    hiddenLabel
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" alignItems="center">
                          <CalendarMonthIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "20px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={8}>
                    <Typography>Issued By(Pack 1)</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                      hiddenLabel
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Date PK 1</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                      hiddenLabel
                    />
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={8}>
                    <Typography>Issued By(Pack 1)</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                      hiddenLabel
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Date PK 1</Typography>
                    <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                      hiddenLabel
                    />
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Grid item container xs={6} rowGap={5} padding="10px">
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "20px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={1}>
                <Grid item xs={12}>
                  <Typography>Agency</Typography>
                  <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    name={"notes"}
                    mainLabel={"notes"}
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Expedition Number</Typography>

                  <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    name={"notes"}
                    mainLabel={"notes"}
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Shipment State</Typography>
                  <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    mainLabel={"notes"}
                    hiddenLabel
                  />
                </Grid>
                {/* <Stack direction="row" spacing={2}> */}
                <Grid item xs={12}>
                  <Typography>Number Package</Typography>
                  <TextField
                    variant={"filled"}
                    size="small"
                    mainLabel={"notes"}
                    fullWidth
                    hiddenLabel
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Kg</Typography>
                  <TextField
                    variant={"filled"}
                    fullWidth
                    width="50%"
                    size="small"
                    mainLabel={"notes"}
                    hiddenLabel
                  />
                </Grid>
                {/* </Stack> */}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </InfoBoxLayout>
    </>
  );
};

export default OrderDescriptionBox;
