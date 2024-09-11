import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link} from 'react-router-dom';
import { faSmile, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function Community() {
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const communities = [
        'Cyber Security',
        'Machine Learning',
        'Cloud Practitioners',
        '100 days of DSA',
        'Web Development',
        'Beautiful Soup tutorials',
      ];
    
      const posts = [
        "In today's daily challenge leetcode, I'm unable to access the last node of the BST to find the kth element, help me analyse this code..",
        "In today's daily challenge leetcode, I'm unable to access the last node of the BST to find the kth element, help me analyse this code..",
        "In today's daily challenge leetcode, I'm unable to access the last node of the BST to find the kth element, help me analyse this code..",
        "In today's daily challenge leetcode, I'm unable to access the last node of the BST to find the kth element, help me analyse this code..",
      ];
      const handleCommunityClick = (community) => {
        if (selectedCommunity === community) {
          setSelectedCommunity(null);
        } else {
          setSelectedCommunity(community);
        }
      };
  return (
    <div className="bg-gray min-h-screen flex flex-col" >
      <div className="bg-[#00000028] p-4 flex items-center justify-between border-b px-4 md:px-8" style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.28)' }}>
        <Link to="/landing">
        <FontAwesomeIcon icon={faChevronLeft} className="text-[rgba(100,0,0,0.85)] text-3xl hover:text-gray-600" />
        </Link>
        <div className="bg-white rounded-full py-2 px-4 flex items-center w-1/2">
          <input
            type="text"
            placeholder="Browse communities..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 ml-2 hover:cursor-pointer w-6 h-6"/>
        </div>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </div>

      <div className="flex flex-grow overflow-hidden ">
        <div className="w-1/3 p-4 px-4 md:px-8 border-r overflow-y-auto bg-[#FFF5F7]">
          <h1 className="text-2xl font-semibold font-montserrat mt-4">YOUR</h1>
          <h1 className="text-2xl font-semibold mb-4 font-montserrat">COMMUNITIES</h1>
          {communities.map((community, index) => (
            <div
              key={index}
              className={`mb-3 p-3 rounded-lg cursor-pointer font-montserrat ${
                selectedCommunity === community
                  ? 'bg-red-300'
                  : 'bg-[#821D30] text-white'
              }`}
              onClick={() => handleCommunityClick(community)}
            >
              {community}
            </div>
          ))}
        </div>

        {selectedCommunity && (
          <div className="w-2/3 flex flex-col">
            <div className="flex-grow p-4 mt-6 overflow-y-auto px-4 md:px-8">
              {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg p-4 mb-4 flex border font-montserrat">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="text-sm">{post}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFF5F7] p-4 flex items-center border-t">
              <FontAwesomeIcon icon={faSmile} className="text-[rgba(100,0,0,0.85)] mr-4 w-6 h-6" />
              <FontAwesomeIcon icon={faPaperclip} className="text-[rgba(100,0,0,0.85)] mr-4 w-6 h-6" />
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow bg-white rounded-full py-2 px-4 outline-none text-sm"
              />
              <FontAwesomeIcon icon={faMicrophone} className="text-[rgba(100,0,0,0.85)] ml-4 w-6 h-6" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
