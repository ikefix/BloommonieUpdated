import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ava Chen",
      role: "Founder, Northwind",
      quote:
        "Bloommonie saved us hours every week. We can finally focus on growing the business.",
      video: "/videos/ava.mp4",
      featured: true,
    },
    {
      name: "Jordan Lee",
      role: "CFO, Atlas Labs",
      quote:
        "The automation has completely changed how we manage our business.",
      video: "/videos/jordan.mp4",
    },
    {
      name: "Mina Patel",
      role: "Founder, Bloom Studio",
      quote:
        "Managing sales and inventory is now much easier for our team.",
      video: "/videos/mina.mp4",
    },
    {
      name: "Ethan Kim",
      role: "Founder, Relay",
      quote:
        "The reports give me a clear picture of what is happening in my business.",
      video: "/videos/ethan.mp4",
    },
    {
      name: "Sofia Rodriguez",
      role: "Founder, Verde",
      quote:
        "Bloommonie makes it easy to track sales and keep everything organized.",
      video: "/videos/sofia.mp4",
    },
  ];

  const handlePlay = (event) => {
    const video = event.currentTarget.parentElement.querySelector("video");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="Testimonial">
      <div className="testimonial-container">

        {/* Header */}
        <div className="testimonial-header">

          <div className="testimonial-badge">
            CUSTOMER STORIES
          </div>

          <h2>Hear from our customers</h2>

          <p>
            Watch real business owners share how Bloommonie helps them
            simplify sales, inventory and bookkeeping.
          </p>

        </div>

        {/* Videos */}
        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card ${
                testimonial.featured ? "testimonial-featured" : ""
              }`}
              key={index}
            >

              {/* Video */}
              <div className="testimonial-video">

                <video
                  src={testimonial.video}
                  preload="metadata"
                  playsInline
                />

                {/* Play Button */}
                <button
                  className="testimonial-play"
                  onClick={handlePlay}
                  aria-label={`Play ${testimonial.name}'s testimonial`}
                >
                  <span></span>
                </button>

              </div>

              {/* Details */}
              <div className="testimonial-details">

                <h3>{testimonial.name}</h3>

                <span className="testimonial-role">
                  {testimonial.role}
                </span>

                <p>
                  "{testimonial.quote}"
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonial;