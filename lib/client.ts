import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'vnb1f5cd',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true
})