import type { Metadata } from "next";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import Navbar from "@/components/Navbar";
import styles from "./apply.module.css";

type CareerApplyPageProps = {
  searchParams: Promise<{
    type?: string;
    role?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Apply | Careers at AR Digitals",
  description:
    "Submit your employment or internship application to AR Digitals for creative digital marketing roles.",
};

export default async function CareerApplyPage({ searchParams }: CareerApplyPageProps) {
  const params = await searchParams;
  const initialApplicationType = params.type === "internship" ? "internship" : "employment";
  const initialRole = params.role ?? "";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.shell}>
          <aside className={styles.summary}>
            <a href="/career" className={styles.backLink}>
              &lt;- Back to careers
            </a>
            <p className={styles.eyebrow}>
              <span /> Career Application
            </p>
            <h1>{initialApplicationType === "internship" ? "Internship application" : "Employment application"}</h1>
            <p>
              Share your details, resume, work samples, and preference. The application will be
              emailed directly to AR Digitals for review.
            </p>

            <div className={styles.openingNote}>
              <span>Current employment openings</span>
              <strong>Video Editor and Graphic Designer</strong>
            </div>
          </aside>

          <CareerApplicationForm
            className={styles.form}
            successClassName={styles.success}
            panelClassName={styles.formPanel}
            highlightClassName={styles.highlight}
            initialApplicationType={initialApplicationType}
            initialRole={initialRole}
          />
        </section>
      </main>
    </>
  );
}
