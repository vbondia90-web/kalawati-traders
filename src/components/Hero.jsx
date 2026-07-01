export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight">

            Complete Range of Quality Building Materials

          </h1>

          <p className="mt-6 text-xl text-blue-100">

            AAC Blocks • Cement • TMT Bars • Fly Ash Bricks • River Sand • Paver Blocks • Cover Blocks • Stone Aggregates

          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-700">
              Request Quote
            </button>

            <a
              href="tel:6269707000"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Call Now
            </a>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"
            alt="Construction"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}
