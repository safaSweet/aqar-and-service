import React, { useEffect } from "react";
import { CFormSelect } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDataTower, towerClassification } from "../../modules/Pages/projects/Store";
function Select_tower_classification( tower ) {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.projects.tower_classification.data.data?.Classification || []
  );console.log('vvvvvvvvv',tower)
  useEffect(() => {
    dispatch(towerClassification());
  }, []);
  const options = [
    { label: "اختر ما يناسبك", value: "" }, 
    ...data?.map((item) => ({
      label: item.type,
      value: item.id,
    })),
  ]
  const handler_change = (e) => {
    const { name, value } = e.target;
    const updatedCladdingLevel = options.find(item => item.id === parseInt(value));
    // dispatch(setData({ cladding_level: updatedCladdingLevel }));

      dispatch(setDataTower({classification:updatedCladdingLevel }))
  };
  return (
    <>
      <CFormSelect
        options={options}
        name="classification_id"
        onChange={handler_change}
        required
        value={tower.tower?.classification?.id}
      />
    </>
  );
}

export default Select_tower_classification;
