// Đặt tên chữ cái đầu tiên viết hoa để phân biệt thẻ thường với thẻ component

// auto genaral: "rfc" ---> react function component
import React from "react";

// React function component (Thẻ <DemoFunctionComponent></DemoFunctionComponent>)

export default function DemoFunctionComponent() {
  return (
    //Nội dung  thẻ chứa trong lệnh return, lưu ý: Nội dung phải được bảo bọc bởi 1 thẻ duy nhất
    <div className="container bg-dark text-white">
      <div className="display-4 p-5">

          Component
      
      </div>

      <div className='p-2 pl-5'>
          
          Nội dung component

      </div>
    </div>
  );
}


