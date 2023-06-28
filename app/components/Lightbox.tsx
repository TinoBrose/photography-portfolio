import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { StaticImageData } from "next/image";

const Lightbox = ({
  images,
  lightboxRef,
}: {
  images: { src_static: StaticImageData; src: string; description: string }[];
  lightboxRef: any;
}) => {
  return (
    <LightGallery
      onInit={(ref) => {
        if (ref) {
          lightboxRef.current = ref.instance;
        }
      }}
      speed={500}
      download={false}
      plugins={[lgZoom]}
      dynamic
      dynamicEl={images.map((image) => ({
        src: image.src,
        subHtml: `<h4>${image.description}</h4>`,
      }))}
    />
  );
};

export default Lightbox;
