"use client";
import { Tab } from "@headlessui/react";
import { spawn } from "child_process";
import Image from "next/image";
import MasonryGrid from "./components/MasonryGrid";
import classNames from "classnames";
import Lightbox from "./components/Lightbox";
import { useRef } from "react";
import { LightGallery } from "lightgallery/lightgallery";
import Masonry from "react-masonry-css";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "nature",
    display: "Nature",
  },
  {
    key: "animals",
    display: "Animals",
  },
];

const images = [
  {
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 1",
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 2",
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 3",
  },
  {
    url: "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 4",
  },
  {
    url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 5",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1,
};

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <main className="relative pt-[110px] z-20">
      <div className="flex flex-col items-center h-full">
        <Tab.Group>
          <Tab.List className="flex items-center gap-12 ">
            {tabs.map(({ key, display }) => (
              <Tab key={key} className="p-2">
                {({ selected }) => (
                  <span
                    className={classNames(
                      "uppercase text-l tracking-wider	",
                      selected ? "text-white" : "text-stone-600"
                    )}
                  >
                    {display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
            <Tab.Panel>
              <MasonryGrid images={images} lightboxRef={lightboxRef} />
              <Lightbox images={images} lightboxRef={lightboxRef} />
              {/* <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName=""
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt="123"
                    className="my-4 mx-auto"
                    onClick={() => {
                      lightboxRef.current?.openGallery(index);
                      console.log("test");
                    }}
                  />
                ))}
              </Masonry> */}
            </Tab.Panel>
            <Tab.Panel>Nature</Tab.Panel>
            <Tab.Panel>Animals</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
