import { makeStyles } from "@material-ui/core/styles";
import colors from "../colors";

const useStyles = makeStyles({
  root: {
    border: "5px",
    borderColor: colors.black,
    borderRadius: "30vh",
    height: 48,
    width: "100vh",
    padding: "0 30vh",
    margin: "10vh",
  },
});

export default useStyles;
