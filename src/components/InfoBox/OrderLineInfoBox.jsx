//* custom layout
import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* mui components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";

//* custom components
import StatisticsDataBox from "../Statistics-Data/StatisticsDataBox";

//* mui icons
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import ModifyOrderLineModal from "../Modal/ModifyOrderLineModal";
import useModalStore from "../../app/store";
import { TextField } from "@mui/material";
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const basicDetailData = [
  {
    id: 1,
    code: "1",
    description: "",
    amount: 50,
    unitWithoutVAT: "",
    totalWithoutVAT: "",
    unitWithVAT: "",
  },
];
const perUnitData = [
  {
    id: 1,
    perf100ml: "",
    perf50ml: "",
    perfChild: "",
    prob20ml: "",
    prob8ml: "",
    perfNiche: "",
    testerOnOrder: "",
  },
];
const taxDetailData = [
  {
    id: 1,
    amount: 1,
    disc: "",
    postage: "",
    baseImp: "",
    vat: "",
    re: "",
    total: "",
  },
];

const basicDetailColumns = [
  {
    field: "code",
    headerName: "Code",
    width: 60,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "unitWithoutVAT",
    headerName: "Unit Without VAT",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "totalWithoutVAT",
    headerName: "Total Without VAT",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "unitWithVAT",
    headerName: "Unit With VAT",
    flex: 1,
    minWidth: 60,
  },
];

const perUnitDataColumns = [
  {
    field: "perf100ml",
    headerName: "Perf. 100ml",
    width: 120,
  },
  {
    field: "perf50ml",
    headerName: "Perf. 50ml",
    width: 120,
  },
  {
    field: "perfChild",
    headerName: "Perf Child",
    width: 120,
  },
  {
    field: "prob20ml",
    headerName: "Prob. 20ml",
    width: 120,
  },
  {
    field: "prob8ml",
    headerName: "Prob. 8ml",
    width: 120,
  },
  {
    field: "perfNiche",
    headerName: "Perf. Niche",
    width: 120,
  },
  {
    field: "testerOnOrder",
    headerName: "Right Testers on order",
    flex: 1,
    minWidth: 60,
  },
];

const taxDetailDataColumns = [
  {
    field: "amount",
    headerName: "Amount",

    width: 120 /*  Changed */,
  },
  {
    field: "disc",
    headerName: "DISC",
    width: 120 /*  Changed */,
  },
  {
    field: "postage",
    headerName: "Postage",
    width: 120 /*  Changed */,
  },
  {
    field: "baseImp",
    headerName: "Base IMP",
    width: 120 /*  Changed */,
  },
  {
    field: "vat",
    headerName: "VAT",
    width: 100 /*  Changed */,
  },
  {
    field: "re",
    headerName: "RE",
    width: 100 /*  Changed */,
  },
  {
    field: "total",
    headerName: "Total",
    flex: 1,
    minWidth: 100 /*  Changed */,
  },
];

function OrderLineInfoBox() {
  const { openModal, closeModal, modifyOrderLine } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
    modifyOrderLine: state.modifyOrderLine,
  }));

  return (
    <InfoBoxLayout headerVariant={"dark"} infoTitle={"Order Line"}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack flexDirection={"row"} columnGap={2}>
              <StatisticsDataBox
                label={"Product"}
                isInput
                // quantity={200}

                labelStyleProps={{
                  fontSize: 14,
                }}
                containerStyleProps={{
                  width: 220,
                  padding: 0.625,
                }}
              />

              <StatisticsDataBox
                label={"Order"}
                isInput
                quantity={200}
                // quantity={0}
                labelStyleProps={{
                  fontSize: 14,
                }}
                containerStyleProps={{
                  width: 220,

                  padding: 0.625,
                }}
              ></StatisticsDataBox>
            </Stack>

            <Stack flexDirection={"row"} columnGap={2}>
              <Button variant="contained" startIcon={<AddIcon />} size="small">
                Add
              </Button>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                size="small"
                onClick={() => openModal("modifyOrderLine")}
              >
                Modify
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon />}
                size="small"
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <DataGrid
              rowHeight={40}
              rows={basicDetailData}
              columns={basicDetailColumns}
              showCellVerticalBorder
              density="compact"
              hideFooterPagination
              hideFooterSelectedRowCount
              hideFooter
              disableRowSelectionOnClick
              disableSelectionOnClick
              disableColumnSelector
              disableColumnMenu
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            rowHeight={40}
            rows={perUnitData}
            columns={perUnitDataColumns}
            showCellVerticalBorder
            density="compact"
            hideFooterPagination
            hideFooterSelectedRowCount
            hideFooter
            disableRowSelectionOnClick
            disableSelectionOnClick
            disableColumnSelector
            disableColumnMenu
          />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <DataGrid
              rowHeight={40}
              rows={taxDetailData}
              columns={taxDetailDataColumns}
              showCellVerticalBorder
              density="compact"
              hideFooterPagination
              hideFooterSelectedRowCount
              hideFooter
              disableRowSelectionOnClick
              disableSelectionOnClick
              disableColumnSelector
              disableColumnMenu
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Stack flexDirection={"row"} justifyContent={"center"} columnGap={2}>
            <Button variant="contained">Save</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Grid>
      </Grid>
      <ModifyOrderLineModal
        open={modifyOrderLine}
        handleClose={() => closeModal("modifyOrderLine")}
      />
    </InfoBoxLayout>
  );
}

export default OrderLineInfoBox;
