function MobilSideBar({ children }) {
  return (
    <aside className="fixed right-0 bottom-0 left-0 flex h-16 border-t border-t-gray-200 bg-white px-4 py-2 lg:hidden">
      {children}
    </aside>
  );
}

export default MobilSideBar;
