
import { FaRegHeart } from "react-icons/fa";


function JobRow() {
  return (
    <div className="bg-white shadow-lg rounded-md px-4 py-4 gap-4 flex relative">
    <div className="absolute top-3 right-3 cursor-pointer"><FaRegHeart className="size-5 text-gray-400"/></div>
      <div className="content-center">
        <img
          src="../../../public/images/bmw.png"
          className="size-20"
        />
      </div>
      <div className="grow sm:flex">
        <div className="grow">
          <div className="text-gray-500 text-sm">Tesla</div>
          <div className="font-bold text-lg"> product designer</div>
          <div className="content-end text-gray-500 text-xs">
            Remot Texsas US fulltime
          </div>
        </div>
        <div className="content-end text-gray-600 text-xs">2 weeks ago</div>
      </div>
    </div>
  );
}

export default JobRow;
