import React from "react";


//MATERIAL COMPONENTS
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";

const ListEliminated = (props) => (
  <List>
    <Typography variant="h6" gutterBottom>
      Eliminadas:
    </Typography>
    {props.list.map((tasks) => (
      <ListItem  key={tasks.task}>
        <ListItemText>
          {tasks.task}
          <Button onClick={() => props.onhandleToggleTask(tasks.task)}>
            RESET
          </Button>
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default ListEliminated;