import { Grid, MenuItem } from "@mui/material";
import PageLayout from "../../components/Layout/PageLayout";
import TableLayout from "../../components/Layout/TableLayout";
import TableLayoutHeader from "../../components/Headers/TableLayoutHeader";
import { ControllerDateField } from "../../components/Elements/TextField/ControllerDateField";
import ControllerSelectField from "../../components/Elements/TextField/ControllerSelectField";
import AdminStockAuthorizedTable from "../../components/Table/AdminStockAuthorizedTable";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const AdminTeleMarketingAuthorized = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            startDate: null,
            endDate: null,
            user: "",
        },
    });
    return (
        <PageLayout pageHeading={"authorized_signatures_log_report"}>
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
                        <AdminStockAuthorizedTable />
                    </TableLayout>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default AdminTeleMarketingAuthorized;
