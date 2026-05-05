import { serverClient } from './apollo-server';
import { GET_PAGES, GET_PAGE_BY_SLUG, GET_POSTS, GET_ALL_MENUS } from './queries';

const LANGUAGE = process.env.ERXES_LANGUAGE || 'mn';

export async function fetchPages() {
  try {
    const { data } = await serverClient.query({
      query: GET_PAGES,
      variables: { language: LANGUAGE },
    });
    return (data as any)?.cpPages || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function fetchPageBySlug(slug: string) {
  try {
    const { data } = await serverClient.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug, language: LANGUAGE },
    });
    const pages = (data as any)?.cpPages || [];
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function fetchPosts() {
  try {
    const { data } = await serverClient.query({
      query: GET_POSTS,
      variables: { language: LANGUAGE },
    });
    return (data as any)?.cpPosts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchMenus() {
  try {
    const { data } = await serverClient.query({
      query: GET_ALL_MENUS,
      variables: { language: LANGUAGE },
    });
    return {
      headerMenus: (data as any)?.headerMenus || [],
      footerMenus: (data as any)?.footerMenus || [],
    };
  } catch (error) {
    console.error('Error fetching menus:', error);
    return {
      headerMenus: [],
      footerMenus: [],
    };
  }
}
