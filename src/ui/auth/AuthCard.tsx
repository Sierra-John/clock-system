export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-val-yellow">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className=" flex flex-col justify-center items-center gap-[50px] w-[95%] h-[90%] lg:w-[75%] lg:h-[75%] rounded-[44px] bg-white">
          {children}
        </div>
      </div>
    </section>
  );
}
