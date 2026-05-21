function Hero() {
return (
<section className="hero">
<div className="hero-text">
<h1>Explore Our Solar System Through Data</h1>
<p>
Understand the planets not just by name, but by measurable facts.
From size and mass to gravity and density, this page breaks down the
solar system in a clear, data-driven way.
</p>
<div className="hero-buttons">
<a href="#planet-section"><button className="primary-btn">Explore the Data</button></a>
<a href="#contact-section"><button className="secondary-btn">Contact Us</button></a>
</div>
</div>
<div className="hero-image">
<img
src="https://res.cloudinary.com/dg3f5oyel/image/upload/v1770264724/Earthball-removebg-preview_fjzk8d.png"
alt="Earth"
/>
</div>
</section>
);
}