"use client"

import { Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ReportButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [reportReason, setReportReason] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the report to your backend
    console.log("Report submitted:", reportReason)
    setIsOpen(false)
    setReportReason("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Flag className="h-4 w-4" />
          <span className="sr-only">Report</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Report this app</DialogTitle>
            <DialogDescription>If you believe this app violates our policies, please let us know.</DialogDescription>
          </DialogHeader>
          <Textarea
            className="my-4"
            placeholder="Please describe the issue..."
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
            required
          />
          <DialogFooter>
            <Button type="submit">Submit Report</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

