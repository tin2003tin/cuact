import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const tags = [
  {
    name: "tech",
    isChoose: Math.random() * 10 < 5,
  },
  {
    name: "tech",
    isChoose: Math.random() * 10 < 5,
  },
  {
    name: "tech",
    isChoose: Math.random() * 10 < 5,
  },
  {
    name: "tech",
    isChoose: Math.random() * 10 < 5,
  },
];

const SearchBar = () => {
  const [isAddTag, setIsAddTag] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-md">
      <div className="w-full flex border border-stone-400 overflow-hidden">
        <input type="text" className="w-full outline-none p-2" />
        <button className="w-14">
          <Icon icon="material-symbols:search" className="mx-auto" />
        </button>
        <button
          className="text-nowrap p-2 px-4 bg-stone-300 border-l-stone-400"
          onClick={() => setIsAddTag((prev) => !prev)}
        >
          Add tag #
        </button>
      </div>
      {isAddTag && (
        <div className="flex flex-wrap gap-2 p-4 border border-stone-400">
          {tags.map((tag) => (
            <Tag text={tag.name} isChoose={tag.isChoose} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tag = ({ text, isChoose }: { text: string; isChoose: Boolean }) => {
  return (
    <span
      className={`flex gap-2 items-center px-4 ${
        isChoose ? "bg-green-400 text-white" : "bg-stone-400"
      } rounded-full`}
    >
      {isChoose && <Icon icon="fluent-mdl2:check-mark" /> }
      {text}
    </span>
  );
};

export default SearchBar;
