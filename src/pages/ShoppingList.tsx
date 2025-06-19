import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

interface Product {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  price: number;
  checked: boolean;
  usedIn: string[];
}

interface Category {
  id: string;
  name: string;
  emoji: string;
  products: Product[];
  isOpen: boolean;
}

const ShoppingList = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "vegetables",
      name: "Овощи/Фрукты",
      emoji: "🥬",
      isOpen: true,
      products: [
        {
          id: "1",
          name: "Помидоры черри",
          quantity: "350",
          unit: "г",
          price: 280,
          checked: true,
          usedIn: ["Греческий салат (Вт-Обед)", "Капрезе (Чт-Ужин)"],
        },
        {
          id: "2",
          name: "Огурцы свежие",
          quantity: "2",
          unit: "шт",
          price: 120,
          checked: true,
          usedIn: ["Греческий салат (Вт-Обед)"],
        },
      ],
    },
    {
      id: "dairy",
      name: "Молочные продукты",
      emoji: "🥛",
      isOpen: true,
      products: [
        {
          id: "3",
          name: "Молоко 3.2%",
          quantity: "1",
          unit: "упак. 1л",
          price: 85,
          checked: true,
          usedIn: ["Каша овсяная (Пн-Завтрак)", "Омлет (Ср-Завтрак)"],
        },
        {
          id: "4",
          name: "Сыр моцарелла",
          quantity: "1",
          unit: "упак. 200г",
          price: 340,
          checked: true,
          usedIn: ["Капрезе (Чт-Ужин)"],
        },
      ],
    },
    {
      id: "meat",
      name: "Мясо/Рыба",
      emoji: "🥩",
      isOpen: false,
      products: [
        {
          id: "5",
          name: "Куриная грудка",
          quantity: "500",
          unit: "г",
          price: 450,
          checked: true,
          usedIn: ["Цезарь (Пн-Обед)", "Запеченная курица (Пт-Ужин)"],
        },
      ],
    },
    {
      id: "grocery",
      name: "Бакалея",
      emoji: "🌾",
      isOpen: false,
      products: [
        {
          id: "6",
          name: "Рис круглозерный",
          quantity: "1",
          unit: "упак. 900г",
          price: 120,
          checked: true,
          usedIn: ["Плов (Сб-Обед)"],
        },
      ],
    },
  ]);

  const toggleCategory = (categoryId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, isOpen: !cat.isOpen } : cat,
      ),
    );
  };

  const toggleProduct = (categoryId: string, productId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              products: cat.products.map((product) =>
                product.id === productId
                  ? { ...product, checked: !product.checked }
                  : product,
              ),
            }
          : cat,
      ),
    );
  };

  const getTotalAmount = () => {
    return categories.reduce(
      (total, category) =>
        total +
        category.products
          .filter((product) => product.checked)
          .reduce((catTotal, product) => catTotal + product.price, 0),
      0,
    );
  };

  const getTotalItems = () => {
    return categories.reduce(
      (total, category) =>
        total + category.products.filter((product) => product.checked).length,
      0,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🛒 Умная Корзина
          </h1>
          <p className="text-gray-600">
            Список продуктов для вашего недельного меню
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Список продуктов */}
          <div className="lg:col-span-2 space-y-4">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <Collapsible
                  open={category.isOpen}
                  onOpenChange={() => toggleCategory(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-2">
                          <span className="text-2xl">{category.emoji}</span>
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            {category.products.filter((p) => p.checked).length}
                          </Badge>
                        </CardTitle>
                        <Icon
                          name={category.isOpen ? "ChevronUp" : "ChevronDown"}
                          className="h-4 w-4"
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {category.products.map((product) => (
                          <div
                            key={product.id}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                              product.checked
                                ? "bg-white border-gray-200"
                                : "bg-gray-50 border-gray-100 opacity-60"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={product.checked}
                                onCheckedChange={() =>
                                  toggleProduct(category.id, product.id)
                                }
                              />
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {product.quantity} {product.unit} •{" "}
                                  {product.price} ₽
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Icon name="Info" className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <div className="text-sm">
                                      <p className="font-medium mb-1">
                                        Используется в:
                                      </p>
                                      {product.usedIn.map((usage, index) => (
                                        <p key={index} className="text-xs">
                                          • {usage}
                                        </p>
                                      ))}
                                    </div>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <Button variant="outline" size="sm">
                                <Icon
                                  name="RefreshCw"
                                  className="h-3 w-3 mr-1"
                                />
                                Заменить
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Панель итогов */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="ShoppingCart" className="h-5 w-5" />
                  <span>Итого</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Позиций в корзине:</span>
                    <span className="font-medium">{getTotalItems()}</span>
                  </div>

                  <div className="flex justify-between text-lg font-bold">
                    <span>Общая сумма:</span>
                    <span className="text-purple-600">
                      {getTotalAmount()} ₽
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Добавить забытое
                  </Button>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                    Перейти к оформлению
                  </Button>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  Цены могут отличаться в зависимости от выбранного магазина
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
