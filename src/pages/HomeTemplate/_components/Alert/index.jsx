import { tv } from "tailwind-variants";
import { useEffect } from "react";
import { useAuthStore } from "../../../../store/auth.store";

export default function Alert({ color, text }) {
  const boxAlert = tv({
    base: "flex items-center p-4 border-t-4",
    variants: {
      color: {
        red: "text-red-800 border-red-300 bg-red-50",
        green: "text-green-800 border-green-300 bg-green-50",
      },
    },
  });
  const buttonAlert = tv({
    base: "ms-auto -mx-1.5 -my-1.5   rounded-lg focus:ring-2  p-1.5  inline-flex items-center justify-center h-8 w-8",
    variants: {
      color: {
        red: "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200",
        green:
          "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200",
      },
    },
  });

  const setAlert = useAuthStore((state) => state.setAlert);
  const alert = useAuthStore((state) => state.alert);

  useEffect(() => {
    const time = setTimeout(() => setAlert(null), 3500);
    return () => clearTimeout(time);
  }, [alert]);

  return (
    <div className="slide-alert fixed z-22 bg-white top-0 inset-x-0 w-fit min-w-[280px] mx-auto">
      <div className={boxAlert({ color })} role="alert">
        <svg
          className="shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="mx-3 text-sm font-medium">{text}</div>
        <button
          type="button"
          className={buttonAlert({ color })}
          onClick={() => setAlert(null)}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}