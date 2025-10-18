import { Stethoscope, Pill, Wrench, Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Equipamentos Médicos",
      description: "Linha completa de equipamentos hospitalares de última geração, desde monitores até aparelhos de diagnóstico.",
    },
    {
      icon: Pill,
      title: "Medicamentos",
      description: "Fornecimento de medicamentos hospitalares com certificação e rastreabilidade garantidas.",
    },
    {
      icon: Wrench,
      title: "Manutenção Técnica",
      description: "Serviços de manutenção preventiva e corretiva para todos os equipamentos fornecidos.",
    },
    {
      icon: Truck,
      title: "Logística Especializada",
      description: "Entrega rápida e segura com controle de temperatura e rastreamento em tempo real.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Equipe técnica disponível a qualquer momento para suporte e emergências.",
    },
    {
      icon: ShieldCheck,
      title: "Conformidade Regulatória",
      description: "Todos os produtos atendem às normas da ANVISA e padrões internacionais de qualidade.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Oferecemos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soluções completas para o setor de saúde, com qualidade certificada e suporte dedicado
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={medicalEquipmentImage}
            alt="Equipamentos Médicos"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
