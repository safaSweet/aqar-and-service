
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConfig } from './Store'; 

export const Get_config = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, [dispatch]);

  const {
    Status,
    publicationType,
    serviceAndVirtues,
    ownershipType,
    claddingLevel,
    rentalPeriod,
    roomType,
    CategoryRealEstate,
    // direction,
  } = useSelector((state) => state.Properties);
  const directions = useSelector((state) => state.Properties.direction);

  const status_property=Status.filter((item)=>item.category==='property')
  const status_all=Status.filter((item)=>item.category==='all')
  const status_request=Status.filter((item)=>item.category==='request')


  return {
    status_property,
    status_all,
    status_request,
    Status,
    rentalPeriod,
    publicationType,
    serviceAndVirtues,
    ownershipType,
    claddingLevel,
    roomType,
    CategoryRealEstate,
    directions,
  };
};

export const createOptions = (data, labelField = 'type', valueField = 'id') => {
  // استخدم حقول مختلفة بناءً على نوع البيانات
  const actualLabelField = data && data.length > 0 && data[0].period ? 'period' : labelField;

  const defaultOption = {
    label: 'اختر',
    value: '',
  };

  const options = data?.map((item) => ({
    label: item[actualLabelField],
    value: item[valueField],
  })) || [];

  // return [ ...options];
  return [defaultOption, ...options];
};
