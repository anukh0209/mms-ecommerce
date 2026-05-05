import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($language: String) {
    cpPosts(language: $language, status: published) {
      _id
      title
      slug
    }
  }
`;

export const GET_MENUS = gql`
  query GetMenus($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
    }
  }
`;

export const GET_PAGE_CONTENT = gql`
  query GetPageContent($slug: String!, $language: String) {
    cpPageDetail(slug: $slug, language: $language) {
      _id
      name
      slug
      content
      status
    }
  }
`;
