import React from "react";
import { connect } from "react-redux";

// actions
import { markTodoCompleted } from "../actions";

// moment
import Moment from "react-moment";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Custom styles
import useStyles from "../component-styles/todoItems";

const TodoItem = ({ markTodoCompleted, todo }) => {
  const classes = useStyles();

  return (
    <>
      <Card onClick={() => markTodoCompleted(todo)} className={classes.card}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {todo.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Created: <Moment fromNow>{todo.createdAt}</Moment>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default connect(
  null,
  { markTodoCompleted }
)(TodoItem);
