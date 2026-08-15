import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import imagemLogin from './imglogin.jpg';
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redireciona para a rota de onde veio ou para /MyPage
  const from = location.state?.from?.pathname || '/MyPage';

  useEffect(() => {
    document.title = 'Entrar | Anime Navs';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!username.trim() || !senha.trim()) {
      setErrorMessage('Por favor, preencha o usuário e a senha.');
      return;
    }

    try {
      setLoading(true);
      await login({ username: username.trim(), senha });
      navigate(from, { replace: true });
    } catch (error) {
      const msg = error.response?.data?.erro || 'Usuário ou senha incorretos.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageColumn} aria-hidden="true">
          <img
            src={imagemLogin}
            alt=""
            className={styles.sideImage}
            loading="eager"
          />
        </div>

        <div className={styles.formColumn}>
          <header className={styles.formHeader}>
            <h1 className={styles.title}>Bem-vindo de volta!</h1>
            <p className={styles.subtitle}>
              Ainda não tem cadastro?{' '}
              <Link to="/Cadastro" className={styles.signupLink}>
                Realize-o aqui
              </Link>
            </p>
          </header>

          {errorMessage && (
            <div role="alert" aria-live="assertive" className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form} noValidate={false}>
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
                autoComplete="current-password"
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
