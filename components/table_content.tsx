import React from "react";

export default function TableContent({ titleList }) {
  return (
    <div
      className="p-2 border border-gray-400 rounded-lg 
      sticky top-10
      "
      // style={{ position: "sticky", top: "20px" }}
    >
      <div className="flex flex-col">
        {titleList.map((elem, index) => (
          <a key={index} className="my-2" href={`#h2-${index.toString()}`}>
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}
