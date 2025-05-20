import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Prince George Air Improvement Roundtable
          </h1>
          <p className="text-xl mb-8">
            PGAIR is committed to researching, monitoring, recommending and implementing air quality improvements and promoting public awareness and education in the Prince George airshed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Plan Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">PGAIR's 2022-2026 Strategic Plan</h2>
              <p className="mb-4">
                PGAIR has released its new Strategic Plan, which consists of a selection of goals, objectives and strategies that will be the focus of funding and effort for the next five operating years.
              </p>
              <a href="/strategic-plan" className="text-primary hover:underline">Read more →</a>
            </div>

            {/* Cleaner Burning Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Cleaner Burning</h2>
              <p className="mb-4">
                Whether you operate an old or new wood-burning appliance, using clean wood-burning techniques is essential to getting the most heat possible for your home.
              </p>
              <a href="/cleaner-burning" className="text-primary hover:underline">Learn more →</a>
            </div>

            {/* Community Wood Smoke Reduction Program Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Community Wood Smoke Reduction Program 2024</h2>
              <p className="mb-4">
                Exchange your old smoky, non-emissions certified wood stove & receive incentives for upgrading to cleaner heating options.
              </p>
              <a href="/wood-smoke-reduction" className="text-primary hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">RFQ - Prince George Air Quality Management Plan</h3>
              <p className="text-gray-600 mb-4">November 22, 2024</p>
              <a href="/news/rfq" className="text-primary hover:underline">Read more →</a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">State of the Air 2023</h3>
              <p className="text-gray-600 mb-4">February 21, 2024</p>
              <a href="/news/state-of-air" className="text-primary hover:underline">Read more →</a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">PGAIR Releases Prince George Air Quality Emissions and Modelling Report</h3>
              <p className="text-gray-600 mb-4">February 4, 2021</p>
              <a href="/news/emissions-report" className="text-primary hover:underline">Read more →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 