import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// actions
import { markTodoCompleted } from "../actions/todoActions";
import { fetchUserTodos } from "../actions/userActions";

// moment
import Moment from "react-moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckmarkIcon from "@material-ui/icons/Beenhere";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core";

// Custom styles
import useStyles from "../component-styles/todoItems";

const TodoItem = ({ markTodoCompleted, fetchUserTodos, todo, completed }) => {
  const classes = useStyles();
  // increments whenever a todo is marked as complete, triggers useEffect

  return (
    <>
      <Card
        className={completed ? `${classes.card} todo-completed` : classes.card}
      >
        <FontAwesomeIcon
          className={completed ? "completed-badge" : "completed-badge-hidden"}
          icon={faCheckCircle}
          size="2x"
        />
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {todo.title}
          </Typography>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography className={classes.pos} color="textSecondary">
                Created: <Moment fromNow>{todo.created_at}</Moment>
              </Typography>
            </Grid>
            <Grid item xs={6} align="right">
              {completed ? null : (
                <>
                  <span
                    class="hover-test"
                    onClick={() => {
                      markTodoCompleted(todo.id, todo.user_id);
                    }}
                  >
                    <CheckmarkIcon
                      classes={{ root: classes.icon }}
                      className="vertical-align-middle check-icon"
                    />
                    <span className="vertical-align-middle mark-completed">
                      Mark as Completed
                    </span>
                  </span>
                </>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default connect(
  null,
  { markTodoCompleted, fetchUserTodos }
)(TodoItem);
