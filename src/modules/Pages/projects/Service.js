import { api } from "../../../boot/axios";
import * as ep from "./EndPoint";

function toQueryString(params) {
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
}


// residential projects

export const GET_ALL_PROJECT = () => {
  return api.get(ep.GET_ALL_PROJECT);
};
// export const GET_ALL_PROJECT = () => {
//   return api.get(ep.GET_ALL_PROJECT);
// };
export const CREATE_PROJECT = (data) => {
  return api.post(ep.CREATE_PROJECT, data);
};
export const DELETE_PROJECT = (id) => {
  return api.delete(`${ep.DELETE_PROJECT}/${id}`);
};
export const EDIT_PROJECT = (data) => {
  return api.post(ep.EDIT_PROJECT, data);
};
export const ADD_PHOTO_PROJECT = (data) => {
  return api.post(ep.ADD_PHOTO_PROJECT, data);
};
export const DELETE_PHOTO_PROJECT = (data) => {
  return api.post(ep.DELETE_PHOTO_PROJECT, data);
};

// type-specification/get

export const GET_ALL_SPECIFICETION_TYPE = () => {
  return api.get(ep.GET_ALL_SPECIFICETION_TYPE);
};

// residential-complex/specifications
export const CREATE_SPECIFICETION = (data) => {
  return api.post(ep.CREATE_SPECIFICETION, data);
};

///tower/classification

export const GET_TOWER_CLASSIFICATION = () => {
  return api.get(ep.GET_TOWER_CLASSIFICATION);
};

// TOWER

export const GET_TOWER = (id) => {
  return api.get(`${ep.GET_TOWERS}/${id}`);
};
export const CREATE_TOWER = (data) => {
  return api.post(ep.CREATE_TOWER, data);
};
export const EDIT_TOWER = (data) => {
  return api.post(ep.EDIT_TOWER, data);
};
export const DELETE_TOWER = (id) => {
  return api.delete(`${ep.DELETE_TOWER}/${id}`);
};
export const ADD_PHOTO_TOWER = (data) => {
    return api.post(ep.ADD_PHOTO_TOWER, data);
};
export const DELETE_PHOTO_TOWER = (data) => {
  return api.post(ep.DELETE_PHOTO_TOWER, data);
};

// FLOOR

    export const GET_FLOOR = (id) => {
      return api.post(ep.GET_FLOORS,id);
    };
    export const CREATE_FLOOR = (data) => {
      return api.post(ep.CREATE_FLOOR, data);
    };
    export const EDIT_FLOOR = (data) => {
      return api.post(ep.EDIT_FLOOR, data);
    };
    export const DELETE_FLOOR = (id) => {
      return api.post(ep.DELETE_FLOOR,id);
    };
    
    // PROPERTY

    
        export const GET_FLOORS_PROPERTY_STATUS = (params) => {
          const queryString = toQueryString(params);
          return api.get(`${ep.GET_FLOORS_PROPERTY_STATUS}${queryString}`);
        };
        export const GET_FLOORS_PROPERTY = (id) => {
          return api.post(ep.GET_FLOORS_PROPERTY,id);
        };
        export const CREATE_FLOOR_PROPERTY = (data) => {
          return api.post(ep.CREATE_FLOOR_PROPERTY, data);
        };
        export const EDIT_FLOOR_PROPERTY = (data) => {
          return api.post(ep.EDIT_FLOOR_PROPERTY, data);
        };
        export const DELETE_FLOOR_PROPERTY = (id) => {
          return api.post(ep.DELETE_FLOOR_PROPERTY,id);
        };
        export const ADD_PHOTO_TOWER_PROPERTY = (data) => {
            return api.post(ep.ADD_PHOTO_TOWER_PROPERTY, data);
        };
        export const DELETE_PHOTO_TOWER_PROPERTY = (data) => {
          return api.post(ep.DELETE_PHOTO_TOWER_PROPERTY, data);
        };
        export const ADD_ROOM_TOWER_PROPERTY = (data) => {
            return api.post(ep.ADD_ROOM_TOWER_PROPERTY, data);
        };
        export const DELETE_ROOM_TOWER_PROPERTY = (data) => {
          return api.post(ep.DELETE_ROOM_TOWER_PROPERTY, data);
        };
        export const ADD_PERIOD_TOWER_PROPERTY = (data) => {
            return api.post(ep.ADD_PERIOD_TOWER_PROPERTY, data);
        };
        export const DELETE_PERIOD_TOWER_PROPERTY = (data) => {
          return api.post(ep.DELETE_PERIOD_TOWER_PROPERTY, data);
        };











    // config

      export const GET_CONFIG = (params) => {
        const queryString = toQueryString(params);
        return api.get(`${ep.GET_CONFIG}${queryString}`);
      };