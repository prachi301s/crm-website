import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* libraries
import { useTranslation } from "react-i18next";

//* custom components
import CustomIconButton from "../Elements/Icons/CustomIconButton";

//* mui icons
import ArticleIcon from "@mui/icons-material/Article";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const TableLayoutHeader = ({ tableHeading, children, buttons, handleAdd }) => {
    const { t } = useTranslation();
    return (
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Box>
                {tableHeading ? (
                    <Typography variant={"h5"}>{t(tableHeading)}</Typography>
                ) : (
                    <Stack direction={"row"} spacing={1}>
                        {children}
                    </Stack>
                )}
            </Box>
            <Box>
                <Stack direction={"row"} spacing={2}>
                    {buttons?.includes("export_to_excel") && (
                        <CustomIconButton
                            icon={<ArticleIcon />}
                            variant={"contained"}
                            name={"export_to_excel"}
                        />
                    )}
                    {buttons?.includes("add") && (
                        <CustomIconButton
                            icon={<ControlPointOutlinedIcon />}
                            onClick={handleAdd}
                            variant={"contained"}
                            name={"add"}
                        />
                    )}
                    {buttons?.includes("send_to_excel") && (
                        <CustomIconButton
                            icon={<ControlPointOutlinedIcon />}
                            variant={"contained"}
                            name={"send_to_excel"}
                        />
                    )}
                    {buttons?.includes("go_to_customer_file") && (
                        <CustomIconButton
                            icon={<ArticleIcon />}
                            variant={"contained"}
                            name={"go_to_customer_file"}
                            sx={{ px: 5 }}
                        />
                    )}
                </Stack>
            </Box>
        </Stack>
    );
};

TableLayoutHeader.propTypes = {
    children: PropTypes.node,
    tableHeading: PropTypes.string,
    buttons: PropTypes.array,
    handleAdd: PropTypes.func,
};

export default TableLayoutHeader;
