// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { config } from "../configurations/config";

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(private readonly router: Router) {}

  public handleError(error: Error) {
    this.router.navigateByUrl('/error')
      .finally(() => {
        if (!config.isProd) {
          console.error(error);
        }
      });
  }
}
