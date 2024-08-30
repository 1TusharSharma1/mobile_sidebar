"use client";
import React, { useState } from "react";

function Item({ heading, arr, level }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const bgColor = level % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <div className={`flex flex-col ${bgColor}`}>
      <div
        className=" flex justify-between items-center font-normal text-base text-left py-4 px-6 cursor-pointer "
        onClick={toggleDropdown}
      >
        <div className="font-semibold">{heading}</div>
        <div className="transition-transform">
          <svg
            className={`w-6 h-6 text-gray-400 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </div>
      <hr />
      {isOpen && (
        <div>
          {arr?.map((item, index) =>
            item.items ? (
              <Item
                key={index}
                heading={item.name}
                arr={item.items}
                level={level + 1}
              />
            ) : (
              <a
                key={index}
                href={item.link}
                className={`flex bg-white justify-between items-center font-normal text-base text-left py-4 px-6 cursor-pointer text-black no-underline`}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Item;