// API servis dosyası
import axios from 'axios';

// Base URL'i tanımlayın
const BASE_URL = 'https://localhost:44304/api';

// Axios instance oluşturun
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 saniye timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

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