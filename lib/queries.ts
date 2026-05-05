import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
      content
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!, $language: String) {
    cpPages(slug: $slug, language: $language) {
      _id
      name
      slug
      content
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
      excerpt
      content
      status
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
      kind
    }
  }
`;

export const GET_ALL_MENUS = gql`
  query GetAllMenus($language: String) {
    headerMenus: cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
      kind
    }
    footerMenus: cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
      kind
    }
  }
`;
