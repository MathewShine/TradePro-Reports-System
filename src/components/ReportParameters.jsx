import { useState } from 'react';

const ReportParameters = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [includeSections, setIncludeSections] = useState({
    performance: true,
    holdings: true,
    tax: false,
    risk: false,
  });

  const handleCheckboxChange = (section) => {
    setIncludeSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col gap-5 bg-white dark:bg-[#0f1b23]/80 rounded-lg border border-[#dae1e7] dark:border-gray-800 p-6 h-full">
      <h3 className="text-lg font-bold text-[#101518] dark:text-white">Report Parameters</h3>

      <div className="flex flex-col gap-4">
        {/* Client Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#101518] dark:text-gray-300">
            Client Selector
          </label>
          <select className="w-full rounded border border-[#dae1e7] dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-[#101518] dark:text-white focus:border-primary focus:ring-primary">
            <option>John Smith</option>
            <option>Jane Doe</option>
            <option>Vanguard Trust</option>
          </select>
        </div>

        {/* Date Range */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#101518] dark:text-gray-300">
            Date Range
          </label>
          <input
            className="w-full rounded border border-[#dae1e7] dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-[#101518] dark:text-white focus:border-primary focus:ring-primary"
            type="date"
            defaultValue="2024-07-01"
          />
        </div>

        {/* Benchmark */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#101518] dark:text-gray-300">
            Benchmark
          </label>
          <select className="w-full rounded border border-[#dae1e7] dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-[#101518] dark:text-white focus:border-primary focus:ring-primary">
            <option>S&P 500</option>
            <option>NASDAQ</option>
            <option>NIFTY 50</option>
            <option>MSCI World</option>
          </select>
        </div>

        {/* Format Toggle */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#101518] dark:text-gray-300">Format</label>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedFormat('pdf')}
              className={`flex-1 py-2 text-sm rounded font-semibold transition-colors ${
                selectedFormat === 'pdf'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#5e798d] dark:text-gray-300'
              }`}
            >
              PDF
            </button>
            <button
              onClick={() => setSelectedFormat('excel')}
              className={`flex-1 py-2 text-sm rounded font-medium transition-colors ${
                selectedFormat === 'excel'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#5e798d] dark:text-gray-300'
              }`}
            >
              Excel
            </button>
          </div>
        </div>

        {/* Include Sections */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#dae1e7] dark:border-gray-700">
          <label className="text-sm font-medium text-[#101518] dark:text-gray-300">
            Include Sections
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#5e798d] dark:text-gray-400">Performance</span>
            <input
              checked={includeSections.performance}
              onChange={() => handleCheckboxChange('performance')}
              className="rounded text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#5e798d] dark:text-gray-400">Holdings</span>
            <input
              checked={includeSections.holdings}
              onChange={() => handleCheckboxChange('holdings')}
              className="rounded text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#5e798d] dark:text-gray-400">Tax</span>
            <input
              checked={includeSections.tax}
              onChange={() => handleCheckboxChange('tax')}
              className="rounded text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#5e798d] dark:text-gray-400">Risk Metrics</span>
            <input
              checked={includeSections.risk}
              onChange={() => handleCheckboxChange('risk')}
              className="rounded text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-auto pt-5">
        <button className="w-full rounded-lg bg-primary py-3 text-base font-bold text-white transition-colors hover:bg-primary/90">
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default ReportParameters;