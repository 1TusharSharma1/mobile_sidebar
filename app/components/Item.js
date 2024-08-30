function Item({ heading, arr, level }) {
  const bgColor = level % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <div className={`flex flex-col ${bgColor}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={`dropdown-${heading}`}
          className="peer hidden"
        />
        <label
          htmlFor={`dropdown-${heading}`}
          className="flex justify-between items-center font-normal text-base text-left py-4 px-6 cursor-pointer"
        >
          <div className="font-semibold">{heading}</div>
          <svg
            className="w-6 h-6 text-gray-400 transition-transform peer-checked:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </label>
        <hr />
        <div className="peer-checked:block hidden">
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
                className="flex bg-white justify-between items-center font-normal text-base text-left py-4 px-6 cursor-pointer text-black no-underline"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
