import PageTable from "../../../../../components/table/PageTable";
import Selling_table from "./Selling_table";
function Index() {
  return (
    <>
      <PageTable
        link_search='/property-search'
        link="/create-selling-property"
        search='بحث'
        add="إضافة عقار"
        title="العقارات "
        table={<Selling_table />}
      />
    </>
  );
}

export default Index;
