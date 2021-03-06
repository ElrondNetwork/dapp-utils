import BigNumber from "bignumber.js";
export default function getTokenFromData(
  data?: string
): { tokenId: string; nominatedTokenAmount: string } {
  if (data && data.includes("ESDTTransfer")) {
    try {
      const [, encodedToken, encodedAmount, ...rest] = data.split("@");
      const tokenId = Buffer.from(encodedToken, "hex").toString("ascii");
      if (tokenId) {
        const nominatedTokenAmount = new BigNumber(
          "0x" + encodedAmount.replace("0x", "")
        ).toString(10);
        return {
          tokenId,
          nominatedTokenAmount,
        };
      } else {
        return {
          tokenId: "",
          nominatedTokenAmount: "",
        };
      }
    } catch (e) {
      return {
        tokenId: "",
        nominatedTokenAmount: "",
      };
    }
  }
  return {
    tokenId: "",
    nominatedTokenAmount: "",
  };
}
