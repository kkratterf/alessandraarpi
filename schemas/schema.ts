import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import readingList from './readingList'
import toReadList from './toReadList'
import musicList from './musicList'
import photos from './photos'
import projects from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readingList, toReadList, musicList, photos, projects, blockContent],
}
