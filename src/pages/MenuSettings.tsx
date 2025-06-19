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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const MenuSettings = () => {
  const [people, setPeople] = useState("2");
  const [days, setDays] = useState("7");
  const [meals, setMeals] = useState<string[]>([
    "breakfast",
    "lunch",
    "dinner",
  ]);
  const [diet, setDiet] = useState("");
  const [preferences, setPreferences] = useState("");
  const [budget, setBudget] = useState([500]);
  const [complexity, setComplexity] = useState("any");

  const handleMealChange = (meal: string, checked: boolean) => {
    if (checked) {
      setMeals([...meals, meal]);
    } else {
      setMeals(meals.filter((m) => m !== meal));
    }
  };

  const mealOptions = [
    { id: "breakfast", label: "Завтрак", emoji: "🌅" },
    { id: "lunch", label: "Обед", emoji: "🍽️" },
    { id: "dinner", label: "Ужин", emoji: "🌙" },
    { id: "snack", label: "Перекус", emoji: "🍎" },
  ];

  const dietOptions = [
    "Вегетарианство",
    "Веганство",
    "Без глютена",
    "Без молока",
    "Без орехов",
    "Низкоуглеводная",
    "Кето",
    "Пескетарианство",
    "Палео",
    "Средиземноморская",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Настройка меню
          </h1>
          <p className="text-xl text-gray-600">
            Расскажите о своих предпочтениях, и мы создадим идеальное меню
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Icon name="Settings" className="mr-3 h-6 w-6" />
              Параметры меню
            </CardTitle>
            <CardDescription className="text-purple-100">
              Заполните все поля для персонализации
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            {/* Количество человек */}
            <div className="space-y-3">
              <Label className="text-lg font-medium flex items-center">
                👥 Количество человек
              </Label>
              <Select value={people} onValueChange={setPeople}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите количество" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 человек</SelectItem>
                  <SelectItem value="2">2 человека</SelectItem>
                  <SelectItem value="3">3 человека</SelectItem>
                  <SelectItem value="4">4 человека</SelectItem>
                  <SelectItem value="5+">5+ человек</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Количество дней */}
            <div className="space-y-4">
              <Label className="text-lg font-medium flex items-center">
                📅 Количество дней
              </Label>
              <RadioGroup
                value={days}
                onValueChange={setDays}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {["3", "5", "7", "10"].map((day) => (
                  <div
                    key={day}
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-purple-50"
                  >
                    <RadioGroupItem value={day} id={`days-${day}`} />
                    <Label htmlFor={`days-${day}`} className="cursor-pointer">
                      {day}{" "}
                      {day === "1"
                        ? "день"
                        : day === "2" || day === "3" || day === "4"
                          ? "дня"
                          : "дней"}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Приемы пищи */}
            <div className="space-y-4">
              <Label className="text-lg font-medium flex items-center">
                🍳 Приемы пищи
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mealOptions.map((meal) => (
                  <div
                    key={meal.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-purple-50"
                  >
                    <Checkbox
                      id={meal.id}
                      checked={meals.includes(meal.id)}
                      onCheckedChange={(checked) =>
                        handleMealChange(meal.id, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={meal.id}
                      className="cursor-pointer flex items-center"
                    >
                      <span className="mr-2">{meal.emoji}</span>
                      {meal.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Диеты - мультиселект */}
            <div className="space-y-3">
              <Label className="text-lg font-medium flex items-center">
                🚫 Диетические ограничения (можно выбрать несколько)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dietOptions.map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-purple-50"
                  >
                    <Checkbox
                      id={`diet-${option}`}
                      checked={diet.includes(option.toLowerCase())}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setDiet(
                            diet
                              ? `${diet}, ${option.toLowerCase()}`
                              : option.toLowerCase(),
                          );
                        } else {
                          setDiet(
                            diet
                              .split(", ")
                              .filter((d) => d !== option.toLowerCase())
                              .join(", "),
                          );
                        }
                      }}
                    />
                    <Label
                      htmlFor={`diet-${option}`}
                      className="cursor-pointer text-sm"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              {diet && (
                <div className="mt-2 p-2 bg-purple-50 rounded-lg">
                  <span className="text-sm text-purple-700">
                    Выбрано: {diet}
                  </span>
                </div>
              )}
            </div>

            {/* Предпочтения */}
            <div className="space-y-3">
              <Label className="text-lg font-medium flex items-center">
                ❤️ Предпочтения и исключения
              </Label>
              <Textarea
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                placeholder="Напишите продукты, которые не едите (лук, грибы...) или предпочитаете (курица, морепродукты...)"
                className="min-h-[100px]"
              />
            </div>

            {/* Бюджет */}
            <div className="space-y-4">
              <Label className="text-lg font-medium flex items-center">
                💰 Бюджет на человека в день: {budget[0]} ₽
              </Label>
              <Slider
                value={budget}
                onValueChange={setBudget}
                min={200}
                max={2000}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>200 ₽</span>
                <span>2000 ₽</span>
              </div>
            </div>

            {/* Сложность */}
            <div className="space-y-4">
              <Label className="text-lg font-medium flex items-center">
                💡 Уровень сложности рецептов
              </Label>
              <RadioGroup
                value={complexity}
                onValueChange={setComplexity}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { value: "easy", label: "Легкий", emoji: "😊" },
                  { value: "medium", label: "Средний", emoji: "🤔" },
                  { value: "hard", label: "Сложный", emoji: "🔥" },
                  { value: "any", label: "Любой", emoji: "🎯" },
                ].map((level) => (
                  <div
                    key={level.value}
                    className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-purple-50"
                  >
                    <RadioGroupItem
                      value={level.value}
                      id={`complexity-${level.value}`}
                    />
                    <Label
                      htmlFor={`complexity-${level.value}`}
                      className="cursor-pointer flex items-center"
                    >
                      <span className="mr-2">{level.emoji}</span>
                      {level.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="pt-6 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                >
                  <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                  Создать меню с ИИ
                </Button>
                <Link to="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8"
                  >
                    <Icon name="ArrowLeft" className="mr-2 h-5 w-5" />
                    Назад
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MenuSettings;
