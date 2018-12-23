import React from "react";
import MUIDataTable from "mui-datatables";


function ContactTable({ data, columns }) {
  console.log("contact table function");

  return (
    <div>
      <MUIDataTable title={"Contacts"} data={data} columns={columns} />
    </div>
  );
}

export default ContactTable;
