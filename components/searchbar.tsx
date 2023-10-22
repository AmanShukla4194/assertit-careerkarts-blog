import React, { useState } from "react";
import { useRouter } from "next/router";
import { searchPostsByKeywords } from "../lib/api"; // Import your API function for searching posts
import { BsSearch } from "react-icons/bs"; // Import the search icon from react-icons

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    // Perform the search operation by calling the searchPostsByKeywords function
    const posts = await searchPostsByKeywords(searchQuery);

    // Update the URL with the search query for better UX
    router.push({
      pathname: "/searchResults",
      query: { query: searchQuery },
    });

    // Handle the search results (e.g., render the posts)
    console.log("Search results:", posts);
  };

  return (
    <>
      <div className="my-auto">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for keywords"
            className="bg-[#F9F9F9] font-sans px-6 py-1 border border-none rounded-2xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
              <button
                onClick={handleSearch}
                className="bg-transparent border-none text-blue-500 ml-2"
              >
                <BsSearch size={24} />
              </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;







{/* <Link
            href={{
              pathname: "/searchBlogs",
              query: { query: searchQuery },
            }}
          > */}