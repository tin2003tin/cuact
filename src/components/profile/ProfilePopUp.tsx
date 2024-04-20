import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const tags = ["Tech", "Tech", "Tech", "Tech", "Tech", "Tech"];

const ProfilePopUp = ({
  tags,
  setTags,
}: {
  tags: { id: number; name: string }[];
  setTags: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}) => {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        <Icon icon="gg:profile" width={30} />
      </div>
      <BasePopup id={id} open={open} anchor={anchor}>
        <PopUp tag={tags} setTag={setTags} />
      </BasePopup>
    </div>
  );
};

const PopUp = ({
  tag,
  setTag,
}: {
  tag: { id: number; name: string }[];
  setTag: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}) => {
  const [isEdit, setIsedit] = useState(false);
  const [addTagId, setAddTag] = useState<string>();
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/category")
      .then((res) => setTags(res.data));
  }, []);

  const handlePatchTag = () => {
    axios
      .patch(`http://localhost:3000/api/user/2/event/tag/${addTagId}`)
      .then(() => {
        console.log("patch success");
        const x = tags.find((t) => t.id.toString() == addTagId);
        setTag((prev) => [...prev, x as { id: number; name: string }]);
      })
      .catch(() => console.log("error"));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] border text-lg">
      <div className="border rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center border-b-2 mb-4">
          <span># My Tag</span>
          <Icon
            icon={`${isEdit ? "fluent-mdl2:check-mark" : "mdi:pencil"}`}
            onClick={() => setIsedit((prev) => !prev)}
          />
        </div>
        {isEdit && (
          <div className="flex items-center gap-8">
            AddTag
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">tag</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addTagId}
                label="tag"
                onChange={(e) => setAddTag(e.target.value as string)}
              >
                {tags?.map((t) => (
                  <MenuItem value={t.id} key={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              className="text-xl bg-green-300 text-green-700"
              onClick={handlePatchTag}
            >
              +
            </Button>
            {/* <div className="flex-1">
              {["tag", "tag", "tag", "tag"].map((tag) => (
                <div className="text-center">{tag}</div>
              ))}
            </div> */}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {tag?.map((text) => (
            <Tag text={text} isEdit={isEdit} setTag={setTag} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <Icon icon="iconamoon:profile-fill" />
          Profile setting
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Icon icon="octicon:arrow-switch-16" />
          Switch to creator
        </div>

        <div className="list flex gap-2 item-center cursor-pointer">
          <Icon icon={"uil:signin"}></Icon>Log Out
        </div>
      </div>
    </div>
  );
};

const Tag = ({
  text,
  isEdit,
  setTag,
}: {
  text: { id: number; name: string };
  isEdit: Boolean;
  setTag: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}) => {
  const handleDeleteTag = () => {
    axios
      .delete(`http://localhost:3000/api/user/2/event/tag/${text.id}`)
      .then(() => {
        console.log("delete tag succuss");
        setTag((prev) => prev.filter((tag) => tag.id != text.id));
      })
      .catch(() => "โง่");
  };

  return (
    <div
      className="bg-green-400 px-4 rounded-full text-base flex gap-2 items-center text-white"
      key={text.id}
    >
      {text.name}
      {isEdit && (
        <Icon
          icon="material-symbols:close"
          className="text-lg cursor-pointer hover:bg-green-500 transition rounded-full"
          onClick={handleDeleteTag}
        />
      )}
    </div>
  );
};

export default ProfilePopUp;
