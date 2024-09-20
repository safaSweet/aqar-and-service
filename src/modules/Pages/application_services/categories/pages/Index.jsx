import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import ServiceTable from "./Service_table";

function Index() {
  return (
    <>
      <PageTable
        add=" اضافة خدمة"
        link_search=''
        search=''
        title="الخدمات"
        link="/add-services"
        table={<ServiceTable />}
      />
    </>
  );
}

export default Index;
