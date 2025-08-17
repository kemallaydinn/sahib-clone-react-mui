import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-sahibinden-gray border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">sahibinden.com</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Türkiye'nin en büyük ilan sitesi. Milyonlarca ilan arasından aradığınızı kolayca bulun.
            </p>
            <div className="text-xs text-muted-foreground">
              © 2024 sahibinden.com
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategoriler</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Araçlar</a></li>
              <li><a href="#" className="hover:text-primary">Emlak</a></li>
              <li><a href="#" className="hover:text-primary">Elektronik</a></li>
              <li><a href="#" className="hover:text-primary">Ev & Bahçe</a></li>
              <li><a href="#" className="hover:text-primary">Moda</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Yardım</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Nasıl İlan Verilir?</a></li>
              <li><a href="#" className="hover:text-primary">Güvenli Alışveriş</a></li>
              <li><a href="#" className="hover:text-primary">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-primary">İletişim</a></li>
              <li><a href="#" className="hover:text-primary">Hakkımızda</a></li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h4 className="font-semibold mb-4">Mobil Uygulamalar</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-2 border border-border rounded cursor-pointer hover:bg-white transition-colors">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-xs text-muted-foreground">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 border border-border rounded cursor-pointer hover:bg-white transition-colors">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-xs text-muted-foreground">Get it on</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Gizlilik Politikası</a>
            <a href="#" className="hover:text-primary">Kullanım Koşulları</a>
            <a href="#" className="hover:text-primary">Çerez Politikası</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              📘 Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              🐦 Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              📷 Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              📺 YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};