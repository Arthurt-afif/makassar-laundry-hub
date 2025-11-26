import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Shirt, 
  Bed, 
  Sofa, 
  Wind,
  Timer,
  Footprints,
  Backpack,
  Baby,
  MessageCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-laundry.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo, saya ${formData.name}. Saya tertarik dengan layanan ${formData.service}. ${formData.message}`;
    const waLink = `https://wa.me/6289526143752?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, "_blank");
    toast({
      title: "Mengalihkan ke WhatsApp",
      description: "Anda akan dihubungkan dengan tim kami.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Laundry Makassar Profesional",
          "image": "https://lovable.app/og-image.jpg",
          "@id": "https://lovable.app",
          "url": "https://lovable.app",
          "telephone": "+6289526143752",
          "priceRange": "Rp 8.000 - Rp 40.000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Contoh No. 123",
            "addressLocality": "Makassar",
            "addressRegion": "Sulawesi Selatan",
            "postalCode": "90111",
            "addressCountry": "ID"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -5.147665,
            "longitude": 119.432732
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://wa.me/6289526143752"
          ],
          "areaServed": ["Makassar", "Sulawesi Selatan", "Sulawesi"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Layanan Laundry",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cuci Kiloan Makassar",
                  "description": "Layanan cuci kiloan profesional di Makassar"
                }
              }
            ]
          }
        })}
      </script>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Jasa Laundry Profesional Makassar - Layanan cuci kiloan, express, bed cover, dan karpet terpercaya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Jasa Laundry Terpercaya di<br />Makassar & Seluruh Sulawesi
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Layanan cepat, bersih, wangi dengan antar jemput gratis! Laundry kiloan, express, bed cover, karpet & lebih banyak lagi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('konsultasi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2" />
              Konsultasi Sekarang
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-xl bg-[#25D366] hover:bg-[#128C7E] border-0 hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://wa.me/6289526143752", "_blank")}
            >
              <MessageCircle className="mr-2" />
              Chat WhatsApp Bisnis
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, text: "Bersih & Wangi" },
              { icon: Clock, text: "Express 6 Jam" },
              { icon: ShieldCheck, text: "Garansi Aman" },
              { icon: Truck, text: "Antar Jemput Gratis" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <item.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-accent/30" id="tentang">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tentang Laundry Kami
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kami adalah jasa laundry profesional yang telah melayani masyarakat Makassar dan Sulawesi dengan dedikasi penuh. Dengan pengalaman bertahun-tahun, kami memahami pentingnya pakaian bersih dan wangi untuk kenyamanan Anda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Menggunakan teknologi mesin cuci modern dan deterjen berkualitas tinggi, kami menjamin setiap pakaian Anda ditangani dengan hati-hati. Dari cuci kiloan hingga perawatan khusus untuk bed cover dan karpet, kami siap membantu kebutuhan laundry Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Terpercaya", desc: "Berpengalaman melayani ribuan pelanggan" },
              { icon: Clock, title: "Cepat", desc: "Pengerjaan 24 jam, express 3-6 jam" },
              { icon: Sparkles, title: "Berkualitas", desc: "Hasil cuci bersih, wangi & rapi" },
              { icon: Truck, title: "Antar Jemput", desc: "Gratis untuk area tertentu" },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background" id="layanan">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Layanan Laundry Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berbagai layanan laundry profesional untuk memenuhi kebutuhan Anda di Makassar dan Sulawesi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ServiceCard
              icon={Shirt}
              title="Cuci Kiloan"
              description="Layanan cuci kiloan reguler untuk pakaian sehari-hari"
              price="Mulai 8.000/kg"
              duration="24 jam"
            />
            <ServiceCard
              icon={Timer}
              title="Laundry Express"
              description="Layanan cuci express untuk kebutuhan mendesak"
              price="12.000/kg"
              duration="3-6 jam"
            />
            <ServiceCard
              icon={Bed}
              title="Laundry Bed Cover"
              description="Cuci bed cover dengan perawatan khusus"
              price="25.000 - 40.000"
              duration="1-2 hari"
            />
            <ServiceCard
              icon={Wind}
              title="Laundry Karpet"
              description="Pembersihan karpet menyeluruh dan mendalam"
              price="20.000 - 30.000/m²"
              duration="2-3 hari"
            />
            <ServiceCard
              icon={Sofa}
              title="Laundry Gorden"
              description="Cuci gorden dengan hasil sempurna"
              price="10.000 - 15.000/m"
              duration="2-3 hari"
            />
            <ServiceCard
              icon={Bed}
              title="Laundry Sprei"
              description="Cuci sprei dengan pewangi tahan lama"
              price="15.000 - 25.000"
              duration="1 hari"
            />
            <ServiceCard
              icon={Baby}
              title="Laundry Boneka"
              description="Cuci boneka dengan perawatan lembut"
              price="15.000 - 30.000"
              duration="1-2 hari"
            />
            <ServiceCard
              icon={Backpack}
              title="Laundry Tas & Sepatu"
              description="Pembersihan tas dan sepatu profesional"
              price="20.000 - 40.000"
              duration="2-3 hari"
            />
            <ServiceCard
              icon={Shirt}
              title="Cuci Satuan"
              description="Layanan cuci satuan untuk item khusus"
              price="Mulai 5.000/pcs"
              duration="1-2 hari"
            />
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 bg-accent/30" id="harga">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Daftar Harga Laundry Makassar</h2>
            <p className="text-xl text-muted-foreground">Harga transparan dan terjangkau untuk semua layanan</p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Layanan</th>
                      <th className="px-6 py-4 text-left font-semibold">Harga</th>
                      <th className="px-6 py-4 text-left font-semibold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { service: "Cuci Kiloan", price: "mulai 8.000 / kg", note: "minimal 3 kg" },
                      { service: "Express 6 Jam", price: "12.000 / kg", note: "selesai 6 jam" },
                      { service: "Express 3 Jam", price: "15.000 / kg", note: "selesai 3 jam" },
                      { service: "Bed Cover Single", price: "25.000 - 30.000", note: "per set" },
                      { service: "Bed Cover King/Queen", price: "35.000 - 40.000", note: "per set" },
                      { service: "Karpet", price: "20.000 - 30.000 / m²", note: "tergantung jenis" },
                      { service: "Gorden", price: "10.000 - 15.000 / m", note: "per meter" },
                      { service: "Sprei", price: "15.000 - 25.000", note: "tergantung ukuran" },
                      { service: "Boneka", price: "15.000 - 30.000", note: "tergantung ukuran" },
                      { service: "Tas & Sepatu", price: "20.000 - 40.000", note: "per item" },
                    ].map((item, i) => (
                      <tr key={i} className="hover:bg-accent/20 transition-colors">
                        <td className="px-6 py-4 font-medium">{item.service}</td>
                        <td className="px-6 py-4 text-primary font-semibold">{item.price}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            *Harga dapat berubah sewaktu-waktu. Hubungi kami via WhatsApp untuk informasi harga terbaru dan promo spesial.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-background" id="konsultasi">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-2">Konsultasi Gratis</CardTitle>
                <CardDescription className="text-lg">
                  Tanyakan kebutuhan laundry Anda dan dapatkan estimasi harga
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Jenis Layanan</Label>
                    <Input
                      id="service"
                      placeholder="Contoh: Cuci Kiloan, Express, Bed Cover"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan (Opsional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Ceritakan kebutuhan laundry Anda..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <MessageCircle className="mr-2" />
                    Konsultasi via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/30" id="testimoni">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimoni Pelanggan</h2>
            <p className="text-xl text-muted-foreground">Apa kata mereka tentang layanan laundry kami?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <TestimonialCard
              name="Ibu Siti Aminah"
              rating={5}
              avatar="SA"
              comment="Laundry terbaik di Makassar! Cucian selalu wangi dan rapi. Pelayanan antar jemputnya juga tepat waktu."
            />
            <TestimonialCard
              name="Bapak Ahmad Rizki"
              rating={5}
              avatar="AR"
              comment="Sudah langganan 2 tahun. Harganya murah tapi kualitasnya premium. Puas banget sama hasilnya!"
            />
            <TestimonialCard
              name="Ibu Dewi Lestari"
              rating={5}
              avatar="DL"
              comment="Laundry express nya cepat banget! Pagi antar, sore sudah selesai. Cocok untuk yang sibuk seperti saya."
            />
            <TestimonialCard
              name="Andi Pratama"
              rating={5}
              avatar="AP"
              comment="Bed cover king size saya dicuci di sini hasilnya sempurna! Bersih dan wanginya tahan lama."
            />
            <TestimonialCard
              name="Ibu Fatimah"
              rating={5}
              avatar="IF"
              comment="Pelayanannya ramah dan profesional. Karpet masjid kami selalu dicuci di sini. Recommended!"
            />
            <TestimonialCard
              name="Budi Santoso"
              rating={5}
              avatar="BS"
              comment="Harga sangat terjangkau untuk kualitas yang didapat. Gak nyesel langganan laundry di sini."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pertanyaan Yang Sering Diajukan</h2>
            <p className="text-xl text-muted-foreground">Temukan jawaban untuk pertanyaan umum tentang layanan kami</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Berapa jam operasional laundry?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Kami buka setiap hari dari pukul 08.00 - 20.00 WITA. Untuk layanan antar jemput, mohon hubungi kami minimal H-1 untuk jadwal pengambilan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Apakah ada layanan antar jemput gratis?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ya! Kami menyediakan layanan antar jemput gratis untuk area tertentu di Makassar dengan minimal cucian 5 kg. Untuk area di luar jangkauan, akan dikenakan biaya tambahan yang terjangkau.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Berapa lama waktu pengerjaan laundry?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Untuk cuci reguler: 24 jam. Layanan express: 6 jam (12rb/kg) atau 3 jam (15rb/kg). Untuk item khusus seperti bed cover dan karpet: 1-3 hari tergantung jenis dan ukuran.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Apakah ada garansi jika cucian rusak atau hilang?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Ya, kami memberikan garansi untuk kerusakan atau kehilangan cucian. Kami akan mengganti sesuai dengan harga wajar atau memperbaiki tanpa biaya tambahan jika terjadi kerusakan karena kesalahan kami. Pastikan memberitahu kami jika ada pakaian dengan perawatan khusus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Apakah bisa laundry untuk item selain pakaian?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Tentu! Kami melayani berbagai jenis cucian: bed cover, sprei, karpet, gorden, boneka, tas, sepatu, dan masih banyak lagi. Hubungi kami untuk konsultasi item khusus Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Bagaimana sistem pembayarannya?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Pembayaran dilakukan saat pengambilan cucian. Kami menerima pembayaran tunai dan transfer bank. Untuk pelanggan setia, kami juga menyediakan sistem deposit yang lebih praktis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Laundry Makassar</h3>
              <p className="text-white/90 mb-4">
                Jasa laundry profesional terpercaya di Makassar & Sulawesi. Melayani dengan sepenuh hati untuk kepuasan Anda.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Kontak Kami</h4>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Jl. Contoh No. 123, Makassar, Sulawesi Selatan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <a 
                    href="https://wa.me/6289526143752" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Bisnis
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-white/90">
                <p>Senin - Minggu</p>
                <p className="text-xl font-semibold text-white">08.00 - 20.00 WITA</p>
                <p className="text-sm mt-4">
                  Melayani seluruh wilayah Makassar dan Pulau Sulawesi
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 Laundry Makassar. Semua hak cipta dilindungi undang-undang.</p>
            <p className="mt-2 text-sm">
              Laundry Profesional | Laundry Terdekat Makassar | Jasa Laundry Terpercaya Sulawesi
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
