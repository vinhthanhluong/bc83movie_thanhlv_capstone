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
