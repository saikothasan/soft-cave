import { SEO } from "@/components/seo"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Privacy Policy"
        description="Read Mini APK's privacy policy to understand how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          At Mini APK, we are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
          website.
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal information (e.g., name, email address) when you voluntarily provide it</li>
          <li>Usage data (e.g., pages visited, time spent on the site)</li>
          <li>Device information (e.g., IP address, browser type)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul>
          <li>Providing and maintaining our service</li>
          <li>Improving and personalizing user experience</li>
          <li>Analyzing usage patterns and trends</li>
          <li>Communicating with you about updates or inquiries</li>
          <li>Ensuring the security and integrity of our platform</li>
        </ul>
        <h2>Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services that collect, monitor, and analyze data to improve our service. These third
          parties have their own privacy policies addressing how they use such information.
        </p>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Object to the processing of your data</li>
          <li>Request restrictions on the processing of your data</li>
          <li>Data portability</li>
        </ul>
        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our provided contact
          information.
        </p>
        <p>
          By using Mini APK, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
        <p>Last updated: [Current Date]</p>
      </div>
    </div>
  )
}

