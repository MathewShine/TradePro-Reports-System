import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ReportCenter from './components/ReportCenter';
import ReportParameters from './components/ReportParameters';

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1 px-10 py-8">
          <div className="flex flex-col gap-8 max-w-screen-2xl mx-auto">
            {/* Page Header */}
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
              {/* Left Sidebar */}
              <div className="lg:col-span-3">
                <Sidebar />
              </div>

              {/* Center Panel */}
              <div className="lg:col-span-6">
                <ReportCenter />
              </div>

              {/* Right Panel */}
              <div className="lg:col-span-3">
                <ReportParameters />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;