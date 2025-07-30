import React, { useState, useEffect } from 'react';
import { contactUsService } from '../services/api';
import './Contact.css';

const Contact = () => {
  // State tanımlamaları
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sayfa yüklendiğinde API'den veri çek
  useEffect(() => {
    fetchContactData();
  }, []);

  // API'den veri çekme fonksiyonu
  const fetchContactData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await contactUsService.getContactUs();
      
      if (response.success) {
        setContactData(response.data);
      } else {
        setError('Veri alınamadı: ' + response.message);
      }
    } catch (err) {
      setError('API bağlantı hatası: ' + err.message);
      console.error('Contact API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Yeniden dene butonu
  const handleRetry = () => {
    fetchContactData();
  };

  // Loading durumu
  if (loading) {
    return (
      <div className="contact-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>İletişim bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Error durumu
  if (error) {
    return (
      <div className="contact-container">
        <div className="error">
          <h3>❌ Bir hata oluştu</h3>
          <p>{error}</p>
          <button onClick={handleRetry} className="retry-btn">
            🔄 Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header */}
        <header className="contact-header">
          <h1>📞 İletişim</h1>
          <p>Bizimle iletişime geçin ve sosyal medyadan takip edin</p>
        </header>

        {/* İletişim Bilgileri */}
        <section className="contact-info">
          <div className="info-card">
            <h3>🏢 Bizimle İletişime Geçin</h3>
            <div className="info-item">
              <span className="icon">📞</span>
              <span>+90 (232) 123 45 67</span>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <span>info@jourlay.com</span>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <span>İzmir, Türkiye</span>
            </div>
          </div>
        </section>

        {/* Sosyal Medya */}
        <section className="social-media">
          <h3>🌟 Sosyal Medyada Bizi Takip Edin</h3>
          
          {contactData && contactData.length > 0 ? (
            <div className="social-cards">
              {contactData.map((contact) => (
                <div key={contact.id} className="social-group">
                  
                  {contact.facebookLink && (
                    <a 
                      href={contact.facebookLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-card facebook"
                    >
                      <span className="social-icon">📘</span>
                      <span>Facebook</span>
                      <span className="external">🔗</span>
                    </a>
                  )}
                  
                  {contact.instagramLink && (
                    <a 
                      href={contact.instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-card instagram"
                    >
                      <span className="social-icon">📷</span>
                      <span>Instagram</span>
                      <span className="external">🔗</span>
                    </a>
                  )}
                  
                  {contact.youTubeLink && (
                    <a 
                      href={contact.youTubeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-card youtube"
                    >
                      <span className="social-icon">📺</span>
                      <span>YouTube</span>
                      <span className="external">🔗</span>
                    </a>
                  )}
                  
                  {contact.twitterLink && (
                    <a 
                      href={contact.twitterLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-card twitter"
                    >
                      <span className="social-icon">🐦</span>
                      <span>Twitter</span>
                      <span className="external">🔗</span>
                    </a>
                  )}
                  
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <p>🚫 Henüz sosyal medya bağlantısı eklenmemiş.</p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="contact-footer">
          <p>© 2024 Jourlay Villa Kiralama. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;