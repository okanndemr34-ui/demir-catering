export const menus = [
  {
    label: "Günlük personel menüsü",
    inquiry: "günlük personel yemeği",
    title: "İş gününe lezzetli bir mola.",
    items: [
      ["Başlangıç", "Mercimek çorbası"],
      ["Ana yemek", "Fırında tavuk"],
      ["Eşlikçi", "Pirinç pilavı"],
      ["Tamamlayıcı", "Mevsim salata"],
    ],
  },
  {
    label: "Geleneksel mevlüt menüsü",
    inquiry: "geleneksel mevlüt yemeği",
    title: "Gelenekten gelen, paylaşılan lezzet.",
    items: [
      ["Ana yemek", "Etli nohut"],
      ["Eşlikçi", "Pirinç pilavı"],
      ["Tamamlayıcı", "Ayran"],
      ["Tatlı", "İrmik helvası"],
    ],
  },
  {
    label: "Davet & organizasyon menüsü",
    inquiry: "davet ve organizasyon yemeği",
    title: "Özel gününüze özel bir sofra.",
    items: [
      ["Başlangıç", "Mevsim çorbası"],
      ["Ana yemek", "Et sote"],
      ["Eşlikçi", "İç pilav"],
      ["Tatlı", "Şerbetli tatlı"],
    ],
  },
  {
    label: "Fuar ikram menüsü",
    inquiry: "fuar ikram menüsü",
    title: "Yoğun günlere keyifli bir ara.",
    items: [
      ["Tuzlu ikram", "Mini sandviç"],
      ["Atıştırmalık", "Peynirli börek"],
      ["Tatlı ikram", "Mini kurabiye"],
      ["İçecek", "Çay & kahve"],
    ],
  },
] as const;
