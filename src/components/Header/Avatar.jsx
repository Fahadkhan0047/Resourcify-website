import { Avatar } from "@material-tailwind/react";
import { RxAvatar } from "react-icons/rx";
import { MdLogout } from "react-icons/md";

export default function AvatarDefault() {
  return (
    <div className="relative group">
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
      <div className="shadow-lg absolute top-0 left-0 w-48 p-4 mt-16 bg-white  rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-2 group cursor-pointer">
            <RxAvatar size={25} className="group-hover:cursor-pointer" />
            <button className="text-md group-hover:cursor-pointer">
              Your Profile
            </button>
          </div>
          <hr className=" my-1" />
          <div className="flex gap-2">
            <MdLogout className="group-hover:cursor-pointer" size={25} />
            <button className="text-md group-hover:cursor-pointer">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
