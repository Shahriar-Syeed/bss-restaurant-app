import axios from "axios";

async function sendHttpRequest(url, config) {
  const response = await axios[`${config}`](url);

  // if(!response.ok)
}

export default function useHttp(url, config, initialData){

}