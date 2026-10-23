import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page not found · Dhara Patadia",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)] text-[var(--ink)]">
      <Header />
      <main
        id="main-content"
        className="flex-1 w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="card-bordered bg-[var(--cream-2)] p-8 sm:p-12 max-w-[480px] w-full flex flex-col items-center">
          <span className="font-display font-extrabold text-[4rem] text-[var(--rust)] tracking-tight leading-none mb-3">
            404
          </span>
          <h1 className="font-display font-bold text-[1.5rem] sm:text-[1.75rem] text-[var(--ink)] mb-4">
            This page could not be found.
          </h1>
          <Button
            href="/"
            variant="primary"
            leadingIcon={<ArrowLeft className="w-4 h-4 text-white" strokeWidth={2} />}
            className="mt-2 text-[0.9375rem] py-3 px-6 shadow-[3px_4px_0_0_var(--ink)]"
          >
            Back to home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
