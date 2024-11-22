import { TrolleyIcon } from "@sanity/icons";
import { subtle } from "crypto";
import { defineField, defineType } from "sanity";

export const productType = defineType({ 
    name: "product",
    title: "Products",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
          name: "name",
          title: "Product Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
              hotspot: true,
            },
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "blockContent",
            validation: (Rule) => Rule.required(),
          }),   
          defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
          }),
          defineField({
            name: "discountedPrice",
            title: "Discounted Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
          }),
          defineField({
            name: "subCategory",
            title: "Sub Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "subCategory" } }],
          }),
          defineField({
            name: "Stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
          }),
    ],
    preview: {
      select: {
        title: "name",
        media: "image",
        price: "price",
      },
      prepare(select) {
        return {
          title: select.title,
          media: select.media,
          subtitle: `Rs. ${select.price}`,
        }
      },
    },
});