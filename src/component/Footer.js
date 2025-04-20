const Footer = () => {
  return (

    <section className="bg-[#E4ECE0] shadow-xl px-8 py-10">
    <footer className="text-center text-sm text-gray-500 border-t pt-4 pb-6">
      <p>© 2025 All rights reserved</p>
      <div className="mt-2">
        <a href="/terms" className="mx-2 hover:underline">Terms</a>
        <a href="/privacy" className="mx-2 hover:underline">Privacy</a>
        <a href="/cookies" className="mx-2 hover:underline">Cookies</a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
