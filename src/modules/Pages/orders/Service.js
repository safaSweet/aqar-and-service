import { api } from "../../../boot/axios"
import * as ep from './EndPoint'

function toQueryString(params) {
   const queryString = Object.keys(params)
     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
     .join('&');
   return queryString ? `?${queryString}` : '';
 }
// CATEGORY SERVICE REQUEST
export const CATEGORY_SERVICE_REQUEST=()=>{
   return api.get(ep.CATEGORY_SERVICE_REQUEST)
}
export const DELETE_CATEGORY_SERVICE_REQUEST=(id)=>{
   return api.post(ep.DELETE_CATEGORY_SERVICE_REQUEST,id)
}
export const ACCESS_CATEGORY_SERVICE_REQUEST=(id)=>{
   return api.post(ep.ACCESS_CATEGORY_SERVICE_REQUEST,id)
}
export const UNACCESS_CATEGORY_SERVICE_REQUEST=(id)=>{
   return api.post(ep.UNACCESS_CATEGORY_SERVICE_REQUEST,id)
}
// CATEGORY SERVICE REQUEST
export const CATEGORY_SERVICE_PROVIDER_REQUEST=()=>{
   return api.get(ep.CATEGORY_SERVICE_PROVIDER_REQUEST)
}
export const DELETE_CATEGORY_SERVICE_PROVIDER_REQUEST=(id)=>{
   return api.post(ep.DELETE_CATEGORY_SERVICE_PROVIDER_REQUEST,id)
}
export const ACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST=(id)=>{
   return api.post(ep.ACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST,id)
}
export const UNACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST=(id)=>{
   return api.post(ep.UNACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST,id)
}

// PROPERTIES REQUEST

   export const PROPERTIES_REQUEST=(params)=>{
      const queryString = toQueryString(params);
      return api.get(`${ep.PROPERIES_REQUEST}${queryString}`)
   }
   export const CHANGE_STATUS_PROPERIES_REQUEST=(data)=>{
      return api.post(ep.CHANGE_STATUS_PROPERIES_REQUEST,data)
   }
   //opration
   export const OBRATION_REQUEST=(params)=>{
      const queryString = toQueryString(params);
      return api.get(`${ep.OBRATION_REQUEST}${queryString}`)
   }
   export const CHANGE_STATUS_OBRATION_REQUEST=(data)=>{
      return api.post(ep.CHANGE_STATUS_OBRATION_REQUEST,data)
   }
   
   // CLOTHES
   
   export const CLOTHES_REQUEST=(params)=>{
      const queryString = toQueryString(params);
      return api.get(`${ep.CLOTHES_REQUEST}${queryString}`)
   }
   export const CHANGE_STATUS_CLOTHE_REQUEST=(data)=>{
      return api.post(ep.CHANGE_STATUS_CLOTHES_REQUEST,data)
   }
   
   
   // SEARCH 

   export const SEARCH_REQUEST=(data)=>{
      return api.post(ep.SEARCH_REQUEST,data)
   }
   export const TYPE_REQUEST=(data)=>{
      return api.get(ep.TYPE_REQUEST,data)
   }