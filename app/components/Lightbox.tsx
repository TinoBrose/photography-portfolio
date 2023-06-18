import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Lightbox = ({
  images,
  lightboxRef,
}: {
  images: any[];
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
      //   plugins={[lgThumbnail, lgZoom]}
      dynamic
      dynamicEl={images.map((image) => ({
        src: image.url,
        // thumb: image.url,
        subHtml: `<h4>${image.description}</h4>`,
      }))}
    />
    //   {images.map((index) => (
    //     <img key={index} alt="img1" src={index} />
    //   ))}
    // </LightGallery>
  );
};

export default Lightbox;
