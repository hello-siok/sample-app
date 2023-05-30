import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://cdn-icons-png.flaticon.com/512/7218/7218647.png";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="icon logo" />
      </div>
      <h1 className="hero-banner__headline">Welcome</h1>
      <p className="hero-banner__description">
        This is a demo application that demonstrates report pulling with RBAC protected by <strong>Auth0</strong>.
      </p><p/><p/>
      <a
        id="code-sample-link"
        rel="noopener noreferrer"
        href="http://localhost:4040/profile"
        className="button button--secondary"
      >
        [Profile] view my user profile →
      </a>
      <p/><p/>
      <a
        id="code-sample-link"
        rel="noopener noreferrer"
        href="http://localhost:4040/public"
        className="button button--secondary"
      >
        [Public] Anyone can see the message →
      </a>
      <p/><p/>
      <a
        id="code-sample-link"
        rel="noopener noreferrer"
        href="http://localhost:4040/admin"
        className="button button--secondary"
      >
        [Manager] get report only accessible by 'Manager' →
      </a><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/>
    </div>
  );
};
