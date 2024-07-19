export default function Footer() {
  return (
    <footer className="bg-cBlueDark w-full">
      <section className="px-5 py-8 lg:px-0 lg:max-w-[805px] flex mx-auto">
        <div
          className="lg:text-sm text-xs text-white font-satoshi_medium flex flex-col lg:flex-row  
         gap-y-8 tracking-[2.8px]"
        >
          <p className="flex justify-center lg:flex-none">CELLARES © 2024</p>
          <div className="flex flex-row justify-between border-2 lg:flex-1 border-white ">
            <p>LINKEDIN</p>
            <p>FAQ</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS OF USE</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
