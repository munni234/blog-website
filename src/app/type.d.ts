import { StaticImageData } from "next/image";

export type Blog = {
  Title: string;
  Paragraph: string;
  authorname: string;
  publishdate: string;
  slug: string;
  image: StaticImageData;
  block: [
    {
      _type: "block";
      style: "normal";
      children: [
        {
          _type: "span";
          text: "This is a PortableText block";
          marks: [];
        },
      ];
    },
  ];
};
