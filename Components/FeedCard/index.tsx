import React from "react";
import Image from "next/image";
import { FiMessageCircle, FiUpload } from "react-icons/fi";
import { FaRetweet, FaRegHeart } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <>
      <div className="border border-l-0 border-r-0 border-gray-800 p-4 border-b-0 hover:bg-gray-900 cursor-pointer transition-all">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Image
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt="user-image"
              height={50}
              width={50}
            />
          </div>
          <div className="col-span-11 ml-2 ">
            <h5>Chaitanya karle</h5>
            <p className="text-sm">
              Developing writers can often benefit from examining an essay, a
              paragraph, or even a sentence to determine what makes it
              effective. On the following pages are several paragraphs for you
              to evaluate on your own, along with the Writing Centers
              explanation
            </p>

            <div className="flex justify-between  w-[90%] mt-5">
              <div>
                <FiMessageCircle />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <FaRegHeart />
              </div>
              <div>
                <FiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
