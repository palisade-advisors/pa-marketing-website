import ServiceItem from "../../components/ServiceItem";

const mockDesc =
  "This is a short paragraph about Palisade Advisors. It should be at least a paragraph long. Be sure to describe Palisade in the third person, why they are awesome, and what they are focusing on at Palisade. I am adding a bit more here to make this a bit longer to show how the length should be. Also more text here. Where did this come from? How did we get started? What is our mission? What are we trying to accomplish? What is our vision? What is our purpose? Why do we exist? What is our why? What is our raison d'etre? What is our raison d'etre? What is our raison d'etre? What is our raison d'etre? What is our raison d'etre? What is our raison d'etre? What is our";

const services: {
  title: string;
  description: string;
  imageUrl?: string;
}[] = [
  {
    title: "OrgPal",
    description: mockDesc,
    imageUrl: "test",
  },
  {
    title: "NP Consultation",
    description: mockDesc,
    imageUrl: "test",
  },
  {
    title: "Small Biz Startup",
    description: mockDesc,
  },
];

export default function ServicesPage() {
  return (
    <section className="flex flex-col w-full min-h-[calc(100vh-96px)] px-4 md:px-12 items-center gap-12 pb-24">
      {services.map((service, idx) => (
        <ServiceItem
          {...service}
          align={idx % 2 ? "left" : "right"}
          key={service.title}
        />
      ))}
    </section>
  );
}
