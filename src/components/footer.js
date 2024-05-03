import Link from "next/link";

function Footer() {
  return (
    <footer className="w-screen p-5 border-t border-t-gray-700">
      <div className="container mx-auto text-zinc-300">
        <span className="text-sm">
          Made w/ ❤️ by students at&nbsp;
          <Link
            href="https://www.ef.co.uk/ilsd/schools/manchester/"
            target="_blank"
            className="text-blue-300 font-medium"
          >
            EF Manchester
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}

export default Footer;
