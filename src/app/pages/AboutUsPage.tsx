import { useNavigate } from "react-router";
import { NeuCard } from "../components/NeuCard";
import { ArrowLeft, Mail, Github, Linkedin, GraduationCap, Building2 } from "lucide-react";

const teamMembers = [
  {
    name: "Woraprat Chaiyakul",
    role: "Full Stack Developer",
    email: "s6519410056@sau.ac.th",
    avatar: "W",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Chatchai Chaisen",
    role: "AI Engineer",
    email: "s6519410058@sau.ac.th",
    avatar: "C",
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "Chatsiri Taobumrung",
    role: "UI/UX Designer",
    email: "s6519410039@sau.ac.th",
    avatar: "C",
    color: "from-purple-400 to-purple-500",
  },
  {
    name: "Tada Siangwaong",
    role: "IoT Specialist",
    email: "s6519410057@sau.ac.th",
    avatar: "T",
    color: "from-orange-400 to-orange-500",
  },
];

export function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate("/settings")}
          className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">About Us</h2>
          <p className="text-xs sm:text-sm text-gray-500">Meet the team behind Smart Boat</p>
        </div>
      </div>

      {/* University Info */}
      <NeuCard>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Southeast Asia University (SAU) </h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Building2 className="w-4 h-4" />
              <p className="text-sm">Faculty of Engineering</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              This project is developed as part of the Senior Project in Computer Engineering.
              Our goal is to create an intelligent boat control system that leverages AI and IoT
              technologies to enhance maritime navigation and safety.
            </p>
          </div>
        </div>
      </NeuCard>

      {/* Team Members */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <NeuCard key={member.email}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-semibold shadow-lg flex-shrink-0`}
                >
                  {member.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-teal-600 mb-3">{member.role}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <p className="text-xs truncate">{member.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Github className="w-4 h-4 text-gray-600 mx-auto" />
                </button>
                <button className="flex-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600 mx-auto" />
                </button>
              </div>
            </NeuCard>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <NeuCard>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Release Date</span>
            <span>March 2026</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Technologies</span>
            <span>React, TypeScript, Tailwind CSS, IoT</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">License</span>
            <span>Academic Use Only</span>
          </div>
        </div>
      </NeuCard>
    </div>
  );
}