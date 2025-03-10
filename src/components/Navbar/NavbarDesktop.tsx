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
    <nav className="bg-gray-50">
      <div className="mx-auto px-6 lg:px-20">
        <div className="relative flex h-28 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="mr-4">
                <img
                  className="h-16 w-auto"
                  src="CHANGEME"
                  alt="Palisade Advisors Logo"
                />
              </Link>
              <div className="block ml-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      path === item.href
                        ? "text-dark-red "
                        : "hover:text-dark-red ",
                      "rounded-md px-3 py-2 text-lg font-medium transition-all duration-100 mr-2"
                    )}
                    aria-current={path === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-6 block">
              <div className="flex space-x-4 h-full items-center">
                {externalLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-lg font-medium transition-all duration-100 inline-flex items-center hover:text-dark-red"
                  >
                    <item.icon size={24} stroke={1.5} className="mr-2" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
