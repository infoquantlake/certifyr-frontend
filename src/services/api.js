import axios from 'axios';

export const verifyCertificate = (code) =>
  axios
    // .get(`http://localhost:4000/api/verify?code=${code}`)
    .get(`https://certifyer.onrender.com/api/verify?code=${code}`)
    .then((res) => res.data);