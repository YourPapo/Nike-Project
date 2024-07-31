export default {
  state() {
    return {
      services: [
        {
          title: "Shoes",
          items: [
            { name: "New Arrivals", category: "new & featured" },
            { name: "Nike Summer Event", category: "new & featured" },
            { name: "Extra 25% Off Select Styles", category: "new & featured" },
            { name: "Explore", category: "" },
          ],
        },
        {
          title: "Men",
          items: [
            { name: "New Arrivals", category: "new & featured" },
            { name: "Nike Summer Event", category: "new & featured" },
            { name: "Shoes", category: "shoes" },
            { name: "Clothing", category: "clothing" },
            { name: "Accessories", category: "accessories" },
            { name: "Shop by sport", category: "Men" },
          ],
        },
        {
          title: "Women",
          items: [
            { name: "New Arrivals", category: "new & featured" },
            { name: "Nike Summer Event", category: "new & featured" },
            { name: "Shoes", category: "shoes" },
            { name: "Clothing", category: "clothing" },
            { name: "Accessories", category: "accessories" },
            { name: "Shop by sport", category: "women" },
          ],
        },
        {
          title: "Kids",
          items: [
            { name: "New Arrivals", category: "new & featured" },
            { name: "Nike Summer Event", category: "new & featured" },
            { name: "Shoes", category: "shoes" },
            { name: "Clothing", category: "clothing" },
            { name: "Accessories", category: "accessories" },
            { name: "Shop by sport", category: "kids" },
          ],
        },
      ],
      sections: [
        {
          id: "get-help",
          title: "Get Help",
          text: "Here you can find help about various topics...",
        },
        {
          id: "order-status",
          title: "Order Status",
          text: "Check the status of your order...",
        },
        {
          id: "shipping-delivery",
          title: "Shipping and Delivery",
          text: "Information about shipping and delivery...",
        },
        {
          id: "payment-options",
          title: "Payment Options",
          text: "Available payment options...",
        },
        {
          id: "gift-card-balance",
          title: "Gift Card Balance",
          text: "Check your gift card balance...",
        },
        { id: "contact-us", title: "Contact Us", text: "How to contact us..." },
        {
          id: "about-nike",
          title: "About Nike",
          text: "Information about Nike...",
        },
        { id: "news", title: "News", text: "Latest news about Nike..." },
        {
          id: "careers",
          title: "Careers",
          text: "Career opportunities at Nike...",
        },
        {
          id: "investors",
          title: "Investors",
          text: "Investor information...",
        },
        {
          id: "purpose",
          title: "Purpose",
          text: "Nike's purpose and mission...",
        },
        {
          id: "students",
          title: "Students",
          text: "Discounts and offers for students...",
        },
        {
          id: "teacher",
          title: "Teacher",
          text: "Discounts and offers for teachers...",
        },
        {
          id: "birthday",
          title: "Birthday",
          text: "Special offers for birthdays...",
        },
        {
          id: "professionals",
          title: "Professionals",
          text: "Offers for professionals...",
        },
        {
          id: "first-responder-medical",
          title: "First Responder & Medical",
          text: "Special offers for first responders and medical personnel...",
        },
      ],
    };
  },
  getters: {
    getServices(state) {
      return state.services;
    },
    getSections(state) {
      return state.sections;
    },
  },
};
