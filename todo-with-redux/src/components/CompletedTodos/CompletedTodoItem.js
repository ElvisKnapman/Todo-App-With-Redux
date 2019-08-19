import React from "react";
import Moment from "react-moment";

// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Custom styles
import useStyles from "../../component-styles/todoItems";

const CompletedToDoItem = ({ todo }) => {
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
            Created: <Moment fromNow>{todo.createdAt}</Moment>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CompletedToDoItem;
