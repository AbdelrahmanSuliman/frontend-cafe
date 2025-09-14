export const HERO_QUERY = `*[_type == "hero"][0]{
  title,
  description,
  "imageUrl": image.asset->url
}`;

export const MENU_ITEMS_QUERY = `*[_type == "menuItem"]{
  "itemImage": itemImage.asset->url,
  title,
  description,
  price,
  roastCategory,
  "backgroundColor": backgroundColor.hex,
  featured,
  "slug": slug.current
}`;

export const MENU_ITEM_QUERY = (
  slug: string
) => `*[_type == "menuItem" && slug.current == "${slug}"][0]{
  "itemImage": itemImage.asset->url,
  title,
  description,
  price,
  roastCategory,
  "backgroundColor": backgroundColor.hex,
  featured,
  "slug": slug.current
}`;

export const OUR_STORY_QUERY = `
  *[_type == "ourStory"][0]{
    text,
    "imageUrl": image.asset->url
  }
`;