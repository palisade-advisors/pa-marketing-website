import ServiceItem from "../../components/ServiceItem";
import useServiceData from "../../hooks/use-service-data";

export default function ServicesPage() {
  const services = useServiceData();
  return (
    <section className="flex flex-col w-full min-h-[calc(100vh-96px)] px-4 md:px-12 items-center gap-12 pb-24">
      {services.map((service, idx) => (
        <ServiceItem
          {...service}
          align={idx % 2 ? "left" : "right"}
          key={service.name}
        />
      ))}
    </section>
  );
}
