import React from "react";
import IconBox1 from "./IconBox1";

function Services() {
  return (
    <section className="default-padding bg-gray-50" id="Service">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h6 className="subtitle">Services</h6>
          <h1 className="title">
            What <span>We</span> Do
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <IconBox1
              title="BRANDING"
              description="Building brands from scratch and rejuvenating
                        old ones, we integrate design thinking in our branding philosophy to create memorable brands."
              svg="assets/branding.svg"
            />
            <IconBox1
              title="DESIGN"
              description="We create meaningful first impressions of your brand through designs that are stunning & rousing."
              svg="assets/desing.svg"
            />
            <IconBox1
              title="MARKETING"
              description="We elevate your brand through successful marketing strategies that satisfy the needs of an ever-changing digital world."
              svg="assets/marketing.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
