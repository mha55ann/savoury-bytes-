// Menu data — single source of truth for the Menu page.
// Each item carries dietary tags used to render badges consistently.

export const DIETARY = {
  vegetarian: { label: "Vegetarian", color: "text-sage" },
  glutenFree: { label: "Gluten Free", color: "text-gold" },
  spicy: { label: "Spicy Option", color: "text-oxblood-light" },
};

export const MENU_CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "main-course", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks & Bar" },
];

export const MENU_ITEMS = {
  starters: [
    {
      id: "bruschetta",
      name: "Bruschetta",
      description:
        "Toasted artisanal bread topped with vine-ripened tomatoes, fresh garlic, basil, and extra virgin olive oil.",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: "calamari",
      name: "Crispy Calamari",
      description:
        "Tender squid lightly battered and fried to golden perfection, served with lemon aioli and marinara.",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
      tags: ["spicy"],
    },
    {
      id: "caprese",
      name: "Caprese Salad",
      description:
        "Fresh buffalo mozzarella, heirloom tomatoes, and basil leaves drizzled with aged balsamic glaze.",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian", "glutenFree"],
    },
    {
      id: "truffle-soup",
      name: "Truffle Mushroom Soup",
      description:
        "Rich and creamy wild mushroom soup infused with black truffle oil, finished with chive oil.",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian", "glutenFree"],
    },
  ],
  "main-course": [
    {
      id: "filet-mignon",
      name: "Filet Mignon",
      description:
        "8oz prime beef tenderloin with roasted seasonal vegetables, truffle mashed potatoes, and red wine reduction.",
      price: 42.99,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
    {
      id: "salmon",
      name: "Grilled Atlantic Salmon",
      description:
        "Wild-caught salmon with lemon beurre blanc, roasted asparagus, and saffron risotto.",
      price: 28.99,
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
      tags: ["glutenFree"],
    },
    {
      id: "mushroom-risotto",
      name: "Wild Mushroom Risotto",
      description:
        "Creamy arborio rice with seasonal wild mushrooms, white truffle oil, and aged parmesan.",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: "herb-chicken",
      name: "Herb Roasted Chicken",
      description:
        "Free-range chicken with herb butter, roasted garlic mashed potatoes, and seasonal vegetables.",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
      tags: ["glutenFree"],
    },
  ],
  desserts: [
    {
      id: "tiramisu",
      name: "Classic Tiramisu",
      description:
        "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa powder.",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
    {
      id: "lava-cake",
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
      price: 11.99,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: "creme-brulee",
      name: "Vanilla Bean Crème Brûlée",
      description:
        "Rich custard with Madagascar vanilla beans, topped with caramelized sugar.",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian", "glutenFree"],
    },
    {
      id: "cheesecake",
      name: "New York Cheesecake",
      description:
        "Classic creamy cheesecake with a graham cracker crust and seasonal berry compote.",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
      tags: ["vegetarian"],
    },
  ],
  drinks: [
    {
      id: "cocktails",
      name: "Signature Cocktails",
      description:
        "Ask your server about our seasonal craft cocktails featuring premium spirits and fresh ingredients.",
      price: null,
      priceLabel: "$14 – $18",
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
    {
      id: "wine",
      name: "Wine Selection",
      description:
        "A curated list of international and domestic reds, whites, and sparkling wines, by the glass or bottle.",
      price: null,
      priceLabel: "$12 – $25 / glass",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
    {
      id: "mocktails",
      name: "Non-Alcoholic Craft Drinks",
      description:
        "Artisanal mocktails, fresh juices, house-made sodas, and premium coffee & tea selections.",
      price: null,
      priceLabel: "$5 – $8",
      image:
        "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
    {
      id: "craft-beer",
      name: "Craft Beer Selection",
      description:
        "A rotating selection of local and international craft beers, on tap and in bottles.",
      price: null,
      priceLabel: "$7 – $12",
      image:
        "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
      tags: [],
    },
  ],
};
