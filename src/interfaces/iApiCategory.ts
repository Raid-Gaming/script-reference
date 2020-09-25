import { IApiIndexNamespace } from '@/interfaces/iApiIndexNamespace';

export interface IApiCategory {
  id: string;
  name: string;
  shortName: string;
  namespaces: IApiIndexNamespace[];
}
