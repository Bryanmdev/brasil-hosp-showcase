import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MaranhaoMap from "@/components/MaranhaoMap";

const Location = () => {
  const regions = [
    { name: "Sul", states: ["Rio Grande do Sul", "Santa Catarina", "Paraná"] },
    { name: "Sudeste", states: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"] },
    { name: "Centro-Oeste", states: ["Goiás", "Mato Grosso", "Mato Grosso do Sul", "Distrito Federal"] },
    { name: "Nordeste", states: ["Bahia", "Pernambuco", "Ceará", "Maranhão", "Paraíba"] },
    { name: "Norte", states: ["Amazonas", "Pará", "Tocantins"] },
  ];

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onde Nos Localizamos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atendemos hospitais e clínicas em todo o território nacional com entregas rápidas e seguras
          </p>
        </div>

        {/* Maranhão Map */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <MaranhaoMap />
            </CardContent>
          </Card>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {regions.map((region, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                </div>
                <ul className="space-y-2">
                  {region.states.map((state, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {state}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            <span className="font-semibold text-primary">Sede Nacional:</span> São Paulo, SP
          </p>
          <p className="text-muted-foreground mt-2">
            Com centros de distribuição estratégicos para atendimento ágil em todas as regiões
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
