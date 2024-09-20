import { api } from "../../boot/axios"
import * as ep from './end_point'


export const GET_ALL_ROLES_USERS=()=>{
    return api.get(ep.GET_ALL_USERS)
}
export const GET_ALL_ROLES=()=>{
    return api.get(ep.GET_ALL_ROLES)
}
export const GET_ALL_PERMISSION=()=>{
    return api.get(ep.GET_ALL_PERMISSION)
}
export const ROLE2USER=(data)=>{
    return api.post(ep.ROLE2USER,data)
}
export const PERMISSIONS2ROLE=(data)=>{
    return api.post(ep.PERMISIONS2ROLE,data)
}