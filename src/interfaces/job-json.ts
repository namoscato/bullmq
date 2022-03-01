import { RedisJobOptions } from '../types';

export interface JobJson {
  id: string;
  name: string;
  data: string;
  opts: RedisJobOptions;
  progress: number | object;
  attemptsMade: number;
  finishedOn?: number;
  processedOn?: number;
  timestamp: number;
  failedReason: string;
  stacktrace: string;
  returnvalue: string;
  parentKey?: string;
}

export interface JobJsonRaw {
  id: string;
  name: string;
  data: string;
  opts: string;
  progress: string;
  attemptsMade: string;
  finishedOn?: string;
  processedOn?: string;
  timestamp: string;
  failedReason: string;
  stacktrace: string[];
  returnvalue: string;
  parentKey?: string;
  parent?: string;
}
