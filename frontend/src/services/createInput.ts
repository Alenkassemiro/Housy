import { ethers } from "ethers";
import { InputBox__factory, EtherPortal__factory } from "@cartesi/rollups";

const INPUTBOX_ADDRESS = "0x5a723220579C0DCb8C9253E6b4c62e572E379945";
const DAPP_ADDRESS = "0x142105FC8dA71191b3a13C738Ba0cF4BC33325e2";
const ETHER_PORTAL_ADDRESS = "0xA89A3216F46F66486C9B794C1e28d3c44D59591e";

export async function createInput(value: any) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();

    const inputContract = InputBox__factory.connect(INPUTBOX_ADDRESS, signer);

    const inputBytes = ethers.utils.isBytesLike(value)
    ? value
    : ethers.utils.toUtf8Bytes(value);

    const tx = await inputContract.addInput(DAPP_ADDRESS, inputBytes);
    
    console.log("...");
    const receipt = await tx.wait()
    
    ;
    const event = receipt.events?.find((e) => e.event === "InputAdded");

    if (!event) {
        throw new Error(`InputAdded event not found in receipt of transaction ${receipt.transactionHash}`);
    }
    return {
        status: "Input added",
    };
}