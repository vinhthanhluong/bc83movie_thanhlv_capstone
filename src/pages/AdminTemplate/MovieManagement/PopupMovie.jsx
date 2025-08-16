<Transition show={isOpenDetail} unmount={false}>
  <Dialog as="div" className="focus:outline-none" onClose={closeDetail}>
    <div className="fixed z-[999] p-4 inset-0 flex items-center   bg-[#0009]">
      <div className="w-full  md:w-3xl xl:w-6xl  m-auto ">
        <DialogPanel
          transition
          className=" w-full bg-white rounded-xl backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
        >
          <div className="relative flex items-center p-3 md:p-6 bg-pink-50 rounded-t-xl">
            <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
              <Film className="w-8 h-8 duration-300 transition-all" />
            </div>
            <div className="block ml-2 md:ml-4">
              <p className="text-lg md:text-2xl font-bold text-gray-800">
                Chi tiết phim
              </p>
            </div>

            <div
              onClick={closeDetail}
              className="absolute top-0 right-0 md:inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]"
            >
              <X className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 md:p-6 max-h-[70vh] overflow-y-auto ">
            <div className=" gap-4 md:gap-10 w-full min-h-[60vh] bg-yellow-200">
              <div className="right"></div>
            </div>

            {/* <div className="flex justify-end gap-5 pt-5 mt-5 border-t border-gray-300">
                    <p
                      className="cursor-pointer border border-gray-300 text-gray-600 hover:bg-gray-300 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center"
                      onClick={closeDetail}
                    >
                      Hủy bỏ
                    </p>
                  </div> */}
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</Transition>;
