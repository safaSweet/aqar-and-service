import React, { useEffect, useState } from "react";
import { CFormSelect, CFormInput, CButton, CFormLabel } from "@coreui/react";
import { useDispatch } from "react-redux";
import {
  setData,
  setDataForSearch,
} from "../../modules/Pages/properties/selling_rentting/Store";
import {
  Get_config,
  createOptions,
} from "../../modules/properties_specifications/Get_config";
import { setDataFloorProperty } from "../../modules/Pages/projects/Store";
import { setDataCharts } from "../../modules/Pages/Stats/Store";

function Select_Config({ type, formData }) {
  const dispatch = useDispatch();
  const {
    Status,
    // status_property,
    publicationType,
    serviceAndVirtues,
    ownershipType,
    claddingLevel,
    roomType,
    rentalPeriod,
    CategoryRealEstate,
    directions,
  } = Get_config();
  const status_property = Status.filter((item) => item.category === "property");
  // console.log('status....category'.Status.category)
  const [service_and_virtues, setServiceVirtues] = useState([]);
  const [direction, setDirections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category_real_estate_type, setCategory_real_estate_type] = useState([]);
  const [owner, setOwner] = useState([]);
  const [claddingLevel0, setCladding] = useState([]);
  const [publicationId, setpublicationId] = useState([]);
  const [rooms, setRooms] = useState([{ id: "", number_of_room: "" }]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  useEffect(() => {
    if (formData) {
      console.log("Setting serviceVirtues:", formData.service_and_virtues);
      console.log("Setting directions:", formData.direction);
      console.log("Setting rooms:", formData.room);
      setServiceVirtues(formData.service_and_virtues || []);
      setDirections(formData.direction || []);
      setRooms(formData.room || [{ id: "", number_of_room: "" }]);
    }
  }, [formData]);

  console.log("fff", formData);

  const handler_change = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("service_and_virtues")) {
      const index = parseInt(name.split("_").pop());
      const newServiceVirtues = [...service_and_virtues];
      newServiceVirtues[index] = value;
      setServiceVirtues(newServiceVirtues);
      dispatch(setData({ service_and_virtues: newServiceVirtues }));
    } else if (name.startsWith("direction")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...direction];
      newDirections[index] = value;
      setDirections(newDirections);
      dispatch(setData({ direction: newDirections }));
    } else if (
      name.startsWith("room_type_") ||
      name.startsWith("room_number_")
    ) {
      const index = parseInt(name.split("_").pop());
      const field = name.startsWith("room_type_") ? "id" : "number_of_room";
      const newRooms = rooms.map((room, i) =>
        i === index ? { ...room, [field]: value } : room
      );
      setRooms(newRooms);
      dispatch(setData({ room: newRooms }));
    }
    // if (name === "cladding_level_id") {
    //   const updatedCladdingLevel = claddingLevel.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setData({ cladding_level: updatedCladdingLevel }));
    // } 
    // else if (name === "type_publication_id") {
    //   const updatedPublicationType = publicationType.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setData({ type_publication: updatedPublicationType }));
    // }
    // else if (name === "status_id") {
    //   const updatedPublicationType = status_property.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setData({ status: updatedPublicationType }));
    // }
    // else if (name === "category_real_estate_type_id") {
    //   const updatedPublicationType = CategoryRealEstate.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setData({ category_real_estate_type: updatedPublicationType }));
    // }
    //  else if (name === "type_owner_id") {
    //   const updatedOwnershipType = ownershipType.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setData({ type_owner: updatedOwnershipType }));
    // }
     else {
      dispatch(setData({ [name]: value }));
    }
  };
  function handler_change_search(e) {
    const { name, value } = e.target;
    if (name.startsWith("service_and_virtues")) {
      const index = parseInt(name.split("_").pop());
      const newServiceVirtues = [...service_and_virtues];
      newServiceVirtues[index] = value;
      setServiceVirtues(newServiceVirtues);
      dispatch(setDataForSearch({ service_and_virtues: newServiceVirtues }));
    } else if (name.startsWith("direction")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...direction];
      newDirections[index] = value;
      setDirections(newDirections);
      dispatch(setDataForSearch({ direction: newDirections }));
      // console.log("direction : ", newDirections);
    } else if (name.startsWith("publicationId")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...publicationId];
      newDirections[index] = value;
      setpublicationId(newDirections);
      dispatch(setDataForSearch({ publicationId: newDirections }));
    } else if (name.startsWith("claddingLevel")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...claddingLevel0];
      newDirections[index] = value;
      setCladding(newDirections);
      dispatch(setDataForSearch({ claddingLevel: newDirections }));
    } else if (name.startsWith("propertyCategoryId")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...categories];
      newDirections[index] = value;
      setCategories(newDirections);
      dispatch(setDataForSearch({ propertyCategoryId: newDirections }));
    } else if (name.startsWith("typeOwnerIds")) {
      const index = parseInt(name.split("_").pop());
      const newOwner = [...owner];
      newOwner[index] = value;
      setOwner(newOwner);
      dispatch(setDataForSearch({ typeOwnerIds: newOwner }));
      console.log("newOwner : ", newOwner);
    } else {
      dispatch(setDataForSearch({ [name]: value }));
    }
  }

  const handler_change_floor_property = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("direction")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...direction];
      newDirections[index] = value;
      setDirections(newDirections);
      dispatch(setDataFloorProperty({ direction: newDirections }));
      // console.log("direction : ", newDirections);
    }
    // if (name === "cladding_level_id") {
    //   const updatedCladdingLevel = claddingLevel.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setDataFloorProperty({ cladding_level: updatedCladdingLevel }));
    // } else if (name === "type_publication_id") {
    //   const updatedPublicationType = publicationType.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setDataFloorProperty({ type_publication: updatedPublicationType }));
    // } 
    // else if (name === "type_owner") {
    //   const updatedOwnershipType = ownershipType.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setDataFloorProperty({ type_owner: updatedOwnershipType }));
    // }
    // else if (name === "status") {
    //   const updatedOwnershipType = status_property.find(
    //     (item) => item.id === parseInt(value)
    //   );
    //   dispatch(setDataFloorProperty({ status: updatedOwnershipType }));
    // }
    else {
      dispatch(setDataFloorProperty({ [name]: value }));
    }
  };

  const handler_change_floor_property_edit = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("direction")) {
      const index = parseInt(name.split("_").pop());
      const newDirections = [...direction];
      newDirections[index] = value;
      dispatch(setDataFloorProperty({ direction: newDirections }));
    } else {
      dispatch(setDataFloorProperty({ [name]: value }));
    }
  
    // إذا كان الحقل هو id، قم بتحديث الحقل المرتبط به أيضًا
    if (name === "type_publication_id") {
      const selectedPublication = publicationType.find(pub => pub.id === parseInt(value, 10));
      dispatch(setDataFloorProperty({ type_publication: selectedPublication || {} }));
    }
    if (name === "cladding_level_id") {
      const selectedPublication = claddingLevel.find(pub => pub.id === parseInt(value, 10));
      dispatch(setDataFloorProperty({ cladding_level: selectedPublication || {} }));
    }
    // يمكنك تكرار هذا للحقول الأخرى مثل `cladding_level_id`, `category_real_estate_type_id`, إلخ.
  };
  



  const handler_change_chart = (e) => {
    const { name, value } = e.target;

    dispatch(setDataCharts({ [name]: value }));
  };

  const addDynamicField = (setter, state) => {
    setter([...state, ""]);
  };
  const addRoom = () => {
    setRooms([...rooms, { id: "", number_of_room: "" }]);
  };
  function body() {
    if (type === "filter") {
      return (
        <>
          <CFormSelect
            options={createOptions(status_property)}
            // options={createOptions(Status)}
            name="status_id"
            onChange={handler_change}
            required
            value={formData?.status_id || ""}
          />
         
          <CFormSelect
            options={createOptions(claddingLevel, "name")}
            name="cladding_level_id"
            required
            onChange={handler_change}
            value={formData?.cladding_level_id || ""}
          />

          <CFormSelect
            options={createOptions(publicationType)}
            name="type_publication_id"
            onChange={handler_change}
            required
            value={formData?.type_publication_id || ""}
          />
         <CFormLabel style={{color:'green'}}>هذا الاختيار مخصص فقط للايجار</CFormLabel>
          <CFormSelect
            options={createOptions(rentalPeriod)}
            // options={createOptions(Status)}
            name="period_id"
            onChange={handler_change}
            // required
            // value={formData?.period_id || ""}
          />

          <CFormSelect
            options={createOptions(ownershipType)}
            name="type_owner_id"
            onChange={handler_change}
            required
            value={formData?.type_owner_id || ""}
          />

          <CFormSelect
            options={createOptions(CategoryRealEstate)}
            name="category_real_estate_type_id"
            onChange={handler_change}
            required
            value={formData.category_real_estate_type_id || ""}
          />
          {rooms.map((_, index) => (
            <div key={`room_${index}`} style={{ display: "flex", gap: "10px" }}>
              <CFormSelect
                options={createOptions(roomType)}
                name={`room_type_${index}`}
                // value={formData.room||room.type_id}
                value={formData.room?.[index]?.id}
                onChange={handler_change}
                required
              />
              <CFormInput
                type="number"
                name={`room_number_${index}`}
                // value={formData.room.number_of_room||room.number}
                onChange={handler_change}
                value={formData.room?.[index]?.number_of_room}
                required
              />
            </div>
          ))}
          <CButton type="button" onClick={addRoom} color="secondary">
           اضافة غرفة
          </CButton>
          {service_and_virtues.map((_, index) => (
            <CFormSelect
              key={`service_and_virtues_${index}`}
              options={createOptions(serviceAndVirtues)}
              name={`service_and_virtues_${index}`}
              onChange={handler_change}
              required
              value={service_and_virtues?.[index]?.id}
            />
          ))}
          <CButton
            type="button"
            color="secondary"
            onClick={() =>
              addDynamicField(setServiceVirtues, service_and_virtues)
            }
          >
           اضافة مميزات
          </CButton>
          {direction.map((_, index) => (
            <CFormSelect
              key={`direction_${index}`}
              options={createOptions(directions)}
              name={`direction_${index}`}
              onChange={handler_change}
              required
              value={formData?.direction?.[index]?.id}
            />
          ))}
          <CButton
            type="button"
            onClick={() => addDynamicField(setDirections, direction)}
            color="secondary"
          >
            اضافة جهة
          </CButton>
        </>
      );
    } else if (type === "search") {
      return (
        <>
          {claddingLevel0.map((_, index) => (
            <CFormSelect
              key={`claddingLevel_${index}`}
              options={createOptions(claddingLevel, "name")}
              name={`claddingLevel_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
            onClick={() => addDynamicField(setCladding, claddingLevel0)}
            color="secondary"
          >
            اضافة نوع اكساء
          </CButton>
          {publicationId.map((_, index) => (
            <CFormSelect
              key={`publicationId_${index}`}
              options={createOptions(publicationType)}
              name={`publicationId_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
            color="secondary"
            onClick={() => addDynamicField(setpublicationId, publicationId)}
          >
           اضافة نوع نشر
          </CButton>
          {owner.map((_, index) => (
            <CFormSelect
              key={`typeOwnerIds_${index}`}
              options={createOptions(ownershipType)}
              name={`typeOwnerIds_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
             color="secondary"
            onClick={() => addDynamicField(setOwner, owner)}
          >
            اضافة نوع ملكية
          </CButton>
          {service_and_virtues.map((_, index) => (
            <CFormSelect
              key={`service_and_virtues_${index}`}
              options={createOptions(serviceAndVirtues)}
              name={`service_and_virtues_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
             color="secondary"
            onClick={() =>
              addDynamicField(setServiceVirtues, service_and_virtues)
            }
          >
           اضافة مميزات
          </CButton>
          {direction.map((_, index) => (
            <CFormSelect
              key={`direction_${index}`}
              options={createOptions(directions)}
              name={`direction_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
             color="secondary"
            onClick={() => addDynamicField(setDirections, direction)}
          >
          اضافة جهة
          </CButton>

          {categories.map((_, index) => (
            <CFormSelect
              key={`propertyCategoryId_${index}`}
              options={createOptions(CategoryRealEstate)}
              name={`propertyCategoryId_${index}`}
              onChange={handler_change_search}
              // required
            />
          ))}
          <CButton
            type="button"
             color="secondary"
            onClick={() => addDynamicField(setCategories, categories)}
          >
           اضافة فئة
          </CButton>
        </>
      );
    } else if (type === "charts") {
      return (
        <CFormSelect
          options={createOptions(publicationType)}
          name="type_publication"
          onChange={handler_change_chart}
          required
        />
      );
    }
else if(type==='property_floor_edit'){
  return (
    <>
      <CFormSelect
        options={createOptions(claddingLevel, "name")}
        name="cladding_level_id"
        onChange={handler_change_floor_property}
        required
        value={formData?.cladding_level_id || ""}
      />
      {/* <CFormSelect
        options={createOptions(status_property)}
        name="status_id"
        onChange={handler_change_floor_property}
        required
        // value={formData?.cladding_level?.id || ""}
      /> */}
      <CFormSelect
        options={createOptions(publicationType)}
        name="type_publication_id"
        onChange={handler_change_floor_property}
        required
        value={formData?.type_publication_id || ""}
      />
      <CFormSelect
        options={createOptions(CategoryRealEstate)}
        name="category_real_estate_type_id"
        onChange={handler_change_floor_property}
        required
        value={formData?.category_real_estate_type_id||''}
      />
      <CFormSelect
        options={createOptions(ownershipType)}
        name="type_owner_id"
        onChange={handler_change_floor_property}
        required
        value={formData?.type_owner_id || ""}
      />
      <CFormSelect
        options={createOptions(status_property)}
        name="status_id"
        onChange={handler_change_floor_property}
        required
        value={formData?.status_id||''}
      />
      {direction.map((_, index) => (
        <CFormSelect
          key={`direction_${index}`}
          options={createOptions(directions)}
          name={`direction_${index}`}
          onChange={handler_change_floor_property}
          required
          value={formData.direction?.[index]?.id}
        />
      ))}
      <CButton
        type="button"
        onClick={() => addDynamicField(setDirections, direction)}
      >
        اضافة جهة
      </CButton>
    </>
  );
}
    //if (type === "property_floor")
    else {
      return (
        <>
          <CFormSelect
            options={createOptions(claddingLevel, "name")}
            name="cladding_level_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.cladding_level?.id || ""}
          />
          {/* <CFormSelect
            options={createOptions(status_property)}
            name="status_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.cladding_level?.id || ""}
          /> */}
          <CFormSelect
            options={createOptions(publicationType)}
            name="type_publication_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.type_publication?.id || ""}
          />
          <CFormSelect
            options={createOptions(CategoryRealEstate)}
            name="category_real_estate_type_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.category_real_estate_type.id||''}
          />
          <CFormSelect
            options={createOptions(ownershipType)}
            name="type_owner_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.type_owner?.id || ""}
          />
          <CFormSelect
            options={createOptions(status_property)}
            name="status_id"
            onChange={handler_change_floor_property}
            required
            // value={formData?.status?.id||''}
          />
          {direction.map((_, index) => (
            <CFormSelect
              key={`direction_${index}`}
              options={createOptions(directions)}
              name={`direction_${index}`}
              onChange={handler_change_floor_property}
              required
              // value={formData.direction?.[index]?.id}
            />
          ))}
          <CButton
            type="button"
            onClick={() => addDynamicField(setDirections, direction)}
          >
            اضافة جهة
          </CButton>
        </>
      );
    }
    // else{ <></>}
  }
  return <>{body()}</>;
}

export default Select_Config;
