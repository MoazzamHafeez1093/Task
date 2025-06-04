document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("eventList");
  const loading = document.querySelector(".loading");
  const searchInput = document.getElementById("searchInput");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");

  // Sample event data
  const events = [
    {
      name: "Tech Talk 2025",
      date: "June 10, 2025",
      time: "2:00 PM",
      location: "Tech Park, Islamabad",
      description: "A gathering for tech enthusiasts to discuss future trends."
    },
    {
      name: "Startup Pitch Night",
      date: "June 12, 2025",
      time: "6:00 PM",
      location: "NUST Incubator, Islamabad",
      description: "Startups pitch ideas to investors and mentors."
    },
    {
      name: "Cultural Fest",
      date: "June 20, 2025",
      time: "5:00 PM",
      location: "F-9 Park, Islamabad",
      description: "Enjoy music, dance, and food from local cultures."
    },
    {
      name: "Book Fair",
      date: "June 25, 2025",
      time: "10:00 AM",
      location: "Centaurus Mall",
      description: "Meet your favorite authors and explore thousands of books."
    }
  ];

  // Render filtered or all events
  const renderEvents = (filter = "") => {
    eventList.innerHTML = "";
    loading.style.display = "block";

    // Simulate loading delay
    setTimeout(() => {
      const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filteredEvents.length === 0) {
        eventList.innerHTML = "<p>No events found.</p>";
      } else {
        filteredEvents.forEach(event => {
          const card = document.createElement("div");
          card.className = "event-card";
          card.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button class="register-btn">Register</button>
          `;
          eventList.appendChild(card);
        });
      }

      loading.style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  // Initial render
  renderEvents();

  // Filter events on input
  searchInput.addEventListener("input", e => {
    const query = e.target.value.trim();
    renderEvents(query);
  });

  // Toggle mobile navigation
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
