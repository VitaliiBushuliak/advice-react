export type Link = {
  first: string,
  last: string,
  prev: string | null,
  next: string | null,
};

export type Links = Link[];

export type MetaLink = {
  url: string | null,
  label: string,
  active: boolean,
};

export type MetaLinks = MetaLink[];

export type Meta = {
  current_page: number,
  from: number,
  last_page: number,
  links: MetaLinks,
  path: string,
  per_page: number,
  to: number,
  total: number,
};

export type Paginator = {
  links: Links,
  meta: Meta,
};
