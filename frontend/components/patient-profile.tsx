import Image from "next/image";
import {
  CalendarDays,
  Droplets,
  Edit3,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

export default function PatientProfile() {
  return (
    <div className="space-y-5">
      {/* Profile Header */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-slate-900">
              My Profile
            </h1>

            <p className="mt-1 text-[12px] text-slate-500">
              Manage your personal and health information.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-[11px] font-medium text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
          >
            <Edit3 size={14} />
            Edit Profile
          </button>
        </div>

        {/* Main Profile */}
        <div className="mt-7 flex items-center gap-6 rounded-xl bg-slate-50 p-5">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm">
            <Image
              src="/ptdummy.jpg"
              alt="Anurag Hom Roy"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-[21px] font-semibold text-slate-900">
              Dhrubojyoti Roy
            </h2>

            <p className="mt-1 text-[11px] text-slate-500">
              Patient ID: HAI-2025-001
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-medium text-teal-700">
                Active Patient
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-700">
                Blood Group: B+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <User size={15} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-slate-900">
              Personal Information
            </h2>

            <p className="text-[10px] text-slate-500">
              Basic information about the patient.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-5">
          <ProfileField
            label="Full Name"
            value="Anurag Hom Roy"
            icon={<User size={15} />}
          />

          <ProfileField
            label="Date of Birth"
            value="23 June 2007"
            icon={<CalendarDays size={15} />}
          />

          <ProfileField
            label="Age"
            value="19 Years"
            icon={<CalendarDays size={15} />}
          />

          <ProfileField
            label="Gender"
            value="Male"
            icon={<User size={15} />}
          />

          <ProfileField
            label="Email Address"
            value="anurag.roy@email.com"
            icon={<Mail size={15} />}
          />

          <ProfileField
            label="Phone Number"
            value="+91 xxxxx xxxxx"
            icon={<Phone size={15} />}
          />

          <ProfileField
            label="Location"
            value="Delhi, India"
            icon={<MapPin size={15} />}
          />

          <ProfileField
            label="Blood Group"
            value="B Positive (B+)"
            icon={<Droplets size={15} />}
          />

          <ProfileField
            label="Patient Status"
            value="Active"
            icon={<ShieldCheck size={15} />}
          />
        </div>
      </section>

      {/* Health Information */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <HeartPulse size={15} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-slate-900">
              Health Information
            </h2>

            <p className="text-[10px] text-slate-500">
              Important health details for better care.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-5">
          <HealthField label="Height" value="165 cm" />
          <HealthField label="Weight" value="52 kg" />
          <HealthField label="BMI" value="21" />
          <HealthField label="Blood Group" value="B+" />
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
        <h2 className="text-[14px] font-semibold text-slate-900">
          Emergency Contact
        </h2>

        <p className="mt-1 text-[10px] text-slate-500">
          Contact information to use during an emergency.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-5">
          <ProfileField
            label="Contact Name"
            value="Abhranil Roy"
            icon={<User size={15} />}
          />

          <ProfileField
            label="Relationship"
            value="Bhaijan"
            icon={<HeartPulse size={15} />}
          />

          <ProfileField
            label="Contact Number"
            value="+91 8637564734"
            icon={<Phone size={15} />}
          />
        </div>
      </section>
    </div>
  );
}

function ProfileField({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-100 p-4">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}

        <span className="text-[10px] font-medium text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-[12px] font-medium text-slate-900">
        {value}
      </p>
    </div>
  );
}

function HealthField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-[10px] font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-[18px] font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}