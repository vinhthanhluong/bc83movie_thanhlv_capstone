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
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${numPagi}&soPhanTuTrenTrang=${numItem}`
    );
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getMoviePagi ~ error:", error);
    throw error;
  }
};

export const getMovieDetail = async (id) => {
  try {
    const response = await api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getMovieDetail ~ error:", error);
    throw error;
  }
};

export const addMovie = async (data) => {
  try {
    const response = await api.post(`/QuanLyPhim/ThemPhimUploadHinh`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ addMovie ~ error:", error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`);
  } catch (error) {
    console.log("🌲 ~ deleteMovie ~ error:", error);
    throw error;
  }
};

export const updateMovie = async (data) => {
  try {
    const response = await api.post(`/QuanLyPhim/CapNhatPhimUpload`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ updateMovie ~ error:", error);
    throw error;
  }
};