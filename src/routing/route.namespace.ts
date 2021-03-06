import { Router } from './router.class';
import { Request, Response } from 'express';

export namespace Route {
  export const Delete = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.delete(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };

  export const Get = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.get(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };

  export const Options = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.options(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };

  export const Patch = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.patch(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };

  export const Post = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.post(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };

  export const Put = (
    url: string,
  ): ((target: any, controllerMethod: string) => void) => {
    return (target: any, controllerMethod: string) => {
      Router.put(url, async (request: Request, response: Response) => {
        Router.respond(request, response, target.constructor, controllerMethod);
      });
    };
  };
}
