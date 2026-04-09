import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function CustomizeLabels() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((books) => {
        // ✅ data transform
        const formattedData = books.map((book) => ({
          name: book.bookName,          // X-axis
          uv: book.totalPages || 100,   // Y-axis (fallback দিয়েছি)
        }));

        setData(formattedData);
      });
  }, []);

  const formatAxisTick = (value) => `*${value}*`;

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text x={x + width / 2} y={y} fill="#555" textAnchor="middle" dy={-6}>
        {value}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height: "400px" }} className="container mx-auto my-10">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" tickFormatter={formatAxisTick} />
          <YAxis />
          <Tooltip />

          <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}