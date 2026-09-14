/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const [active, setactive] = useState(false)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return(
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a role="button" onClick={() => setactive(!active) } className={`navbar-burger burger ${active & 'is active'}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu burger ${active & 'is active'}`}>
    <div className="navbar-start">
    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
        {t('buttonText')}
        </a>

        <div className="navbar-dropdown" >
          <a className="navbar-item"onClick={() => changeLanguage('es')}>
           {t('idiomaES')}
          </a>
          <a className="navbar-item" onClick={() => changeLanguage('en')}>
          {t('idiomaEN')}
          </a>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          {t("About")}
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="https://www.facebook.com/gaboxks.palacios/" target='_blank' rel="noreferrer">
            Facebook&nbsp;&nbsp;       
           {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="any"/> */}
          </a>
          <a className="navbar-item" href="https://www.linkedin.com/in/gabriel-exequiel-palacios-rodr%C3%ADguez-a07a14218/" target='_blank' rel="noreferrer">
            Linkedin&nbsp;&nbsp;&nbsp;
    {/* <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"  alt="any"/> */}
          </a>
          <a className="navbar-item" href="https://github.com/dotorgbx" target='_blank' rel="noreferrer">
          Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          
   {/*  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub logo"/> */}
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        </div>
      </div>
    </div>
  </div>
</nav>
    )
};