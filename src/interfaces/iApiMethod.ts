import { IApiMethodParam } from '@/interfaces/iApiMethodParam';

export interface IApiMethod {
  name: string;
  usage: string;
  description: string;
  params?: IApiMethodParam[];
  return?: string;
  example: string[];
  engine?: 'SP' | 'MP';
  deprecated?: boolean;
}
