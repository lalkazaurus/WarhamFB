import styles from './Footer.module.css'

const Footer = () => {
	return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection.about}>
          <h2 className={styles.footerTitle}>About Us</h2>
          <p>
            We are a group of passionate developers and designers dedicated to creating the best user experiences on the web.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Races</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Interesting Walkthroughs</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Contact Us</h2>
          <p>Email: indiraptor63983@gmail.com</p>
          <p>Phone: +380 68 847 38 23</p>
          <div className={styles.footerSocials}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Warhamfb. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;