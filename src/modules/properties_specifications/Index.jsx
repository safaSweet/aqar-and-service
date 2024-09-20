import PageTable from "../../components/table/PageTable";
import PropertiesTable from "../../components/table/Properties_table";
function Index() {
  return (
    <>
      <PageTable
        link_search=""
        search=""
        add=""
        link=""
        title="مواصفات العقارات"
        table={<PropertiesTable />}
      />
    </>
  );
}

export default Index;
