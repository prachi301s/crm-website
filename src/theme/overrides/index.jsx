import Button from "./Button";
import DataGrid from "./DataGrid";
import Paper from "./Paper";
import TextField from "./TextField";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
    return Object.assign(
        Paper(theme),
        Button(theme),
        Tooltip(theme),
        Typography(theme),
        TextField(theme),
        DataGrid(theme)
    );
}
