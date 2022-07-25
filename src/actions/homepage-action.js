import { FETCH_DOGS } from "./types";
import HomepageService from "../services/homepage-service";

export const getAllDogs = () => async (dispatch) => {
  try {
    const res = await HomepageService.getAllDogs();
    dispatch({
      type: FETCH_DOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};