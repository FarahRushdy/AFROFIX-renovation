export default {
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Fire Fighting',
          'HVAC Systems',
          'Plumbing',
          'SAM Strut',
          'Steel Structure Support',
          'Fixation',
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'certifications',
      title: 'Certifications',
      type: 'string',
      description: 'e.g. UL Listed, FM Approved (¾" to 4")',
    },
    {
      name: 'standards',
      title: 'Standards',
      type: 'string',
      description: 'e.g. FM 1951/1952/1953 · MSS SP-69',
    },
    {
      name: 'usage',
      title: 'Usage',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizeRange',
      title: 'Size Range',
      type: 'string',
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'finish',
      title: 'Finish',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
}
