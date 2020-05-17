import React, { Component } from "react";
import "./App.scss";
import Formulario from "./components/Formulario/Formulario";
import ListDone from "./components/ListDone/ListDone";
import ListDo from "./components/ListDo/ListDo";
import ListEliminated from "./components/ListEliminated/ListEliminated";
import CopyLeft from "./components/Copyleft"

//MATERIAL COMPONENTS
import {
  Container,
  Box,
  Typography,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          task: "cocinar",
          active: true,
          deleted: false,
        },
        {
          task: "Planchar",
          active: true,
          deleted: false,
        },
        {
          task: "Ordernar",
          active: true,
          deleted: false,
        },
        {
          task: "Yoga",
          active: false,
          deleted: false,
        },
      ],
      term: "",
    };
  }
// UPDATES TAKS AND ERASE VALUE FROM INPUT
  handleAddTask = (event) => {
    event.preventDefault();
    this.setState((currentState) => {
      return {
        items: currentState.items.concat([
          {
            task: this.state.term,
            active: true,
            deleted: false,
          },
        ]),
        term: "",
      };
    });
  };
// REMOVES TASK AND ADDS DELETED STATE
  handleRemoveTask = (task) => {
    this.setState((currentState) => {
      const tasks = currentState.items.find((tasks) => tasks.task === task);
      return {
        items: currentState.items
          .filter((tasks) => tasks.task !== task)
          .concat([
            {
              task,
              deleted: !tasks.deleted,
            },
          ]),
      };
    });
  };
// CHAGE STATE BETWEEN ACTIVE
  handleToggleTask = (task) => {
    this.setState((currentState) => {
      const tasks = currentState.items.find((tasks) => tasks.task === task);
      return {
        items: currentState.items
          .filter((tasks) => tasks.task !== task)
          .concat([
            {
              task,
              active: !tasks.active,
            },
          ]),
      };
    });
  };
// READS INPUT
  onChange = (event) => {
    const value = event.target.value;
    this.setState({ term: value });
  };
// CLEARS THE ARRAY
  handleRemoveAll = () => {
    this.setState((currentState) => {
      return {
        items: [],
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Container
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            align="left">
            <Box my={15}>
              <Typography
                paragraph
                align="left"
                variant="h4"
                component="h1"
                gutterBottom>
                Lista de tareas:
              </Typography>

              <Formulario
                onSubmit={this.handleAddTask}
                onChange={this.onChange}
                onRemoveAll={this.handleRemoveAll}
                value={this.state.term}
              />

              <ListDo
                onhandleToggleTask={this.handleToggleTask}
                list={this.state.items.filter((tasks) => tasks.active === true)}
                onRemoveTask={this.handleRemoveTask}
              />
              <ListDone
                onhandleToggleTask={this.handleToggleTask}
                list={this.state.items.filter(
                  (tasks) => tasks.active === false
                )}
              />

              <ListEliminated
                onhandleToggleTask={this.handleToggleTask}
                list={this.state.items.filter(
                  (tasks) => tasks.deleted === true
                )}
                onRemoveAll={this.handleCleanList}
              />
            </Box>
            <Box p={1}>
              <CopyLeft />
            </Box>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
