import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    borderRadius: "15px",
    marginBottom: "20px",
  },
  media: {
    height: 250,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  rating: {
    fontSize: "small",
    backgroundColor: "#032541",
    borderRadius: "50px",
    color: "white",
    height: 18,
    width: 40,
    textAlign: "center",
    padding: "5px",
  },
}));
