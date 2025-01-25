import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://capacitaenlinea.cl/demodoctorapi/index.php',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;


