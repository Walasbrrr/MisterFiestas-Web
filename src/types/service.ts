/**
 * Represents a service offered in the catalog.
 * @see ../../Documentation/04-Architecture/Data-Model.md for the conceptual model.
 */
export type ServiceCategory =
  | "ambientacion"
  | "musica"
  | "experiencias"
  | "efectos"
  | "gastronomia"
  | "fotografia"
  | "navidad";

export type ServicePlan = {
  name: string;
  price: number;
  note?: string;
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  shortDescription: string;
  priceFrom?: number;
  tagline?: string;
  idealFor?: string;
  plans?: ServicePlan[];
  extras?: string[];
  installationRequirements?: string[];
  notes?: string[];
  seasonal?: boolean;
  includes?: string[];
  requirements?: string[];
  featured?: boolean;
  outOfCatalog?: boolean;
};
