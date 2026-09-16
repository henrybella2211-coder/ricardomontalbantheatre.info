"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";

export default function DeviceLookup() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const inputId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    router.push(trimmed ? `/guides?q=${encodeURIComponent(trimmed)}` : "/guides");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-2 border-2 border-ink/15 bg-white p-2 sm:flex-row"
      role="search"
      aria-label="Look up your device, coil or pod"
    >
      <label htmlFor={inputId} className="sr-only">
        Search device, coil family or pod name
      </label>
      <input
        id={inputId}
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="e.g. sub-ohm tank coil, MTL pod, nic salt ratio..."
        className="w-full rounded-none border-2 border-transparent bg-bg px-3 py-2.5 font-mono text-sm text-ink placeholder:text-ink/40 focus-visible:border-teal focus-visible:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-none border-2 border-teal bg-teal px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-colors hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        Look it up
      </button>
    </form>
  );
}
