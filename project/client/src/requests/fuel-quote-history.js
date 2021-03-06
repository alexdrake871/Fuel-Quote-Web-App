import Axios from "axios";

//Sending data to back-end to create fuel quote
export async function createQuote(data, login) {
  let creds = login;
  return Axios.post("/fuel/form ", data, {
    headers: { username: creds.username },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export async function getQuoteHistory(login) {
  let creds = login;
  return Axios.post(
    "/fuel/history ",
    {},
    {
      headers: { username: creds.username },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export async function getPrice(login, data) {
  let creds = login;
  return Axios.post(
    "/fuel/price ",
    data,
    {
      headers: { username: creds.username },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}
