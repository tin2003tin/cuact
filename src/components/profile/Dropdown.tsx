import { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export const ProfileTab = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<string>();
  const [menuRight, setMenuRight] = useState<string>();
  const { isLoading, user } = useKindeBrowserClient();

  console.log(user);

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const chevronRect = chevronRef?.current?.getBoundingClientRect();

    if (buttonRect && chevronRect && isOpen) {
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight("0");
      setMenuTop("38px");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button ref={buttonRef} onClick={handleClick} className="list">
        <Icon icon="bx:user" />
        <span>{user?.given_name}</span>
        <Icon
          icon={
            isOpen ? "material-symbols:close" : "material-symbols:expand-more"
          }
          className="chevron material-symbols-outlined"
        ></Icon>
      </button>
      <div
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ right: menuRight, top: menuTop }}
      >
        {user && (
          <>
            <button className="list">
              <Icon icon={"mingcute:profile-fill"}></Icon>
              <span>Detail</span>
            </button>
          </>
        )}
        {!user && (
          <>
            <LoginLink postLoginRedirectURL="" className="list">
              <Icon icon={"uil:signin"}></Icon>Sign In
            </LoginLink>
          </>
        )}
        {!user && (
          <>
            <RegisterLink postLoginRedirectURL="/" className="list">
              <Icon icon={"mdi:register"}></Icon>Sign Up
            </RegisterLink>
          </>
        )}
        {user && (
          <>
            <LogoutLink className="list">
              <Icon icon={"uil:signin"}></Icon>Log Out
            </LogoutLink>
          </>
        )}
      </div>
    </div>
  );
};
