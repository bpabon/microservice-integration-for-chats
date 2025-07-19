import { createHandler } from '@netlify/angular-runtime';

export const handler = createHandler({
  appPath: 'dist/microservice-integration-for-chats/server/entry.netlify',
});
