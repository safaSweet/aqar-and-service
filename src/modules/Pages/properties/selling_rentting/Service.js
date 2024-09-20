import { api } from "../../../../boot/axios";
import * as ep from "./EndPoint";
function toQueryString(params) {
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
}


export const GET_PROPERTIES = (params) => {
  const queryString = toQueryString(params);
  return api.get(`${ep.GET_PROPERTIES}${queryString}`);
};
export const SEARCH_PROPERTY = (params) => {
  const queryString = toQueryString(params);
  return api.get(`${ep.SEARCH_PROPERTY}${queryString}`);
};
export const CREATE_PROPERTIES = (data) => {
  return api.post(ep.ADD_PROPERTIES, data);
};
export const UPDATE_PROPERTIES = (data) => {
  return api.post(ep.UPDATE_PROPERTIES, data);
};
export const DELETE_PROPERTIES = (id) => {
  return api.post(ep.DELETE_PROPERTIES, id);
};
export const CHANGE_PROPERTY_STATUS = (data) => {
  return api.post(ep.CHANGE_PROPERTY_STATUS, data);
};
export const CHANGE_PROPERTY_PUBLICATION = (data) => {
  return api.post(ep.CHANGE_PROPERTY_PUBLICATION, data);
};
