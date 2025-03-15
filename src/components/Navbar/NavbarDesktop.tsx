import { Link } from "gatsby";
import { externalLinks, navigation } from "../../constants";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavbarDesktopProps {
  path: string;
}

export default function NavbarDesktop({ path }: NavbarDesktopProps) {
  return (
    <nav>
      <div className="mx-auto px-6">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-between">
            <Link to="/" className="mr-4">
              <img
                className="h-14 w-auto"
                src="/img/PA_black.png"
                alt="Palisade Advisors Logo"
              />
            </Link>
            <div className="ml-6 block">
              <div className="flex space-x-4 h-full items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      path.replace("/", "") === item.href.replace("/", "")
                        ? "after:block after:h-1 mb-[-10px] after:mt-2 after:w-full after:origin-bottom-right after:bg-pa-red "
                        : "after:duration-200 ease-out after:block after:h-1 mb-[-10px] after:mt-2 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-pa-red after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 ",
                      "px-1 py-2 text-lg mr-2"
                    )}
                    aria-current={path === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  className="bg-pa-orange hover:bg-pa-red transition-colors duration-300 ease-out text-white px-4 py-2 ml-4"
                  href="/contact"
                >
                  Schedule a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
