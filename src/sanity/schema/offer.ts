export default {
  name: 'offer',
  title: 'Offer / Deal',
  type: 'document',
  fields: [
    { name: 'title',     title: 'Title',     type: 'string'   },
    { name: 'subtitle',  title: 'Subtitle',  type: 'string'   },
    { name: 'image',     title: 'Image',     type: 'image'    },
    { name: 'expiresAt', title: 'Expires At',type: 'datetime' },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }]
    }
  ]
}
