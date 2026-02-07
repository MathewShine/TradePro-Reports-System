const ReportCenter = () => {
  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-[#0f1b23]/80 rounded-lg border border-[#dae1e7] dark:border-gray-800 p-6 h-full">
      {/* Report Header */}
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold text-[#101518] dark:text-white">
          Monthly Performance Report
        </p>
        <p className="text-sm text-[#5e798d] dark:text-gray-400">
          A detailed summary of portfolio performance for the selected month.
        </p>
      </div>

      {/* Performance Card */}
      <div className="flex flex-col gap-2 p-4 border border-[#dae1e7] dark:border-gray-700 rounded-lg">
        <p className="text-[#101518] dark:text-white text-base font-medium leading-normal">
          Performance Since Inception
        </p>
        <p className="text-[#101518] dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">
          12.45%
        </p>
        <div className="flex gap-1">
          <p className="text-[#5e798d] dark:text-gray-400 text-base font-normal leading-normal">
            YTD
          </p>
          <p className="text-[#078838] text-base font-medium leading-normal">+2.15%</p>
        </div>

        {/* Chart */}
        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
          <svg
            fill="none"
            height="148"
            preserveAspectRatio="none"
            viewBox="-3 0 478 150"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
              stroke="#0095ff"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear"
                x1="236"
                x2="236"
                y1="1"
                y2="149"
              >
                <stop stopColor="#0095ff" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0095ff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-b-[#dae1e7] dark:border-b-gray-700">
              <th className="px-4 py-3 text-left text-[#101518] dark:text-gray-300 font-medium">
                Date
              </th>
              <th className="px-4 py-3 text-left text-[#101518] dark:text-gray-300 font-medium">
                Value
              </th>
              <th className="px-4 py-3 text-left text-[#101518] dark:text-gray-300 font-medium">
                Return %
              </th>
              <th className="px-4 py-3 text-left text-[#101518] dark:text-gray-300 font-medium">
                Benchmark %
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-t-[#dae1e7] dark:border-t-gray-800">
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">07/31/2024</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">$1,150,234.00</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">2.15%</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">1.80%</td>
            </tr>
            <tr className="border-t border-t-[#dae1e7] dark:border-t-gray-800">
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">06/30/2024</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">$1,125,890.50</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">1.50%</td>
              <td className="px-4 py-3 text-[#5e798d] dark:text-gray-400">1.25%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="mt-auto">
        <p className="text-xs text-[#5e798d] dark:text-gray-500">
          Notes & Disclosures: Performance data is preliminary and subject to change. Past
          performance is not indicative of future results.
        </p>
      </div>
    </div>
  );
};

export default ReportCenter;