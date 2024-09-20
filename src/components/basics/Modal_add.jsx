import { useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CTooltip,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  ProjectSpecification,
  add_photo,
  add_photo_tower,
  add_photo_tower_property,
  createProjectSpecification,
  get_project,
  setDataPhoto,
  setDataSpecification,
} from "../../modules/Pages/projects/Store";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  addEmployee2Branch,
  addRegion2Branch,
  addSession2Branch,
  addSession2Employee,
  get_branches,
  setData,
} from "../../modules/Pages/Management/branchs/Store";
import Select_region from "../selects_input/Select_region";
import {
  get_orders_category,
  get_orders_provider,
  unaccess_orders_category,
  unaccess_orders_provider,
} from "../../modules/Pages/orders/Store";
import Select_employee from "../selects_input/Select_employee";
import Select_session from "../selects_input/Select_session";
import { useParams } from "react-router-dom";
import { get_charts, setDataCharts } from "../../modules/Pages/Stats/Store";
import LocationSelector from "../selects_input/Select_governorate2town";
import Select_Config from "../selects_input/Select_Config";
import { addPhoto2Provider } from "../../modules/Pages/application_services/service_providers/Store";

function ModalAdd({ title, icons, id, type }) {
  //// function ModalAdd({ title, icons, id, type,id0,numberFloor }) {
  const [reply, setReply] = useState({
    reply: "",
    id: id,
  });
  const [visible, setVisible] = useState(false);
  const { formDataPhoto } = useSelector(
    (state) => state.projects.create_project
  );
  const formDataRegion = useSelector(
    (state) => state.branches.create_branch.formData
  );

  const { formData } = useSelector(
    (state) => state.projects.create_project_specification
  );
  const { formDataCharts } = useSelector((state) => state.charts.getCharts);
  console.log("first,o", formDataCharts);

  const specification_type = useSelector(
    (state) =>
      state.projects.project_specification.data.data?.TypeSpecification || []
  );
  console.log("specification_type", specification_type);
  const dispatch = useDispatch();
  const { idBranch, idSession } = useParams();

  useEffect(() => {
    visible && //
      dispatch(ProjectSpecification());
  }, []); //dispatch

  const options = specification_type?.map((data) => ({
    label: data.type,
    value: data.id,
  }));
  const type_img = ["planning", "showing", "owner"];
  const type_img_service = ["business", "identyfie"];

  const handler_change = (e) => {
    type !== "specification"
      ? dispatch(setDataPhoto({ [e.target.name]: e.target.value }))
      : dispatch(setDataSpecification({ [e.target.name]: e.target.value }));
  };

  const handler_change_region = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };
  const handler_change_charts = (e) => {
    dispatch(setDataCharts({ [e.target.name]: e.target.value }));
  };
  const handler_change_category = (e) => {
    setReply({ ...reply, ...{ [e.target.name]: e.target.value } });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (type === "specification") {
      const specification = new FormData();
      specification.append("number", formData.number);
      specification.append("type_id", formData.type_id);
      specification.append("project_id", id);

      dispatch(createProjectSpecification(specification));
      dispatch(get_project());
    } else if (type === "region") {
      const region = new FormData();
      region.append("region_id", formDataRegion.region_id);
      region.append("name", formDataRegion.name);
      region.append("id", id);
      dispatch(addRegion2Branch(region));
      setVisible(false);
      dispatch(get_branches());
    } else if (type === "employee_session") {
      const region = new FormData();
      region.append("session_id", idSession);
      region.append("branch_id", idBranch);
      region.append("id", id);
      dispatch(addSession2Employee(region));
      setVisible(false);
      dispatch(get_branches());
    } else if (type === "employee") {
      const region = new FormData();
      region.append("employee_id", formDataRegion.employee_id);
      region.append("id", id);
      dispatch(addEmployee2Branch(region));
      setVisible(false);
      dispatch(get_branches());
    } else if (type === "session") {
      const region = new FormData();
      region.append("sessions", formDataRegion.session_id);
      region.append("id", id);
      dispatch(addSession2Branch(region));
      setVisible(false);
      dispatch(get_branches());
    } else if (type === "category_service") {
      const category = new FormData();
      category.append("id", id);
      category.append("reply", reply);
      dispatch(unaccess_orders_category(category)).then(() => {
        dispatch(get_orders_category());
      });
    } else if (type === "charts") {
      // const chart = new FormData();
      // chart.append("object", formDataCharts.object);
      // chart.append("status", formDataCharts.status);
      // chart.append("start_date", formDataCharts.start_date);
      // chart.append("object", formDataCharts.object);
      dispatch(get_charts(formDataCharts));
      setVisible(false);
    } else if (type === "provider_service") {
      const category = new FormData();
      category.append("id", id);
      category.append("reply", reply);
      dispatch(unaccess_orders_provider(category)).then(() => {
        dispatch(get_orders_provider());
      });
    } else {
      const image = new FormData();
      image.append("type", formDataPhoto.type);
      image.append("project_id", id);
      const property_photosInput = document.querySelector(
        'input[name="photos"]'
      );
      Array.from(property_photosInput.files).forEach((file, index) => {
        image.append(`photos[${index}]`, file);
      });
      const image_tower = new FormData();
      image_tower.append("type", formDataPhoto.type);
      image_tower.append("tower_id", id);
      const tower_photosInput = document.querySelector('input[name="photos"]');
      Array.from(tower_photosInput.files).forEach((file, index) => {
        image_tower.append(`photos[${index}]`, file);
      });
      const image_service = new FormData();
      image_service.append("type", formDataPhoto.type);
      image_service.append("id", id);
      const service_photosInput = document.querySelector(
        'input[name="photos"]'
      );
      Array.from(service_photosInput.files).forEach((file, index) => {
        image_service.append(`photos[${index}]`, file);
      });

      const image_property = new FormData();
      image_property.append("type", formDataPhoto.type);
      image_property.append("property_id", id);
      const tower_property_photosInput = document.querySelector(
        'input[name="photos"]'
      );
      Array.from(tower_property_photosInput.files).forEach((file, index) => {
        image_property.append(`photos[${index}]`, file);
      });
      if (type === "image")
        dispatch(add_photo(image)).then(() => dispatch(get_project()));
      else if (type === "image_tower") dispatch(add_photo_tower(image_tower));
      else if (type === "image_property")
        dispatch(add_photo_tower_property(image_property));
      else if (type === "image_service")
      {  dispatch(addPhoto2Provider(image_service));
      setVisible(false);}
      else console.log(",,,,,,,,,,,");
    }
  };

  const body = () => {
    if (type === "specification") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <CFormSelect
            options={options}
            name="type_id"
            onChange={handler_change}
            required
          />
          <CFormInput
            type="number"
            placeholder="العدد "
            name="number"
            onChange={handler_change}
            required
          />
          <CFormInput type="hidden" name="project_id" value={id} required />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "charts") {
      return (
        <CForm onSubmit={handlerSubmit}>
          {/* <LocationSelector type="charts" /> */}
          <CFormInput
            type="date"
            placeholder="تاريخ البداية "
            name="start_date"
            onChange={handler_change_charts}
            required
          />
          <CFormInput
            type="date"
            placeholder="تاريخ النهاية "
            name="end_date"
            onChange={handler_change_charts}
            required
          />
          <CFormSelect
            name="status"
            onChange={handler_change_charts}
            options={[
              "الحالة",
              { label: "الغير فعالة", value: "0" },
              { label: "الفعالة", value: "1" },
            ]}
          />
          <CFormSelect
            name="object"
            onChange={handler_change_charts}
            options={[
              "النوع",
              { label: "عقارات", value: "properties" },
              { label: "خدمات", value: "services" },
            ]}
          />
          <Select_Config type="charts" />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "region") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <Select_region />
          <CFormInput
            type="text"
            placeholder="الاسم "
            name="name"
            onChange={handler_change_region}
            required
          />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "session") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <Select_session />

          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "employee_session") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <Select_session />
          {/* <Select_employee/> */}

          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "employee") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <Select_employee type='employee'/>

          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "category_service") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <CFormInput
            type="text"
            placeholder="الرد بالسبب "
            name="reply"
            onChange={handler_change_category}
            required
          />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "provider_service") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <CFormInput
            type="text"
            placeholder="الرد بالسبب "
            name="reply"
            onChange={handler_change_category}
            required
          />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else if (type === "image_service") {
      return (
        <CForm onSubmit={handlerSubmit}>
          <CFormInput
            type="file"
            multiple
            name="photos"
            onChange={handler_change}
            required
          />
          {/* <CFormInput
            type="text"
            placeholder="النوع "
            name="type"
            onChange={handler_change}
            required
          /> */}
          <CFormSelect
            name="type"
            onChange={handler_change}
            options={type_img_service}
          />
          <CFormInput type="hidden" name="id" value={id} required />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    } else {
      return (
        <CForm onSubmit={handlerSubmit}>
          <CFormInput
            type="file"
            multiple
            name="photos"
            onChange={handler_change}
            required
          />
          {/* <CFormInput
            type="text"
            placeholder="النوع "
            name="type"
            onChange={handler_change}
            required
          /> */}
          <CFormSelect
            name="type"
            onChange={handler_change}
            options={type_img}
          />
          <CFormInput type="hidden" name="project_id" value={id} required />
          <Button name="حفظ" type="submit" load="" />
        </CForm>
      );
    }
  };
  // {/* <CTooltip content="الرفض" placement="bottom"> */}
  // {/* </CTooltip> */}

  return (
    <>
      {type === "tower" ? (
        <span onClick={() => setVisible(true)}>
          <Button name={title} />
        </span>
      ) : (
        <CTooltip
          content={
            type === "specification"
              ? "اضافة ميزات"
              : type === "provider_service"
              ? "الرفض"
              : type === "category_service"
              ? "الرفض"
              :type==='region'
              ?'اضافة منطقة لفرع'
              :type==='employee'
              ?'اضافة موظف لفرع'
              :type==='session'
              ?'اضافة قسم لفرع'
              :type==='charts'
              ?'  عرض احصائيات'
              : "اضافة صور"
          }
          placement="bottom"
        >
          <CIcon icon={icons} size="xl" onClick={() => setVisible(true)} />
        </CTooltip>
      )}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{body()}</CModalBody>
      </CModal>
    </>
  );
}

export default ModalAdd;
