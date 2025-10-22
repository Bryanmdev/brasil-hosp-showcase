import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

        {/* Brazil Map Representation */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-16">
                <div className="relative aspect-[4/3] bg-background/50 rounded-xl p-8 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full max-w-md">
                      {/* Simplified Maranhão Map */}
                      <path
                        d="M 50 60 L 80 50 L 110 55 L 135 50 L 155 60 L 165 80 L 170 105 L 165 130 L 150 145 L 125 150 L 100 155 L 75 150 L 55 140 L 40 120 L 35 95 L 38 75 Z"
                        className="fill-primary/20 stroke-primary stroke-2"
                      />
                      {/* Location Markers - Cities in Maranhão */}
                      <circle cx="95" cy="100" r="5" className="fill-secondary animate-pulse" />
                      <circle cx="125" cy="110" r="4" className="fill-secondary animate-pulse" />
                      <circle cx="75" cy="120" r="4" className="fill-secondary animate-pulse" />
                      <circle cx="105" cy="85" r="4" className="fill-secondary animate-pulse" />
                      <circle cx="140" cy="95" r="4" className="fill-secondary animate-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
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
