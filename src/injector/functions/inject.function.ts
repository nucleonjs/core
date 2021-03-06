import { Constructor } from '../../utils/interfaces/constructor.interface';
import { Injector } from '../injector.class';

export const inject = <T = any>(service: Constructor<T>): T => {
  return Injector.resolve<T>(service);
};
