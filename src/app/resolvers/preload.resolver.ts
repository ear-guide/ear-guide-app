// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import {
  ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { inject } from "@angular/core";
import { Observable } from 'rxjs';
import { ContentService, Element } from "../services/content.service";

export const preloadResolver: ResolveFn<Observable<Element[]>> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ContentService).request(route.queryParams['url']);
}
