const fallbackApiUrl = "http://localhost:8080";

/** Base URL of the Spring Boot API. Empty string disables the live gallery fetch. */
export function getPublicApiUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (raw === "") return "";
  return (raw ?? fallbackApiUrl).replace(/\/$/, "");
}
