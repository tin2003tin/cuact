import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ProfilePopUp = () => {
  return (
    <div className="p-4">
      <div className="flex gap-2">
        <Icon icon="iconamoon:profile-fill" />
        <span>Profile setting</span>
      </div>
      <div className="flex gap-2">
        <Icon icon="jam:refresh-reverse" />
        <span>Switch to creator</span>
      </div>
      <div></div>
    </div>
  );
};

export default ProfilePopUp;
