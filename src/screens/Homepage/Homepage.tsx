import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

const services = [
  "Design R&D",
  "Strategy & Messaging",
  "Products & Experiences",
  "Visual Identity",
  "Design Systems & Toolkits",
  "Motion",
  "Packaging",
  "Bean Dip",
];

export const Homepage = (): JSX.Element => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <div className="flex min-h-screen items-start relative bg-[#0a0419]">
      <div className="flex flex-col items-start relative flex-1 self-stretch grow overflow-hidden overflow-y-scroll">
        <div className="flex flex-col items-start gap-20 px-20 py-0 relative self-stretch w-full min-h-screen">
          <header className="flex flex-col items-start pl-0 pr-20 pt-20 pb-40 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
            <div className="relative w-[335px] h-[86px] [background:url(../logo.png)_50%_50%_/_cover]" />
          </header>

          <section className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-normal text-white text-2xl tracking-[0] leading-[31.7px]" style={{ fontFamily: "'Sharp Sans', sans-serif" }}>
              We are a small studio doing big things. Solid strategy turned into
              pixel perfect, with fun along the way.
              <br />
              <br />
              We have worked together for 20+ years; much of that time
              collaborating tightly with amazing folks at some of the
              world&apos;s most loved brands.
            </p>
          </section>

          <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative flex-1 mt-[-1.00px] font-bold text-white text-[22px] tracking-[0] leading-[29.0px]" style={{ fontFamily: "'Sharp Sans', sans-serif" }}>
                What we do
              </h2>
            </div>

            <Accordion type="multiple" className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={`service-${index}`}
                  value={`item-${index}`}
                  className="border-t border-[#ffffff29] border-b-0"
                >
                  <AccordionTrigger className="flex items-start gap-3 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] hover:no-underline">
                    <img
                      className="relative self-stretch w-2.5"
                      alt="Dot"
                      src="/dot.svg"
                    />
                    <span className="relative flex-1 mt-[-1.00px] [font-family:'Sharp_Sans-Book',Helvetica] font-normal text-white text-lg tracking-[0] leading-[23.8px] text-left">
                      {service}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="px-0 py-2">
                      <p className="text-white/70 text-sm font-normal" style={{ fontFamily: "'Sharp Sans', sans-serif" }}>
                        Content for {service}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative flex-1 mt-[-1.00px] font-bold text-white text-[22px] tracking-[0] leading-[29.0px]" style={{ fontFamily: "'Sharp Sans', sans-serif" }}>
                Our Clients
              </h2>
            </div>

            <img
              className="relative self-stretch w-full flex-[0_0_auto]"
              alt="Logo grid"
              src="/logo-grid.svg"
            />
          </section>

          <footer className="flex h-16 items-center justify-center relative self-stretch w-full bg-transparent backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
            <p className="relative flex-1 font-medium text-[#f7b031] text-[10px] tracking-[0] leading-[13.2px]" style={{ fontFamily: "'Sharp Sans', sans-serif" }}>
              © 2025 Design Mind Studio
            </p>
          </footer>
        </div>
      </div>

      <aside className="flex flex-col items-start justify-center relative flex-1 self-stretch grow">
        <img
          className={`fixed top-0 right-0 object-cover z-10 transition-all duration-500 ease-in-out cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'),_auto] ${
            isImageExpanded 
              ? 'w-screen h-screen' 
              : 'w-1/2 h-[50vh]'
          }`}
          alt="Row"
          src="/row.svg"
          onClick={handleImageClick}
        />

        <div className="flex flex-col items-center justify-center gap-12 px-32 py-16 bg-[#150f22] relative flex-1 self-stretch w-full grow">
        <div className="fixed bottom-0 right-0 w-1/2 h-[50vh] flex flex-col items-center justify-center gap-12 px-32 py-16 bg-[#150f22] z-20">
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2.5 px-16 py-4 relative flex-[0_0_auto] bg-[#0a0419] rounded-[1000px] h-auto hover:bg-[#0a0419]/80"
          >
            <a
              className="relative w-fit mt-[-1.00px] font-normal text-[#64b983] text-2xl text-center tracking-[0] leading-[31.7px] whitespace-nowrap"
              style={{ fontFamily: "'Sharp Sans', sans-serif" }}
              href="mailto:hello@designmind-studio.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              hello@designmind-studio.com
            </a>
          </Button>
        </div>
        </div>
      </aside>
    </div>
  );
};
