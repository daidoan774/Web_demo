import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Courses() {
  const { category } = useParams();

  // Được chạy mỗi khi param category thay đổi, để gọi lại API mới tương ứng vs category mới
  useEffect(() => {
    // dispatch action gọi API lấy DSKH
  }, [category]);

  return (
    <div>
      <h1>Courses List By Category</h1>
    </div>
  );
}
