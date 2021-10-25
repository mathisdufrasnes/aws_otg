import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class News {
  readonly id: string;
  readonly title: string;
  readonly titleFR: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<News, NewsMetaData>);
  static copyOf(source: News, mutator: (draft: MutableModel<News, NewsMetaData>) => MutableModel<News, NewsMetaData> | void): News;
}