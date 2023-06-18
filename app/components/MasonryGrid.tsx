import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

// import images locally to get width and heights for next's Image component
// import image from "../imagepath"

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1,
};

const MasonryGrid = ({
  images,
  lightboxRef,
}: {
  images: any[];
  lightboxRef: any;
}) => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName=""
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt="123"
            className="my-4 mx-auto cursor-pointer hover:opacity-90"
            onClick={() => {
              lightboxRef.current?.openGallery(index);
              console.log("test");
            }}
          />
          //     <Image
          //     key={index}
          //     src={index}
          //     alt="123"
          //     className="my-4 mx-auto"
          //     width={20}
          //     height={20}
          //     placeholder="blur"
          //   />
        ))}

        {/* array of JSX items */}
      </Masonry>
    </>
  );
};

export default MasonryGrid;
