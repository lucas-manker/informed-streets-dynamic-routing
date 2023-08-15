import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const findId = async (client: string) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  //let bodyContent = "id=1&all=true";

  let reqOptions = {
    url: "https://portal.horrocks.com/sites/informedStreetsEndpointV1/query/clients",
    method: "POST",
    headers: headersList,
    data: "", //bodyContent,
  };

  let response = await axios.request(reqOptions);
  return response.data.data
    .filter((ele: any) => {
      if (
        ele.orgName.toLowerCase() === client.toLowerCase() ||
        ele.orgUrl.toLowerCase() === client.toLowerCase()
      )
        return ele;
    })
    .map((ele: any) => ele.id);
};

export default async function getClientInfo(client: string) {
  const clientId = await findId(client);
  if (clientId.length) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `id=${clientId[0]}&all=true`;

    let reqOptions = {
      url: "https://portal.horrocks.com/sites/informedStreetsEndpointV1/query/client",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    return response.data;
  } else {
    return false;
  }
}
