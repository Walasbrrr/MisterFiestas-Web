/**
 * Represents a service offered in the catalog.
 * @see ../../Documentation/04-Architecture/Data-Model.md for the conceptual model.
 */
export type ServiceCategory =
  "ambientacion" | "musica" | "experiencias" | "efectos" | "gastronomia";

export type Service = {
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  shortDescription: string;
  priceFrom?: number;
  includes?: string[];
  requirements?: string[];
  featured?: boolean;
};
