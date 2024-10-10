import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '/schemaTypes'

console.log('Project ID:', process.env.SANITY_STUDIO_PROJECT_ID)
console.log('Dataset:', process.env.SANITY_STUDIO_DATASET)

export default defineConfig({
  name: 'default',
  title: 'portfolio-24',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})