import "../globals.css";
import Item from "./Item";
import { data } from "../utils/Links";

function Sidebar() {
  let Linkdata = data;
  return (
    <div className="container">
      <div className="demat_button flex justify-center m-3">
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Open Demat Account
        </button>
      </div>

      <div className="menu">
        {Linkdata.map((item, index) => {
          return (
            <Item key={index} heading={item.name} arr={item.items} level={0} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
