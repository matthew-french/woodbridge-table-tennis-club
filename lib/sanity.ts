import { createClient } from '@sanity/client'

// import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: 'vnb1f5cd',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true
})

// const builder = imageUrlBuilder(sanity)

// export function urlFor(source: any) {
//   return builder.image(source)
// }
