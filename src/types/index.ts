import { Redis } from 'ioredis';
import { Redis as UpstashRedis } from '@upstash/redis';

export interface IGetOrRefreshParams<T> {
  key: string;
  expiry?: number;
  forceRefresh?: boolean;
  parseResult?: boolean;
  cacheRefreshHandler?: () => Promise<T>;
}

export interface IGetOrRefreshDataInPaginatedListParams<T>
  extends IGetOrRefreshParams<T> {
  // if item is part of paginated list
  listKey: string;
  score?: number;
  updateScoreInPaginatedList?: number;
}

export type IGetOrRefreshReturnValue<T> = Promise<T | undefined>;

export interface ISetParams<T> {
  key: string;
  value: string | number | Buffer | Object | Record<string, string | T> | T;
  expiry?: number;
}

export interface IAppInitParams {
  maxPaginatedItems: number;
  redis?: Redis;
  upstashRedis?: UpstashRedis;
  verbose?: boolean;
}

export interface IAppStoreRef {
  redis: Redis | null;
  maxPaginatedItems: number;
  upstashRedis: UpstashRedis | null;
}

export interface IGetPaginatedListByPageParams {
  key: string;
  page: number;
  sizePerPage: number;
}

export interface IInsertPaginatedListItemParams {
  key: string;
  id: string;
  score?: number;
}

export interface IRemoveItemFromPaginatedListParams {
  key: string;
  id: string;
}

export interface IUpdateItemScoreFromPaginatedList {
  key: string;
  id: string;
  score: number;
}
