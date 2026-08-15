import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import imagemCadastro from './imgcadastro.jpg';
import styles from './Cadastro.module.css';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ tipo: '', texto: '' });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Criar Conta | Anime Navs';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ tipo: '', texto: '' });

    if (!username.trim() || !email.trim() || !senha.trim()) {
      setFeedback({
        tipo: 'erro',
        texto: 'Por favor, preencha todos os campos.',
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('https://animenavs.onrender.com/Cadastro', {
        username: username.trim(),
        email: email.trim(),
        senha,
      });

      setFeedback({
        tipo: 'sucesso',
        texto: response.data?.mensagem || 'Usuário cadastrado com sucesso! Redirecionando...',
      });

      setUsername('');
      setEmail('');
      setSenha('');

      setTimeout(() => {
        navigate('/Login');
      }, 1500);
    } catch (error) {
      const mensagemErro =
        error.response?.data?.erro || 'Erro ao conectar com o servidor. Tente novamente.';
      setFeedback({
        tipo: 'erro',
        texto: mensagemErro,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.formColumn}>
          <header className={styles.formHeader}>
            <h1 className={styles.title}>Olá! Fico feliz em te ver aqui!</h1>
            <p className={styles.subtitle}>
              Já tem cadastro?{' '}
              <Link to="/Login" className={styles.loginLink}>
                Realize o login
              </Link>
            </p>
          </header>

          {feedback.texto && (
            <div
              id="cadastro-feedback"
              role={feedback.tipo === 'erro' ? 'alert' : 'status'}
              aria-live="polite"
              className={feedback.tipo === 'erro' ? styles.errorMessage : styles.successMessage}
            >
              {feedback.texto}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
                aria-describedby={feedback.texto ? 'cadastro-feedback' : undefined}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                aria-describedby={feedback.texto ? 'cadastro-feedback' : undefined}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="senha" className={styles.label}>
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                autoComplete="new-password"
                minLength={6}
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                disabled={loading}
                aria-describedby={feedback.texto ? 'cadastro-feedback' : undefined}
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </div>

        <div className={styles.imageColumn} aria-hidden="true">
          <img
            src={imagemCadastro}
            alt=""
            className={styles.sideImage}
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}

export default Cadastro;
