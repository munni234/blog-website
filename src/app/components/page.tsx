import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "../type";

import { urlFor } from "@/sanity/lib/image";

const Hero = async ({ data }: { data: Blog }) => {
  const imageUrl = data.image ? await urlFor(data.image).url() : null;
  return (
    <>
      <section className="text-gray-600 body-font flex flex-wrap">
        <div className="container lg:px-5 lg:py-24 ">
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3 sm:w-[300px]  lg:w-[400px]">
              {imageUrl ? (
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={imageUrl}
                  alt="blogimage"
                  width={720}
                  height={400}
                />
              ) : (
                <div className="lg:h-48 md:h-36 w-full bg-gray-200 flex items-center justify-center">
                  <span>Loading...</span>
                </div>
              )}
              <div className="lg:h-[230px] sm:h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-black text-lg title-font font-medium  mb-1">
                    {data.Title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                  <p className="leading-relaxed mb-3 line-clamp-3">
                    {data.Paragraph}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href={`/blog/${data.slug}`}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
