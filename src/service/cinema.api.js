import api from "./api";

export const getCinemaDetail = async (movieId) => {
  try {
    const response = await api.get(`/QuanLyRap/LayThongTinLichChieuPhim`, {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getCinemaDetail ~ error:", error)
    throw error;
  }
};

export const getCinemaTicket = async (ticketId) => {
  try {
    const response = await api.get(`/QuanLyDatVe/LayDanhSachPhongVe`, {
      params: {
        MaLichChieu: ticketId,
      },
    });
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ getCinemaTicket ~ error:", error)
    throw error;
  }
};

export const addTicket = async (data) => {
  try {
    const response = await api.post(`/QuanLyDatVe/DatVe`, data);
    return response.data.content;
  } catch (error) {
    console.log("🌲 ~ addTicket ~ error:", error)
    throw error;
  }
};
