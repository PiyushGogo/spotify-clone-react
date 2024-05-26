import React from "react";

const SongItems = ({ name, img, desc, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={img} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-small">{desc}</p>
    </div>
  );
};

export default SongItems;
