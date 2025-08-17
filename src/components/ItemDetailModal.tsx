import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Shield,
  ChevronLeft,
  ChevronRight,
  Flag
} from "lucide-react";
import { ListingItem } from "@/data/mockData";

interface ItemDetailModalProps {
  listing: ListingItem | null;
  open: boolean;
  onClose: () => void;
}

export const ItemDetailModal = ({ listing, open, onClose }: ItemDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!listing) return null;

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('tr-TR').format(price) + ' ' + currency;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-square bg-black">
              <img
                src={listing.images[currentImageIndex]}
                alt={listing.title}
                className="w-full h-full object-contain"
              />
              
              {listing.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {listing.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {listing.images.length > 1 && (
              <div className="flex p-2 space-x-2 overflow-x-auto">
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold leading-tight">
                {listing.title}
              </DialogTitle>
            </DialogHeader>

            {/* Price and Actions */}
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-primary">
                {formatPrice(listing.price, listing.currency)}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Favorile
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Paylaş
                </Button>
                <Button variant="outline" size="sm">
                  <Flag className="h-4 w-4 mr-1" />
                  Şikayet
                </Button>
              </div>
            </div>

            {/* Location and Date */}
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(listing.date)}</span>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Özellikler</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(listing.features).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-3">Açıklama</h3>
              <p className="text-muted-foreground leading-relaxed">
                {listing.description}
              </p>
            </div>

            <Separator />

            {/* Seller Info */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    {listing.seller.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold">{listing.seller.name}</h4>
                    {listing.seller.isVerified && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm">Doğrulanmış Üye</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-sahibinden-blue hover:bg-sahibinden-blue/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Telefon: {listing.seller.phone}
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Mesaj Gönder
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};