import { SidebarNav } from "../components/side-navbar";

export default function AuthenticatedLayout({ children }) {
  return (
    <>
      <div className="relative flex">
        <div className="flex w-full">
          <aside className="sticky left-0 top-0 z-30 -ml-2 hidden h-screen shrink-0 overflow-y-auto pr-2 md:sticky md:block">
            <SidebarNav />
          </aside>
          <section className="mx-auto mt-10 max-w-[2000px] flex-1 p-4 md:mt-10 md:pl-10">
            {children}
          </section>
        </div>
      </div>
    </>
  );
}
