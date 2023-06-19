"use client";
import { Tab } from "@headlessui/react";
import MasonryGrid from "./components/MasonryGrid";
import classNames from "classnames";
import Lightbox from "./components/Lightbox";
import { useRef } from "react";
import { LightGallery } from "lightgallery/lightgallery";

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
    tag: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 2",
    tag: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 3",
    tag: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 4",
    tag: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 5",
    tag: "animals",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666721922432-49f64a5db919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    description: "Picture Description 6",
    tag: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 7",
    tag: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 8",
    tag: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 9",
    tag: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Picture Description 10",
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
    <div className="flex flex-col items-center h-full">
      <Tab.Group>
        <Tab.List className="flex flex-wrap items-center px-[24px] gap-4 sm:gap-12 justify-center">
          {tabs.map(({ key, display }) => (
            <Tab key={key} className="p-2">
              {({ selected }) => (
                <span
                  className={classNames(
                    "uppercase text-l tracking-wider hover:text-white",
                    selected ? "text-white" : "text-stone-500"
                  )}
                >
                  {display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 mb-2">
          <Tab.Panel>
            <MasonryGrid images={images} lightboxRef={lightboxRef} />
            <Lightbox images={images} lightboxRef={lightboxRef} />
          </Tab.Panel>
          <Tab.Panel>
            <MasonryGrid
              images={images.filter((image) => image.tag === "nature")}
              lightboxRef={lightboxRef}
            />
            <Lightbox
              images={images.filter((image) => image.tag === "nature")}
              lightboxRef={lightboxRef}
            />
          </Tab.Panel>
          <Tab.Panel>
            <MasonryGrid
              images={images.filter((image) => image.tag === "animals")}
              lightboxRef={lightboxRef}
            />
            <Lightbox
              images={images.filter((image) => image.tag === "animals")}
              lightboxRef={lightboxRef}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
