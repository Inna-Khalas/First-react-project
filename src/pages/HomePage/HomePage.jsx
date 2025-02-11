import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/thumb_back/fw800/background/20231219/pngtree-technology-data-gradient-simplicity-image_15520464.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">
              ContactBook – Your Digital Contact Book
            </h1>
            <h2 className="text-2xl mb-4">
              🔹 All Your Contacts in One Place. Secure. Convenient. Efficient.
            </h2>
            <p className="mb-6">
              In today’s fast-paced world, managing your contacts is not just a
              convenience—it’s a necessity. ContactVault is designed for those
              who value organization, security, and accessibility.
            </p>
            <NavLink to={"/register"} className="btn btn-primary">
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
      <div className="features">
        <h2 className="text-2xl mb-4">✨ Why Choose ContactVault?</h2>
        <ul className="list">
          <li>
            Quick Contact Addition – Add new contacts in just a few clicks.
          </li>
          <li>Smart Search & Filters – Find any contact in seconds.</li>
          <li>
            Multi-Device Access – Sync and access your contacts from any device.
          </li>
          <li>
            Security & Privacy – Your data is protected with modern security
            standards.
          </li>
          <li>
            Easy Registration & User-Friendly Interface – Simple, intuitive
            contact management.
          </li>
        </ul>
      </div>

      <div className="callToAction">
        <h2 className="sectionTitle">🔐 Get Started Today!</h2>
        <p className="text">
          <a href="/register" className="link link-info">
            Sign up
          </a>{" "}
          now and say goodbye to contact chaos.
        </p>
        <p className="text">
          With ContactVault, your contacts are always under control!
        </p>
      </div>
    </>
  );
}

export default HomePage;
