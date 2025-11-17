import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Package",
      title: "Эргономичный дизайн",
      description: "Анатомическая форма для комфорта в поездках"
    },
    {
      icon: "MapPin",
      title: "Поддержка талии",
      description: "Правильное распределение нагрузки"
    },
    {
      icon: "CircleDot",
      title: "Комфортная подушка",
      description: "Мягкая набивка премиум качества"
    },
    {
      icon: "Waves",
      title: "Обводы тела",
      description: "Повторяют естественные изгибы"
    }
  ];

  const packageItems = [
    {
      title: "Подушка №1",
      description: "Поясничная поддержка",
      details: "Размер: 35×28 см"
    },
    {
      title: "Подушка №2",
      description: "Шейная поддержка",
      details: "Размер: 30×25 см"
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            ЭРГОНОМИЧНЫЙ
            <br />
            <span className="text-primary">ДИЗАЙН</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Премиальные автомобильные подушки класса люкс
          </p>
        </div>

        <div className="relative mb-20 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          <img 
            src="https://cdn.poehali.dev/files/d8ecf5d1-7e14-4d11-912a-a7db84bc5eba.jpg"
            alt="Эргономичные автомобильные подушки"
            className="relative w-full h-auto rounded-2xl shadow-2xl border border-primary/20"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 p-6 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <Icon name={feature.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white text-sm md:text-base">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Что входит в <span className="text-secondary">комплект</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {packageItems.map((item, index) => (
              <Card 
                key={index}
                className="bg-card-gradient backdrop-blur-sm border-primary/30 p-8 hover:border-primary/60 transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${1 + index * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary flex-shrink-0 animate-glow">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-secondary text-lg mb-2">{item.description}</p>
                    <p className="text-muted-foreground text-sm">{item.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/30 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Icon name="Sparkles" className="w-8 h-8 text-secondary" />
            <h3 className="text-2xl font-bold text-white">Премиум качество</h3>
            <Icon name="Sparkles" className="w-8 h-8 text-secondary" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Shield" className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Гарантия качества</p>
              <p className="text-muted-foreground text-sm">Сертифицированные материалы</p>
            </div>
            <div>
              <Icon name="Truck" className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Быстрая доставка</p>
              <p className="text-muted-foreground text-sm">По всей России</p>
            </div>
            <div>
              <Icon name="Star" className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Класс люкс</p>
              <p className="text-muted-foreground text-sm">Элегантный стиль</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
