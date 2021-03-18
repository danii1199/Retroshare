import "./App.css";
import { Component } from "react";
import { VinylService } from "./service/VinylService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.vinylService = new VinylService();
  }

  componentDidMount() {
    this.vinylService.getAll().then(data => this.setState({vinyls: data}));
  }

  render() {
    return (
      <DataTable value={this.state.vinyls}>
        <Column field="id" header="ID"></Column>
        <Column field="firstName" header="Nombre"></Column>
        <Column field="lastName" header="Apellido"></Column>
        <Column field="userName" header="Usuario"></Column>
        <Column field="sex" header="Género"></Column>
      </DataTable>
    );
  }
}
