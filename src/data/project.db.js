import AGECALCULATOR from "../assets/projectImage/ageCalculator.png";
import CHATAPP from "../assets/projectImage/chatApp.png";
import FORMVALIDATION from "../assets/projectImage/formValidation.png";
import HOTELBOOKING from "../assets/projectImage/hotelBooking.png";
import QUIZE from "../assets/projectImage/quize.png";
import RANPASSWORD from "../assets/projectImage/ranPassword.png";
import TODO from "../assets/projectImage/todo.png";
import WEATHER from "../assets/projectImage/weather.png";



export const PROJECTS = [
  {
    image: AGECALCULATOR,
    title: "Age Calculator",
    description:
      "Calculates user's exact age based on date of birth with accurate year, month, and day breakdown.",
    color: "bg-yellow-500",
    textColor: "text-yellow-300",
    uses: ["HTML", "CSS", "JS"],
    links: {
      view: "https://dheetchithselvan12.github.io/mini-age-calculator-app/",

      source:
        "https://github.com/dheetchithselvan12/mini-age-calculator-app.git",
    },
  },
  {
    image: CHATAPP,
    title: "Chatting App",
    description:
      "Real-time chat app using WebSocket logic with instant message updates and responsive design.",
    color: "bg-gray-600",
    textColor: "text-gray-400",
    uses: ["ReacJS", "NodeJs", "Socket.io", "MongoDB"],
    links: {
      view: "https://dheetchithselvan12.github.io/full-Stack-chat-app/",

      source: "https://github.com/dheetchithselvan12/full-Stack-chat-app.git",
    },
  },
  {
    image: FORMVALIDATION,
    title: "Form Validation",
    description:
      "Validates user input fields like email, password, and required fields using custom JavaScript logic.",
    color: "bg-green-600",
    textColor: "text-green-400",
    uses: ["HTML", "CSS", "ReactJS"],
    links: {
      view: "https://dheetchithselvan12.github.io/React-Form-Validation/",

      source: "https://github.com/dheetchithselvan12/React-Form-Validation.git",
    },
  },
  {
    image: HOTELBOOKING,
    title: "Hotel Booking",
    description:
      "Hotel booking interface where users can select rooms, check availability, and simulate reservation process.",
    color: "bg-orange-500",
    textColor: "text-orange-300",
    uses: ["HTML", "CSS", "ReactJS"],
    links: {
      view: "https://dheetchithselvan12.github.io/Hotel-Booking/",
      source: "https://github.com/dheetchithselvan12/Hotel-Booking.git",
    },
  },
  {
    image: QUIZE,
    title: "Quize App",
    description:
      "Interactive quiz application with multiple questions, score tracking, and instant result display.",
    color: "bg-sky-800",
    textColor: "text-sky-600",
    uses: ["HTML", "CSS", "JS"],
    links: {
      view: "https://dheetchithselvan12.github.io/mini-quiz-app-ex/",
      source: "https://github.com/dheetchithselvan12/mini-quiz-app-ex.git",
    },
  },
  {
    image: RANPASSWORD,
    title: "Random Password generator",
    description:
      "Generates strong and secure random passwords with customizable length and character options.",
    color: "bg-green-600",
    textColor: "text-green-400",
    uses: ["HTML", "CSS", "JS"],
    links: {
      view: "https://dheetchithselvan12.github.io/mini-random-password-ex/",

      source:
        "https://github.com/dheetchithselvan12/mini-random-password-ex.git",
    },
  },
  {
    image: TODO,
    title: "To-Do App",
    description:
      "Task management app to add, update, delete, and track daily tasks with persistent storage.",
    color: "bg-blue-500",
    textColor: "text-blue-300",
    uses: ["HTML", "CSS", "JS"],
    links: {
      view: "https://dheetchithselvan12.github.io/myFirstTodo/",
      source: "https://github.com/dheetchithselvan12/myFirstTodo.git",
    },
  },
  {
    image: WEATHER,
    title: "Weather Finding",
    description:
      "Fetches real-time weather data based on user location or city input using API integration.",
    color: "bg-pink-400",
    textColor: "text-pink-200",
    uses: ["HTML", "CSS", "JS"],
    links: {
      view: "https://dheetchithselvan12.github.io/mini-weather-app-ex/",

      source: "https://github.com/dheetchithselvan12/mini-weather-app-ex.git",
    },
  },
];