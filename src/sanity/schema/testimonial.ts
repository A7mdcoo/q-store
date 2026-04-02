export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name',   title: 'Customer Name', type: 'string' },
    { name: 'avatar', title: 'Avatar',         type: 'image' },
    { name: 'rating', title: 'Rating (1–5)',   type: 'number' },
    { name: 'review', title: 'Review',         type: 'text'   },
    { name: 'location', title: 'Location',     type: 'string' },
  ]
}
