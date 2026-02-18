import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/profile/profile.components').then(m => m.ProfileComponent)
  }
];