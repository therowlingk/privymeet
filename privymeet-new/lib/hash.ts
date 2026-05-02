import SHA256 from "crypto-js/sha256";
import Hex from "crypto-js/enc-hex";

export async function sha256(input: string): Promise<string> {
  const normalized = input.trim().toLowerCase();
  return SHA256(normalized).toString(Hex);
}

export async function hashMany(inputs: string[]): Promise<string[]> {
  const cleaned = inputs
    .map((v) => v.trim())
    .filter(Boolean);

  return Promise.all(cleaned.map(sha256));
}