import { ethers } from "ethers";
import axios from "axios";

export interface DiferenceTime {
  time: string;
  value: number;
}

export const hex2str = (hex: string) => {
  try {
    return ethers.utils.toUtf8String(hex);
  } catch (e) {
    return hex;
  }
};

export async function fetchImageAndConvertToBase64(url: string) {
  // Fetch the image
  const response = await fetch(url);

  // Get the blob data of the image
  const blob = await response.blob();

  const file = new File([blob], "ipfsFile.png", { type: "image/png" });

  // Function to convert blob to Base64
  //   @ts-ignore
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Convert blob to Base64
  let base64Data = await blobToBase64(blob);

  base64Data = (base64Data as any).slice(22);

  return { base64Data, file };
}

export async function sendToIPFS(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const resFile = await axios({
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: formData,
    headers: {
      pinata_api_key: "453596fd390b84ed4760",
      pinata_secret_api_key:
        "3d083e8a12dddd4774431c60c03d2f457075abe50f656f91a4dc97bd46d11886",
      "Content-Type": "multipart/form-data",
    },
  });

  const fileHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;

  return fileHash;
}

export function toUnixTime(date: Date) {
  return Math.floor(date.getTime() / 1000);
}
