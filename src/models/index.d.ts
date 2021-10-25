import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NouvelleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Nouvelle {
  readonly id: string;
  readonly title: string;
  readonly titleFR?: string;
  readonly picture?: string;
  readonly author?: string;
  readonly date?: string;
  readonly content?: string;
  readonly contentFR?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Nouvelle, NouvelleMetaData>);
  static copyOf(source: Nouvelle, mutator: (draft: MutableModel<Nouvelle, NouvelleMetaData>) => MutableModel<Nouvelle, NouvelleMetaData> | void): Nouvelle;
}