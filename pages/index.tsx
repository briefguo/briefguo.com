import React, { useState } from "react";
import XLSX from "xlsx";

export default () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDetail = async () => {
    setLoading(true);
    const result = await fetch(`/api/pois`).then(res => res.json());
    setDetail(result);
    setLoading(false);
  };
  const exportExcel = () => {
    var tbl = document.getElementById("sheetjs");
    var wb = XLSX.utils.table_to_book(tbl);
    XLSX.writeFile(wb, "out.xlsx");
  };
  return (
    <div>
      <div>
        <button onClick={getDetail}>获取</button>
        <button disabled={detail.length === 0} onClick={exportExcel}>
          导出Excel
        </button>
      </div>
      <hr />
      {loading && <div>loading...</div>}
      {!loading && detail.length > 0 && (
        <table>
          <table id="sheetjs" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>名称</th>
                <th>一级分类</th>
                <th>二级分类</th>
                <th>位置</th>
                <th>省</th>
                <th>市</th>
                <th>区</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((poi: any) => (
                <tr key={poi.id}>
                  <td> {poi.name}</td>
                  <td> {poi.type.split(";")[0]}</td>
                  <td> {poi.type.split(";")[1]}</td>
                  <td> {poi.location}</td>
                  <td> {poi.pname}</td>
                  <td> {poi.cityname}</td>
                  <td> {poi.adname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
      )}
    </div>
  );
};
