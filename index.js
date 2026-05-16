const DEFAULT_ENDPOINT = "https://api.gengeo.co/api/verify";

export async function verifyMerchant(domain, options = {}) {
  if (!domain) {
    throw new Error("verifyMerchant requires a domain");
  }

  const endpoint = options.endpoint || DEFAULT_ENDPOINT;
  const url = new URL(endpoint);
  url.searchParams.set("domain", domain);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "User-Agent": options.userAgent || "GenGEO-Agent-SDK/0.1"
    }
  });

  if (!res.ok) {
    throw new Error(`GenGEO verification failed: ${res.status}`);
  }

  return await res.json();
}

export function isVerified(result) {
  return result?.verified === true && result?.status === "verified";
}
