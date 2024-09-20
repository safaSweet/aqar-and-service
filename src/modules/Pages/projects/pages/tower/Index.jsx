import PageTable from '../../../../../components/table/PageTable'
import IndexTower from './IndexTower'
import { useParams } from 'react-router-dom';

function Index() {
    const { id } = useParams();
  return (
    <>
        <PageTable
        link_search=''
        link={"/create-tower/"+id}
        search=""
        add="إضافة برج"
        title="الأبراج"
        table={<IndexTower />
        }
      />
    </>
  )
}

export default Index