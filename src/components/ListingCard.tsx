import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Eye } from "lucide-react";
import { ListingItem } from "@/data/mockData";

interface ListingCardProps {
  listing: ListingItem;
  onView: (listing: ListingItem) => void;
}

export const ListingCard = ({ listing, onView }: ListingCardProps) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('tr-TR').format(price) + ' ' + currency;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer group">
      <div onClick={() => onView(listing)}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 flex space-x-1">
            <Badge variant="secondary" className="bg-black/70 text-white">
              {listing.images.length} Fotoğraf
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 left-2 bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>

          {/* Price */}
          <div className="text-2xl font-bold text-primary mb-3">
            {formatPrice(listing.price, listing.currency)}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-3">
            {Object.entries(listing.features).slice(0, 3).map(([key, value]) => (
              <Badge key={key} variant="outline" className="text-xs">
                {value}
              </Badge>
            ))}
          </div>

          {/* Location and Date */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{listing.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(listing.date)}</span>
            </div>
          </div>

          {/* Seller info */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {listing.seller.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-muted-foreground">{listing.seller.name}</span>
              {listing.seller.isVerified && (
                <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                  Doğrulanmış
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" className="text-sahibinden-dark-gray">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};