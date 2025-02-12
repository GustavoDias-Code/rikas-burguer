import React from 'react';
import { Container, ContactForm, SocialLinks, ContactInfo } from './styles';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mvgzbbra");

  if (state.succeeded) {
    return (
      <Container>
        <div className="container">
          <h1>Mensagem Enviada!</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Obrigado pelo seu contato. Retornaremos em breve!
          </p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'block',
              margin: '0 auto'
            }}
          >
            Enviar nova mensagem
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="container">
        <h1>Fale Conosco</h1>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Envie sua Mensagem</h2>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={state.submitting}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={state.submitting}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <select
              id="subject"
              name="subject"
              required
              disabled={state.submitting}
            >
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="reclamacao">Reclamação</option>
              <option value="outros">Outros</option>
            </select>
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={state.submitting}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </ContactForm>

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
            <p className="address">Cecap - Jundiaí/SP</p>
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