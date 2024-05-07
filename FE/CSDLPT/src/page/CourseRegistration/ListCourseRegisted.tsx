import React from "react";
interface IListCourseRegisted {
  data: any;
}
const ListCourseRegisted: React.FC<IListCourseRegisted> = ({ data }) => {
  return (
    <table className="w-full rounded-t-md overflow-hidden">
      <tr className="flex bg-mainRed text-white text-center justify-between border-[#CCCC]">
        <th className=" border-[1px]  flex-[1]">Xóa</th>
        <th className=" border-[1px] flex-[1]">
          Mã MH <i className="fa-solid fa-caret-up ml-[4px]"></i>
        </th>
        <th className=" border-[1px] flex-[5] ">Tên môn học </th>
        <th className=" border-[1px]  flex-[1]">Nhóm</th>
        <th className=" border-[1px]  flex-[1]">Tổ</th>
        <th className=" border-[1px]  flex-[1]">Số TC</th>
        <th className=" border-[1px]  flex-[1]">Lớp</th>
        <th className=" border-[1px]  flex-[3]">Ngày đăng ký</th>
        <th className=" border-[1px]  flex-[1]">Trạng thái</th>
      </tr>
      <tr className="flex  text-black text-center justify-between border-[#cccc]">
        <td className=" border-[1px] flex-[1]">
          <i className="fa-solid fa-xmark"></i>
        </td>
        <td className=" border-[1px] flex-[1]">...</td>
        <td className=" border-[1px] flex-[5] ">...</td>
        <td className=" border-[1px] flex-[1]">...</td>
        <td className=" border-[1px] flex-[1]">...</td>
        <td className=" border-[1px] flex-[1]">...</td>
        <td className=" border-[1px] flex-[1]">...</td>
        <td className=" border-[1px] flex-[3]">...</td>
        <td className=" border-[1px] flex-[1]">...</td>
      </tr>
    </table>
  );
};

export default ListCourseRegisted;
