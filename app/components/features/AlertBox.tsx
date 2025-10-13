import React from "react";

export default function AlertBox({
  type,
  text,
  subtext,
}: {
  type?: string;
  text?: string;
  subtext?: string;
}) {
  const typeText = type?.toLowerCase();
  let classNames = "";

  switch (typeText) {
    case "warning":
      classNames = "bg-yellow-100 border-yellow-500 text-yellow-700";
      break;
    case "info":
      classNames = "bg-blue-100 border-blue-500 text-blue-700";
      break;
    case "success":
      classNames = "bg-green-100 border-green-500 text-green-700";
      break;
    case "danger":
      classNames = "bg-red-100 border-red-500 text-red-700";
      break;
    default:
        classNames = "bg-white border-black text-black";
      break;
  }

  return (
    <div className={`border-l-4 p-4 ${classNames}`}>
      <p className="font-bold">{text}</p>
      <p>{subtext}</p>
    </div>
  );
}
