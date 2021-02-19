import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  label: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  button: {
    marginLeft: "10px",
  },
}));
