import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Cloud, S as Sun, M as Moon, X, a as Menu, D as Download, b as Mail, G as Github, L as Linkedin, c as ChevronDown, T as Target, d as TrendingUp, A as Award, e as Smartphone, f as ShieldCheck, g as Database, h as ChartColumn, U as Users, i as CircleCheckBig, N as Network, j as ArrowRight, k as Calendar, l as MapPin, m as Star, Q as Quote, P as Phone, n as CircleAlert, o as Send, p as ArrowUp } from "../_libs/lucide-react.mjs";
function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks2 = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certs", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#hero",
              className: "flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 24 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "DS",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 dark:text-white", children: "." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
            navLinks2.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                className: "text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                children: link.label
              },
              link.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleDarkMode,
                className: "p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                "aria-label": "Toggle dark mode",
                children: darkMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors",
                children: "Hire Me"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleDarkMode,
                className: "p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                "aria-label": "Toggle dark mode",
                children: darkMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsOpen(!isOpen),
                className: "p-2 text-gray-700 dark:text-gray-300",
                "aria-label": "Toggle menu",
                children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
              }
            )
          ] })
        ] }) }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-3", children: [
          navLinks2.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              onClick: () => setIsOpen(false),
              className: "block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-1",
              children: link.label
            },
            link.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setIsOpen(false),
              className: "block px-4 py-2 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700",
              children: "Hire Me"
            }
          )
        ] })
      ]
    }
  );
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      style: { background: "linear-gradient(135deg, #032D60 0%, #0176D3 50%, #1B96FF 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-float",
              style: {
                background: "radial-gradient(circle, #1B96FF, transparent)",
                animationDelay: "0s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-32 right-16 w-96 h-96 rounded-full opacity-10 animate-float",
              style: {
                background: "radial-gradient(circle, #00A1E0, transparent)",
                animationDelay: "2s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 animate-float",
              style: {
                background: "radial-gradient(circle, white, transparent)",
                animationDelay: "4s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-24 right-16 opacity-15 animate-float",
              style: { animationDelay: "1s" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "80", height: "60", viewBox: "0 0 100 75", fill: "white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "55", rx: "45", ry: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "45", r: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "55", cy: "38", r: "26" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "75", cy: "45", r: "18" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-40 left-20 opacity-10 animate-float",
              style: { animationDelay: "3s" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "60", height: "45", viewBox: "0 0 100 75", fill: "white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "55", rx: "45", ry: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "45", r: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "55", cy: "38", r: "26" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "75", cy: "45", r: "18" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-24 text-center text-white flex flex-col items-center justify-center min-h-screen", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs md:text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
            "Sales Automation and Distribution Management System"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-black mb-3 leading-tight tracking-tight", children: [
            "Dipta",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  background: "linear-gradient(135deg, #a8d4ff, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                },
                children: "Saha"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl lg:text-3xl font-semibold mb-5 text-blue-100 tracking-wide", children: "Digital Transformation Professional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-blue-100/90 mb-8 leading-relaxed px-2 md:px-6", children: [
            "Digital Transformation leader specializing in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "Sales Automation" }),
            " and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "Distribution Management Systems (DMS)" }),
            ". I bridge the gap between field sales",
            " ",
            "operations and technical development to replace legacy workflows with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "agile, data-driven solutions" }),
            " ",
            "that ensure enterprise-level adoption and measurable business growth."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-center gap-4 mb-8 w-full max-w-md md:max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/resume.pdf",
                className: "flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-blue-700 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 white-space-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 20 }),
                  "Download Resume"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 white-space-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20 }),
                  "Contact Me"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/Infodiptasaha",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1",
                "aria-label": "GitHub",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://linkedin.com/in/Infodiptasaha",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1",
                "aria-label": "LinkedIn",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#about",
              className: "inline-flex flex-col items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors animate-bounce mt-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest", children: "Scroll Down" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18 })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const stats = [
  { value: 50, label: "Projects Completed", suffix: "+", icon: "🚀" },
  { value: 200, label: "Automations Built", suffix: "+", icon: "⚡" },
  { value: 8, label: "Certifications Earned", suffix: "", icon: "🏆" },
  { value: 6, label: "Years of Experience", suffix: "+", icon: "📅" }
];
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const duration = 2e3;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    count,
    suffix
  ] });
}
function StatsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-16 px-4",
      style: { background: "linear-gradient(135deg, #032D60, #0176D3)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: stat.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-black mb-2 tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: stat.value, suffix: stat.suffix }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-200 text-sm font-medium uppercase tracking-wider", children: stat.label })
      ] }, stat.label)) }) })
    }
  );
}
const corePillars = [
  {
    title: "DMS Product Evolution",
    desc: "Partnering with developers to design, test, and deploy modules within the Remark Sales Automation ecosystem.",
    icon: Smartphone
  },
  {
    title: "Process Digitization & Controls",
    desc: "Automating Credit Management, Claim Processing, and Reverse Logistics to remove manual risks.",
    icon: ShieldCheck
  },
  {
    title: "Data Infrastructure",
    desc: "Structuring database frameworks, automated routing, and warehouse tracking for structural inventory sync.",
    icon: Database
  },
  {
    title: "Data-Driven Insights",
    desc: "Converting raw field automation data into crystal clear performance reports for corporate decision-makers.",
    icon: ChartColumn
  },
  {
    title: "Digital Enablement & Change Management",
    desc: "Driving ecosystem adoption across the entire sales hierarchy (RSD/ASD/TM/SO/Distributors).",
    icon: Users
  }
];
const recentMilestones = [
  "Leading operational deployment and feature evolution of the Remark DMS Secondary Application",
  "Successfully replacing legacy, manual workflows with agile, data-driven digital architecture",
  "Bridging the gap between field sales operations and engineering development teams",
  "Eliminating operational bottlenecks to optimize field-force performance metrics"
];
function AboutSection() {
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1951f0TDk9QzxVeQlD74V03TtrTG5s6Z3";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Who I Am" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "About ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "Me" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center lg:sticky lg:top-24 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[360px] h-[390px] md:h-[410px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full rounded-3xl bg-gradient-to-br from-[#032d60] via-[#1a56db] to-[#1b96ff] flex flex-col items-center justify-start text-center p-6 pt-10 md:pt-12 shadow-[0_20px_50px_-12px_rgba(3,45,96,0.35)] relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 md:w-32 md:h-32 mb-4 rounded-full border-4 border-white/20 overflow-hidden shadow-xl bg-blue-950/40 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profileImageUrl,
              alt: "Dipta Saha",
              className: "w-full h-full object-cover object-top",
              loading: "lazy",
              onError: (e) => {
                e.currentTarget.style.display = "none";
                if (e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = "👨‍💻";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm", children: "Dipta Saha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base font-medium text-blue-100/90 tracking-wide", children: "Digital Transformation Leader" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 top-8 sm:-right-8 bg-white dark:bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl border border-gray-100 dark:border-gray-700 max-w-[150px] md:max-w-[160px] z-20 animate-bounce [animation-duration:3s] transition-all hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "text-blue-600 dark:text-blue-400", size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white text-xs leading-tight", children: "Sales Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400 text-[10px] block mt-0.5", children: "Specialist" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 bottom-3 sm:-left-8 bg-white dark:bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl border border-gray-100 dark:border-gray-700 max-w-[150px] md:max-w-[160px] z-20 animate-bounce [animation-duration:3.5s] transition-all hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "text-green-600 dark:text-green-400", size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white text-xs leading-tight", children: "DMS Ecosystem" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400 text-[10px] block mt-0.5", children: "Optimization" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-opacity duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Bridging Field Sales Operations & Technical Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4 leading-relaxed", children: "I am a Digital Transformation Professional specializing in Sales Automation and Distribution Management Systems (DMS). I focus on replacing legacy, manual workflows with agile, data-driven digital solutions. By managing the vital link between operational ground execution and complex tech infrastructure, I ensure system adoption and cross-functional continuous optimization." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400 mb-8 leading-relaxed", children: [
          "Currently, I lead the operational deployment and feature evolution of the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-white font-semibold", children: "Remark DMS Secondary Application" }),
          ", turning complex commercial business processes into scalable, functional digital corporate assets."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 20, className: "text-blue-600 dark:text-blue-500" }),
            "Digital Transformation Pillars"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: corePillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-50 dark:bg-blue-950/50 rounded-lg text-blue-600 dark:text-blue-400 h-9 w-9 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-sm text-gray-900 dark:text-white", children: pillar.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed", children: pillar.desc })
              ] })
            ] }, pillar.title);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 20, className: "text-blue-600 dark:text-blue-500" }),
            "Strategic Objectives"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-2.5", children: recentMilestones.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-500 font-bold mt-0.5 flex-shrink-0", children: "→" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
              ]
            },
            idx
          )) })
        ] })
      ] })
    ] })
  ] }) });
}
const skills = [
  { name: "DMS Secondary App Development", level: 95, category: "Core Ecosystem", icon: Smartphone },
  { name: "Sales Automation (SFA)", level: 96, category: "Automation", icon: "⚡" },
  { name: "Process Digitization & Module Design", level: 92, category: "Core Ecosystem", icon: "🔄" },
  { name: "Credit Management & Financial Controls", level: 88, category: "Controls", icon: ShieldCheck },
  { name: "Master Data & Infrastructure Management", level: 90, category: "Data & Analytics", icon: Database },
  { name: "Market Return & Reverse Logistics", level: 85, category: "Controls", icon: "📦" },
  { name: "Data Analytics & Report Generation", level: 88, category: "Data & Analytics", icon: ChartColumn },
  { name: "User Access & Hierarchy Management", level: 84, category: "Controls", icon: "🔒" },
  { name: "Change Management & Field Onboarding", level: 92, category: "Strategy & Enablement", icon: Users },
  { name: "Cross-Functional Team Collaboration", level: 90, category: "Strategy & Enablement", icon: Network }
];
const categoryColors = {
  "Core Ecosystem": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Automation": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Controls": "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  "Data & Analytics": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  "Strategy & Enablement": "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
};
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Technical & Functional Expertise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "My ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "Skills" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base", children: "A specialized core toolkit built over years of transforming field operations, leading continuous DMS deployments, and architecting data-driven sales workflows." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: skills.map((skill) => {
      const IconComponent = skill.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-[#032d60] to-[#1b96ff] flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md group-hover:scale-105 transition-transform", children: typeof IconComponent === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: IconComponent }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 18 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: skill.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mt-1 tracking-wide uppercase ${categoryColors[skill.category] || ""}`,
                      children: skill.category
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black text-blue-600 dark:text-blue-400 flex-shrink-0 tracking-tight", children: [
                skill.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2 rounded-full transition-all duration-500 ease-out",
                style: {
                  width: `${skill.level}%`,
                  background: "linear-gradient(90deg, #032d60, #1b96ff)"
                }
              }
            ) })
          ]
        },
        skill.name
      );
    }) })
  ] }) });
}
const certifications = [
  {
    name: "Foundations of Business Analysis",
    issuer: "SAP",
    year: "2026",
    credential: "UR2XWM4E1W7L",
    badge: "📊",
    level: "Business Analysis"
  },
  {
    name: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    year: "2026",
    credential: "OMFLX739V3W8",
    badge: "📈",
    level: "Data Analysis"
  }
];
const levelColors = {
  "Business Analysis": "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20",
  "Data Analysis": "border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-950/20"
};
const levelBadgeColors = {
  "Business Analysis": "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  "Data Analysis": "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
};
function CertificationsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "certifications", className: "section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Verified Excellence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "My ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "Certifications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base", children: "Professional credentials validating core expertise in data intelligence, systems analysis, and business process automation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6 max-w-4xl mx-auto", children: certifications.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `relative rounded-2xl p-6 border-2 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] flex flex-col justify-between ${levelColors[cert.level] || ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4 text-center select-none", children: cert.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600", children: cert.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400 mb-1", children: [
                cert.issuer,
                " · ",
                cert.year
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-4", children: [
                "ID: ",
                cert.credential
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${levelBadgeColors[cert.level] || ""}`,
              children: cert.level
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", title: "Verified Credential", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18, className: "text-green-500 drop-shadow-sm" }) })
        ]
      },
      cert.credential
    )) })
  ] }) });
}
const projects = [
  {
    title: "Remark DMS Secondary Application",
    description: "End-to-end management of operational deployment and continuous module development to transition complex commercial sales workflows into agile field actions.",
    technologies: ["DMS Ecosystem", "SFA Tooling", "Mobile Apps", "Field Testing"],
    results: ["Eliminated ground bottlenecks", "100% cloud distribution sync", "Real-time field transparency"],
    gradient: "from-[#032d60] to-[#1a56db]",
    icon: "📱"
  },
  {
    title: "Claim Management Module Digitization",
    description: "Digitized and optimized the core claim processing cycles, removing slow manual reconciliation risks to streamline corporate financial settlements.",
    technologies: ["Process Automation", "Financial Auditing", "Module Design"],
    results: ["Manual errors removed", "Faster distributor settlement", "Full financial accountability"],
    gradient: "from-purple-600 to-purple-800",
    icon: "🔄"
  },
  {
    title: "Credit Management & Approval Workflow",
    description: "Engineered an automated credit monitoring and verification system to evaluate outstanding balances and dynamically manage risk limits across the distribution channels.",
    technologies: ["Risk Controls", "Approval Routing", "Data Structuring"],
    results: ["Minimized bad debt risks", "Automated limit updates", "Optimized approval time"],
    gradient: "from-emerald-600 to-emerald-800",
    icon: "🛡️"
  },
  {
    title: "Infrastructure & Database Route Mapping",
    description: "Spearheaded the redesign and dynamic routing of master data setups, mapping territory configurations and outlets for maximized market coverage.",
    technologies: ["Master Data Management", "Route Mapping", "Inventory Sync"],
    results: ["Seamless sales coverage", "100% outlet trace accuracy", "Structured warehouse matching"],
    gradient: "from-orange-600 to-orange-800",
    icon: "🌐"
  },
  {
    title: "Ecosystem Change Management & Training",
    description: "Led massive onboarding initiatives across multiple corporate hierarchies (RSD, ASD, TM, SO, and Distributors) ensuring 100% alignment and application compliance.",
    technologies: ["Change Management", "User Adoption", "Field Quality Assurance"],
    results: ["98%+ user system adoption", "High platform compliance", "Frictionless tech onboarding"],
    gradient: "from-teal-600 to-teal-800",
    icon: "👥"
  }
];
function ProjectsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "Featured ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "Projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base", children: "Real-world enterprise solutions delivering measurable impact across the Remark Sales Automation infrastructure." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-10",
                    style: {
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                      backgroundSize: "24px 24px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300 select-none", children: project.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 text-white/40 text-xs font-mono", children: [
                  "#",
                  String(idx + 1).padStart(2, "0")
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-grow justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: project.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4", children: project.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: project.technologies.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-[11px] font-medium border border-blue-100/60 dark:border-blue-800/40",
                  children: tech
                },
                tech
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-6", children: project.results.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: result })
                  ]
                },
                result
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold hover:gap-2.5 transition-all w-fit mt-auto group-hover:underline", children: [
              "View Case Study ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ]
      },
      project.title
    )) })
  ] }) });
}
const jobs = [
  {
    company: "Remark HB Limited",
    role: "Senior Executive – Remark Sales Automation",
    duration: "Apr 2026 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    achievements: [
      "Leading the operational deployment, scaling, and feature evolution of the Remark DMS Secondary Application.",
      "Bridging the gap between software engineering development teams and field operations to build a fully connected sales ecosystem.",
      "Driving strategic commercial growth by engineering modern, data-driven sales solutions that eliminate manual operational bottlenecks.",
      "Spearheading core operational metrics across the country focused heavily on Process Digitization, Data Visibility, and Change Management."
    ],
    color: "#032d60"
    // Royal deep blue matching your profile card
  },
  {
    company: "Remark HB Limited",
    role: "Executive – Remark Sales Automation",
    duration: "Feb 2025 – Mar 2026",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    achievements: [
      "Drove the product development and modular optimization of the Claim Management system to streamline distributor financial settlements.",
      "Supervised credit limits, monitored outstanding channel balances, and structured approval workflows to minimize financial risks.",
      "Managed system verification and logistics tracking for distributor market returns, ensuring exact inventory accuracy across central warehouses.",
      "Designed and distributed daily, weekly, and monthly performance dashboards providing top-tier management with actionable analytics."
    ],
    color: "#1a56db"
    // Dynamic corporate blue
  },
  {
    company: "Remark HB Limited",
    role: "Officer – Remark Sales Automation",
    duration: "Apr 2024 – Jan 2025",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    achievements: [
      "Spearheaded master data configurations, core database (DB) structure updates, territory routing, and outlet mapping.",
      "Controlled distributor stock levels and warehouse alignment within the secondary automation systems to perfect supply chain visibility.",
      "Administered secure, role-based user management and access control hierarchies across all sales tiers (RSD, ASD, TM, SO, Distributors).",
      "Conducted extensive onboarding programs and market field-visits to monitor application health and train system end-users."
    ],
    color: "#1b96ff"
    // Bright accent blue
  },
  {
    company: "ACI Limited",
    role: "Automation Support Officer",
    duration: "Jul 2018 – Apr 2024",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    achievements: [
      "Provided end-to-end operational support for field force sales automation tools and commercial application ecosystems.",
      "Collaborated closely with cross-functional sales and business development units to capture user requirements and diagnose application errors.",
      "Tracked system metrics and compliance protocols on-site to drive operational efficiency throughout regional market segments."
    ],
    color: "#475569"
    // Slate gray for historical foundation role
  }
];
function ExperienceSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Career Journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "Work ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "Experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#032d60] via-[#1b96ff] to-gray-300 dark:to-gray-700 md:-translate-x-px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: jobs.map((job, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative flex flex-col md:flex-row gap-0 md:gap-8 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 z-10 top-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 shadow-md",
                style: { backgroundColor: job.color }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: job.role }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-blue-600 dark:text-blue-400 text-sm", children: job.company })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 w-fit bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-[11px] font-semibold tracking-wide uppercase flex-shrink-0", children: job.type })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-4 text-xs font-medium text-gray-500 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 13, className: "text-gray-400" }),
                      job.duration
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13, className: "text-gray-400" }),
                      job.location
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: job.achievements.map((ach, aIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-500 font-bold mt-0.5 flex-shrink-0", children: "▸" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ach })
                      ]
                    },
                    aIdx
                  )) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `hidden md:flex items-center md:w-1/2 ${idx % 2 === 0 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/40 px-3 py-1 rounded-lg", children: job.duration })
              }
            )
          ]
        },
        `${job.role}-${idx}`
      )) })
    ] })
  ] }) });
}
const services = [
  {
    title: "Salesforce Automation",
    description: "Build intelligent, scalable automation using Flow Builder, Process Builder, and Apex triggers that eliminate manual work and drive efficiency.",
    features: ["Flow Builder", "Approval Processes", "Scheduled Jobs", "Trigger Automation"],
    icon: "⚡",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    title: "CRM Implementation",
    description: "End-to-end Salesforce org setup and configuration tailored to your business model, from data modeling to user adoption strategies.",
    features: ["Org Setup", "Data Migration", "User Training", "Change Management"],
    icon: "☁️",
    gradient: "from-indigo-500 to-indigo-700"
  },
  {
    title: "Workflow Optimization",
    description: "Analyze and redesign existing business processes to maximize Salesforce ROI through streamlined workflows and best practices.",
    features: ["Process Analysis", "SLA Automation", "Escalation Rules", "Performance Tuning"],
    icon: "🔄",
    gradient: "from-purple-500 to-purple-700"
  },
  {
    title: "Salesforce Integrations",
    description: "Seamlessly connect Salesforce with ERP systems, marketing platforms, and third-party APIs using REST/SOAP, MuleSoft, and platform events.",
    features: ["REST/SOAP APIs", "MuleSoft", "Platform Events", "Webhooks"],
    icon: "🔗",
    gradient: "from-teal-500 to-teal-700"
  },
  {
    title: "Custom Apex Development",
    description: "Develop robust, test-driven Apex code to implement complex business logic, batch processing, and custom functionality beyond standard config.",
    features: ["Apex Classes", "Triggers", "Batch Jobs", "Unit Testing"],
    icon: "{ }",
    gradient: "from-green-500 to-green-700"
  },
  {
    title: "LWC Development",
    description: "Create modern, responsive Lightning Web Components that deliver rich user experiences and extend Salesforce UI capabilities.",
    features: ["Custom Components", "UI Design", "Community Pages", "Mobile-First"],
    icon: "🌩️",
    gradient: "from-orange-500 to-orange-700"
  }
];
function ServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "section-padding bg-white dark:bg-gray-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "What I Offer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "My ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4", children: "Comprehensive Salesforce services designed to transform your CRM into a competitive advantage." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity -translate-y-1/2 translate-x-1/2`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-6 shadow-lg`,
              children: service.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-gray-900 dark:text-white mb-3", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5", children: service.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: service.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium",
              children: f
            },
            f
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#contact",
              className: "flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all",
              children: [
                "Get Started ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
              ]
            }
          )
        ]
      },
      service.title
    )) })
  ] }) });
}
const testimonials = [
  {
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "TechCorp Enterprises",
    avatar: "SC",
    rating: 5,
    text: "Alex completely transformed our sales process. The lead automation system he built reduced our response time by 75% and directly contributed to a 40% jump in conversions. He doesn't just write code — he understands business outcomes."
  },
  {
    name: "Marcus Johnson",
    title: "CTO",
    company: "CloudSolutions Inc.",
    avatar: "MJ",
    rating: 5,
    text: "Our Salesforce-SAP integration was a massive undertaking that multiple vendors said wasn't feasible. Alex designed and delivered it in 3 months with 100% data accuracy. His Apex skills and integration expertise are exceptional."
  },
  {
    name: "Emily Rodriguez",
    title: "Director of Operations",
    company: "Digital CRM Agency",
    avatar: "ER",
    rating: 5,
    text: "What sets Alex apart is his ability to translate complex business requirements into elegant Salesforce solutions. Our onboarding automation went from 40 manual steps to just 3. He's our go-to Salesforce expert for every major project."
  },
  {
    name: "David Kim",
    title: "Head of Customer Success",
    company: "GrowthCo",
    avatar: "DK",
    rating: 5,
    text: "Alex built our entire Service Cloud setup from scratch. Case resolution time dropped by 60% and our CSAT score is now 4.8/5. He's incredibly responsive, proactive about edge cases, and delivers quality work every single time."
  },
  {
    name: "Jennifer Walsh",
    title: "Salesforce Admin Lead",
    company: "EnterpriseFlow",
    avatar: "JW",
    rating: 5,
    text: "Working with Alex on our CPQ implementation was a game-changer. He mentored our team while delivering the project, and we walked away with both a great system and significantly improved internal capabilities."
  },
  {
    name: "Robert Thompson",
    title: "CEO",
    company: "StartupScale",
    avatar: "RT",
    rating: 5,
    text: "Alex migrated our entire CRM to Salesforce with zero data loss and zero downtime. His attention to detail, clear communication, and deep technical knowledge made what seemed like a daunting project surprisingly smooth."
  }
];
function TestimonialsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "section-padding bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Client Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "What Clients ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Say" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4", children: "Trusted by enterprise leaders across industries to deliver Salesforce solutions that move the needle." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 mb-4", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 15, className: "text-yellow-400 fill-yellow-400" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 22, className: "text-blue-200 dark:text-blue-900 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0",
                style: { background: "linear-gradient(135deg, #0176D3, #032D60)" },
                children: t.avatar
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 dark:text-white text-sm", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                t.title,
                " · ",
                t.company
              ] })
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
function ContactSection() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = reactExports.useState("idle");
  const [statusMessage, setStatusMessage] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });
      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent! I'll respond within 24 hours.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send. Please try again or reach out via LinkedIn.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const fieldBase = "w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all text-sm";
  const fieldOk = "border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500";
  const fieldErr = "border-red-400 dark:border-red-600 focus:ring-red-400";
  const fc = (f) => `${fieldBase} ${errors[f] ? fieldErr : fieldOk}`;
  const contactInfo = [
    { icon: Mail, label: "Email", value: "infodiptasaha@gmail.com", href: "mailto:infodiptasaha@gmail.com" },
    { icon: Phone, label: "Phone", value: "Available on Request", href: "#" },
    { icon: MapPin, label: "Location", value: "Kuril Bishawa Road - Dhaka", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/Infodiptasaha", href: "https://linkedin.com/in/Infodiptasaha" },
    { icon: Github, label: "GitHub", value: "github.com/Infodiptasaha", href: "https://github.com/Infodiptasaha" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "section-padding bg-white dark:bg-gray-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2", children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Work Together" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4", children: "Have a Salesforce challenge? Let's talk about how automation can transform your business." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-8 leading-relaxed", children: "Available for freelance projects, consulting engagements, and full-time opportunities. Typical response time is within 24 hours on business days." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: contactInfo.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href,
            target: href.startsWith("http") ? "_blank" : void 0,
            rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
            className: "flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: value })
              ] })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden h-48 sf-gradient flex items-center justify-center border border-blue-100 dark:border-blue-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 32, className: "mx-auto mb-2 opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Kuril Bishawa Road - Dhaka" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-200 text-sm", children: "Available for remote work worldwide" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "name", className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5", children: [
              "Full Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "name",
                name: "name",
                type: "text",
                placeholder: "John Smith",
                value: form.name,
                onChange: handleChange,
                className: fc("name")
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "email", className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5", children: [
              "Email ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                placeholder: "john@company.com",
                value: form.email,
                onChange: handleChange,
                className: fc("email")
              }
            ),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "subject", className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5", children: [
            "Subject ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "subject",
              name: "subject",
              value: form.subject,
              onChange: handleChange,
              className: fc("subject"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a topic..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Salesforce Automation Project" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "CRM Implementation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Apex Development" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LWC Development" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Integration Project" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Consultation / Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
              ]
            }
          ),
          errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.subject })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "message", className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5", children: [
            "Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              rows: 5,
              placeholder: "Tell me about your project, timeline, and what you're looking to achieve...",
              value: form.message,
              onChange: handleChange,
              className: fc("message")
            }
          ),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.message })
        ] }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18, className: "text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700 dark:text-green-400 text-sm", children: statusMessage })
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 18, className: "text-red-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700 dark:text-red-400 text-sm", children: statusMessage })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: status === "loading",
            className: "w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed",
            children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }),
              "Sending..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }),
              "Send Message"
            ] })
          }
        )
      ] }) })
    ] })
  ] }) });
}
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];
const socialLinks = [
  { icon: Github, href: "https://github.com/Infodiptasaha", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/Infodiptasaha", label: "LinkedIn" },
  { icon: Mail, href: "mailto:infodiptasaha@gmail.com", label: "Email" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-950 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#hero", className: "flex items-center gap-2 font-bold text-xl text-white mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 24, className: "text-blue-400" }),
          "Dipta Saha"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed mb-4", children: "Digital Transformation Professional specializing in Sales Automation and Distribution Management Systems (DMS)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({ icon: Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: href.startsWith("http") ? "_blank" : void 0,
            rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
            "aria-label": label,
            className: "p-2 rounded-xl bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white mb-4 uppercase tracking-wider text-sm", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            className: "text-gray-400 hover:text-blue-400 text-sm transition-colors py-0.5",
            children: link.label
          },
          link.href
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white mb-4 uppercase tracking-wider text-sm", children: "Ready to Start?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-4", children: "Have a Salesforce project in mind? Let's connect and discuss how we can work together." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
              "Get In Touch"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "© 2026 Dipta Saha. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm transition-colors",
          "aria-label": "Back to top",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 16 }),
            "Back to Top"
          ]
        }
      )
    ] })
  ] }) });
}
function PortfolioPage() {
  const [darkMode, setDarkMode] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("sfPortfolioDarkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("sfPortfolioDarkMode", JSON.stringify(next));
      return next;
    });
  };
  reactExports.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: darkMode ? "dark" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { darkMode, toggleDarkMode }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CertificationsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PortfolioPage as component
};
