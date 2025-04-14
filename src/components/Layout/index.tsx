import { PageProps } from "gatsby";
import Navbar from "../Navbar";

// This is terrible. Why define children as a prop if it will always be undefined?
// Why is this the recommended way to do this?
type LayoutProps = Omit<PageProps, "children"> & {
  children: React.ReactNode;
};

// This component (despite being declared as a page wrapper) is unmounted and remounted
// on every. single. page. change. This is not supposed to happen but oh well
export default function Layout({ children, ...rest }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex flex-grow items-stretch">{children}</main>
      {/* TODO: footer */}
    </div>
  );
}
