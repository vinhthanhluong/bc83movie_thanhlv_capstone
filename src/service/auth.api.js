import api from "./api";

export const getLoginApi = async (data) => {
  try {
    const response = await api.post(`QuanLyNguoiDung/DangNhap`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getLoginApi ~ error:", error);
    throw error;
  }
};

export const getRegisterApi = async (data) => {
  try {
    const response = await api.post(`QuanLyNguoiDung/DangKy`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getRegisterApi ~ error:", error);
    throw error;
  }
};

