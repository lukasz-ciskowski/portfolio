import { createTheme } from "@material-ui/core"
import { theme } from "./theme"

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: theme.palette.highlight,
        },
        secondary: {
            main: theme.palette.primary,
        },
        text: { primary: theme.palette.primary, secondary: theme.palette.primary },
    },
    typography: {
        fontFamily: "Futura",
        fontSize: 19,
        fontWeightRegular: 300,
    },
    overrides: {
        MuiInput: {
            underline: {
                "&:after": {
                    borderBottom: `2px solid ${theme.palette.highlight}`,
                },
                "&$focused:after": {
                    borderBottomColor: `${theme.palette.highlight}`,
                },
                "&$error:after": {
                    borderBottomColor: `${theme.palette.highlight}`,
                },
                "&:before": {
                    borderBottom: `1px solid ${theme.palette.highlight}`,
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${theme.palette.highlight}`,
                },
                "&$disabled:before": {
                    borderBottom: `1px dotted ${theme.palette.highlight}`,
                },
            },
        },
    },
})
