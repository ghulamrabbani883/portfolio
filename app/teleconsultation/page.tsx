import Link from "next/link";
import EducationERPGallery from "../../components/EducationERPGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teleconsultation System – Case Study | Ghulam Rabbani",
  description:
    "A multispecialty teleconsultation system for patient registration, appointment scheduling, online doctor consultations, and prescriptions.",
};

const stack = ["React.js", "Node.js", "Express.js", "Jitsi", "Tailwind CSS"];

const roles = [
  {
    title: "Admin",
    description: "Configures the system and oversees its activity.",
    workflows: [
      "Manage departments and department heads",
      "Add doctors, set appointment availability, and send password setup emails",
      "Create room operators and allocate telemedicine rooms",
      "Maintain medicine and lab test catalogs by department",
      "Review appointment and prescription reports and export them as CSV",
    ],
  },
  {
    title: "Room Operator",
    description: "Supports patients and coordinates appointments and consultation setup.",
    workflows: [
      "Register patients, add emergency contacts, and upload patient photos and medical documents",
      "Search patient records, update details, and review vitals history",
      "Capture and update patient vitals",
      "Schedule appointments by department, doctor, date, available slot, and telemedicine room",
      "Track appointments and update their status, including rescheduled, completed, no-show, or cancelled",
    ],
  },
  {
    title: "Doctor",
    description: "Conducts online consultations and records clinical outcomes.",
    workflows: [
      "Review appointments and join scheduled consultation sessions",
      "View previous reports and prescriptions during a consultation",
      "Record clinical notes, diagnosis, and probable diagnosis",
      "Add medicines and lab tests to prescriptions and set a follow-up date when needed",
      "Search consultation, patient, and prescription records",
    ],
  },
];

const capabilities = [
  "Patient registration and profile management",
  "Vitals capture and history",
  "Department-based doctor and appointment scheduling",
  "Telemedicine room allocation",
  "Consultation and appointment status tracking",
  "Clinical notes, diagnosis, medicines, and lab tests",
  "Prescription and appointment reports with CSV export",
];

const projectGlimpses = [
  {
    title: "Admin dashboard",
    description: "An overview of consultations, doctors, rooms, and department activity.",
    images: ["/teleconsultation/admin-dashboard.jpg"],
  },
  {
    title: "Room Operator dashboard",
    description: "Quick actions for patient registration, appointments, and consultation monitoring.",
    images: ["/teleconsultation/room-operator-dashboard.jpg"],
  },
  {
    title: "Appointment scheduling",
    description: "Select a patient, department, doctor, consultation type, and available time.",
    images: ["/teleconsultation/appointment-scheduling.jpg"],
  },
  {
    title: "Doctor dashboard",
    description: "A doctor’s view of consultations, upcoming appointments, and recent activity.",
    images: ["/teleconsultation/doctor-dashboard.jpg"],
  },
  {
    title: "Video consultation",
    description: "The in-app meeting screen doctors use to join a scheduled consultation.",
    images: ["/teleconsultation/video-consultation.jpg"],
  },
  {
    title: "Prescription editor",
    description: "Record clinical notes and diagnoses as part of the consultation workflow.",
    images: ["/teleconsultation/prescription.jpg"],
  },
];

export default function TeleconsultationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-200 sm:px-6 sm:py-16 lg:px-8">
      <Link href="/#projects" className="text-sm text-sky-400 hover:underline">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
        Teleconsultation System
      </h1>
      <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
        A multispecialty teleconsulting platform that coordinates patient intake,
        appointment scheduling, online doctor consultations, and prescriptions
        through dedicated Admin, Room Operator, and Doctor workflows.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          How the system works
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          Admins configure departments, doctors, appointment availability,
          telemedicine rooms, medicines, and lab tests. Room Operators register
          patients, capture vitals, and schedule appointments into an available
          doctor slot and room. Doctors join the online session, review relevant
          patient history, and document the consultation with a prescription and
          any needed follow-up.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Role-based workflows
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-sky-300 sm:text-xl">
                {role.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {role.description}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                {role.workflows.map((workflow) => (
                  <li key={workflow}>{workflow}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Consultation and prescription
        </h2>
        <div className="mt-4 rounded-xl border border-sky-500/30 bg-sky-950/40 p-5 sm:p-6">
          <p className="leading-7 text-slate-300">
            Doctors join a scheduled online session, review previous reports and
            prescriptions, then record clinical notes and diagnoses. They can add
            medicines and lab tests to the prescription and set a follow-up date
            when appropriate.
          </p>
          <p className="mt-3 text-sm text-sky-200">
            The user manual specifies a 15-minute limit for each consultation
            session.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Platform capabilities
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
            >
              {capability}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          A few glimpses of the project
        </h2>
        <p className="mt-3 text-slate-300">
          Explore screenshots from the admin, room operator, and doctor workflows.
          Select any image to view it larger.
        </p>
        <EducationERPGallery glimpses={projectGlimpses} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Project scope
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          The documented workflows cover setup and reporting as well as the
          patient-facing care journey—from registration and vitals through
          scheduling, a video consultation, and prescription follow-up.
        </p>
      </section>
    </main>
  );
}
