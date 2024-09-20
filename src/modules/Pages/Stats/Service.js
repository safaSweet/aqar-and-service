import { api } from "../../../boot/axios";
import * as ep from "./End_point";


export const CHARTS = (data) => {
    return api.post(ep.CHARTS, data);
  };
export const NUMBERS = () => {
    return api.get(ep.NUMBERS);
  };