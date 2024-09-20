import { api } from "../../../boot/axios"
import * as ep from './EndPoint'

//CATEGORY
export const GET_ALL_CATEGORY_SERVICE=()=>{
return api.get(ep.GET_ALL_CATEGORY_SERVICE)
}
export const GET_CATEGORY_SERVICE_BY_ID =(id)=>{
    return api.post(ep.GET_CATEGORY_SERVICE_BY_ID,id)
}
export const CREATE_CATEGORY_SERVICE =(data)=>{
    return api.post(ep.CREATE_CATEGORY_SERVICE,data)
}
export const EDIT_CATEGORY_SERVICE =(data)=>{
    return api.post(ep.EDIT_CATEGORY_SERVICE,data)
}
export const DELETE_CATEGORY_SERVICE =(id)=>{
    return api.post(ep.DELETE_CATEGORY_SERVICE,id)
}
export const GET_PROVIDERS_CATEGORY_SERVICE =(id)=>{
    return api.post(ep.GET_PROVIDERS_CATEGORY_SERVICE,id)
}

//PROVIDERS

    export const GET_PROVIDER_SERVICE=(id)=>{
    return api.post(ep.GET_PROVIDER_SERVICE,id)
    }
    export const GET_PROVIDER_SERVICE_CATEGORY=(id)=>{
       const res= api.post(ep.GET_PROVIDER_SERVICE_CATEGORY,id)
       console.log('resssssssss',res)
    return res
    }

    export const CREATE_PROVIDER_SERVICE =(data)=>{
        return api.post(ep.CREATE_PROVIDER_SERVICE,data)
    }
    export const ADD_PHOTO_PROVIDER_SERVICE =(data)=>{
        return api.post(ep.ADD_PHOTO_PROVIDER_SERVICE,data)
    }
    export const DELETE_PHOTO_PROVIDER_SERVICE =(data)=>{
        return api.post(ep.DELETE_PHOTO_PROVIDER_SERVICE,data)
    }
    export const EDIT_PROVIDER_SERVICE =(data)=>{
        return api.post(ep.EDIT_PROVIDER_SERVICE,data)
    }
    export const DELETE_PROVIDER_SERVICE =(id)=>{
        return api.post(ep.DELETE_PROVIDER_SERVICE,id)
    }
    export const DISABLE_PROVIDER_SERVICE =(id)=>{
        return api.post(ep.DISABLE_PROVIDER_SERVICE,id)
    }
    export const LOCKED_PROVIDER_SERVICE =(id)=>{
        return api.post(ep.LOCKED_PROVIDER_SERVICE,id)
    }