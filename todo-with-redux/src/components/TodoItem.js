import React from "react";
import { connect } from "react-redux";

// actions
import { markTodoCompleted } from "../actions";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: "3rem",
    padding: "1rem",
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {},
  cardContent: {
    "&:last-child": {
      paddingBottom: "1.6rem"
    }
  }
}));

const TodoItem = ({ markTodoCompleted, todo }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {todo.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Created:
          </Typography>
        </CardContent>
      </Card>

      {/* <p onClick={() => markTodoCompleted(todo)}>{todo.title}</p>  */}
    </>
  );
};

export default connect(
  null,
  { markTodoCompleted }
)(TodoItem);
