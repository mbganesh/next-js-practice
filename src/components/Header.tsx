import React from "react";

interface Props {
  siteName: string;
  menuButton: {
    text: string;
    link: string;
  };
  menus: {
    id: number;
    text: string;
    link: string;
  }[];
}
const Header: React.FC<Props> = ({ siteName, menus, menuButton }) => {
  return (
    <div className="flex justify-between">
      <div>
        <a href="" className="font-extrabold p-5 text-2xl text-nowrap">
          {siteName}
        </a>
      </div>
      <div className="flex mr-auto">
        <button className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden lg:flex">
          {menus.map(({ id, text, link }) => (
            <ul key={id} className="px-2 my-auto">
              <a
                href={"#" ?? link}
                className="text-lg font-medium rounded-sm  hover:border-red-600 hover:border-3 hover:bg-red-400 hover:text-white px-4 py-2"
              >
                {text}
              </a>
            </ul>
          ))}
        </div>
      </div>

      <div className="ml-auto">
        <button className="flex flex-nowrap gap-2 bg-red-500 px-5 py-2 text-white rounded-md hover:bg-red-600 active:bg-red-800">
          <span className="hidden lg:block">{menuButton.text}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="ml-auto w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
