import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getRegisterApi } from "../../../service/auth.api";
import { useAuthStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  taiKhoan: z.string().nonempty("Tài khoản không được để trống"),
  matKhau: z.string().nonempty("Mật khẩu không được để trống"),
  email: z
    .string()
    .nonempty("Email không được để trống")
    .regex(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Vui lòng nhập đúng định dạng"
    ),
  soDt: z
    .string()
    .nonempty("Số điện thoại không được để trống")
    .regex(/^\d+$/, "Số điện thoại chỉ được chứa chữ số"),
  hoTen: z.string().nonempty("Họ tên không được để trống"),
  dieuKhoan: z.boolean().refine((val) => val === true, {
    message: "Bạn phải đồng ý điều khoản",
  }),
});

export default function Register() {
  const navigate = useNavigate();
  const setAlert = useAuthStore((state) => state.setAlert);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      dieuKhoan: false,
    },
    resolver: zodResolver(schema),
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
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tài khoản <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tài khoản"
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
                placeholder="Nhập mật khẩu"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("matKhau")}
              />
              {errors.matKhau?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.matKhau?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Họ tên đầy đủ"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("hoTen")}
              />
              {errors.hoTen?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.hoTen?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300"
                {...register("soDt")}
              />
              {errors.soDt?.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.soDt?.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-400 border-gray-300 rounded"
                {...register("dieuKhoan")}
              />
              
              <label className={`ml-2 text-sm text-gray-700 ${errors.dieuKhoan?.message ? "text-red-700" :""}`}>
                Tôi đồng ý với
                <a
                  href="#"
                  className="text-purple-600 ml-1 font-medium hover:underline"
                >
                  Điều khoản sử dụng <span className="text-red-500">*</span>
                </a>
              </label>
            </div>
           
            <button
              type="submit"
              className="flex justify-center items-center w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              {isPending && <ArchiveRestore width={20} />}
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
