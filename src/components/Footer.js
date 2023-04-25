function Footer() {
  let year = new Date().getFullYear()
  return (
    <footer className="footer"><p className="footer__information">© {year} Mesto Russia</p></footer>
  )
};

export default Footer;