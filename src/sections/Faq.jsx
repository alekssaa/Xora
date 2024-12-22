import React from "react";
import { Element } from "react-scroll";
import { faq } from "../constans/index";
import { FaqItem } from "../components/FaqItem";
export const Faq = () => {
  const half = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't kill the cat, it gave it answers
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got qustions, we've dot answers
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2 " />
        </div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="cotainer flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] flex size-20 items-center justify-center border-2 border-s2 bg-s1 z-4">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, half).map((item, index) => (
                <FaqItem key={index} item={item} index={index} />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(half).map((item, index) => (
                <FaqItem key={index} item={item} index={half + index} />
              ))}
            </div>
          </div>
          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};
