import md5 from 'blueimp-md5';
import axios from 'axios';

async function GetApi(gateway) {
  const ts = 1;
  const hash = md5(
    ts +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_PUBLIC_KEY,
  );
  const url =
    gateway +
    ts +
    '&apikey=' +
    process.env.REACT_APP_MARVEL_PUBLIC_KEY +
    '&hash=' +
    hash;

  try {
    const request = await axios.get(url);
    return request.data;
  } catch (ex) {
    console.log('ERRO:', ex.message);
    return false;
  }
}
export default GetApi;
