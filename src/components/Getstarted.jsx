import "./Getstarted.css";
import getstartedMockup from "../assets/images/getstarted-mock.png"; // Replace with your actual image path

const steps = [
  {
    id: 1,
    title: "Create your account",
    description: "Sign up in minutes and set up your store.",
  },
  {
    id: 2,
    title: "Add your business details",
    description: "Enter your products, stock and opening balance.",
  },
  {
    id: 3,
    title: "Start tracking & growing",
    description: "Manage sales, expenses, get reports and more.",
  },
];

const Getstarted = () => {
  return (
    <section className="getstarted">
      <div className="getstarted__container">
        <div className="getstarted__content">
          <span className="getstarted__badge">SIMPLE PROCESS</span>

          <h2 className="getstarted__title">Get started in 3 easy steps</h2>

          <p className="getstarted__subtitle">
            From setup to insights, Bloommonie makes it simple to manage your
            business finances.
          </p>

          <ol className="getstarted__steps">
            {steps.map(({ id, title, description }) => (
              <li className="getstarted__step" key={id}>
                <span className="getstarted__number">{id}</span>
                <div className="getstarted__step-body">
                  <h3 className="getstarted__step-title">{title}</h3>
                  <p className="getstarted__step-text">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="getstarted__visual">
          
            <img
              className="featurehero__image"
              src={getstartedMockup}
              alt="getstarted"
            />
        </div>
      </div>
    </section>
  );
};

export default Getstarted;