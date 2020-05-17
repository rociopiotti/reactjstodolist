import React from "react";
import "./Formulario.scss";

import { Input, Button } from "@material-ui/core";

class Formulario extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="Form">
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="Nueva tarea">
        </Input>
        <Button type="submit"  color="primary" >Submit</Button>
        <Button onClick={this.props.onRemoveAll}  color="secondary">Clear All</Button>

      </form>
    );
  }
}
export default Formulario;
