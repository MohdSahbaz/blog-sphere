const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md py-6 text-center text-white mt-12">
      <p className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Bloggr. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
