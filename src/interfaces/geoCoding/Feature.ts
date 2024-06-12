import Geometry from "./Geometry";
import Proprietes from "./Proprietes";

export default interface Feature {
  type: "Feature";
  geometry: Geometry;
  properties: Proprietes;
}
