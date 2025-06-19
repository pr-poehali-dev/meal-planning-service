import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      <Hero />
      <Features />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Готовы начать планирование?
              </CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                Создайте персональное меню за 2 минуты
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/menu-settings">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-700 hover:bg-purple-50"
                >
                  Настроить меню 🚀
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
