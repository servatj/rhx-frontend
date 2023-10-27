const Footer = () => {
    return (
    <footer className="bg-black text-blueGray-600 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Levely</p>
          <p className="text-sm">© 2023 All rights reserved.</p>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-blueGray-600 hover:text-gray-400 text-sm">Privacy Policy</a>
          <a href="#" className="text-blueGray-600 hover:text-gray-400 text-sm">Terms of Service</a>
          <a href="#" className="text-blueGray-600 hover:text-gray-400 text-sm">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
