import  {api}  from '../../boot/axios.ts';
import * as ep from './EndPoint'

export const GET_GOVERNORATES=()=>{
return api.get(ep.GET_ALL_GOVERNORATES)
}
export const GET_REGION_GOVERNORATES=(id)=>{
// return api.get(ep.GET_REGION_OF_GOVERNORATES);
return api.get(`${ep.GET_REGION_OF_GOVERNORATES}/${id}`);
}

export const GET_TOWN_REGION=(id)=>{
return api.get(`${ep.GET_TOWN_OF_REGION}/${id}`)
}
export const GET_REGIONS=(id)=>{
return api.get(ep.GET_ALL_REGIONS);
}

