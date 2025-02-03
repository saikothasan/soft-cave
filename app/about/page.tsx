import { SEO } from "@/components/seo"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="About Mini APK"
        description="Learn about Mini APK, your trusted source for downloading free Android apps and games."
        canonical="/about"
      />
      <h1 className="text-3xl font-bold mb-6">About Mini APK</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Mini APK is your go-to destination for discovering and downloading free Android applications and games. Our
          platform is designed to provide a safe, easy, and enjoyable experience for Android users looking to enhance
          their devices with the latest and most popular apps.
        </p>
        <h2>Our Mission</h2>
        <p>
          At Mini APK, our mission is to bridge the gap between Android users and developers by offering a curated
          selection of high-quality apps. We strive to create a community where users can easily find the apps they need
          and developers can showcase their creations to a wider audience.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>A vast collection of free Android apps and games</li>
          <li>User-friendly interface for easy navigation and discovery</li>
          <li>Regular updates to ensure the latest versions are always available</li>
          <li>Detailed app information, including features, requirements, and user reviews</li>
          <li>Safe and secure downloads</li>
        </ul>
        <h2>Our Commitment to Safety</h2>
        <p>
          We prioritize the safety and security of our users. All apps available on Mini APK are thoroughly scanned for
          malware and viruses before being made available for download. We also provide information about app
          permissions and potential in-app purchases to help users make informed decisions.
        </p>
        <h2>Join Our Community</h2>
        <p>
          Whether you're a casual app user or a dedicated Android enthusiast, Mini APK is here to serve your needs. We
          invite you to explore our collection, share your favorite apps, and become part of our growing community of
          Android users.
        </p>
        <p>
          Thank you for choosing Mini APK as your trusted source for Android apps and games. If you have any questions
          or feedback, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  )
}

