<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MAVERIK Agency</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="logo">MAVERIK</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#clients">Clients</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero-text">
      <h1 class="fade-in">MAVERIK</h1>
      <p class="tagline">Elevate Your Web Presence With Precision + Style</p>
    </div>
  </section>

  <!-- About Section -->
  <section class="about">
    <div class="about-content">
      <h2>Who We Are</h2>
      <p>MAVERIK is a digital agency that bridges creativity with technology. We empower businesses by building, redesigning, and optimizing websites to match modern standards. Whether you're just starting out or need a complete overhaul — we've got you.</p>
    </div>
  </section>

  <!-- Clients Section -->
  <section class="clients" id="clients">
    <h2>What Our Clients Say</h2>
    <div class="testimonial-container">
      <div class="testimonial">
        <p>"MAVERIK turned our vision into a beautiful, responsive site that users love!"</p>
        <span>- Jane, CEO of FlexTech</span>
      </div>
      <div class="testimonial">
        <p>"No tech headaches. Just smooth service, great design, and results."</p>
        <span>- Omar, Founder of GreenHive</span>
      </div>
      <div class="testimonial">
        <p>"Professional team with quick delivery. We'll definitely work with them again."</p>
        <span>- Aisha, Director at BrightLabs</span>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div class="service-item">
        <h3>Website Creation</h3>
        <p>We craft visually striking websites from scratch, tailored to your brand identity and goals.</p>
      </div>
      <div class="service-item">
        <h3>Redesign & Optimization</h3>
        <p>Old site? No problem. We'll redesign and optimize it for performance, responsiveness, and conversion.</p>
      </div>
      <div class="service-item">
        <h3>Technical Troubleshooting</h3>
        <p>From bugs to broken layouts, we fix your digital issues so your business keeps running smoothly.</p>
      </div>
      <div class="service-item">
        <h3>Site Management</h3>
        <p>Let us manage your updates, backups, SEO improvements, and site maintenance with ongoing support.</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <h2>Contact Us</h2>
    <p>Have questions? Need a quote? Reach out anytime:</p>
    <p>Email: <a href="mailto:info@maverikagency.com">info@maverikagency.com</a></p>
    <p>Meet the team: Mohamed K., Jason M., Nia S.</p>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 MAVERIK Agency. All rights reserved.</p>
  </footer>

  <!-- AI Chatbot -->
  <div class="chatbot-icon" onclick="toggleChat()">
    💬
  </div>
  <div id="chatbot" class="chatbot">
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/YOUR-CHATBOT-ID"
      title="Maverik AI Chatbot"
      width="100%" height="100%" style="border:0;">
    </iframe>
  </div>
</body>
</html>
