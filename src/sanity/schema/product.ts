export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'HOT', value: 'HOT' },
          { title: 'SALE', value: 'SALE' },
          { title: 'NEW', value: 'NEW' },
        ]
      }
    },
    {
      name: 'isFeatured',
      title: 'Featured Deal',
      type: 'boolean',
    },
    {
      name: 'isFlashSale',
      title: 'Flash Sale',
      type: 'boolean',
    }
  ]
}
