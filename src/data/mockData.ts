export interface ListingItem {
  id: number;
  title: string;
  price: number;
  currency: string;
  location: string;
  date: string;
  images: string[];
  category: string;
  description: string;
  features: Record<string, string>;
  seller: {
    name: string;
    phone: string;
    isVerified: boolean;
  };
}

export const categories = [
  { id: 'vehicles', name: 'Araçlar', icon: '🚗' },
  { id: 'real-estate', name: 'Emlak', icon: '🏠' },
  { id: 'electronics', name: 'Elektronik', icon: '📱' },
  { id: 'home', name: 'Ev & Bahçe', icon: '🏡' },
  { id: 'fashion', name: 'Moda', icon: '👕' },
  { id: 'books', name: 'Kitap & Hobi', icon: '📚' },
  { id: 'services', name: 'Hizmetler', icon: '🔧' },
  { id: 'jobs', name: 'İş İlanları', icon: '💼' },
];

export const mockListings: ListingItem[] = [
  {
    id: 1,
    title: "2018 Model BMW 3.20i Sedan",
    price: 750000,
    currency: "TL",
    location: "İstanbul, Kadıköy",
    date: "2024-01-15",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494976403844-19c3a5a49b59?w=800&h=600&fit=crop"
    ],
    category: "vehicles",
    description: "Temiz bakımlı araç. Tüm bakımları zamanında yapılmış. Boyasız, hatasız.",
    features: {
      "Yıl": "2018",
      "KM": "85,000",
      "Motor": "2.0L",
      "Yakıt": "Benzin",
      "Vites": "Otomatik"
    },
    seller: {
      name: "Ahmet Yılmaz",
      phone: "0555 123 4567",
      isVerified: true
    }
  },
  {
    id: 2,
    title: "Satılık 3+1 Daire - Deniz Manzaralı",
    price: 2500000,
    currency: "TL",
    location: "İzmir, Karşıyaka",
    date: "2024-01-14",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    category: "real-estate",
    description: "Deniz manzaralı, geniş balkonlu 3+1 daire. Site içerisinde güvenlikli.",
    features: {
      "Oda Sayısı": "3+1",
      "Net m²": "125",
      "Kat": "5",
      "Isıtma": "Kombi",
      "Yaş": "5"
    },
    seller: {
      name: "Emlak Danışmanı",
      phone: "0532 987 6543",
      isVerified: true
    }
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max 256GB - Sıfır Ayarında",
    price: 65000,
    currency: "TL",
    location: "Ankara, Çankaya",
    date: "2024-01-13",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop"
    ],
    category: "electronics",
    description: "Sıfır ayarında iPhone 15 Pro Max. Kutusunda tüm aksesuarları mevcut.",
    features: {
      "Marka": "Apple",
      "Model": "iPhone 15 Pro Max",
      "Hafıza": "256GB",
      "Renk": "Natural Titanium",
      "Durum": "Sıfır Ayarında"
    },
    seller: {
      name: "Teknoloji Mağazası",
      phone: "0544 555 7788",
      isVerified: true
    }
  },
  {
    id: 4,
    title: "Volkswagen Golf 1.6 TDI - 2020 Model",
    price: 550000,
    currency: "TL",
    location: "Bursa, Nilüfer",
    date: "2024-01-12",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
    ],
    category: "vehicles",
    description: "Ekonomik ve güvenilir araç. Düşük yakıt tüketimi.",
    features: {
      "Yıl": "2020",
      "KM": "45,000",
      "Motor": "1.6 TDI",
      "Yakıt": "Dizel",
      "Vites": "Manuel"
    },
    seller: {
      name: "Galeri Sahibi",
      phone: "0533 444 5566",
      isVerified: false
    }
  },
  {
    id: 5,
    title: "MacBook Pro M2 13' - Az Kullanılmış",
    price: 35000,
    currency: "TL",
    location: "İstanbul, Beşiktaş",
    date: "2024-01-11",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop"
    ],
    category: "electronics",
    description: "Az kullanılmış MacBook Pro. Performans odaklı çalışmalar için ideal.",
    features: {
      "Marka": "Apple",
      "Model": "MacBook Pro M2",
      "Ekran": "13 inch",
      "RAM": "16GB",
      "Depolama": "512GB SSD"
    },
    seller: {
      name: "Öğrenci",
      phone: "0505 123 9876",
      isVerified: false
    }
  }
];

export const cities = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep", "Mersin", "Diyarbakır"
];