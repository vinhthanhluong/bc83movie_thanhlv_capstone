import api from "./api";

export const getUserApi = async (numItem = 10, numPagi = 1) => {
  try {
    const response = await api.get(
      `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${numPagi}&soPhanTuTrenTrang=${numItem}`
    );
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getUserApi ~ error:", error);
    throw error;
  }
};

export const getTypeUserApi = async () => {
  try {
    const response = await api.get(`QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getTypeUserApi ~ error:", error);
    throw error;
  }
};



// export const getDetailUserApi = async (id) => {
//   try {
//     const response = await api.post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${id}`);
//     return response.data.content;
//   } catch (error) {
//     console.log("🌲 ~ getDetailUserApi ~ error:", error);
//     throw error;
//   }
// };

export const addUserApi = async (data) => {
  try {
    const response = await api.post(`QuanLyNguoiDung/ThemNguoiDung`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ addUserApi ~ error:", error);
    throw error;
  }
};

export const deleteUserApi = async (id) => {
  try {
    await api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`);
  } catch (error) {
    console.log("🌲 ~ deleteUserApi ~ error:", error);
    throw error;
  }
};

export const updateUserApi = async (data) => {
  try {
    const response = await api.put(
      `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data
    );
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ updateUserApi ~ error:", error);
    throw error;
  }
};

export const getSearchUserApi = async (key) => {
  try {
    const response = await api.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${key}`);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getSearchUserApi ~ error:", error);
    throw error;
  }
};