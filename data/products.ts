
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Gourmet Gold Kedi Maması",
    price: 45.90,
    category: "Kedi",
    stock: 24,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
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
    stock: 16,
    image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Köpeğinizin diş etlerine masaj yaparak diş sağlığını korumaya yardımcı olur. Kopmaya karşı ekstra dayanıklı örgü yapısı ile uzun ömürlüdür. Çekiştirme oyunları için ideal boyutta ve sağlamlıktadır. Doğal pamuk ipliğinden üretildiği için yutulması durumunda zarar vermez."
  },
  {
    id: 13,
    name: "Otomatik Mama Kabı",
    price: 380.00,
    category: "Kedi",
    stock: 10,
    image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545238579-9ba13b0e299a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Akıllı zamanlayıcı sistemi ile istediğiniz saatlerde otomatik olarak mama verir. 6 bölmeli yapısı ile günde 6 öğüne kadar programlanabilir. Hava geçirmez kapaklı bölmeleri sayesinde mama her zaman taze kalır. Ses kayıt özelliği ile kedinizi yemek zamanında kendi sesinizle çağırabilirsiniz. Elektrik kesintisinde çalışmaya devam eden pil desteği mevcuttur."
  },
  {
    id: 14,
    name: "Interaktif Köpek Topu",
    price: 95.00,
    category: "Köpek",
    stock: 18,
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527526029430-319f10814151?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kendi kendine hareket eden akıllı top köpeğinizi saatlerce eğlendirir. USB ile şarj edilebilir, tek şarjla 3 saat kullanım sağlar. Isırıklara dayanıklı silikon kaplama sayesinde uzun ömürlüdür. Farklı hızlarda hareket ederek köpeğinizin dikkatini canlı tutar. Temizliği kolay, suya dayanıklı yapıya sahiptir."
  },
  {
    id: 15,
    name: "Premium Kemirgen Karışım Yemi",
    price: 42.00,
    category: "Kemirgen",
    stock: 28,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hamster, gine domuzu ve tavşanlar için özel olarak hazırlanmış dengeli beslenme formülü. Zengin tohum, meyve ve sebze karışımı ile günlük vitamin ihtiyacını karşılar. Diş sağlığını destekleyen sert taneler içerir. Katkısız, doğal ürünlerden oluşur. Sindirim sistemini güçlendiren prebiyotikler eklenmiştir."
  },
  {
    id: 16,
    name: "Renkli Kuş Kafesi Tüneli",
    price: 68.00,
    category: "Kuş",
    stock: 22,
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7de8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kafeste yaşayan kuşlar için eğlenceli ve güvenli bir oyun alanı sunar. Esnek yapısı sayesinde her türlü kafese kolayca monte edilebilir. Canlı renkleri ile kuşunuzun dikkatini çeker ve zihinsel uyarım sağlar. İçinden geçerken tırmanma ve denge egzersizi yapmalarına olanak tanır. Doğal malzemeden üretilmiş, toksik madde içermez."
  },
  {
    id: 17,
    name: "Royal Canin Yavru Köpek Maması",
    price: 280.00,
    category: "Köpek",
    stock: 15,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591856419156-c55fc6c6b3e4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&w=800&q=80"
    ],
    description: "2-12 aylık yavru köpekler için özel formül. Yüksek protein ve enerji içeriği ile sağlıklı büyümeyi destekler. Sindirim sistemini güçlendiren prebiyotikler ve bağışıklık sistemi için antioksidanlar içerir. Kolay çiğnenebilir küçük taneler yavruların beslenmesini kolaylaştırır."
  },
  {
    id: 18,
    name: "Peluş Squeaky Oyuncak Seti",
    price: 75.00,
    category: "Köpek",
    stock: 30,
    image: "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "5'li peluş oyuncak seti köpeğinizin oyun ihtiyacını karşılar. Her biri farklı ses çıkararak köpeğinizin ilgisini çeker. Yumuşak dokusu diş etlerine zarar vermez. Makinede yıkanabilir kumaştan üretilmiştir. Küçük ve orta boy köpekler için idealdir."
  },
  {
    id: 19,
    name: "Lazer Pointer Kedi Oyuncağı",
    price: 45.00,
    category: "Kedi",
    stock: 25,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kedinizi aktif tutmak için mükemmel egzersiz aracı. 5 farklı şekil deseni ile kedilerin avlanma içgüdüsünü uyandırır. USB şarj edilebilir batarya ile uzun kullanım süresi. Göz dostu düşük yoğunluklu lazer teknolojisi. Kedinizle eğlenceli vakit geçirmek için idealdir."
  },
  {
    id: 20,
    name: "Whiskas Kedi Ödül Tableti",
    price: 32.00,
    category: "Kedi",
    stock: 45,
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7de8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kedinizi ödüllendirmek için lezzetli tablet atıştırmalıklar. Taurin ve vitamin katkılı sağlıklı formül. Düşük kalorili, kilo kontrolüne yardımcı olur. Kıtır kıtır yapısı diş temizliğine destek sağlar. Tavuk, somon ve ton balığı çeşitlerinde üretilmiştir."
  },
  {
    id: 21,
    name: "Ortopedik Köpek Yatağı",
    price: 420.00,
    category: "Köpek",
    stock: 8,
    image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Yaşlı ve eklem problemi olan köpekler için özel tasarım. Yüksek yoğunluklu ortopedik köpük eklemleri rahatlatır. Su geçirmez iç astar kazaları önler. Kaymaz taban güvenli kullanım sağlar. Sökülebilir ve makinede yıkanabilir kılıf hijyen için uygundur. Large ve XL bedenlerde mevcuttur."
  },
  {
    id: 22,
    name: "Bambu Kedi Tırmalama Standı",
    price: 325.00,
    category: "Kedi",
    stock: 12,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511044568932-338cba0fb803?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Modern ev dekorasyonuna uygun şık tasarım. %100 doğal bambu ve sisal halat kullanılmıştır. Üç katlı yapısı ile tırmalama, tırmanma ve dinlenme alanı sunar. Sağlam ahşap konstrüksiyon 10 kg'a kadar dayanabilir. Kolay kurulum ve bakım için tasarlanmıştır."
  },
  {
    id: 23,
    name: "Tavşan ve Kemirgen Kafes Eki",
    price: 145.00,
    category: "Kemirgen",
    stock: 18,
    image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Mevcut kafeslere eklenebilen genişletme modülü. Kemirgeninizin yaşam alanını 2 katına çıkarır. Plastik tüneller ile ana kafese bağlanır. Çift katlı tasarım daha fazla aktivite alanı sağlar. Kolay temizlenebilir çıkarılabilir taban tepsisi mevcuttur."
  },
  {
    id: 24,
    name: "Tropikal Balık Yemi Flakes",
    price: 38.00,
    category: "Balık",
    stock: 35,
    image: "https://images.unsplash.com/photo-1520990123029-c14e48207f6f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520990123029-c14e48207f6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Tropikal balıklar için özel geliştirilmiş pul yem. Spirulina ve beta karoten ile canlı renkler desteklenir. Yüksek protein içeriği ile büyüme ve enerji sağlar. Suyu kirletmeyen özel formül akvaryumu temiz tutar. Tüm tropikal balık türleri için uygundur."
  },
  {
    id: 25,
    name: "Papağan Oyun Parkı",
    price: 525.00,
    category: "Kuş",
    stock: 6,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Papağanlar için kafes dışı oyun ve egzersiz alanı. Çok katlı tünek sistemi ile tırmanma aktivitesi sağlar. Doğal ahşap dallar ve ip merdivenler içerir. Paslanmaz çelik yemlik ve suluk dahildir. Tekerlek sistemi ile kolayca taşınabilir. Orta ve büyük boy papağanlar için uygundur."
  },
  {
    id: 26,
    name: "Kedi Taşıma Çantası",
    price: 195.00,
    category: "Kedi",
    stock: 14,
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Veteriner ziyaretleri ve seyahatler için konforlu taşıma çantası. Yumuşak dolgulu iç kısım kedinizin rahatını sağlar. Havalandırma pencereleri taze hava akışı sunar. Ayarlanabilir omuz askısı ve üst taşıma kulpu mevcuttur. Katlanabilir tasarım kolay saklama imkanı verir. 6 kg'a kadar kedi taşıyabilir."
  },
  {
    id: 27,
    name: "Köpek Diş Fırçası Seti",
    price: 68.00,
    category: "Köpek",
    stock: 40,
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Köpeklerin diş sağlığı için komple bakım seti. 3 farklı boyutta fırça başlığı tüm köpek ırkları için uygundur. Tavuk aromalı diş macunu köpeklerin sevdiği lezzettedir. Yumuşak kıllar diş etlerine zarar vermez. Parmak fırçası küçük köpekler için idealdir. Düzenli kullanım ile diş taşı oluşumunu önler."
  },
  {
    id: 28,
    name: "Kedi Kumu Kabı Filtreli",
    price: 285.00,
    category: "Kedi",
    stock: 10,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kapalı tasarım ile koku ve pislik saçılmasını engeller. Aktif karbon filtre sistemi kötü kokuları absorbe eder. Üstten giriş tasarımı kum saçılmasını minimize eder. Çıkarılabilir iç kap kolay temizlik sağlar. Büyük boy kediler için geniş iç hacim. Çevre dostu plastikten üretilmiştir."
  },
  {
    id: 29,
    name: "Premium Kedi Tırmık Tarağı",
    price: 52.00,
    category: "Kedi",
    stock: 35,
    image: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Paslanmaz çelik dişleri ile ölü tüyleri etkili şekilde temizler. Ergonomik tutma sapı uzun süreli kullanımda el yorgunluğu yapmaz. Tüylerin dolaşmasını önleyen özel diş tasarımı. Kısa ve uzun tüylü kediler için uygundur. Düzenli kullanım kedinizin tüy yumağı yutmasını önler."
  },
  {
    id: 30,
    name: "Pedigree Yetişkin Köpek Maması",
    price: 195.00,
    category: "Köpek",
    stock: 22,
    image: "https://images.unsplash.com/photo-1591856419156-c55fc6c6b3e4?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591856419156-c55fc6c6b3e4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&w=800&q=80"
    ],
    description: "1 yaş ve üzeri yetişkin köpekler için dengeli beslenme formülü. Tavuk, pirinç ve sebze karışımı ile doğal tat. Sağlıklı sindirim için prebiyotik lifler içerir. Diş sağlığını destekleyen kıtır kıtır kibble yapısı. E vitamini ve çinko ile güçlü bağışıklık sistemi."
  },
  {
    id: 31,
    name: "Köpek Reflektörlü Güvenlik Yeleği",
    price: 89.00,
    category: "Köpek",
    stock: 18,
    image: "https://images.unsplash.com/photo-1605218427368-35b0f9872993?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1605218427368-35b0f9872993?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565152968159-25458f2bfdf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Gece yürüyüşlerinde maksimum görünürlük sağlayan neon sarı yelek. 360 derece reflektör bantlar uzak mesafeden fark edilmeyi garantiler. Nefes alabilen su geçirmez kumaş her mevsim kullanım. Cırt cırt bantlar ile kolay giyim ve ayarlama. S'den XL'e kadar tüm bedenler mevcuttur."
  },
  {
    id: 32,
    name: "Kedi Otomatik Lazer Oyuncak",
    price: 125.00,
    category: "Kedi",
    stock: 15,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Otomatik mod ile kedinizi 15 dakika boyunca eğlendirir. Rastgele hareket algoritması her seferinde farklı oyun deneyimi sunar. Zamanlayıcı özelliği ile günde 4 kez otomatik oyun seansı. Göz dostu Class 1 lazer güvenlik standardı. Pil veya USB ile çalışma seçeneği."
  },
  {
    id: 33,
    name: "Akvaryum Isıtıcısı 100W",
    price: 155.00,
    category: "Balık",
    stock: 12,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "50-100 litre akvaryumlar için ideal ısıtıcı. Otomatik termostat ile sabit sıcaklık kontrolü. Kırılmaya dayanıklı çift camlı yapı. LED gösterge ısıtma durumunu bildirir. Vantuzlu montaj sistemi kolay kurulum sağlar. 1 yıl garantilidir."
  },
  {
    id: 34,
    name: "Köpek Seyahat Su Matarası",
    price: 48.00,
    category: "Köpek",
    stock: 45,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Yürüyüş ve seyahatlerde pratik su taşıma çözümü. Tek elle kullanılabilen basmalı içme kabı. 500ml kapasiteli sızdırmaz tasarım. BPA içermeyen gıdaya uygun plastik. Karabina askısı ile çantaya kolayca takılır. Koyu mavi ve açık gri renk seçenekleri."
  },
  {
    id: 35,
    name: "Kedi Tünel Oyun Seti",
    price: 135.00,
    category: "Kedi",
    stock: 20,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511044568932-338cba0fb803?auto=format&fit=crop&w=800&q=80"
    ],
    description: "3 yollu katlanabilir oyun tüneli kediler için sonsuz eğlence. Çıtır çıtır ses çıkaran materyal kedinizin ilgisini çeker. Gizlenme ve saklanma için mükemmel. Hafif ve taşınabilir, saniyeler içinde kurulur. Kullanılmadığında düz katlanarak az yer kaplar."
  },
  {
    id: 36,
    name: "Tavşan Premium Pellet Yemi",
    price: 78.00,
    category: "Kemirgen",
    stock: 30,
    image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Tavşanların özel sindirim sistemine göre formüle edilmiş pellet yem. Yüksek lif içeriği sağlıklı sindirim sağlar. Timothy otu bazlı doğal içerik. Diş aşınması için ideal sertlikte. Yapay renklendirici ve koruyucu içermez. 2.5kg torba."
  },
  {
    id: 37,
    name: "Muhabbet Kuşu Mineral Taşı",
    price: 22.00,
    category: "Kuş",
    stock: 60,
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Muhabbet kuşları için gerekli mineral ve kalsiyum kaynağı. Gaga törpüleme ve oyalanma için kullanılır. Özellikle yumurtlayan dişi kuşlar için önemli. Doğal midye kabuğu katkılı. Kafese asma aparatı dahildir. 3'lü paket halinde."
  },
  {
    id: 38,
    name: "Köpek Ödül Kemikleri",
    price: 42.00,
    category: "Köpek",
    stock: 50,
    image: "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Gerçek sığır derisinden yapılmış doğal çiğneme kemiği. Diş temizliği ve diş eti masajı sağlar. Stres azaltıcı çiğneme aktivitesi. Sindirilебilir ve güvenli içerik. Orta boy köpekler için 15cm uzunluğunda. 5'li ekonomik paket."
  },
  {
    id: 39,
    name: "Kedi Tırnak Makası Premium",
    price: 65.00,
    category: "Kedi",
    stock: 28,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Keskin paslanmaz çelik bıçak temiz kesim garantisi. Güvenlik kilidi kazaları önler. Ergonomik kauçuk kaplı sap kaymaz tutuş. Hassas kesim için büyüteç dahil. Tırnak törpüsü hediye. Profesyonel veteriner kalitesinde."
  },
  {
    id: 40,
    name: "Akvaryum Hava Pompası Sessiz",
    price: 98.00,
    category: "Balık",
    stock: 16,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520990123029-c14e48207f6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra sessiz çalışma teknolojisi yatak odasında bile kullanılabilir. Çift çıkışlı 2 akvaryum için ideal. Ayarlanabilir hava akışı kontrolü. Enerji tasarruflu 3W motor. Hortum ve hava taşı seti dahil. 100 litreye kadar uygun."
  },
  {
    id: 41,
    name: "Köpek Giyim Yelek Polar",
    price: 115.00,
    category: "Köpek",
    stock: 24,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kışın köpeğinizi sıcak tutan yumuşak polar yelek. Göğüs ve karın kısmını korur. Cırt cırt kapatma kolay giyim sağlar. Makinede yıkanabilir. Tasma deliği ile birlikte kullanım. Küçük ve orta boy köpekler için XS-L bedenlerde."
  },
  {
    id: 42,
    name: "Kedi Kedi Otu Tohumu Saksılı",
    price: 35.00,
    category: "Kedi",
    stock: 40,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Evde yetiştirilebilir organik kedi otu saksısı. 7-10 günde kullanıma hazır hale gelir. Sindirime yardımcı doğal bitki. Tüy yumağı atılmasına destek. Plastik saksı ve toprak dahil. Tekrar tohum atılabilir. Pestisit ve kimyasal içermez."
  },
  {
    id: 43,
    name: "Gine Domuzu Tünel Oyuncak",
    price: 58.00,
    category: "Kemirgen",
    stock: 22,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585324025686-35399589df96?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Gine domuzları için %100 doğal ahşap tünel. Gizlenme ve keşfetme içgüdüsünü tatmin eder. Çiğneme aktivitesi için güvenli. 25cm uzunluğunda geniş iç geçiş. Kafes dışında da kullanılabilir. El yapımı kaliteli işçilik."
  },
  {
    id: 44,
    name: "Papağan Tünek Standı Ahşap",
    price: 185.00,
    category: "Kuş",
    stock: 10,
    image: "/images/papagan-tunek.jpg",
    images: [
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Kafes dışında papağanların oturması için ahşap stand. Farklı kalınlıkta 3 doğal dal ayak sağlığını destekler. Paslanmaz çelik yemlik ve suluk askılı. Alt tabanda dışkı tepsisi temizlik kolaylığı. Orta boy papağanlar için 50cm yüksekliğinde."
  },
  {
    id: 45,
    name: "Köpek Pati Temizleme Bardağı",
    price: 72.00,
    category: "Köpek",
    stock: 32,
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Yürüyüş sonrası pati temizliği için pratik çözüm. Silikon fırça uçları etkili temizlik. Su ile doldurulur, pati içine sokulur. Küçük ve orta köpekler için 2 boy seçeneği. Taşınabilir kapaklı tasarım. BPA içermez."
  },
  {
    id: 46,
    name: "Akvaryum Dekor Kaya Seti",
    price: 145.00,
    category: "Balık",
    stock: 14,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    description: "5 parçalı doğal görünümlü akvaryum kaya dekor seti. Balıklar için saklanma alanları oluşturur. Su değerlerini etkilemeyen güvenli reçine. Gerçekçi detaylı işçilik. Tatlı ve tuzlu su akvaryumlarında kullanılabilir. Kolay temizlenir."
  },
  {
    id: 47,
    name: "Kedi İnteraktif Fare Oyuncak",
    price: 38.00,
    category: "Kedi",
    stock: 55,
    image: "/images/kedi-fare.jpg",
    images: [
      "/images/kedi-fare.jpg",
      "https://images.unsplash.com/photo-1573865526739-10c1dd85fd2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hareket sensörlü otomatik fare oyuncak. Kedinin yaklaşması ile aktif hale gelir. Gerçekçi kaçış hareketleri. Değiştirilebilir 3 farklı fare başlığı. Batarya ile 30 gün kullanım. Avlanma içgüdüsünü uyandırır."
  },
  {
    id: 48,
    name: "Köpek Tüy Toplama Eldiveni",
    price: 45.00,
    category: "Köpek",
    stock: 38,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Köpeğinizi severken aynı anda tüy toplama eldiveni. 255 silikon uç etkili tüy toplama. Köpeğiniz masaj yapıldığını zanneder. Bilek bantlı ergonomik tasarım. Sağ ve sol el için kullanılabilir. Makinede yıkanabilir."
  },
  {
    id: 49,
    name: "Kemirgen Meyve Çubukları",
    price: 28.00,
    category: "Kemirgen",
    stock: 48,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hamster ve farelar için meyve aromalı çubuk atıştırmalık. 3 farklı tat: elma, üzüm, havuç. Kafese asma aparatlı. Diş törpüleme aktivitesi sağlar. Vitamin ve mineral zenginleştirilmiş. 6'lı ekonomik paket."
  },
  {
    id: 50,
    name: "Kuş Kafesi Salıncak Renkli",
    price: 32.00,
    category: "Kuş",
    stock: 42,
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552728089-57bdde30beb8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7de8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Muhabbet kuşları için ahşap salıncak. Renkli boncuk süslemeli eğlenceli tasarım. Doğal ağaç dalından yapılmış. Kafes tellerine kolay montaj. Kuşunuzun egzersiz yapmasını sağlar. Orta boy kafesler için 12cm genişliğinde."
  }
];
    