// Edit THIS file to update contact info, prices, and gallery images.
// (Keeps the rest of the site clean and easy to maintain.)

window.SITE_CONFIG = {
  businessName: "Go A Fishin’ 2Day Charters",

  // Contact
  email: "igoafishin2daycharters@gmail.com",
  phonePrimary: "813-394-3389",
  phoneSecondary: "850-515-5489",

  // Optional: link to Google Maps for your meetup location or marina
  mapsLink: "https://www.google.com/maps",

  // Pricing (from your hand sketch)
  pricing: {
    offshore: {
      label: "Offshore (up to 6 people)",
      items: [
        { name: "12 hour trip", price: 2400 },
        { name: "10 hour trip", price: 2000 },
        { name: "Sheepshead / Grouper (6–8 hour)", price: 1600 }
      ]
    },
    inshore: {
      label: "Inshore (up to 4 people)",
      items: [
        { name: "Half day", price: 425 },
        { name: "Full day", price: 650 }
      ]
    }
  },

  // Photo gallery placeholders (replace with your real filenames in /assets)
  // Tip: keep images ~1600px wide and reasonably compressed (jpg/webp).
  gallery: [
    { src: "assets/photo1.jpg", caption: "Inshore action" },
    { src: "assets/photo2.jpg", caption: "Offshore run" },
    { src: "assets/photo3.jpg", caption: "Nice catch" },
    { src: "assets/photo4.jpg", caption: "Sunrise start" },
    { src: "assets/photo5.jpg", caption: "Group photo" },
    { src: "assets/photo6.jpg", caption: "Back at the dock" }
  ]
};
