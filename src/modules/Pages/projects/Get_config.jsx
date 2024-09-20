
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConfig } from './Store'; 
export const Get_config = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, [dispatch]);

  const {
    photo_type,
    classifications,
    services,
    type_specifications,
  } = useSelector((state) => state.projects.get_projects);

  return {
    photo_type,
    classifications,
    services,
    type_specifications,
  };
};

export const createOptions = (data, labelField = 'type', valueField = 'id') => {
  const defaultOption = {
    label: 'اختر ما يناسبك',
    value: '',
  };

  // If the data is the photo_type array, handle it differently
  if (Array.isArray(data) && typeof data[0] === 'string') {
    const options = data.map((item) => ({
      label: item,
      value: item,
    }));
    return [defaultOption, ...options];
  }

  const options = data?.map((item) => ({
    label: item[labelField],
    value: item[valueField],
  })) || [];

  return [defaultOption, ...options];
};
