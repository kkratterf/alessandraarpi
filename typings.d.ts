import { AuthStoreOptions, Image, Reference, Slug } from "sanity";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Project extends Base {
  client: Client;
  body: Block[];
  category: Category;
  team: Team;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  featured: boolean;
  visible: boolean;
  order: number;
  realizedAt: Date;
}

interface ReadingList extends Base {
  title: string;
  slug: Slug;
  visible: boolean;
  strike: boolean;
}

interface ToReadList extends Base {
  title: string;
  slug: Slug;
  visible: boolean;
  strike: boolean;
}

interface MusicList extends Base {
  title: string;
  src: string;
  slug: Slug;
  visible: boolean;
}

interface Number {
  _type: "number";
  current: number;
}

interface Image {
  _type: "image";
  asset:  Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}