import { useState } from "react";
import { useAuthStore } from "../../../../store/auth.store";
import { useNavigate } from "react-router-dom";

export default function Avatar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const handleLogout = () => {
    clearUser();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-pink-200 hover:cursor-pointer "
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://www.kindpng.com/picc/m/150-1503949_computer-icons-user-profile-male-profile-icon-png.png"
          alt="user photo"
        />
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm absolute inset-[100%_0_auto_auto]"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 ">{user?.hoTen}</span>
            <span className="block text-sm  text-gray-500 truncate ">
              {user?.email}
            </span>
          </div>
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Thông tin
              </a>
            </li>
            <li>
              <p
                onClick={handleLogout}
                className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Đăng xuất
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
