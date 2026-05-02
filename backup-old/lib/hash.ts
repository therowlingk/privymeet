export async function sha256(input: string): Promise<string> {
  const normalized = input.trim().toLowerCase();
  const data = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hashMany(inputs: string[]): Promise<string[]> {
  const cleaned = inputs
    .map((v) => v.trim())
    .filter(Boolean);

  const hashed = await Promise.all(cleaned.map(sha256));
  return hashed;
}