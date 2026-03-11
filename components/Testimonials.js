import React from 'react';
const testimonials = [
  { name: 'John D.', testimonial: 'Great platform, easy to use and customize' },
  { name: 'Jane S.', testimonial: 'Excellent support team, always available' },
  { name: 'Bob T.', testimonial: 'Improved our workflow and productivity' }
];
const Testimonials = () => {
  const [loading, setLoading] = React.useState(true);
  const [testimonialsList, setTestimonialsList] = React.useState([]);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTestimonialsList(testimonials);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section class="testimonials">
      <h2>What our customers say</h2>
      {loading ? (
        <div class="loading-animation" id="loading-animation">
          <div class="spinner"></div>
        </div>
      ) : (
        <ul id="testimonials-list">
          {testimonialsList.map((testimonial, index) => (
            <li key={index}>
              <p>{testimonial.testimonial}</p>
              <span>{testimonial.name}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Testimonials;