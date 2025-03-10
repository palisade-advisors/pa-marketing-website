import { Disclosure } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "gatsby";
import { externalLinks, navigation } from "../../constants";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavbarMobileProps {
  path: string;
}

export default function NavbarMobile({ path }: NavbarMobileProps) {
  return (
    <Disclosure as="nav" className="bg-gray-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-2">
            <div className="relative flex h-28 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="mr-4">
                    <img
                      className="h-16 w-auto"
                      src="CHANGEME"
                      alt="Palisade Advisors Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-dark-red hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === path
                      ? "bg-dark-red text-white"
                      : "text-gray-600 hover:bg-darker-red hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.href === path ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {externalLinks.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-600 hover:bg-darker-red hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
