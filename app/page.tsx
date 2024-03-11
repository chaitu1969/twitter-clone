import { title } from "process";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { GoHash, GoBell, GoHome, GoBookmarkSlash } from "react-icons/go";
import { FiMessageCircle, FiUser } from "react-icons/fi";
import FeedCard from "@/Components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <GoHash />,
  },
  {
    title: "Notification",
    icon: <GoBell />,
  },
  {
    title: "Message",
    icon: <FiMessageCircle />,
  },
  {
    title: "bookmarks",
    icon: <GoBookmarkSlash />,
  },
  {
    title: "profile",
    icon: <FiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 h-screen w-screen px-56">
          <div className=" col-span-3 justify-start pt-8">
            <div className="text-4xl h-fit ml-8 w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
              <FaTwitter />
            </div>
            <div className="mt-2 font-semibold text-xl pr-3  ">
              <ul>
                {sideBarMenuItems.map((item, index) => (
                  <li
                    className="flex  text-sm items-center ml-8 justify-center mt-2 gap-5 hover:bg-gray-800 w-fit px-3 py-2 rounded-full transition-all"
                    key={index}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 px-5">
                <button className="bg-sky-500 w-full h-fit rounded-full px-5 py-1 justify-center items-center">
                  Tweet
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-6  border border-gray-800">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </>
  );
}
