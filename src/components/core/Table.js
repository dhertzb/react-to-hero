import React from "react";
import "../../styles/table.css";

class Table extends React.Component {
  render() {
    const cols = this.props.cols.map((col) => (
      <th key={col.value}>{col.value}</th>
    ));
    const rows = this.props.rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {this.props.cols.map((col) => (
          <td key={col.key}>{row[col.key]}</td>
        ))}
      </tr>
    ));
    return (
      <>
        <table>
          <thead>
            <tr>{cols}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </>
    );
  }
}

export default Table;
