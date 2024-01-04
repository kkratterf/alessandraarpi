import { type SchemaTypeDefinition } from 'sanity'

import blockContent from '@/schemas/blockContent';
import readingList from '@/schemas/readingList';
import toReadList from '@/schemas/toReadList';
import musicList from '@/schemas/musicList';
import photos from '@/schemas/photos';
import projects from '@/schemas/projects';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readingList, toReadList, musicList, photos, projects, blockContent],
}
