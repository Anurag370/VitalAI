"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  CalendarDays,
  ClipboardList,
  FileText,
  HeartPulse,
  Home,
  LogOut,
  MapPin,
  Menu,
  Phone,
  Plus,
  Search,
  Settings,
  Stethoscope,
  User,
  Users,
  X,
  Droplets,
  Mail,
  ChevronRight,
} from "lucide-react";

type Patient = {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  location: string;
  village: string;
  bloodGroup: string;
  condition: "High Risk" | "Follow Up" | "General";
  primaryIssue: string;
  allergies: string;
  chronicConditions: string;
};

const initialPatients: Patient[] = [
  {
    id: 1,
    name: "Raju Mondal",
    age: 45,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "raju.mondal@gmail.com",
    location: "Sodepur, Kolkata, WB",
    village: "Sodepur",
    bloodGroup: "B+",
    condition: "High Risk",
    primaryIssue: "Hypertension",
    allergies: "None",
    chronicConditions: "Hypertension",
  },
  {
    id: 2,
    name: "Pooja Das",
    age: 28,
    gender: "Female",
    phone: "+91 98765 12345",
    email: "pooja.das@gmail.com",
    location: "Falakata, Alipurduar, WB",
    village: "Falakata",
    bloodGroup: "O+",
    condition: "Follow Up",
    primaryIssue: "Pregnancy Care",
    allergies: "None",
    chronicConditions: "None",
  },
  {
    id: 3,
    name: "Sabita Dey",
    age: 60,
    gender: "Female",
    phone: "+91 91234 56789",
    email: "sabita.dey@gmail.com",
    location: "Dhupguri, Jalpaiguri, WB",
    village: "Dhupguri",
    bloodGroup: "A+",
    condition: "Follow Up",
    primaryIssue: "Diabetes",
    allergies: "Penicillin",
    chronicConditions: "Diabetes",
  },
  {
    id: 4,
    name: "Ajit Roy",
    age: 24,
    gender: "Male",
    phone: "+91 99887 66554",
    email: "ajit.roy@gmail.com",
    location: "Falakata, Alipurduar, WB",
    village: "Falakata",
    bloodGroup: "O+",
    condition: "General",
    primaryIssue: "Routine Checkup",
    allergies: "None",
    chronicConditions: "None",
  },
  {
    id: 5,
    name: "Haradhan Pal",
    age: 53,
    gender: "Male",
    phone: "+91 90012 34567",
    email: "haradhan.pal@gmail.com",
    location: "Madarihat, Alipurduar, WB",
    village: "Madarihat",
    bloodGroup: "AB+",
    condition: "High Risk",
    primaryIssue: "Heart Problem",
    allergies: "None",
    chronicConditions: "Heart Disease",
  },
];

