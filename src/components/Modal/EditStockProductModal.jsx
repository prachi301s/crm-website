import PropTypes from "prop-types";

//* Modal for form layout
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui
import Grid from "@mui/material/Grid";

//* mui icon

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

//* form
import AddStockProductForm from "../Form/AddStockProductForm";
import ChangeStockForm from "../Form/ChangeStockForm";
import EditStockProductForm from "../Form/EditStockProductForm";

function EditStockProductModal({ open, handleClose }) {
    return (
        <FormModal
            open={open}
            Icon={<AddCircleOutlineIcon fontSize="medium" />}
            heading={"Edit Product Data"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"lg"}
            buttonNameOne={"save"}
        >
            <Grid container spacing={2} p={3}>
                <Grid item xs={12}>
                  <EditStockProductForm/>
                </Grid>
                <Grid item xs={12}>
                    <ChangeStockForm />
                </Grid>
            </Grid>
        </FormModal>
    );
}

EditStockProductModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default  EditStockProductModal;
