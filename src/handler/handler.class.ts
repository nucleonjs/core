import { env } from '../config/env.function';
import { Exception } from './exception.class';
import { existsSync } from 'fs';
import { Request, Response, NextFunction } from 'express';

export class Handler {
  public static handleError(
    error: TypeError | Exception,
    request: Request,
    response: Response,
    next: NextFunction,
  ): void {
    response.status(500);

    const data = {
      status: 500,
      message: 'Server Error',
    };

    if (request.xhr || request.headers.accept?.includes('json')) {
      response.send(data);

      return;
    }

    if (!env<boolean>('APP_DEBUG')) {
      const customTemplatePath = 'views/errors/500.atom.html';

      const file = existsSync(customTemplatePath)
        ? customTemplatePath
        : `${__dirname}/../../assets/views/http`;

      response.render(file, data);
    }

    response.render(`${__dirname}/../../assets/views/exception`, {
      message: error.message,
    });
  }
}