import { ethers } from "ethers";

export const hexatostr = (hexa: string) => {
    try {
      return ethers.utils.toUtf8String(hexa);
    } catch (e) {
      return hexa;
    }
  };

export function toUnixTime(date: Date) {
    return Math.floor(date.getTime() / 1000);
}
// export function fromUnixTime(unixTime) {
//     return dayjs(parseInt(unixTime) * 1000).format("DD/MM/YYYY");
//   }