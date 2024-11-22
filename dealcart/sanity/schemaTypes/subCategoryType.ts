import {TagIcon} from '@sanity/icons'
import { TagsIcon } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const subCategoryType = defineType({
  name: 'subCategory',
  title: 'Sub Category',
  type: 'document',
  icon: TagsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: { type: "category" } }],
      }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
  },
})
