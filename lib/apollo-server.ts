import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.ERXES_ENDPOINT || 'https://energycastle.next.erxes.io/gateway/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.ERXES_APP_TOKEN;
  const clientPortalId = process.env.ERXES_CMS_ID;
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'erxes-client-portal': clientPortalId || '',
    },
  };
});

export const serverClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
