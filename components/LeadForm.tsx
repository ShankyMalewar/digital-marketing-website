"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type LeadFormProps = {
  className: string;
  redirectPath: string;
  formHeaderClassName?: string;
  successClassName?: string;
  showHeader?: boolean;
};

const companyEmail = "ardigitalbranding@gmail.com";
const fallbackOrigin = "https://www.ardigitals.co.in";
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

export default function LeadForm({
  className,
  redirectPath,
  formHeaderClassName,
  successClassName,
  showHeader = false,
}: LeadFormProps) {
  const nextUrlRef = useRef<HTMLInputElement>(null);
  const submitted = useSyncExternalStore(subscribeToUrl, getSubmittedSnapshot, () => false);

  useEffect(() => {
    if (!nextUrlRef.current) return;
    nextUrlRef.current.value = `${window.location.origin}${redirectPath}`;
  }, [redirectPath]);

  return (
    <form action={`https://formsubmit.co/${companyEmail}`} className={className} method="POST">
      {submitted ? (
        <div className={successClassName ?? "contact-success"} role="status">
          Form submitted. We received your details and will call you soon.
        </div>
      ) : null}
      {showHeader ? (
        <div className={formHeaderClassName}>
          <span>Request a call</span>
          <strong>Send your details</strong>
        </div>
      ) : null}
      <input type="hidden" name="_subject" value="New website lead for AR Digitals" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        ref={nextUrlRef}
        type="hidden"
        name="_next"
        defaultValue={`${fallbackOrigin}${redirectPath}`}
      />

      <label>
        <span>Name</span>
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
      <button type="submit">Submit details -&gt;</button>
    </form>
  );
}
