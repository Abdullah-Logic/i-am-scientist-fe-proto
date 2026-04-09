import Navbar from "./Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div
        className="flex h-screen w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #1D013C 0%, #310266 42%, #3C027D 64%, #4E03A2 100%)",
        }}
      >
        {/* Sidebar Space Placeholder for Large Screens */}
        <div className="hidden lg:block w-[19rem] xl:w-[21rem] 2xl:w-[23rem]"></div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p- mt-16 lg:mt-20 magicSchool">
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
