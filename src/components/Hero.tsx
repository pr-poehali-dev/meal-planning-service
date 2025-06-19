import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Планирование питания с помощью
            <span className="text-purple-600"> ИИ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Персональные рецепты, умный список покупок, калькулятор БЖУ и
            интеграция с доставкой — всё для здорового питания
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/menu-settings">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              <Icon name="ChefHat" className="mr-2 h-5 w-5" />
              Создать меню
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3"
          >
            <Icon name="Play" className="mr-2 h-5 w-5" />
            Как это работает
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-gray-600">Рецептов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">Диет</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">ИИ поддержка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">5★</div>
            <div className="text-gray-600">Рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
