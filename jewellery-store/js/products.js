const PRODUCTS = [
  {
    id: "ring-solitaire",
    name: "Solitaire Diamond Ring",
    category: "Rings",
    price: 2450,
    icon: "ring",
    gradient: "linear-gradient(135deg, #f7e7ce, #d4af37)",
    description:
      "A timeless round-cut diamond set in an 18k gold band. Understated elegance for everyday wear.",
  },
  {
    id: "ring-eternity",
    name: "Eternity Gold Band",
    category: "Rings",
    price: 1180,
    icon: "ring",
    gradient: "linear-gradient(135deg, #ffe9b3, #b8860b)",
    description:
      "A continuous circle of pave-set diamonds symbolizing everlasting love.",
  },
  {
    id: "ring-emerald",
    name: "Emerald Halo Ring",
    category: "Rings",
    price: 3200,
    icon: "ring",
    gradient: "linear-gradient(135deg, #c9f7d8, #2e8b57)",
    description:
      "A vivid emerald centerpiece surrounded by a halo of brilliant diamonds.",
  },
  {
    id: "necklace-pearl",
    name: "Freshwater Pearl Necklace",
    category: "Necklaces",
    price: 890,
    icon: "necklace",
    gradient: "linear-gradient(135deg, #fdfdfd, #e0d8c3)",
    description:
      "Hand-strung freshwater pearls on a silk thread with a sterling silver clasp.",
  },
  {
    id: "necklace-pendant",
    name: "Gold Pendant Necklace",
    category: "Necklaces",
    price: 640,
    icon: "necklace",
    gradient: "linear-gradient(135deg, #fff2c4, #d4af37)",
    description:
      "A delicate 14k gold chain with a hand-set diamond pendant.",
  },
  {
    id: "necklace-choker",
    name: "Sapphire Choker",
    category: "Necklaces",
    price: 2750,
    icon: "necklace",
    gradient: "linear-gradient(135deg, #cfe0ff, #1e3a8a)",
    description:
      "A striking row of blue sapphires set in white gold, designed to sit close to the collarbone.",
  },
  {
    id: "earrings-stud",
    name: "Classic Diamond Studs",
    category: "Earrings",
    price: 980,
    icon: "earrings",
    gradient: "linear-gradient(135deg, #f7e7ce, #d4af37)",
    description: "Brilliant-cut diamond studs in 18k white gold settings.",
  },
  {
    id: "earrings-drop",
    name: "Ruby Drop Earrings",
    category: "Earrings",
    price: 1560,
    icon: "earrings",
    gradient: "linear-gradient(135deg, #ffd6d6, #9b111e)",
    description:
      "Elegant ruby drops suspended from gold huggie hoops, perfect for evening wear.",
  },
  {
    id: "earrings-hoop",
    name: "Gold Huggie Hoops",
    category: "Earrings",
    price: 420,
    icon: "earrings",
    gradient: "linear-gradient(135deg, #fff2c4, #d4af37)",
    description: "Lightweight 14k gold hoops for everyday sparkle.",
  },
  {
    id: "bracelet-tennis",
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    price: 4100,
    icon: "bracelet",
    gradient: "linear-gradient(135deg, #f7e7ce, #d4af37)",
    description:
      "A continuous line of matched diamonds in a classic tennis bracelet setting.",
  },
  {
    id: "bracelet-bangle",
    name: "Gold Bangle Set",
    category: "Bracelets",
    price: 760,
    icon: "bracelet",
    gradient: "linear-gradient(135deg, #ffe9b3, #b8860b)",
    description: "A stackable set of three polished 18k gold bangles.",
  },
  {
    id: "bracelet-charm",
    name: "Charm Bracelet",
    category: "Bracelets",
    price: 340,
    icon: "bracelet",
    gradient: "linear-gradient(135deg, #e0d8c3, #b8860b)",
    description:
      "A sterling silver chain bracelet with three starter charms included.",
  },
];

function formatPrice(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
