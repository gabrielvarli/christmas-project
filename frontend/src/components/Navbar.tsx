import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-rose-500 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "border-b-2 border-white text-white"
                            : "text-white hover:bg-rose-600 hover:text-gray-200",
                          "px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          location.pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-rose-600 text-white"
                      : "text-white hover:bg-rose-600 hover:text-gray-200",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    location.pathname === item.href ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
