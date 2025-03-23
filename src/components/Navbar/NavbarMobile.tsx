import { Disclosure } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "gatsby";
import { externalLinks, navigation } from "../../constants";
import useGeneralData from "../../hooks/use-general-data";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavbarMobileProps {
  path: string;
}

export default function NavbarMobile({ path }: NavbarMobileProps) {
  const { logo, ctaLink, ctaText } = useGeneralData();
  return (
    <Disclosure as="nav" className="bg-pa-cream">
      {({ open }) => (
        <>
          <div className="mx-auto px-2">
            <div className="relative flex h-28 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="mr-4">
                    <img
                      className="h-16 w-auto"
                      src={logo}
                      alt="Palisade Advisors Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-pa-primary hover:bg-pa-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pa-primary">
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
                      ? "bg-pa-red text-white"
                      : "text-gray-600 hover:bg-pa-red hover:text-white",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.href === path ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="a"
                href={ctaLink}
                className={classNames(
                  "block w-40 text-center px-3 py-2 text-base font-medium bg-pa-orange text-white hover:bg-pa-red"
                )}
              >
                {ctaText}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
