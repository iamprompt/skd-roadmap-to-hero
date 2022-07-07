const LoyalCustomer = () => {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-lg px-8">
        <div className="mt-8 mb-5 text-center text-lg font-medium text-gray-500">
          บริษัทที่ไว้วางใจเรา
        </div>
        <div className="mb-6 grid grid-cols-6 gap-x-5 gap-y-3">
          {[
            'ais',
            'bbl',
            'kbank',
            'krungsri',
            'ktc',
            'minor',
            'mitr-phol',
            'ptt',
            'scb',
            'set',
            'tisco',
            'tmb',
          ].map((c) => (
            <img
              key={c}
              src={`/static/images/landing/corporate-logo-v3-${c}-x2.png`}
              alt={c}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoyalCustomer
