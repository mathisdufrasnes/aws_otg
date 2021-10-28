import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class News {
  readonly id: string;
  readonly idNews: number;
  readonly title: string;
  readonly titleFR: string;
  readonly author: string;
  readonly date?: string;
  readonly content?: string;
  readonly contentFR?: string;
  readonly type?: string;
  readonly typeFR?: string;
  readonly nbComments?: number;
  readonly img?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<News, NewsMetaData>);
  static copyOf(source: News, mutator: (draft: MutableModel<News, NewsMetaData>) => MutableModel<News, NewsMetaData> | void): News;
}