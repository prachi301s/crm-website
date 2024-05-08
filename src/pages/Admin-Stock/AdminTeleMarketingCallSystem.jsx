import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

import PageLayout from "../../components/Layout/PageLayout";
import TableLayout from "../../components/Layout/TableLayout";
import AdminStockCallSystemTable from "../../components/Table/AdminStockCallSystemTable";
import TableLayoutHeader from "../../components/Headers/TableLayoutHeader";
import { ControllerDateField } from "../../components/Elements/TextField/ControllerDateField";
import ControllerSelectField from "../../components/Elements/TextField/ControllerSelectField";

const AdminTeleMarketingCallSystem = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            startDate: null,
            endDate: null,
            user: "",
        },
    });

    return (
        <PageLayout pageHeading={"call_system_downtime_report"}>
            <Grid container>
                <Grid item xs={12}>
                    <TableLayout>
                        <TableLayoutHeader buttons={["export_to_excel"]}>
                            <ControllerDateField
                                control={control}
                                mainLabel={t("start_date")}
                                name={"startDate"}
                            />
                            <ControllerDateField
                                control={control}
                                mainLabel={t("end_date")}
                                name={"endDate"}
                            />
                            <ControllerSelectField
                                control={control}
                                mainLabel={t("user")}
                                name={"user"}
                            >
                                {["type-1", "type-2", "type-3"].map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </ControllerSelectField>
                        </TableLayoutHeader>
                        <AdminStockCallSystemTable />
                    </TableLayout>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default AdminTeleMarketingCallSystem;
