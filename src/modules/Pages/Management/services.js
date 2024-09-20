import { api } from "../../../boot/axios";
import * as ep from "./end_point";

// branches

export const GET_ALL_BRANCHES = () => {
  return api.get(ep.GET_ALL_BRANCHES);
};
export const GET_ALL_EMPLOYEE = () => {
  return api.get(ep.GET_ALL_EMPLOYEE);
};
export const GET_ALL_SESSION = () => {
  return api.get(ep.GET_ALL_SESSIONS);
};

export const CREATE_BRANCH = (data) => {
  return api.post(ep.CREATE_BRANCH, data);
};
export const EDIT_BRANCH = (data) => {
  return api.post(ep.EDIT_BRANCH, data);
};
export const DELETE_BRANCH = (data) => {
  return api.post(ep.DELETE_BRANCH, data);
};
export const ADD_REGION_TO_BRANCH_ = (data) => {
  return api.post(ep.ADD_REGION_TO_BRANCHE, data);
};
export const ADD_EMPLOYEE_TO_BRANCH = (data) => {
  return api.post(ep.ADD_EMPLOYEE_TO_BRANCHE, data);
};
export const ADD_SESSION_TO_BRANCH = (data) => {
  return api.post(ep.ADD_SESSION_TO_BRANCHE, data);
};
export const ADD_SESSION_TO_EMPLOYEE = (data) => {
  return api.post(ep.ADD_SESSION_TO_EMPLOYEE, data);
};

// employee

export const DELETE_EMPLOYEE = (data) => {
  return api.post(ep.DELETE_EMPLOYEE, data);
};
export const CREATE_EMPLOYEE = (data) => {
  return api.post(ep.CREATE_EMPLOYEE, data);
};
export const EDIT_EMPLOYEE = (data) => {
  return api.post(ep.EDIT_EMPLOYEE, data);
};

//
export const DELETE_SESSION = (data) => {
  return api.post(ep.DELETE_SESSION, data);
};
export const CREATE_SESSION = (data) => {
  return api.post(ep.CREATE_SESSION, data);
};
export const EDIT_SESSION = (data) => {
  return api.post(ep.EDIT_SESSION, data);
};

// MANAGER

export const GET_ALL_MANAGERS = () => {
  return api.get(ep.GET_ALL_MANAGERS);
};
export const DELETE_MANAGER = (data) => {
  return api.post(ep.DELETE_MANAGER, data);
};
export const CREATE_MANAGER = (data) => {
  return api.post(ep.CREATE_MANAGER, data);
};
export const EDIT_MANAGER = (data) => {
  return api.post(ep.EDIT_MANAGER, data);
};


export const SHOW_MANAGERS_BRANCH = (data) => {
  return api.post(ep.SHOW_MANAGER_BRANCH,DataTransferItem);
};
export const DELETE_MANAGER_BRANCH = (data) => {
  return api.post(ep.DELETE_MANAGER_BRANCH, data);
};
export const EDIT_MANAGER_BRANCH= (data) => {
  return api.post(ep.EDIT_MANAGER_BRANCH, data);
};


