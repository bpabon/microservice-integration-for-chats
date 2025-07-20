import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'auth/change-password/:token',
  //   renderMode: RenderMode.Client,
  // },
  {
    path: 'auth/**',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
