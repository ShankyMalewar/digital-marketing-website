"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type CareerApplicationFormProps = {
  className: string;
  successClassName: string;
  panelClassName: string;
  highlightClassName: string;
  initialApplicationType?: ApplicationType;
  initialRole?: string;
};

type ApplicationType = "employment" | "internship";

const companyEmail = "ardigitalbranding@gmail.com";
const fallbackOrigin = "https://www.ardigitals.co.in";
const roleOptions = ["Video Editor", "Graphic Designer"];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const subscribeToUrl = (callback: () => void) => {
  window.addEventListener("popstate", callback);

  return () => window.removeEventListener("popstate", callback);
};

const getSubmittedSnapshot = () =>
  new URLSearchParams(window.location.search).get("submitted") === "true";

export default function CareerApplicationForm({
  className,
  successClassName,
  panelClassName,
  highlightClassName,
  initialApplicationType = "employment",
  initialRole = "",
}: CareerApplicationFormProps) {
  const applicationType = initialApplicationType;
  const nextUrlRef = useRef<HTMLInputElement>(null);
  const submitted = useSyncExternalStore(subscribeToUrl, getSubmittedSnapshot, () => false);

  useEffect(() => {
    if (!nextUrlRef.current) return;
    const redirectPath = `/career/apply?submitted=true&type=${applicationType}#application`;
    nextUrlRef.current.value = `${window.location.origin}${redirectPath}`;
  }, [applicationType]);

  const isEmployment = applicationType === "employment";
  const safeInitialRole = roleOptions.includes(initialRole) ? initialRole : "";
  const fallbackRedirect = `${fallbackOrigin}/career/apply?submitted=true&type=${applicationType}#application`;

  return (
    <div className={panelClassName} id="application">
      {isEmployment ? (
        <div className={highlightClassName}>
          <span>Currently hiring</span>
          <strong>Application for Video Editor or Graphic Designer.</strong>
        </div>
      ) : (
        <div className={highlightClassName}>
          <span>Internship applications</span>
          <strong>For students and freshers ready to learn real brand work.</strong>
        </div>
      )}

      <form
        action={`https://formsubmit.co/${companyEmail}`}
        className={className}
        encType="multipart/form-data"
        method="POST"
      >
        {submitted ? (
          <div className={successClassName} role="status">
            Application submitted. Our team will contact you soon.
          </div>
        ) : null}

        <input
          type="hidden"
          name="_subject"
          value={
            isEmployment
              ? "New employment application for AR Digitals"
              : "New internship application for AR Digitals"
          }
        />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input ref={nextUrlRef} type="hidden" name="_next" defaultValue={fallbackRedirect} />
        <input type="hidden" name="application_type" value={isEmployment ? "Employment" : "Internship"} />

        <label>
          <span>Full Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            minLength={2}
            pattern="[A-Za-z][A-Za-z .'-]{1,}"
            required
            title="Enter a valid name using letters."
          />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="(?:\+91[- ]?)?[6-9][0-9]{9}"
            required
            title="Enter a valid 10-digit Indian mobile number."
          />
        </label>
        <label>
          <span>State</span>
          <select name="state" autoComplete="address-level1" required defaultValue="">
            <option value="" disabled>
              Select state
            </option>
            {indianStates.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>City</span>
          <input
            name="city"
            type="text"
            autoComplete="address-level2"
            minLength={2}
            pattern="[A-Za-z][A-Za-z .'-]{1,}"
            required
            title="Enter a valid city name using letters."
          />
        </label>

        {isEmployment ? (
          <>
            <label>
              <span>Role Applying For</span>
              <select name="role" required defaultValue={safeInitialRole}>
                <option value="" disabled>
                  Select role
                </option>
                {roleOptions.map((role) => (
                  <option value={role} key={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Work Preference</span>
              <select name="work_preference" required defaultValue="">
                <option value="" disabled>
                  Select preference
                </option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
              </select>
            </label>
            <label>
              <span>Employment Type</span>
              <select name="employment_type" required defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Freelance">Freelance</option>
              </select>
            </label>
            <label>
              <span>Total Experience</span>
              <input name="experience" type="text" placeholder="Example: 1 year, fresher" required />
            </label>
          </>
        ) : (
          <>
            <label>
              <span>College / Education</span>
              <input name="college" type="text" minLength={2} required />
            </label>
            <label>
              <span>Course / Degree</span>
              <input name="course" type="text" minLength={2} required />
            </label>
            <label>
              <span>Year of Study</span>
              <select name="year_of_study" required defaultValue="">
                <option value="" disabled>
                  Select year
                </option>
                <option value="First year">First year</option>
                <option value="Second year">Second year</option>
                <option value="Third year">Third year</option>
                <option value="Final year">Final year</option>
                <option value="Graduate">Graduate</option>
              </select>
            </label>
            <label>
              <span>Internship Role</span>
              <input name="internship_role" type="text" placeholder="Example: Design, editing, social media" required />
            </label>
            <label>
              <span>Preferred Mode</span>
              <select name="preferred_mode" required defaultValue="">
                <option value="" disabled>
                  Select mode
                </option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
              </select>
            </label>
            <label>
              <span>Available From</span>
              <input name="available_from" type="date" required />
            </label>
            <label>
              <span>Duration</span>
              <select name="duration" required defaultValue="">
                <option value="" disabled>
                  Select duration
                </option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
              </select>
            </label>
          </>
        )}

        <label>
          <span>Skills</span>
          <input name="skills" type="text" placeholder="Example: Premiere Pro, Photoshop, Canva" required />
        </label>
        <label>
          <span>Portfolio / Work Link</span>
          <input name="portfolio_link" type="url" placeholder="https://..." />
        </label>
        <label>
          <span>Resume</span>
          <input name="attachment" type="file" accept=".pdf,.doc,.docx" required />
        </label>
        <label>
          <span>{isEmployment ? "Why should we consider you?" : "Why do you want to intern with us?"}</span>
          <textarea name="message" minLength={20} rows={5} required />
        </label>

        <button type="submit">
          {isEmployment ? "Submit employment application ->" : "Submit internship application ->"}
        </button>
      </form>
    </div>
  );
}
