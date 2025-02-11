import React, { useState, FormEvent } from 'react';
import { Container, ContactForm, SocialLinks, ContactInfo } from './styles';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Mensagem enviada com sucesso!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container>
      <div className="container">
        <h1>Fale Conosco</h1>

        <ContactInfo>
          <div className="info-section">
            <h2>Horário de Funcionamento</h2>
            <p>
              <FaClock /> <strong>Almoço:</strong> Segunda a sexta-feira
            </p>
            <p className="hours">11h às 14h</p>
            <p>
              <FaClock /> <strong>Jantar:</strong> Quinta a domingo
            </p>
            <p className="hours">18h30 às 22h30</p>
          </div>

          <div className="info-section">
            <h2>Localização</h2>
            <p>
              <FaMapMarkerAlt /> Rua Ucilla Lorencini Tafarello, 278
            </p>
            <p className="address">Terra da Uva - Jundiaí/SP</p>
          </div>

          <div className="info-section">
            <h2>Contato</h2>
            <p>
              <FaPhone /> (11) 94356-3172
            </p>
            <p>
              <FaWhatsapp /> (11) 94356-3172
            </p>
          </div>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Envie sua Mensagem</h2>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="reclamacao">Reclamação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button type="submit">Enviar Mensagem</button>
        </ContactForm>

        <SocialLinks>
          <h2>Siga-nos nas Redes Sociais</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/rikas.burguer/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span>@rikas.burguer</span>
            </a>
            <a href="https://wa.me/5511943563172" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>(11) 94356-3172</span>
            </a>
          </div>
        </SocialLinks>
      </div>
    </Container>
  );
}; 