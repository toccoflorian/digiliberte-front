import Feature from "./Feature";

export interface FeatureCollection {
  type: "FeatureCollection";
  version: string;
  features: Feature[];
}
