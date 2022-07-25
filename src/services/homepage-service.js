import http from "../utils/http-common";
const getAllDogs = () => {
  return http.get("/doggos?filter=mp4,webm");
};

const HomepageService = {
  getAllDogs,
};
export default HomepageService;
