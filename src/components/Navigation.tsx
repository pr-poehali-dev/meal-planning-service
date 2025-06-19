import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🍽️</span>
            <span className="text-xl font-bold text-purple-700">МенюГений</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/menu-settings">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-700"
              >
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                Настройки
              </Button>
            </Link>
            <Link to="/shopping-list">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-700"
              >
                <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                Умная Корзина
              </Button>
            </Link>
            <Link to="/ai-menu">
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                ИИ Меню
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