const menuItems = [
  {
    name: "Dashboard",
    href: "/healthworker",
    icon: Home,
  },
  {
    name: "Patients",
    href: "/healthworker/patients",
    icon: Users,
  },
  {
    name: "Appointments",
    icon: CalendarDays,
  },
  {
    name: "Schedule",
    icon: CalendarDays,
  },
  {
    name: "Medical Reports",
    icon: ClipboardList,
  },
  {
    name: "Prescriptions",
    icon: FileText,
  },
  {
    name: "Notifications",
    icon: Activity,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function HealthWorkerPatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(
    initialPatients[0]
  );

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    location: "",
    village: "",
    bloodGroup: "O+",
    condition: "General",
    primaryIssue: "",
    allergies: "",
    chronicConditions: "",
  });

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.phone.includes(search) ||
        patient.location.toLowerCase().includes(search.toLowerCase()) ||
        patient.village.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || patient.condition === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [patients, search, activeFilter]);

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.phone) {
      return;
    }

    const newPatient: Patient = {
      id: Date.now(),
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      village: formData.village,
      bloodGroup: formData.bloodGroup,
      condition: formData.condition as
        | "High Risk"
        | "Follow Up"
        | "General",
      primaryIssue: formData.primaryIssue,
      allergies: formData.allergies || "None",
      chronicConditions: formData.chronicConditions || "None",
    };

    setPatients((prev) => [newPatient, ...prev]);
    setSelectedPatient(newPatient);
    setShowForm(false);

    setFormData({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      email: "",
      location: "",
      village: "",
      bloodGroup: "O+",
      condition: "General",
      primaryIssue: "",
      allergies: "",
      chronicConditions: "",
    });
  };

  const getConditionStyle = (condition: string) => {
    if (condition === "High Risk") {
      return "bg-red-50 text-red-600 border-red-100";
    }

    if (condition === "Follow Up") {
      return "bg-orange-50 text-orange-600 border-orange-100";
    }

    return "bg-green-50 text-green-600 border-green-100";
  };

  return (
    <main className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex h-screen w-[260px] flex-col border-r border-orange-100 bg-white">
        {/* Logo */}
        <div className="flex h-[72px] items-center gap-3 border-b border-orange-100 px-6">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          </div>

          <h1 className="text-[20px] font-semibold text-slate-800">
            HealthAI
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            if (item.href) {
              const isActive = item.href === "/healthworker/patients";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] transition ${
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </Link>
              );
            }

            return (
              <button
                key={item.name}
                type="button"
                className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-[15px] text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-orange-100 p-4">
          <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-[15px] text-red-500 transition hover:bg-red-50">
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <section className="ml-[260px] min-h-screen flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-orange-500">Health Worker Portal</p>

            <h1 className="mt-1 text-3xl font-bold text-slate-800">
              My Patients
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage and monitor patient information collected during field
              visits.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
          >
            <Plus size={18} />
            Add Patient
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            {/* Search */}
            <div className="relative w-full xl:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search patient by name, phone or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "High Risk", "Follow Up", "General"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-orange-500 text-white"
                      : "bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
          {/* Patient List */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Patient Records
                </h2>

                <p className="text-sm text-slate-500">
                  {filteredPatients.length} patient
                  {filteredPatients.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {filteredPatients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                    selectedPatient?.id === patient.id
                      ? "border-orange-300 bg-orange-50"
                      : "border-slate-100 hover:border-orange-200 hover:bg-orange-50/40"
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                    {patient.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800">
                      {patient.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {patient.age} yrs · {patient.gender}
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                      <MapPin size={13} />
                      {patient.village}
                    </p>
                  </div>

                  {/* Condition */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`hidden rounded-full border px-3 py-1 text-xs font-medium md:block ${getConditionStyle(
                        patient.condition
                      )}`}
                    >
                      {patient.condition}
                    </span>

                    <ChevronRight
                      size={18}
                      className="text-slate-400"
                    />
                  </div>
                </button>
              ))}

              {filteredPatients.length === 0 && (
                <div className="py-16 text-center">
                  <Users
                    size={42}
                    className="mx-auto mb-3 text-slate-300"
                  />

                  <p className="font-medium text-slate-600">
                    No patients found
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Try changing your search or filter.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Patient Details */}
          <div className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            {selectedPatient ? (
              <>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-600">
                    {selectedPatient.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-800">
                      {selectedPatient.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedPatient.age} yrs · {selectedPatient.gender}
                    </p>

                    <span
                      className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-medium ${getConditionStyle(
                        selectedPatient.condition
                      )}`}
                    >
                      {selectedPatient.condition}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <h3 className="mb-4 font-semibold text-slate-800">
                    Contact Information
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <Phone
                        size={17}
                        className="shrink-0 text-orange-500"
                      />
                      <span className="text-[15px] font-medium text-slate-800">
                        {selectedPatient.phone}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <Mail
                        size={17}
                        className="shrink-0 text-orange-500"
                      />
                      <span className="break-all text-slate-600">
                        {selectedPatient.email || "Not provided"}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <MapPin
                        size={17}
                        className="shrink-0 text-orange-500"
                      />
                      <span className="text-[15px] font-medium text-slate-800">
                        {selectedPatient.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="mb-4 font-semibold text-slate-800">
                    Medical Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-400">
                        Blood Group
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Droplets
                          size={16}
                          className="text-orange-500"
                        />
                        {selectedPatient.bloodGroup}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Primary Health Issue
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {selectedPatient.primaryIssue || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Allergies</p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {selectedPatient.allergies}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Chronic Conditions
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {selectedPatient.chronicConditions}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-sm font-medium text-white transition hover:bg-orange-600">
                  <Stethoscope size={17} />
                  Start Patient Visit
                </button>
              </>
            ) : (
              <div className="py-20 text-center text-slate-400">
                Select a patient to view details
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Add Patient Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-7 py-5">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Add New Patient
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Enter the patient details collected during the field visit.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={21} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddPatient} className="p-7">
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Patient Name *
                  </label>

                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="Enter patient name"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Age *
                  </label>

                  <input
                    required
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        age: e.target.value,
                      })
                    }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="Enter age"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Gender
                  </label>

                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Blood Group */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Blood Group
                  </label>

                  <select
                    value={formData.bloodGroup}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bloodGroup: e.target.value,
                      })
                    }
                     className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                  >
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>

                  <input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="patient@email.com"
                  />
                </div>

                {/* Village */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Village
                  </label>

                  <input
                    value={formData.village}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        village: e.target.value,
                      })
                    }
                     className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="Enter village name"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Location
                  </label>

                  <input
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="District, State"
                  />
                </div>
              </div>

              {/* Health Information */}
              <div className="mt-7 border-t border-slate-100 pt-6">
                <h3 className="mb-5 text-lg font-semibold text-slate-800">
                  Health Information
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Patient Condition *
                    </label>

                    <select
                      value={formData.condition}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          condition: e.target.value,
                        })
                      }
                       className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                    >
                      <option>General</option>
                      <option>Follow Up</option>
                      <option>High Risk</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Primary Health Issue
                    </label>

                    <input
                      value={formData.primaryIssue}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryIssue: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                      placeholder="Example: Hypertension"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Allergies
                    </label>

                    <input
                      value={formData.allergies}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          allergies: e.target.value,
                        })
                      }
                       className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                      placeholder="None"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Chronic Conditions
                    </label>

                    <input
                      value={formData.chronicConditions}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          chronicConditions: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
                      placeholder="Example: Diabetes"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
                >
                  Save Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}