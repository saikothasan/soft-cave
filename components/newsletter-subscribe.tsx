"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    console.log("Subscribing email:", email)
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })
    setEmail("")
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg my-8">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Stay updated with the latest apps and exclusive offers!</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}

