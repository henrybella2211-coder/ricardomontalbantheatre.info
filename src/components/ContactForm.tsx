"use client";

import { useId, useState } from "react";

const CONTACT_EMAIL = "hello@ricardomontalbantheatre.info";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"} via Coil & Cloud`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name || "(not provided)"}\nReply-to: ${email || "(not provided)"}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border-2 border-ink/12 bg-white p-6" noValidate>
      <div className="grid gap-5">
        <div>
          <label htmlFor={nameId} className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/60">
            Name
          </label>
          <input
            id={nameId}
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1.5 w-full rounded-none border-2 border-ink/15 bg-bg px-3 py-2 text-ink focus-visible:border-teal focus-visible:outline-none"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/60">
            Email address
          </label>
          <input
            id={emailId}
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1.5 w-full rounded-none border-2 border-ink/15 bg-bg px-3 py-2 text-ink focus-visible:border-teal focus-visible:outline-none"
          />
        </div>
        <div>
          <label htmlFor={messageId} className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/60">
            Message
          </label>
          <textarea
            id={messageId}
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-1.5 w-full rounded-none border-2 border-ink/15 bg-bg px-3 py-2 text-ink focus-visible:border-teal focus-visible:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-fit rounded-none border-2 border-teal bg-teal px-6 py-2.5 font-mono text-sm font-semibold text-bg transition-colors hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
        >
          Open in your email app
        </button>
        <p className="font-mono text-xs text-ink/50">
          This opens a pre-filled message in your own email application; it
          does not send anything directly from this website.
        </p>
      </div>
    </form>
  );
}
