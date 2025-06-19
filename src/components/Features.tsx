import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Brain",
      title: "ИИ генерация рецептов",
      description:
        "Персональные рецепты на основе ваших предпочтений и ограничений",
    },
    {
      icon: "Filter",
      title: "Система фильтров",
      description: "Веган, кето, безглютен — более 50 типов диет и ограничений",
    },
    {
      icon: "Calculator",
      title: "Калькулятор БЖУ",
      description: "Автоматический подсчёт калорий, белков, жиров и углеводов",
    },
    {
      icon: "Truck",
      title: "Доставка продуктов",
      description: "Интеграция с Яндекс.Лавкой, Самокатом и другими сервисами",
    },
    {
      icon: "ShoppingCart",
      title: "Умный список покупок",
      description: "Автоматическое составление списка с учётом остатков дома",
    },
    {
      icon: "Calendar",
      title: "Планирование на неделю",
      description: "Составление меню на 3, 5, 7 или 10 дней вперёд",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Всё для планирования питания
          </h2>
          <p className="text-xl text-gray-600">
            Современные технологии для здорового образа жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Icon
                    name={feature.icon}
                    className="h-6 w-6 text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
