//import logo from './logo.svg';
import './App.css';
import React, {  useState } from 'react';
import MaterialTable from 'material-table'
import { tableIcons }from "./components/TableIcons.js";

function App() {

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'Madurai', 63: 'Salem' },
    },
  ]);

  const [data, setData] = useState([
    { name: 'Karthik', surname: 'Raja', birthYear: 1970, birthCity: 63 },
    { name: 'Subha', surname: 'Ram', birthYear: 1981, birthCity: 34 },
    { name: 'Keerthi', surname: 'Suresh', birthYear: 1990, birthCity: 63 },
  ]);

  return (
    <div className="App">
      <h2>Material table demo</h2>
      <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      icons={tableIcons}
      editable={{
        // onRowAdd: newData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       setData([...data, newData]);
              
        //       resolve();
        //     }, 1000)
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        // onRowDelete: oldData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       const dataDelete = [...data];
        //       const index = oldData.tableData.id;
        //       dataDelete.splice(index, 1);
        //       setData([...dataDelete]);
              
        //       resolve()
        //     }, 1000)
        //   }),
      }}
    />

    </div>
  );
}

export default App;
