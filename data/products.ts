
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Gourmet Gold Kedi Maması",
    price: 45.90,
    category: "Kedi",
    stock: 24,
    image: "/images/gourmet-gold.jpg",
    images: [
      "/images/gourmet-gold.jpg",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7de8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kedinizin günlük protein ihtiyacını karşılayan, gerçek et parçacıkları ile hazırlanmış lezzetli formül. Taurin desteği ile kalp ve göz sağlığını korumaya yardımcı olur. Sindirimi kolaydır, böylece kediniz her öğünden sonra kendini hafif ve enerjik hisseder. Parlak tüyler ve sağlıklı bir cilt için Omega-3 ve Omega-6 yağ asitleri içerir."
  },
  {
    id: 2,
    name: "Ergonomik Köpek Tasması",
    price: 120.00,
    category: "Köpek",
    stock: 3, 
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605218427368-35b0f9872993?auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1565152968159-25458f2bfdf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Yumuşak dolgulu iç yüzeyi sayesinde köpeğinizin boynunu tahriş etmez, uzun yürüyüşlerde maksimum konfor sağlar. Dayanıklı kilit mekanizması ve paslanmaz çelik halkaları ile üstün güvenlik sunar. Gece yürüyüşleri için özel olarak tasarlanmış reflektörlü şeritler içerir. Her ırk ve boyuta uygun ayarlanabilir yapısı ile yıllarca kullanılabilir."
  },
  {
    id: 3,
    name: "Tırmalama Tahtası",
    price: 250.50,
    category: "Kedi",
    stock: 0, 
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511044568932-338cba0fb803?auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80" 
    ],
    description: "%100 doğal sisal halat ile kaplanmış yüzeyi, kedinizin tırnaklarını törpülemesi için en ideal dokuyu sunar. Mobilyalarınızı korurken kedinizin doğal tırmalama içgüdüsünü güvenle tatmin etmesini sağlar. Alt tabandaki kaymaz özellik ve ağırlık merkezi dengesi sayesinde devrilmez. Üzerindeki peluş top ile kedinizin oyun oynayarak egzersiz yapmasına olanak tanır."
  },
  {
    id: 4,
    name: "Organik Kuş Yemi",
    price: 35.00,
    category: "Kuş",
    stock: 50,
    image: "/images/kus-yemi.jpg",
    images: [
      "/images/kus-yemi.jpg",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?auto=format&fit=crop&w=800&q=80"
    ],
    description: "GDO ve kimyasal katkı maddesi içermeyen, tamamen doğal tohumlardan oluşan zengin karışım. İçeriğindeki vitamin ve mineraller sayesinde kuşunuzun bağışıklık sistemini güçlendirir. Tüylerin daha canlı ve parlak çıkmasına destek olan özel yağlar içerir. Sindirimi kolaydır, muhabbet kuşu, kanarya ve papağanlar için tam bir enerji deposudur."
  },
  {
    id: 5,
    name: "Lüks Hamster Kafesi",
    price: 350.00,
    category: "Kemirgen",
    stock: 12,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585324025686-35399589df96?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Geniş iç hacmi sayesinde hamsterınızın özgürce hareket etmesini sağlar. Paslanmaz çelik telleri kemirilmelere karşı ekstra dayanıklıdır. İçerisine dahil olan koşu çarkı, suluk ve yemlik ile tam set halinde gelir. Kolay temizlenebilir taban tepsisi hijyenik bir ortam sunar."
  },
  {
    id: 6,
    name: "Organik Köpek Şampuanı",
    price: 85.50,
    category: "Köpek",
    stock: 4, 
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hassas ciltler için özel olarak formüle edilmiş, %100 doğal içerik. Aloe vera özleri tüy dökülmesini azaltır ve kaşıntıyı giderir. Paraben ve sülfat içermez, göz yakmayan formüle sahiptir. Uzun süre kalıcı lavanta kokusu ile köpeğinizin mis gibi kokmasını sağlar."
  },
  {
    id: 7,
    name: "LED Işıklı Akvaryum Seti",
    price: 650.00,
    category: "Balık",
    stock: 8,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Modern tasarımı ile evinizin dekorasyonuna şıklık katar. Enerji tasarruflu LED aydınlatma bitki gelişimini destekler. Sessiz çalışan filtre sistemi suyu sürekli berrak tutar. Kırılmaya dayanıklı cam yapısı uzun ömürlü kullanım sunar."
  },
  {
    id: 8,
    name: "Peluş Kedi Yatağı",
    price: 180.00,
    category: "Kedi",
    stock: 0,
    image: "/images/pelus-yatak.jpg",
    images: [
      "/images/pelus-yatak.jpg",
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ekstra yumuşak dolgusu ile kedinize anne kucağı sıcaklığı verir. Kaymaz tabanı sayesinde hareketli kedilerde bile sabit kalır. Makinede yıkanabilir kılıfı temizlik kolaylığı sağlar. Yuvarlak tasarımı kedinizin kıvrılarak uyuma içgüdüsünü destekler."
  },
  {
    id: 9,
    name: "Akıllı Su Pınarı",
    price: 450.00,
    category: "Kedi",
    stock: 15,
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557997453-9d0442387140?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623366302587-bca29cbd4a67?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sürekli akan su sistemi sayesinde evcil hayvanınızı daha fazla su içmeye teşvik eder. Karbon filtre sistemi suyu daima taze ve temiz tutar. Ultra sessiz motoru sayesinde gece kullanımı için uygundur. 2 litre su kapasitesi ile gün boyu yeterli su sağlar."
  },
  {
    id: 10,
    name: "Doğal Ahşap Kuş Oyuncağı",
    price: 55.00,
    category: "Kuş",
    stock: 20,
    image: "/images/kus-oyuncağı.jpg",
    images: [
      "/images/kus-oyuncağı.jpg",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kuşunuzun gagasını törpülemesine yardımcı olan doğal ahşap malzemeden üretilmiştir. Canlı renkleri ile kuşunuzun ilgisini çeker ve zihinsel aktivite sağlar. Kafes tellerine kolayca asılabilen kanca sistemi mevcuttur. Kimyasal boya içermez, çiğnemeye karşı tamamen güvenlidir."
  },
  {
    id: 11,
    name: "Premium Japon Balığı Yemi",
    price: 25.00,
    category: "Balık",
    stock: 40,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598379055416-651c6c039304?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517544046168-98e09647242d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Japon balıklarının sindirim sistemine uygun olarak geliştirilmiş özel formül. Suyun kirlenmesini önleyen ve bulanıklık yapmayan yapıya sahiptir. Balığınızın doğal renklerini canlandıran vitaminler içerir. Bağışıklık sistemini destekleyerek hastalıklara karşı direnç sağlar."
  },
  {
    id: 12,
    name: "Dayanıklı Diş İpi",
    price: 60.00,
    category: "Köpek",
    stock: 35,
    image: "/images/dis-ipi.jpg",
    images: [
      "/images/dis-ipi.jpg",
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Köpeğinizin diş etlerine masaj yaparak diş sağlığını korumaya yardımcı olur. Kopmaya karşı ekstra dayanıklı örgü yapısı ile uzun ömürlüdür. Çekiştirme oyunları için ideal boyutta ve sağlamlıktadır. Doğal pamuk ipliğinden üretildiği için yutulması durumunda zarar vermez."
  }
];
    