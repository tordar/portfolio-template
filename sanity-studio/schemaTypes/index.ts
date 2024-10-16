import { type SchemaTypeDefinition } from 'sanity'
import projects from '../schemas/projects'
import about from '../schemas/about'
import home from '../schemas/home'

export const schemaTypes: SchemaTypeDefinition[] = [home, projects, about]