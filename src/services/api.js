// API servis dosyası
import axios from 'axios';

// Environment'a göre base URL belirleme
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

// Axios instance oluşturun
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 saniye timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor - istekleri loglama için
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - hataları handle etmek için
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// ContactUs API servisleri
export const contactUsService = {
  // ContactUs verilerini getir
  getContactUs: async () => {
    try {
      const response = await api.get('/contactus');
      return response.data;
    } catch (error) {
      console.error('ContactUs API Error:', error);
      throw error;
    }
  }
};

// Gelecekte başka servisler ekleyebilirsiniz
export const propertyService = {
  // Villa listesi getir (gelecekte kullanmak için)
  getProperties: async () => {
    try {
      const response = await api.get('/properties');
      return response.data;
    } catch (error) {
      console.error('Properties API Error:', error);
      throw error;
    }
  }
};

export default api;