import {defineField, defineType, defineArrayMember} from "sanity"
export const blog = defineType( {
    name:"Blog",
    title: "blog",
    type: "document",
  fields:[ 
   defineField({
        name:"Title",
        type:"string",
        title: "Title",
  
    }),
  defineField
  ( {
        name:"Paragraph",
        type: "text",
        title:"Subtitle"
    }),
    defineField
    ( {
          name:"authorname",
          type: "text",
          title:"AuthorName"
      }),

      defineField
      ( {
            name:"publishdate",
            type: "date",
            title:"PublishAt"
        }),

    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
            source: "Title"
        }
    }),


    defineField(
        {
            title:"Image",
            type:"image",
            name: "image",
            options : {
                hotspot: true
            }
        }
    ),


    defineField(
        {
            title:"Content",
            name: "block",
            type: 'array', 
            of: [{type: 'block'}]
           
        }
    )
]
})