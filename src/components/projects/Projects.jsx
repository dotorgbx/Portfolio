import styles from './ProjectsStyles.module.css';
import ipipLogo from '../../assets/ipiplogo.png';
import logo from '../../assets/playlogo.png';
import landing from '../../assets/landing.png';
import ProjectCard from '../ProjectCard';
import { useTranslation } from 'react-i18next';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.projectTitle}>
        {t('Projects')}
      </h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ipipLogo}
          link="https://ipip-limpio.vercel.app/"
          h3={t('projectIPIPTitle')}
          p={t('projectIPIPDescript')}
        />

        <ProjectCard
          src={logo}
          link="https://api-obs-omega.vercel.app/"
          h3={t('project1Title')}
          p={t('project1Descript')}
        />
        <ProjectCard
          src={landing}
          link="https://psico-gabriel.vercel.app/"
          h3={t('project2Title')}
          p={t('project2Descript')}
        />
      </div>
    </section>
  );
}