import { useState } from 'react';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState('performance');

  const sections = [
    { id: 'performance', title: 'Performance Reports', items: ['Monthly', 'Quarterly', 'Annual', 'Since Inception'] },
    { id: 'statements', title: 'Statements', items: [] },
    { id: 'holdings', title: 'Holdings Reports', items: [] },
    { id: 'contribution', title: 'Contribution & Withdrawal', items: [] },
    { id: 'tax', title: 'Tax Reports', items: [] },
    { id: 'risk', title: 'Risk Reports', items: [] },
    { id: 'custom', title: 'Custom Reports', items: [] },
  ];

  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-[#0f1b23]/80 rounded-lg border border-[#dae1e7] dark:border-gray-800 p-4 h-full">
      {sections.map((section) => (
        <details
          key={section.id}
          className="flex flex-col group"
          open={section.id === 'performance'}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
            <p className="text-[#101518] dark:text-white text-sm font-bold leading-normal">
              {section.title}
            </p>
            <span className="material-symbols-outlined text-[#5e798d] dark:text-gray-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>

          {section.items.length > 0 && (
            <div className="flex flex-col pl-4 border-l border-[#dae1e7] dark:border-gray-700 ml-1">
              {section.items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={
                    idx === 0
                      ? "py-1.5 px-3 rounded-md text-sm text-white bg-primary/20 dark:bg-primary/30 font-medium"
                      : "py-1.5 px-3 rounded-md text-sm text-[#5e798d] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </details>
      ))}
    </div>
  );
};

export default Sidebar;
