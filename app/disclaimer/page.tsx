import { SEO } from "@/components/seo"

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Disclaimer"
        description="Read the disclaimer for Mini APK, including important information about app downloads and usage."
        canonical="/disclaimer"
      />
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to Mini APK. Please read this disclaimer carefully before using our website or downloading any
          applications.
        </p>
        <h2>App Ownership and Responsibility</h2>
        <p>
          Mini APK is a platform that provides links to Android applications. We do not own, create, or modify any of
          the apps available on our website. All apps are the property of their respective developers or publishers.
        </p>
        <h2>Download Responsibility</h2>
        <p>
          Users download and use applications at their own risk. While we strive to provide safe and virus-free
          downloads, we cannot guarantee the safety or performance of any app. We recommend users to read app
          descriptions, reviews, and permissions carefully before downloading.
        </p>
        <h2>Content Accuracy</h2>
        <p>
          We make every effort to ensure the accuracy of the information provided on our website. However, we do not
          warrant or guarantee that the information is complete, accurate, or up-to-date. App details, including
          features, requirements, and compatibility, may change without notice.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services. We are not responsible for the content,
          privacy policies, or practices of any third-party sites or services.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All trademarks, logos, and app names mentioned on Mini APK are the property of their respective owners. Their
          use on our website does not imply endorsement or affiliation.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Mini APK shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising
          out of your access to, use of, or inability to use our website or any apps downloaded through our platform.
        </p>
        <h2>Changes to Disclaimer</h2>
        <p>
          We reserve the right to modify or replace this disclaimer at any time. It is your responsibility to check this
          page periodically for changes.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact us through our provided contact information.
        </p>
        <p>
          By using Mini APK, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
        </p>
      </div>
    </div>
  )
}

