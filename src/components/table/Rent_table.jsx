import { CTable } from '@coreui/react'
import React from 'react'

function Rent_table() {
    const columns = [
        {
          key: 'id',
          label: '#',
          _props: { scope: 'col' },
        },
        {
          key: 'class',
          _props: { scope: 'col' },
        },
        {
          key: 'heading_1',
          label: 'Heading',
          _props: { scope: 'col' },
        },
        {
          key: 'heading_2',
          label: 'Heading',
          _props: { scope: 'col' },
        },
       
    ]
    const items = [
        {
            id: 1,
            class: 'rent',
            heading_1: 'Otto',
            heading_2: '@mdo',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 2,
            class: 'Jacob',
            heading_1: 'Thornton',
            heading_2: '@fat',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 3,
            class: 'Larry the Bird',
            heading_1: '@twitter',
            heading_2: '@twitter',
            _cellProps: { id: { scope: 'row' } },
        },
    ]
    return <CTable hover columns={columns} items={items} />
}

export default Rent_table