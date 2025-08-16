import Swal from "sweetalert2";

export const confirmDialog = (options = {}) => {
  return Swal.fire({
    title: options.title || "Bạn có chắc chắn không?",
    text: options.text || "",
    icon: options.icon || "warning",
    showCancelButton: true,
    confirmButtonText: options.confirmText || "Có",
    cancelButtonText: options.cancelText || "Không",
    confirmButtonColor: "#28a745",
    cancelButtonColor: "#dc3545",
  });
};

export const showDialog = (options = {}) => {
  return Swal.fire({
    title: options.title || "",
    text: options.text || "",
    icon: options.icon || "success",
    // #28a745 xanh
    // #dc3545 do
    // confirmButtonColor: options.confirmColor || "#28a745",
    confirmButtonColor:
      options.confirmColor || options.icon == "error" ? "#dc3545" : "#28a745",
    confirmButtonText: options.confirmText || "Xác nhận",
  });
};
