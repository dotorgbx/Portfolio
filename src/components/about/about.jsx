import styles from './aboutStyles.module.css';
import foto from '../../assets/foto.jpg';
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={foto}
          className={styles.hero}
          alt="Gabriel Palacios"
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.name}>
          Gabriel <br /> Palacios
        </h1>

        <h2 className={styles.role}>
          {t('developer')}
        </h2>

        <p className={styles.description}>
          {t('contenido')}
        </p>

        <a
          href={
            i18n.language === 'es'
              ? "https://drive.google.com/file/d/1wdAmAWA98WdhIWt_nqq-GybVny4DoAx8/view?usp=drive_link"
              : "https://drive.google.com/file/d/1yrv_AxTK9D4KmXkbIdLG5icrUW1RWxW2/view?usp=drive_link"
          }
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default About;