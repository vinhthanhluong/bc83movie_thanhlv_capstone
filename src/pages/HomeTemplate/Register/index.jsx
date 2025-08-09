import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getRegisterApi } from "../../../service/auth.api";
import { useAuthStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const setAlert = useAuthStore((state) => state.setAlert);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values) => getRegisterApi(values),
    onSuccess: (data) => {
      setAlert({
        color: "green",
        text: "Đăng ký thành công",
      });
    },
    onError: (error) => {
      setAlert({
        color: "red",
        text: error?.response?.data?.content,
      });
    },
  });

  const handleSubmitRegister = (values) => {
    mutate(values);
  };

  return (
    <div className="relative p-5 z-0 min-h-screen flex items-center justify-center bg-black bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 px-5 relative after:content-[''] after:inset-0 after:absolute after:-z-10 after:bg-black/20">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full">
        <div className="hidden md:block w-1/2 bg-cover bg-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/14/54/25/43/1000_F_1454254383_N4RU8sE7d1AgrbNEIdmXmS3RwSufGT0A.jpg"
            alt="Login Illustration"
            className="max-w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Đăng ký</h2>
          <form
            // method="POST"
            className="space-y-4"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tài khoản
              </label>
              <input
                type="text"
                placeholder="Nhập tài khoản"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("taiKhoan")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("matKhau")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <input
                type="text"
                placeholder="Họ tên đầy đủ"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("hoTen")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("email")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("soDt")}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-400 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                Tôi đồng ý với
                <a
                  href="#"
                  className="text-purple-600 ml-1 font-medium hover:underline"
                >
                  Điều khoản sử dụng
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              {isPending && (
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-white/20 animate-spin fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              Đăng ký
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            Đã có tài khoản?
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer ml-1 text-purple-600 font-medium hover:underline"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
