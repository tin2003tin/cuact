import { ChangeEvent, useRef, useState } from "react";
import "./styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export const SearhTab = () => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!Boolean(isOpen) ? "open" : "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className={`search ${isOpen}`}>
        <input
          ref={inputRef}
          onChange={handleChange}
          placeholder="Find an event"
          type="text"
        />
        <Icon
          icon={"iconamoon:search"}
          onClick={handleClick}
          className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
        ></Icon>
      </div>
    </div>
  );
};
