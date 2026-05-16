import { verifyMerchant, isVerified } from "../index.js";

const domain = "gymshark.com";

const result = await verifyMerchant(domain);

console.log(result);

if (isVerified(result)) {
  console.log(`${domain} has an active GenGEO verification record.`);
} else {
  console.log(`${domain} has no active GenGEO verification record.`);
}
