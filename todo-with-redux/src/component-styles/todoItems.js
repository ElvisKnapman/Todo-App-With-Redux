import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: "3rem",
    padding: "0",
    minWidth: 275,
    position: "relative"
  },
  title: {
    fontSize: "1.8rem",
    borderBottom: "1px dashed #000"
  },
  pos: {
    fontSize: "1.4rem"
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: "1.6rem"
    }
  },

  icon: {
    transition: "all 0.2s",
    fontSize: "1.8rem",
    color: "#000"
  }
}));

export default useStyles;
