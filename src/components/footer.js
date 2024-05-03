import Link from "next/link";
import { HeartIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="w-screen p-5 border-t border-t-gray-500 bg-green-400 dark:bg-green-900">
      <div className="container mx-auto text-zinc-900">
        <span className="text-sm flex items-center gap-1">
          Made w/ <HeartIcon size={18} aria-label='love' /> by students at&nbsp;
          <Link
            href="https://www.ef.co.uk/ilsd/schools/manchester/"
            target="_blank"
            className="text-black font-medium"
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
