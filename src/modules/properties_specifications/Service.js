import { api } from "../../boot/axios"
import * as ep from "./End_Point";

export const GET_CONFIG=()=>{
    const response= api.get(ep.GET_CONFIG);
    console.log('222222222222222')
    return response//.data.msg;
}
//ROOMS
export const GET_ALL_ROOMS=()=>{
    const response= api.get(ep.GET_ROOMS);
    return response;
}
export const CREATE_ROOMS=(data)=>{
    api.post(ep.CREATE_ROOMS,data)

}
export const EDIT_ROOMS=(data)=>{
    api.post(ep.UPDATE_ROOMS,data)
}
export const DELETE_ROOMS=(id)=>{
    api.get(`${ep.DELETE_ROOMS}/${id}`);
}

//DIRECTIONS
export const GET_ALL_DIRECTIONS=()=>{
    const response= api.get(ep.GET_DIRECTIONS);
    return response;
}
export const CREATE_DIRECTION=(data)=>{
    api.post(ep.CREATE_DIRECTION,data)

}
export const EDIT_DIRECTION=(data)=>{
    api.post(ep.UPDATE_DIRECTION,data)
}
export const DELETE_DIRECTION=(id)=>{
    api.get(`${ep.DELETE_DIRECTION}/${id}`);
}

//PUBLICATION TYPE
export const GET_ALL_PUBLICATIONS=()=>{
    const response= api.get(ep.GET_PUBLICATIONS);
    return response;
}
export const CREATE_PUBLICATION=(data)=>{
    api.post(ep.CREATE_PUBLICATION,data)

}
export const EDIT_PUBLICATION=(data)=>{
    api.post(ep.UPDATE_PUBLICATION,data)
}
export const DELETE_PUBLICATION=(id)=>{
    api.get(`${ep.DELETE_PUBLICATION}/${id}`);
}
//OWNERSHIP TYPE
export const GET_ALL_OWNERSHIP=()=>{
    const response= api.get(ep.GET_OWNERSHIP_TYPE);
    return response;
}
export const CREATE_OWNERSHIP=(data)=>{
    api.post(ep.CREATE_OWNERSHIP_TYPE,data)

}
export const EDIT_OWNERSHIP=(data)=>{
    api.post(ep.UPDATE_OWNERSHIP_TYPE,data)
}
export const DELETE_OWNERSHIP=(id)=>{
    api.get(`${ep.DELETE_OWNERSHIP_TYPE}/${id}`);
}
//CATEGORY TYPE
export const GET_ALL_CATEGORY=()=>{
    const response= 
    api.get(ep.GET_CATEGORY);
    return response;
}
export const CREATE_CATEGORY=(data)=>{
    api.post(ep.CREATE_CATEGORY,data)

}
export const EDIT_CATEGORY=(data)=>{
    api.post(ep.UPDATE_CATEGORY,data)
}
export const DELETE_CATEGORY=(id)=>{
    api.get(`${ep.DELETE_CATEGORY}/${id}`);
}
//STATUS TYPE
export const GET_ALL_STATUS=()=>{
    const response= 
    api.get(ep.GET_STATUS);
    return response;
}
export const CREATE_STATUS=(data)=>{
    api.post(ep.CREATE_STATUS,data)

}
export const EDIT_STATUS=(data)=>{
    api.post(ep.UPDATE_STATUS,data)
}
export const DELETE_STATUS=(id)=>{
    api.get(`${ep.DELETE_STATUS}/${id}`);
}
//OWNERSHIP TYPE
export const GET_ALL_CLADDING=()=>{
    const response= 
    api.get(ep.GET_CLADDING);
    return response;
}
export const CREATE_CLADDING=(data)=>{
    api.post(ep.CREATE_CLADDING,data)

}
export const EDIT_CLADDING=(data)=>{
    api.post(ep.UPDATE_CLADDING,data)
}
export const DELETE_CLADDING=(id)=>{
    api.get(`${ep.DELETE_CLADDING}/${id}`);
}
//SERVICE_VIRTUES TYPE
export const GET_ALL_SERVICE_VIRTUES=()=>{
    const response=
     api.get(ep.GET_SERVICE_VIRTUES);
    return response;
}
export const CREATE_SERVICE_VIRTUES=(data)=>{
    api.post(ep.CREATE_SERVICE_VIRTUES,data)

}
export const EDIT_SERVICE_VIRTUES=(data)=>{
    api.post(ep.UPDATE_SERVICE_VIRTUES,data)
}
export const DELETE_SERVICE_VIRTUES=(id)=>{
    api.get(`${ep.DELETE_SERVICE_VIRTUES}/${id}`);
}
// type pledge
export const GET_ALL_TYPE_PLEDGE=()=>{
    const response=
     api.get(ep.GET_ALL_TYPE_PLEDGE);
    return response;
}
export const CREATE_TYPE_PLEDGE=(data)=>{
    api.post(ep.CREATE_TYPE_PLEDGE,data)

}
export const EDIT_TYPE_PLEDGE=(data)=>{
    api.post(ep.UPDATE_TYPE_PLEDGE,data)
}
export const DELETE_TYPE_PLEDGE=(id)=>{
    api.delete(`${ep.DELETE_TYPE_PLEDGE}/${id}`);
}
// STAGE
export const GET_ALL_STAGE=()=>{
    const response=
     api.get(ep.GET_STAGE);
    return response;
}
export const CREATE_STAGE=(data)=>{
    api.post(ep.CREATE_STAGE,data)

}
export const EDIT_STAGE=(data)=>{
    api.post(ep.UPDATE_STAGE,data)
}
export const DELETE_STAGE=(id)=>{
    api.delete(`${ep.DELETE_STAGE}/${id}`);
}
// STAGE TYPE

export const CREATE_TYPE_STAGE=(data)=>{
    api.post(ep.CREATE_TYPE_STAGE,data)

}
export const DELETE_TYPE_STAGE=(id)=>{
    api.post(ep.DELETE_TYPE_STAGE,id);
}


// 