// data/products/doorSystems.ts
//
// Helpers that filter each material's full system list down to what a
// given category page needs to show, so pages don't hardcode product
// lists by hand. aluminium-systems.ts / pvc-systems.ts stay the single
// source of truth.

import { aluminiumSystems } from "./aluminium-systems";
import { pvcSystems } from "./pvc-systems";
import { steelSystems } from "./steel-systems";
import { ProductSystem, ProductCategory } from "./types";

function getSource(material: "pvc" | "aluminium" | "steel" | "wood"): ProductSystem[] {
  if (material === "aluminium") return aluminiumSystems;
  if (material === "pvc") return pvcSystems;
  if (material === "steel") return steelSystems;
  return []; // wood: no catalog data yet
}

const DOOR_CATEGORIES = new Set<ProductCategory>([
  "window-door",
  "door",
  "entrance-door",
  "sliding-door",
  "lift-slide-door",
  "folding-door",
  "fire-resistant",
]);

const WINDOW_CATEGORIES = new Set<ProductCategory>([
  "window",
  "window-door",
]);

/** Everything that belongs on a Doors listing page (pure door systems
 * plus the window-door systems that are sold as both). */
export function getDoorSystems(
  material: "pvc" | "aluminium" | "steel" | "wood"
): ProductSystem[] {
  return getSource(material).filter((system) => DOOR_CATEGORIES.has(system.category));
}

/** Everything that belongs on a Windows listing page (pure window systems
 * plus the window-door systems - excludes door-only systems like sliding
 * or lift-slide doors). */
export function getWindowSystems(
  material: "pvc" | "aluminium" | "steel" | "wood"
): ProductSystem[] {
  return getSource(material).filter((system) => WINDOW_CATEGORIES.has(system.category));
}

/** Systems that are exclusively doors (never marketed as windows too) -
 * handy if a page wants to spotlight entrance/pivot doors specifically. */
export function getEntranceOnlySystems(
  material: "pvc" | "aluminium" | "steel" | "wood"
): ProductSystem[] {
  return getDoorSystems(material).filter(
    (system) => system.category === "door" || system.category === "entrance-door"
  );
}

/** Garage doors only (swing/sectional/roller) - kept separate from
 * getDoorSystems since garage doors have their own catalog page. */
export function getGarageDoorSystems(
  material: "pvc" | "aluminium" | "steel" | "wood"
): ProductSystem[] {
  return getSource(material).filter((system) => system.category === "garage-door");
}
