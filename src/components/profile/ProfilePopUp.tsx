import React, { useState } from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const tags = ["Tech", "Tech", "Tech", "Tech", "Tech", "Tech"];

const ProfilePopUp = () => {
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
        <PopUp />
      </BasePopup>
    </div>
  );
};

const PopUp = () => {
  const { user } = useKindeBrowserClient();
  const [isEdit, setIsedit] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[400px] border text-lg">
      <div className="border rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center border-b-2 mb-4">
          <span># My Tag</span>
          <Icon icon={`${isEdit ? "fluent-mdl2:check-mark" : "mdi:pencil"}`} onClick={() => setIsedit((prev) => !prev)} />
        </div>
        <div className="flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <Tag text={tag} isEdit={isEdit} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {user && (
          <div className="flex items-center gap-2">
            <Icon icon="iconamoon:profile-fill" />
            Profile setting
          </div>
        )}
        {user && (
          <div className="flex items-center gap-2">
            <Icon icon="octicon:arrow-switch-16" />
            Switch to creator
          </div>
        )}
        {!user && (
          <>
            <LoginLink
              postLoginRedirectURL=""
              className="list flex gap-2 item-center"
            >
              <Icon icon={"uil:signin"}></Icon>Sign In
            </LoginLink>
          </>
        )}
        {!user && (
          <>
            <RegisterLink
              postLoginRedirectURL="/"
              className="list flex gap-2 item-center"
            >
              <Icon icon={"mdi:register"}></Icon>Sign Up
            </RegisterLink>
          </>
        )}
        {user && (
          <>
            <LogoutLink className="list flex gap-2 item-center">
              <Icon icon={"uil:signin"}></Icon>Log Out
            </LogoutLink>
          </>
        )}
      </div>
    </div>
  );
};

const Tag = ({ text, isEdit }: { text: string; isEdit: Boolean }) => {
  return (
    <div className="bg-green-400 px-4 rounded-full text-base flex gap-2 items-center text-white">
      {text}
      {isEdit && <Icon icon="material-symbols:close" className="text-lg" />}
    </div>
  );
};

export default ProfilePopUp;
