import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  label: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
  field: {
    marginRight: "10px",
  },
  button: {
    marginLeft: "10px",
    marginTop: "10px",
  },
}));
