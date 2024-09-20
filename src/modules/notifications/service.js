import { api } from "../../boot/axios"
import * as ep from './end_point'

export const GET_NOTIFICATIONS=()=>{
    return api.get(ep.GET_NOTIFICATIONS)
 }
 export const SEND_NOTIFICATION=(data)=>{
    return api.post(ep.SEND_NOTIFICATION,data)
 }
 
 export const IS_READY=(id)=>{
    return api.post(ep.IS_READY,id)
 }
