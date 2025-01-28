type Blog = {
    Title: string
     Paragraph: string
     authorname: string
      publishdate: any 
  slug: string
   image: any
     block  : [
      {
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_type": "span",
            "text": "This is a PortableText block",
            "marks": []
          }
        ]
      }
    ]
}