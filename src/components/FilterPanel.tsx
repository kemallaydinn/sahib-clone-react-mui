import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { FilterX } from "lucide-react";

interface FilterPanelProps {
  category: string;
  onFiltersChange: (filters: any) => void;
}

export const FilterPanel = ({ category, onFiltersChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    location: "",
    dateRange: "",
    condition: "",
    features: []
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      minPrice: "",
      maxPrice: "",
      location: "",
      dateRange: "",
      condition: "",
      features: []
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const getCategorySpecificFilters = () => {
    switch (category) {
      case 'vehicles':
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Marka</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Marka Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">Model Yılı</Label>
              <div className="flex space-x-2">
                <Input placeholder="Min" />
                <Input placeholder="Max" />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium">Yakıt Tipi</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="benzin" />
                  <Label htmlFor="benzin">Benzin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dizel" />
                  <Label htmlFor="dizel">Dizel</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="elektrik" />
                  <Label htmlFor="elektrik">Elektrik</Label>
                </div>
              </div>
            </div>
          </div>
        );
      case 'real-estate':
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Oda Sayısı</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Oda Sayısı" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1+0">1+0</SelectItem>
                  <SelectItem value="1+1">1+1</SelectItem>
                  <SelectItem value="2+1">2+1</SelectItem>
                  <SelectItem value="3+1">3+1</SelectItem>
                  <SelectItem value="4+1">4+1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">m² (Net)</Label>
              <div className="flex space-x-2">
                <Input placeholder="Min m²" />
                <Input placeholder="Max m²" />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium">Konum Özellikleri</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="deniz-manzara" />
                  <Label htmlFor="deniz-manzara">Deniz Manzaralı</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="asansor" />
                  <Label htmlFor="asansor">Asansörlü</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="guvenlik" />
                  <Label htmlFor="guvenlik">Güvenlikli</Label>
                </div>
              </div>
            </div>
          </div>
        );
      case 'electronics':
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Marka</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Marka Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="huawei">Huawei</SelectItem>
                  <SelectItem value="xiaomi">Xiaomi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">Durum</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sifir" />
                  <Label htmlFor="sifir">Sıfır</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sifir-ayarinda" />
                  <Label htmlFor="sifir-ayarinda">Sıfır Ayarında</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="temiz" />
                  <Label htmlFor="temiz">Temiz</Label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="p-4 h-fit shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filtreler</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sahibinden-dark-gray">
          <FilterX className="h-4 w-4 mr-1" />
          Temizle
        </Button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Fiyat Aralığı</Label>
          <div className="flex space-x-2">
            <Input
              placeholder="Min fiyat"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            />
            <Input
              placeholder="Max fiyat"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            />
          </div>
        </div>

        <Separator />

        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-3 block">İl/İlçe</Label>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Konum Seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="istanbul">İstanbul</SelectItem>
              <SelectItem value="ankara">Ankara</SelectItem>
              <SelectItem value="izmir">İzmir</SelectItem>
              <SelectItem value="bursa">Bursa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Date Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">İlan Tarihi</Label>
          <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange('dateRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tarih Seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Bugün</SelectItem>
              <SelectItem value="week">Son 1 Hafta</SelectItem>
              <SelectItem value="month">Son 1 Ay</SelectItem>
              <SelectItem value="all">Tüm Zamanlar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Category Specific Filters */}
        {getCategorySpecificFilters()}
      </div>
    </Card>
  );
};