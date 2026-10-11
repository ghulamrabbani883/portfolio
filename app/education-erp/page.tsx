// Drop-in case-study page for your portfolio.
// App Router path: app/education-erp/page.tsx
// (Pages Router: move to pages/projects/education-erp.tsx and remove `metadata`)
// Items marked [ADD] are things only you can fill in truthfully (numbers, counts, screenshots).

import Link from "next/link";
import EducationERPGallery from "../../components/EducationERPGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education ERP – Case Study | Ghulam Rabbani",
  description:
    "A full-stack Education ERP covering admissions, finance, a centralized payment engine and a parent-facing payment portal.",
};

const stack = [
  "React.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Razorpay",
  "Cashfree",
];

const modules = [
  {
    title: "Admissions",
    points: [
      "End-to-end admission workflow: enquiry, application, document verification, approval and enrolment",
      "Student and guardian records created once and reused across every other module",
      "Role-based access so each admin, clerk and approver sees only what they should",
      "Automatic hand-off to finance: fee structure is assigned the moment a student is admitted",
    ],
  },
  {
    title: "Finance & Fee Management",
    points: [
      "Configurable fee heads, class-wise and category-wise fee structures, concessions and late-fee rules",
      "Student ledger with dues, advances, adjustments and a full audit trail",
      "Receipts, collection reports, outstanding-dues tracking and day-end reconciliation",
      "Finance numbers tie back to admissions and hostel data, so there is one source of truth",
    ],
  },
  {
    title: "Centralized Payment Engine",
    points: [
      "A single payment service that every module (admission fee, tuition, hostel, exam fee) routes through",
      "Supports online and offline modes with one consistent transaction lifecycle: initiated, pending, success, failed, refunded",
      "Integrates with both Razorpay and Cashfree through the same centralized payment flow",
      "Gateway callbacks and webhooks handled in one place, with idempotent processing to prevent double posting",
      "Every transaction auto-posts to the student ledger and generates its receipt",
      "Adding a new payment source or gateway means plugging into the engine, not rewriting modules",
    ],
  },
  {
    title: "Payment Portal",
    points: [
      "Self-service portal where students and guardians view dues and pay online",
      "Instant confirmation and downloadable receipts, with full payment history",
      "Reduces counter queues and manual follow-ups for the accounts office",
    ],
  },
];

const alsoCovers = [
  "Students & guardians",
  "Hostel management",
  "Attendance",
  "Academics",
  "Examinations",
  "Administrative workflows",
];

const projectGlimpses: {
  title: string;
  description: string;
  images: string[];
}[] = [
  {
    title: "Admissions workflow",
    description: "Enquiry, application review and student enrolment.",
    images: ["/admission/image.png" , "/admission/image1.png", "/admission/image2.png", "/admission/image3.png", "/admission/image4.png", "/admission/image5.png", "/admission/image6.png"],
  },
  {
    title: "Fee management",
    description: "Fee structures, student ledger and dues tracking.",
    images: ["/fee/image.png" , "/fee/image1.png", "/fee/image2.png", "/fee/image3.png", "/fee/image4.png", "/fee/image5.png"],
  },
  {
    title: "Payment experience",
    description: "Online payment flow with Razorpay and Cashfree.",
    images: ["/payment/image.png" , "/payment/image1.png", "/payment/image2.png"],
  },
  {
    title: "Reports & reconciliation",
    description: "Collections, receipts and finance reporting.",
    images: ["/reports/image.png" , "/reports/image1.png", "/fee/image5.png", "/reports/image5.png"],
  },
];

export default function EducationERPPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-200 sm:px-6 sm:py-16 lg:px-8">
      <Link href="/#projects" className="text-sm text-sky-400 hover:underline">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Education ERP</h1>
      <p className="mt-4 text-base text-slate-300 sm:text-lg">
        A comprehensive ERP that runs an institution end to end, from the first admission enquiry to the last
        fee receipt, built around a centralized payment engine and a self-service payment portal.
      </p>

      <aside className="mt-6 rounded-xl border border-sky-500/30 bg-sky-950/40 p-5 text-slate-300">
        <p className="font-semibold text-sky-200">An internal workflow, not a public-facing product</p>
        <p className="mt-2 text-sm leading-6">
          This ERP supports internal institutional workflows, so I can’t show its live UI. The glimpses below are
          reserved for a few approved project images.
        </p>
      </aside>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-300">
            {t}
          </span>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">The problem</h2>
        <p className="mt-3 text-slate-300">
          Admissions, fees, hostel and exams usually live in separate registers and spreadsheets. Payments get
          recorded in different places, reconciliation is slow, and parents have to visit the office to pay or
          get a receipt. The goal was one system with one source of truth for students and money.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">What I built</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-sky-300 sm:text-xl">{m.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                {m.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">A few glimpses of the project</h2>
        <p className="mt-3 text-slate-300">
          Explore snapshots of the project workflows below. Select an image to view it larger, or swipe through
          each gallery to see more.
        </p>
        <EducationERPGallery glimpses={projectGlimpses} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Architecture highlight: why a centralized payment engine
        </h2>
        <p className="mt-3 text-slate-300">
          Instead of each module integrating with a gateway on its own, every fee type flows through one payment
          service. That gives a single transaction lifecycle, one webhook handler, idempotent ledger posting and
          one place to audit money movement. New modules and gateways plug in without touching existing logic.
        </p>
        {/* [ADD] an architecture diagram image here: modules -> payment engine -> gateway -> ledger */}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Also covers</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {alsoCovers.map((a) => (
            <span key={a} className="rounded-lg border border-slate-700 px-3 py-1 text-sm">
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Impact</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {impact.map((i) => (
            <div key={i.label} className="rounded-xl bg-slate-900/60 p-4 text-center">
              <div className="text-2xl font-bold text-sky-300">{i.value}</div>
              <div className="mt-1 text-sm text-slate-400">{i.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">My role</h2>
        <p className="mt-3 text-slate-300">
          Led development and architecture for the project, including PostgreSQL database design, REST APIs in
          Node/Express, the React front end, payment gateway integration, and mentoring teammates on clean,
          maintainable code.
        </p>
      </section>

    </main>
  );
}

/* In your Featured Projects data, change the Education ERP card to:
   { title: "Education ERP", link: "/education-erp", ... }
   and render it with <Link href={project.link}> instead of the "#" placeholder. */
