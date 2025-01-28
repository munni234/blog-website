import React from "react";
import { client } from "@/sanity/lib/client";
import Hero from "@/app/components/page";
import { Blog } from "./type";
import AboutAndContact from "./aboutandcontact/page";

const fetchData = async () => {
  const query = `*[_type == "Blog"] | order(_updatedAt asc)
{
Title, Paragraph, authorname, publishdate,  image,  block , 
 "slug":slug.current
} `;

  const data: Blog[] = await client.fetch(query);

  return (
    <>
      <div className="lg:grid  lg:grid-cols-3">
        {data.map((data: Blog) => (
          <Hero data={data} key={data.slug} />
        ))}
      </div>

      <AboutAndContact />
    </>
  );
};

export default fetchData;
