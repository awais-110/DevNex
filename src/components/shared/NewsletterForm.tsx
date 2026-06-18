"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setMessage(response.ok ? "Subscribed. Good choice." : "Please enter a valid email.");
    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="grid gap-3">
      <div className="flex gap-2">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="field h-11"
          placeholder="Email address"
          type="email"
        />
        <Button loading={loading} type="submit" size="sm">
          Subscribe
        </Button>
      </div>
      {message ? <p className="text-xs text-text-muted">{message}</p> : null}
    </form>
  );
}
