import { useState, useRef } from "react";
import Input from "./components/Input";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const ref = useRef();
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState({
    degree: "",
    university: "",
    startYear: "",
    endYear: "",
  });
  const [allEducation, setAllEducation] = useState([]);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    duration: {
      from: "",
      to: "",
    },
    description: "",
  });
  const [allExperience, setAllExperience] = useState([]);

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-IN");
  };

  const addEducationHandler = () => {
    setAllEducation([...allEducation, education]);
    setEducation({
      degree: "",
      university: "",
      startYear: "",
      endYear: "",
    });
  };

  const downloadResumeHandler = () => {
    const element = ref.current;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = (height / width) * pdfWidth;

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fullName}.pdf`);
    });
  };

  return (
    <div className="flex h-screen w-full">
      <button
        onClick={downloadResumeHandler}
        className="fixed right-2 top-2 border rounded-lg px-2 py-2 hover:bg-gray-300 hover:text-black"
      >
        Download Resume
      </button>
      <div className="flex-1 h-full bg-black p-4 overflow-y-scroll">
        {/* Basic details section */}
        <Input
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <Input
          label="Profession"
          type="text"
          value={currentProfession}
          onChange={(event) => setCurrentProfession(event.target.value)}
        />

        <Input
          label="Mobile Number"
          type="number"
          min="10"
          max="10"
          value={mobileNo}
          onChange={(event) => setMobileNo(event.target.value)}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          label="Residential Address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        {/* summary */}
        <Input
          label="Summary / Career Objective "
          type="text"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
        {/* education */}
        <div className="flex flex-wrap m-4 border rounded-lg p-3">
          <Input
            label="Degree"
            type="text"
            value={education.degree}
            onChange={(event) =>
              setEducation((prev) => ({
                ...prev,
                degree: event.target.value,
              }))
            }
            containerClass="w-1/2"
          />
          <Input
            label="University"
            type="text"
            value={education.university}
            onChange={(event) =>
              setEducation((prev) => ({
                ...prev,
                university: event.target.value,
              }))
            }
            containerClass="w-1/2"
          />
          <Input
            label="Start Year"
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="input start year"
            value={education.startYear}
            onChange={(event) =>
              setEducation((prev) => ({
                ...prev,
                startYear: event.target.value,
              }))
            }
            containerClass="w-1/2"
          />
          <Input
            label="End Year"
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="input end year"
            value={education.endYear}
            onChange={(event) =>
              setEducation((prev) => ({
                ...prev,
                endYear: event.target.value,
              }))
            }
            containerClass="w-1/2"
          />
          <button
            onClick={addEducationHandler}
            className="border rounded-lg text-sm px-3 py-1 hover:bg-white hover:text-black active:bg-white/80"
          >
            Add Education
          </button>
        </div>
        <div className="m-4 border rounded-lg p-3">
          <Input
            label="Skills"
            type="text"
            value={skill}
            onChange={(event) => setSkill(event.target.value)}
          />
          <button
            onClick={() => {
              setSkills([...skills, skill]);
              setSkill("");
            }}
            className="border rounded-lg text-sm px-3 py-1 hover:bg-white hover:text-black active:bg-white/80"
          >
            Add Skill
          </button>
        </div>
        <div className="m-4 border rounded-lg p-3">
          <Input
            label="Position"
            type="text"
            value={experience.position}
            onChange={(event) =>
              setExperience({ ...experience, position: event.target.value })
            }
          />
          <Input
            label="Company"
            type="text"
            value={experience.company}
            onChange={(event) =>
              setExperience({ ...experience, company: event.target.value })
            }
          />
          <div className="flex">
            <Input
              label="From"
              type="date"
              value={experience.duration.from}
              onChange={(event) =>
                setExperience({
                  ...experience,
                  duration: {
                    ...experience.duration,
                    from: event.target.value,
                  },
                })
              }
              containerClass="w-1/2"
            />
            <Input
              label="To"
              type="date"
              value={experience.duration.to}
              onChange={(event) =>
                setExperience({
                  ...experience,
                  duration: { ...experience.duration, to: event.target.value },
                })
              }
              containerClass="w-1/2"
            />
          </div>
          <Input
            label="Description"
            type="text"
            value={experience.description}
            onChange={(event) =>
              setExperience({ ...experience, description: event.target.value })
            }
          />
          <button
            onClick={() => {
              setAllExperience([...allExperience, experience]);
              setExperience({
                position: "",
                company: "",
                duration: {
                  from: "",
                  to: "",
                },
                description: "",
              });
            }}
            className="border rounded-lg text-sm px-3 py-1 hover:bg-white hover:text-black active:bg-white/80"
          >
            Add Experience
          </button>
        </div>

        {/* <Input
          label="Birth Date ( dd-mm-yyyy )"
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        /> */}
      </div>
      <div
        className="flex-1 h-full bg-black p-4 text-sm overflow-y-scroll"
        id="resume"
        ref={ref}
      >
        <div className="text-center">
          <h1 className="text-2xl font-medium capitalize mb-4">
            {fullName || "Full Name"}
          </h1>
          <h2 className="">{currentProfession || "Frontend Developer"}</h2>
        </div>

        <div className="flex w-full mt-10">
          <div className="w-[40%] p-4 bg-pink-800 flex flex-col gap-5">
            <div>
              <h3>CONTACT</h3>
              <p>{mobileNo || "1234567890"}</p>
              <p>{email || "test@gmail.com"}</p>
              <p>{address || "House No 123, Test, Test Street, India"}</p>
            </div>
            <div>
              <h3>EDUCATION</h3>
              <div className="flex flex-col gap-4">
                {allEducation?.map((edu, index) => (
                  <div key={edu.degree + index + edu.university}>
                    <h2 className="font-semibold">{edu.degree}</h2>
                    <p>{edu.university || "dummy university"}</p>
                    <p className="">
                      <span>{edu.startYear || "start date"}</span>
                      <span className="mx-2">-</span>
                      <span>{edu.endYear || "end date"}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>SKILLS</h3>
              <div>
                {skills?.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[60%] p-4 flex flex-col gap-5">
            <div>
              <h3>SUMMARY</h3>
              <p>
                {summary ||
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, qui! Dignissimos ipsam enim quia ex veniam error iusto, sed distinctio quisquam repellat expedita fugit nostrum mollitia pariatur nobis illo odio culpa? Aspernatur quidem distinctio accusantium?"}
              </p>
            </div>

            <div>
              <h3>EXPERIENCE</h3>
              <div className="flex flex-col gap-4">
                {allExperience?.map((exp) => (
                  <div className="">
                    <p className="font-semibold">{exp.position}</p>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="font-semibold">
                      {formatDate(exp.duration.from)} -{" "}
                      {formatDate(exp.duration.to)}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
