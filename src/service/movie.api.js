import api from "./api";

export const getBannerMovie = async () => {
  try {
    const response = await api.get("QuanLyPhim/LayDanhSachBanner");
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getBannerMovie ~ error:", error);
    throw error;
  }
};

export const getMoviePagi = async (numItem = 10, numPagi = 1) => {
  try {
    const response = await api.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${numPagi}&soPhanTuTrenTrang=${numItem}`
    );
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getMoviePagi ~ error:", error);
    throw error;
  }
};
