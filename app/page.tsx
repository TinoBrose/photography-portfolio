"use client";
import { Tab } from "@headlessui/react";
import MasonryGrid from "./components/MasonryGrid";
import classNames from "classnames";
import Lightbox from "./components/Lightbox";
import { useRef } from "react";
import { LightGallery } from "lightgallery/lightgallery";

import { imagesMab } from "../public/photos";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "dogs",
    display: "Dogs",
  },
  {
    key: "france",
    display: "France",
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
            <MasonryGrid
              images={imagesMab.sort(() => 0.5 - Math.random())}
              lightboxRef={lightboxRef}
            />
            <Lightbox images={imagesMab} lightboxRef={lightboxRef} />
          </Tab.Panel>
          <Tab.Panel>
            <MasonryGrid
              images={imagesMab.filter((image) => image.tag === "dogs")}
              lightboxRef={lightboxRef}
            />
            <Lightbox
              images={imagesMab.filter((image) => image.tag === "dogs")}
              lightboxRef={lightboxRef}
            />
          </Tab.Panel>
          <Tab.Panel>
            <MasonryGrid
              images={imagesMab.filter((image) => image.tag === "france")}
              lightboxRef={lightboxRef}
            />
            <Lightbox
              images={imagesMab.filter((image) => image.tag === "france")}
              lightboxRef={lightboxRef}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
