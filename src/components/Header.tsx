import { useState } from "react";
import { Search, Menu, User, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, cities } from "@/data/mockData";

interface HeaderProps {
  onSearch: (query: string, category: string, city: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory, selectedCity);
  };

  return (
    <header className="bg-white border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-sahibinden-gray">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <span className="text-sahibinden-dark-gray">Türkiye'nin En Büyük İlan Sitesi</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-sahibinden-dark-gray hover:text-primary">
                Giriş Yap
              </Button>
              <Button variant="ghost" size="sm" className="text-sahibinden-dark-gray hover:text-primary">
                Üye Ol
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              sahibinden.com
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-4xl mx-8">
            <div className="flex space-x-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Kategori Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Kategoriler</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex-1 relative">
                <Input
                  placeholder="Kelime, ilan no veya mağaza adı ile ara"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Şehir" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Şehirler</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>Favoriler</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>Mesajlar</span>
            </Button>
            <Button variant="outline" className="bg-sahibinden-orange hover:bg-sahibinden-orange/90 text-white border-sahibinden-orange">
              Ücretsiz İlan Ver
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-t border-border bg-sahibinden-light-blue">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center space-x-2 text-sm font-medium text-sahibinden-dark-gray hover:text-primary whitespace-nowrap transition-colors"
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};