import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterPanel } from "@/components/FilterPanel";
import { ListingCard } from "@/components/ListingCard";
import { ItemDetailModal } from "@/components/ItemDetailModal";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { mockListings, ListingItem, categories } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedListing, setSelectedListing] = useState<ListingItem | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const handleSearch = (query: string, category: string, city: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
    setSelectedCity(city);
  };

  const filteredListings = useMemo(() => {
    let filtered = mockListings;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(listing => listing.category === selectedCategory);
    }

    // Filter by city
    if (selectedCity && selectedCity !== "all") {
      filtered = filtered.filter(listing =>
        listing.location.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedCity, filters, sortBy]);

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || "Tüm Kategoriler";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onSearch={handleSearch} />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-full lg:w-80 flex-shrink-0">
                <FilterPanel 
                  category={selectedCategory} 
                  onFiltersChange={setFilters}
                />
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h1 className="text-2xl font-bold">
                    {selectedCategory && selectedCategory !== "all" ? getCategoryName(selectedCategory) : "Tüm İlanlar"}
                  </h1>
                  <p className="text-muted-foreground">
                    {filteredListings.length} ilan bulundu
                    {selectedCity && ` - ${selectedCity}`}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-1" />
                    Filtreler
                  </Button>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">En Yeni İlanlar</SelectItem>
                      <SelectItem value="price-low">Fiyat (Düşükten Yükseğe)</SelectItem>
                      <SelectItem value="price-high">Fiyat (Yüksekten Düşüğe)</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border border-border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Listings Grid */}
              {filteredListings.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                    : "grid-cols-1"
                }`}>
                  {filteredListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      onView={setSelectedListing}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Aradığınız kriterlerde ilan bulunamadı</h3>
                  <p className="text-muted-foreground">
                    Arama kriterlerinizi değiştirerek tekrar deneyebilirsiniz.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Item Detail Modal */}
      <ItemDetailModal
        listing={selectedListing}
        open={!!selectedListing}
        onClose={() => setSelectedListing(null)}
      />
    </div>
  );
};

export default Index;
