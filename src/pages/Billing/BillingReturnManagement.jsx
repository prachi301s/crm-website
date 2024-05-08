//* custom layout
import PageLayout from "../../components/Layout/PageLayout";
import TableLayout from "../../components/Layout/TableLayout";
import TableLayoutHeader from "../../components/Headers/TableLayoutHeader";

//* mui components
import Stack from "@mui/material/Stack";

//* forms
import BillingClientDataForm from "../../components/Form/Billing-Client-Form/BillingClientDataForm";
import BillingAgencyIssueNumberForm from "../../components/Form/Billing-Client-Form/BillingAgencyIssueNumberForm";

//* table
import BillingClaimHistoryTable from "../../components/Table/BillingClaimHistoryTable";
import BillingProductReceivedTable from "../../components/Table/BillingProductReceivedTable";

const BillingReturnManagement = () => {
    return (
        <PageLayout
            pageHeading={"return_management"}
            button={["save", "cancel"]}
        >
            <Stack spacing={2}>
                <TableLayout>
                    <TableLayoutHeader
                        tableHeading={"client_data"}
                        buttons={["go_to_customer_file"]}
                    />
                    <BillingClientDataForm />
                </TableLayout>

                <TableLayout>
                    <TableLayoutHeader
                        tableHeading={"identification_of_product_received"}
                    />
                    <BillingProductReceivedTable />
                </TableLayout>

                <TableLayout>
                    <TableLayoutHeader tableHeading={"claim_history"} />
                    <BillingClaimHistoryTable />
                </TableLayout>

                <TableLayout>
                    <TableLayoutHeader tableHeading={"agency_issue_number"} />
                    <BillingAgencyIssueNumberForm />
                </TableLayout>
            </Stack>
        </PageLayout>
    );
};

export default BillingReturnManagement;
