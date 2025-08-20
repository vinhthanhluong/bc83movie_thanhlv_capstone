import { ArchiveRestore, LoaderCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { getLoginApi } from "../../../service/auth.api";
import { useAuthStore } from "../../../store/auth.store";

const schema = z.object({
  taiKhoan: z.string().nonempty("Tài khoản không được để trống"),
  matKhau: z.string().nonempty("Mật khẩu không được để trống"),
});

export default function Login() {
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);
  const setAlert = useAuthStore((state) => state.setAlert);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: zodResolver(schema),
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (values) => getLoginApi(values),
    onSuccess: (user) => {
      if (!user) return;
      navigate(user.maLoaiNguoiDung === "QuanTri" ? "/admin" : "/");
      localStorage.setItem("USER", JSON.stringify(user));
      setUser(user);
      setAlert({
        color: "green",
        text: "Đăng nhập thành công",
      });
    },
    onError: (error) => {
      setAlert({
        color: "red",
        text: error?.response?.data?.content,
      });
    },
  });

  const handleSubmitLogin = (values) => {
    mutate(values);
  };

  const userLocal = JSON.parse(localStorage.getItem("USER"));
  if (userLocal) {
    return (
      <Navigate to={userLocal.maLoaiNguoiDung === "QuanTri" ? "/admin" : "/"} />
    );
  }

  return (
    <div className="relative p-5 z-0 min-h-screen flex items-center justify-center bg-black bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 px-5 relative after:content-[''] after:inset-0 after:absolute after:-z-10 after:bg-black/20">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        <div className="hidden md:block w-1/2 bg-white ">
          <img
            src="https://as2.ftcdn.net/v2/jpg/14/54/25/43/1000_F_1454254383_N4RU8sE7d1AgrbNEIdmXmS3RwSufGT0A.jpg"
            alt="Login Illustration"
            className="max-w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>

          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleSubmitLogin)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tài khoản <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Tài Khoản"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("taiKhoan")}
              />
              {errors.taiKhoan?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.taiKhoan?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Mật Khẩu"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("matKhau")}
              />
              {errors.matKhau?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.matKhau?.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center ">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-400 border-gray-300 rounded"
                />
                Ghi Nhớ
              </label>
              <a href="#" className="hover:underline">
                Quên mật khẩu
              </a>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              {isPending && (
                <LoaderCircle className="animate-spin" width={20} />
              )}
              Đăng Nhập
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Tôi chưa có tài khoản?
            <button
              onClick={() => navigate("/register")}
              className="cursor-pointer text-pink-500 hover:underline font-semibold ml-2"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
