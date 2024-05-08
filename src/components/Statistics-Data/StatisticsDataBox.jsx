import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const StatisticsDataBox = ({
  label,
  quantity,
  containerStyleProps,
  labelStyleProps,
  isInput,
  children,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        bgcolor: theme.palette.secondary.light,
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "8px",
        padding: "3px",
        ...containerStyleProps,
      }}
    >
      <Typography variant="caption" sx={{ fontSize: 12, ...labelStyleProps }}>
        {t(label)} :
      </Typography>
      <Box
        sx={{
          bgcolor: theme.palette.primary.light,
          border: `1px solid ${theme.palette.primary.light}`,
          borderRadius: "8px",
          padding: "3px 8px",
        
        }}
          >


            {/* Changed */}
        {isInput ? (
          <TextField
          variant="standard"
          size="small"
          sx={{ width: '28px','& .MuiInput-underline': { borderBottom: 0 } }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        ) : (
          <Typography      variant="caption">
            {quantity}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

StatisticsDataBox.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  quantity: PropTypes.number,
  containerStyleProps: PropTypes.object,
  labelStyleProps: PropTypes.object,
  isInput: PropTypes.bool,
};

export default StatisticsDataBox;
