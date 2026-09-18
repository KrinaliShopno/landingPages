document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animations
  AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-in-out-cubic',
  });

  // Navbar scroll effect
  const navbar = document.getElementById('mainNav');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});

// WhatsApp Form Submission Handler
function sendWhatsAppMessage() {
    var name = document.getElementById("waName").value;
    var phone = document.getElementById("waPhone").value;
    var company = document.getElementById("waCompany").value;
    var city = document.getElementById("waCity").value;

    if (!name || !phone) {
        alert("Please enter at least your Name and WhatsApp Phone Number.");
        return;
    }

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit WhatsApp Phone Number.");
        return;
    }

    var text = "🌟 Website Enquiry\n\nHello TrackMySales Team,\n\nYou have received a new enquiry from your website.\n\n👤 Name: " + name + "\n📞 Phone: " + phone + "\n🏢 Company: " + company + "\n📍 City: " + city + "\n\nPlease get in touch with the customer at your earliest convenience.\n\nThank you.";
    
    var encodedText = encodeURIComponent(text);
    // You can change this to whatever the target WhatsApp number should be
    var targetWhatsAppNumber = "917016268071"; 
    var whatsappUrl = "https://wa.me/" + targetWhatsAppNumber + "?text=" + encodedText;
    
    window.open(whatsappUrl, "_blank");
}
