import PropTypes from "prop-types";

//* mui components
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const TableLayout = ({ children }) => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #E7E7E7",
                    boxShadow: "0 4px 12px #0F11140F",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                <Stack spacing={2}>{children}</Stack>
            </Grid>
        </Grid>
    );
};

TableLayout.propTypes = {
    children: PropTypes.node,
};

export default TableLayout;
