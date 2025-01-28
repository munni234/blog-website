
import { PortableText } from "@portabletext/react"; // Assuming you're using PortableText
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import CommentSection from "@/app/components/comments";

const page = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == "Blog" && slug.current == $slug][0] {
    Title, Paragraph, image, block, authorname, publishdate,
  }`;

  const data: Blog | null = await client.fetch(query, { slug: params.slug });

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {data.Title}
      </h1>

      <p className="text-gray-700">{"Published by: "}{data.authorname}</p>
      <span className="text-gray-700 pt-0 mt-0">{"Published on: "}{data.publishdate}</span>

      <Image
        src={urlFor(data.image).url()}
        alt="Blog Image"
        width={900}
        height={700}
        className="lg:ml-[350px]"
      />

      <p className="text-xl xs:text-2xl lg:text-2xl font-bold text-dark dark:text-light">
        {data.Paragraph}
      </p>

      <section>
        <PortableText value={data.block} />
      </section>

      <CommentSection />
    </article>
  );
};

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "Blog"]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export default page;