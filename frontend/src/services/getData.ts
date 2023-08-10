import { hexatostr } from "./treatment";

export const getAllAuctions = async () => {
    try{
        const response = await fetch("http://localhost:5005/inspect/auctions");
        const result = await response.json();
        console.log(result);
        let auctionData = [];
        for (let i in result.reports) {
            let payload = result.reports[i].payload;
            auctionData = JSON.parse(`${hexatostr(payload)}`);
            console.log(auctionData);
            console.log("aaa")
        }
        
    } catch (error) {
        console.log('error', error);
        return null;
    }
}   