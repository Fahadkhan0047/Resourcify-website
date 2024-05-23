import React from "react";
export default function Notification() {
  return (
    <div className="relative flex items-center">
  <button className="focus:outline-none p-2 relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">5</span>
  </button>
</div>

  
      /* <Badge>
        <IconButton>
          <HomeIcon className="h-4 w-4" />
        </IconButton>
      </Badge>
      <Badge content="5" overlap="circular" placement="bottom-end">
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          alt="profile picture"
        />
      </Badge>
      <Badge overlap="circular" placement="bottom-end">
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          alt="profile picture"
        />
      </Badge> */
    
  );
}
