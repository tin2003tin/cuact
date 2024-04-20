import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [isAddTag, setIsAddTag] = useState(false);
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const [selectedTags, setSelectTags] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/category")
      .then((res) => setTags(res.data));
  }, []);

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
          {tags?.map((tag) => (
            <Tag
              data={tag}
              isChoose={
                selectedTags.find((tagId) => tagId == tag.name) != undefined
              }
              setSelectTags={setSelectTags}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Tag = ({
  data,
  isChoose,
  setSelectTags,
}: {
  data: { id: number; name: string };
  isChoose: Boolean;
  setSelectTags: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <span
      className={`flex gap-2 items-center px-4 ${
        isChoose ? "bg-green-400 text-white" : "bg-stone-400"
      } rounded-full cursor-pointer`}
      onClick={() =>
        setSelectTags((prev) => {
          if (isChoose) {
            return prev.filter((tag) => tag != data.name);
          }
          return [...prev, data.name];
        })
      }
    >
      {isChoose && <Icon icon="fluent-mdl2:check-mark" />}
      {data.name}
    </span>
  );
};

export default SearchBar;
