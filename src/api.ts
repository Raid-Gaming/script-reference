import { setup } from 'axios-cache-adapter';

import { IApiCategory } from '@/interfaces/iApiCategory';
import { IApiMethod } from '@/interfaces/iApiMethod';

const api = setup({
  baseURL: `${process.env.BASE_URL}api`,
});
const { get } = api;

export async function getApiIndex(): Promise<IApiCategory[]> {
  const { data } = await get<IApiCategory[]>('/index.json');
  return data;
}

export async function getApiMethod(category: string, namespace: string, method: string): Promise<IApiMethod> {
  const { data } = await get<IApiMethod>(`/${category}/${namespace}/${method}.json`);
  return data;
}
