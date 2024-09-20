import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import {
  getGovernorate,
  getRegionForGovernorate,
  getTwonForRegion,
} from "../../modules/address/Store";
import {
  setData,
  setDataForSearch,
} from "../../modules/Pages/properties/selling_rentting/Store";
import { setData as setDataForProjects } from "../../modules/Pages/projects/Store";
import { setData as setDataForEmployee } from "../../modules/Pages/Management/branchs/Store";
import { setDataCharts } from "../../modules/Pages/Stats/Store";

const LocationSelector = ({ type, id, formData }) => {
  const dispatch = useDispatch();

  const address = useSelector((state) => state.governorates?.get_governorate);
  const governorates = address.governorates.data?.Governorates || [];
  const regions = address.regions?.data?.Regions || [];
  const town = address.town?.data?.Towns || [];

  const [selectedGovernorate, setSelectedGovernorate] = useState(formData?.address?.[0]?.value.id || "");
  const [selectedRegion, setSelectedRegion] = useState(formData?.address?.[1]?.value.id || "");

  useEffect(() => {
    dispatch(getGovernorate());
    if (selectedGovernorate) {
      dispatch(getRegionForGovernorate(selectedGovernorate));
    }
    if (selectedRegion) {
      dispatch(getTwonForRegion(selectedRegion));
    }
  }, [dispatch, selectedGovernorate, selectedRegion]);

  const handleGovernorateChange = (e) => {
    const governorateId = e.target.value;
    setSelectedGovernorate(governorateId);
    setSelectedRegion(""); // Reset region when governorate changes
    dispatch(getRegionForGovernorate(governorateId));
  };

  const handleRegionChange = (e) => {
    const regionId = e.target.value;
    setSelectedRegion(regionId);
    dispatch(getTwonForRegion(regionId));
  };

  const handleTownChange = (e) => {
    const townId = e.target.value;
    const selectedData = {
      governorate_id: selectedGovernorate,
      region_id: selectedRegion,
      town_id: townId,
    };

    switch (type) {
      case "property":
        dispatch(setData(selectedData));
        break;
      case "search":
        dispatch(setDataForSearch(selectedData));
        break;
      case "employee":
        dispatch(setDataForEmployee(selectedData));
        break;
      case "charts":
        dispatch(setDataCharts(selectedData));
        break;
      default:
        dispatch(setDataForProjects(selectedData));
    }

    console.log(selectedGovernorate, " xxxx ", selectedRegion, " xxx ", townId);
  };

  const governorateOptions = [
    { label: "المحافظات", value: "" },
    ...governorates.map((gov) => ({
      label: gov.name,
      value: gov.id,
    })),
  ];

  const regionOptions = [
    { label: "البلدات", value: "" },
    ...regions.map((region) => ({
      label: region.name,
      value: region.id,
    })),
  ];

  const townOptions = [
    { label: "المناطق", value: "" },
    ...town.map((town) => ({
      label: town.name,
      value: town.id,
    })),
  ];

  return (
    <>
      {type === "search" ? (
        <>
          <CFormSelect
            options={governorateOptions}
            name="governorate_id"
            onChange={handleGovernorateChange}
            value={selectedGovernorate}
          />
          {selectedGovernorate && (
            <CFormSelect
              options={regionOptions}
              name="region_id"
              onChange={handleRegionChange}
              value={selectedRegion}
            />
          )}
          {selectedRegion && (
            <CFormSelect
              options={townOptions}
              name="town_id"
              onChange={handleTownChange}
            />
          )}
        </>
      ) : (
        <>
          <CFormSelect
            options={governorateOptions}
            name="governorate_id"
            onChange={handleGovernorateChange}
            required={!id}
            value={selectedGovernorate}
          />
          {selectedGovernorate && (
            <CFormSelect
              options={regionOptions}
              name="region_id"
              onChange={handleRegionChange}
              required={!id}
              value={selectedRegion}
            />
          )}
          {selectedRegion && (
            <CFormSelect
              options={townOptions}
              name="town_id"
              onChange={handleTownChange}
              required={!id}
            />
          )}
        </>
      )}
    </>
  );
};

export default LocationSelector;
