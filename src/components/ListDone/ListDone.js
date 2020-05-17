import React from "react";


//MATERIAL COMPONENTS
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";


const ListDone = (props) => (
  <List>
    <Typography variant="h6" gutterBottom>
      Realizadas:
    </Typography>
    {props.list.map((tasks) => (
      <ListItem key={tasks.task}>
        <ListItemText>
          {tasks.task}
          <Button onClick={() => props.onhandleToggleTask(tasks.task)}>REALIZAR</Button>
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default ListDone;
