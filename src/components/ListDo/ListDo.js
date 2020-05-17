import React from "react";

//MATERIAL COMPONENTS
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";


const ListDo = (props) => (
  <List >
    <Typography  variant="h6" gutterBottom>
      A realizar:
    </Typography>
    {props.list.map((tasks) => (
      <ListItem key={tasks.task}>
        <ListItemText>
          {tasks.task}
          <Button onClick={() => props.onhandleToggleTask(tasks.task)}  color="primary">
            REALIZADA
          </Button>
          <Button onClick={() => props.onRemoveTask(tasks.task)} color="secondary">ELIMINAR</Button>
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default ListDo;
