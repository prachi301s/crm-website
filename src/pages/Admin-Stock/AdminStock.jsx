import Grid from "@mui/material/Grid";

import PageLayout from "../../components/Layout/PageLayout";
import TableLayout from "../../components/Layout/TableLayout";
import AdminStockProductTable from "../../components/Table/AdminStockProductTable";
import AdminStockPacksTable from "../../components/Table/AdminStockPacksTable";
import TableLayoutHeader from "../../components/Headers/TableLayoutHeader";
import AddStockProductModal from "../../components/Modal/AddStockProductModal";
import useModalStore from "../../app/store";
import AddPackDataModal from "../../components/Modal/AddPackDataModal";

const AdminStock = () => {
    const { openModal, closeModal, stockProduct, packData } = useModalStore((state) => ({
        openModal: state.openModal,
        closeModal: state.closeModal,
        stockProduct: state.stockProduct,
        packData: state.packData,
    }));
    return (
        <PageLayout pageHeading={"stock"}>
            <Grid container columnSpacing={2.5}>
                <Grid item xs={6}>
                    <TableLayout>
                        <TableLayoutHeader
                            tableHeading={"products"}
                            buttons={["add", "send_to_excel"]}
                            handleAdd={() => openModal("stockProduct")}
                        />
                        <AdminStockProductTable />
                    </TableLayout>
                </Grid>
                <Grid item xs={6}>
                    <TableLayout>
                        <TableLayoutHeader
                            tableHeading={"packs"}
                            buttons={["add", "send_to_excel"]}
                            handleAdd={() => openModal("packData")}
                        />
                        <AdminStockPacksTable />
                    </TableLayout>
                </Grid>
            </Grid>
            <AddStockProductModal
                open={stockProduct}
                handleClose={() => closeModal("stockProduct")}
            />
            <AddPackDataModal open={packData} handleClose={() => closeModal("packData")} />
        </PageLayout>
    );
};

export default AdminStock;
