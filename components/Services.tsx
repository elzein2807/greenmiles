"use client";

import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-ivory-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Signature Services"
          title="Our Travel Services"
          subtitle="Simple and reliable support for local and international travel needs."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              objectPosition={service.objectPosition}
              zoom={service.zoom}
              filter={service.filter}
              overlay={service.overlay}
              tag={service.tag}
              featured={service.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
