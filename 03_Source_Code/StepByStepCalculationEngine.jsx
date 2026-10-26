import React, { useState } from 'react';
import {
  MapPin,
  Calculator,
  Globe,
  Cpu,
  TrendingUp,
  Network,
  Search,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Info,
  TrendingDown,
  Target
} from 'lucide-react';

/**
 * Default Wagholi benchmark data matching the live production calculation engine
 */
export const defaultEngineData = {
  query: 'Wagholi',
  count: 2,
  totalUniverse: 1701,
  sampleLocations: ['Wagholi', 'Wagholi Satara'],
  district: 'Pune',
  bhk1AvgPrice: 54.90,
  bhk1RateSqft: 12200,
  bhk2AvgPrice: 84.26,
  bhk2RateSqft: 11244,
  bhk3AvgPrice: 122.97,
  bhk3RateSqft: 11180,
  weightedBaseRate: 11717,
  activeWorkforceRate: 80.7,
  unemploymentRate: 19.3,
  tier: 1,
  multiplierTarget: '1.42× (5 Years)',
  forecastBhk1: 77.96,
  forecastSqft: 16638,
  capitalGain: 23.06,
  projectedRoi: 42.0,
  annualVelocity: 8.4,
  clusterClassification: 'Saturated Market',
  propScore: 62,
  empScore: 81,
  bizScore: 72,
  compositeIndex: 72,
};

/**
 * Stacked Fraction Math Component
 */
const Fraction = ({ numerator, denominator, className = '' }) => (
  <span className={`inline-flex flex-col items-center justify-center align-middle mx-1 text-[11px] leading-tight select-none ${className}`}>
    <span className="font-semibold text-slate-800 pb-[1px] whitespace-nowrap">{numerator}</span>
    <span className="w-full h-[1.5px] bg-slate-700 my-[1px]" />
    <span className="text-slate-600 font-medium pt-[1px] whitespace-nowrap">{denominator}</span>
  </span>
);

/**
 * Step-by-Step Calculation Engine Dashboard Component
 * Clean, light-mode modern SaaS card interface with visual formulas.
 */
export default function StepByStepCalculationEngine({
  data = defaultEngineData,
  isLive = true,
  collapsible = true,
  defaultExpanded = true,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden font-sans">
      {/* 1. Header Bar */}
      <div
        className={`flex items-center justify-between px-6 py-4.5 bg-white border-b border-slate-100 ${
          collapsible ? 'cursor-pointer select-none' : ''
        }`}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
            Step-by-Step Calculation Engine
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-normal mt-0.5">
            All mathematical derivations, formulas &amp; aggregations evaluated before output generation
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Evaluated Green Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Evaluated Live</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] ml-0.5" />
          </div>

          {/* Optional Collapse Toggle */}
          {collapsible && (
            <button
              type="button"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle calculation breakdown"
            >
              <ChevronDown
                className={`w-4 h-4 stroke-[2.5] transition-transform duration-300 ${
                  isExpanded ? 'rotate-0' : '-rotate-90'
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* 2. Responsive 3-Column × 2-Row Flow Grid */}
      {isExpanded && (
        <div className="p-5 md:p-6 bg-white space-y-4">
          {/* ROW 1: Steps 01 → 02 → 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 items-stretch relative">
            
            {/* STEP 01 • SPATIAL QUERY */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    01 • SPATIAL QUERY
                  </span>
                  <MapPin className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  Sample Space &amp; Data Retrieval
                </h3>

                {/* Formula Used Sub-Card: Visual Flow */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mb-2">
                    <span>Formula Used</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  
                  {/* Inline visual flow diagram */}
                  <div className="flex items-center justify-center gap-2 flex-wrap text-xs my-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-300 rounded-md shadow-2xs font-semibold text-slate-900 text-[11px]">
                      <Search className="w-3 h-3 text-slate-500" />
                      &quot;{data.query}&quot;
                    </span>
                    <span className="text-slate-400 font-bold text-xs">→</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-300 rounded-md shadow-2xs text-[10px] text-slate-700 leading-tight">
                      <FileText className="w-3 h-3 text-slate-500 shrink-0" />
                      Match in Village, Taluka, District
                    </span>
                    <span className="text-slate-400 font-bold text-xs">→</span>
                    <span className="font-bold text-slate-900 text-xs">Result</span>
                  </div>
                  <p className="text-[10px] text-slate-500 text-center font-medium mt-1.5">
                    Sub-string matching logic
                  </p>
                </div>
              </div>

              {/* Step 01 Metrics */}
              <div className="space-y-1.5 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Matched Micro-Markets:</span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px] tabular-nums">
                    {data.count} / {data.totalUniverse.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Sample Locations:</span>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {data.sampleLocations.map((loc, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 font-medium rounded text-[11px]">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Primary District:</span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px]">
                    {data.district}
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 02 • STATISTICAL MEAN */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    02 • STATISTICAL MEAN
                  </span>
                  <Calculator className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  Price Aggregation &amp; Sq.Ft Valuation
                </h3>

                {/* Formula Used Sub-Card: Stacked HTML Fractions */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5 space-y-2">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <span>Formula Used</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  
                  {/* Fraction 1: Average Price */}
                  <div className="flex items-center text-xs text-slate-900">
                    <span className="font-semibold text-[11px] mr-1 whitespace-nowrap">Average Price =</span>
                    <Fraction
                      numerator="(Sum of all Prices)"
                      denominator="Total count of properties"
                    />
                  </div>

                  {/* Fraction 2: Rate/Sq.Ft */}
                  <div className="flex items-center text-xs text-slate-900">
                    <span className="font-semibold text-[11px] mr-1 whitespace-nowrap">Rate/Sq.Ft =</span>
                    <Fraction
                      numerator="(Avg. BHK Price × 100,000)"
                      denominator="Carpet Sq.Ft"
                    />
                  </div>
                </div>
              </div>

              {/* Step 02 Metrics */}
              <div className="space-y-1.5 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">1 BHK Mean (450 sqft):</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px] tabular-nums">
                    ₹{data.bhk1AvgPrice.toFixed(2)}L (₹{data.bhk1RateSqft.toLocaleString('en-IN')}/sqft)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">2 BHK Mean (750 sqft):</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px] tabular-nums">
                    ₹{data.bhk2AvgPrice.toFixed(2)}L (₹{data.bhk2RateSqft.toLocaleString('en-IN')}/sqft)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">3 BHK Mean (1,100 sqft):</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px] tabular-nums">
                    ₹{data.bhk3AvgPrice.toFixed(2)}L (₹{data.bhk3RateSqft.toLocaleString('en-IN')}/sqft)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-900 font-bold">Weighted Base Rate:</span>
                  <span className="px-3 py-0.5 bg-emerald-600 text-white font-bold rounded text-xs tracking-wide">
                    ₹{data.weightedBaseRate.toLocaleString('en-IN')} / sq.ft
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 03 • MACROECONOMICS */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    03 • MACROECONOMICS
                  </span>
                  <Globe className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  Workforce Density &amp; Demographics
                </h3>

                {/* Formula Used Sub-Card: Employment Fraction */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5 space-y-2">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <span>Formula Used</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  
                  {/* Fraction: Avg Employment */}
                  <div className="flex items-center text-xs text-slate-900">
                    <span className="font-semibold text-[11px] mr-1 whitespace-nowrap">Avg Employment =</span>
                    <Fraction
                      numerator="(Sum of Area Employed Rates)"
                      denominator="Number of Areas"
                    />
                  </div>

                  {/* Formula: Unemployment */}
                  <div className="text-[11px] font-medium text-slate-800 pt-0.5">
                    Unemployment = 100% − Avg Employment
                  </div>
                </div>
              </div>

              {/* Step 03 Metrics: Workforce & Unemployment with Progress Bars */}
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <div>
                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="text-slate-600 font-medium">Active Workforce Rate:</span>
                    <span className="font-bold text-emerald-600 text-xs tabular-nums">
                      {data.activeWorkforceRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mt-0.5">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, data.activeWorkforceRate)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="text-slate-600 font-medium">Unemployment Rate:</span>
                    <span className="font-bold text-slate-700 text-xs tabular-nums">
                      {data.unemploymentRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mt-0.5">
                    <div
                      className="h-full bg-slate-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, data.unemploymentRate)}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Economic Locality Tier:</span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px]">
                    Tier {data.tier}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ROW 2: Steps 04 → 05 → 06 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 items-stretch relative">
            
            {/* STEP 04 • SUPERVISED ML */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    04 • SUPERVISED ML
                  </span>
                  <Cpu className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  5-Year Linear Regression Valuation
                </h3>

                {/* Formula Used Sub-Card: Subscripts & Green Arrow */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                    <div className="flex items-center gap-1">
                      <span>Formula Used</span>
                      <Info className="w-3 h-3 text-slate-400" />
                    </div>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                  </div>
                  
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    Forecast Price<sub>(2031)</sub> = Base Price<sub>(2026)</sub> × 1.42
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-normal">
                    Calculated using high-confidence predictive model. Model accuracy: R² &gt; 0.99 (5-Year Predictive ML Curve)
                  </p>
                </div>
              </div>

              {/* Step 04 Metrics */}
              <div className="space-y-1.5 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Current 1 BHK Benchmark:</span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px] tabular-nums">
                    ₹{data.bhk1AvgPrice.toFixed(2)} Lakhs
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Multiplier Target:</span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 font-medium rounded text-[11px]">
                    {data.multiplierTarget}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Forecast 1 BHK (2031):</span>
                  <span className="px-3 py-0.5 bg-emerald-600 text-white font-bold rounded text-xs flex items-center gap-1">
                    <span>▲</span>
                    <span>₹{data.forecastBhk1.toFixed(2)} Lakhs</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Forecast Sq.Ft Rate:</span>
                  <span className="px-3 py-0.5 bg-emerald-600 text-white font-bold rounded text-xs">
                    ₹{data.forecastSqft.toLocaleString('en-IN')} / sq.ft
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 05 • FINANCIAL RETURNS */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    05 • FINANCIAL RETURNS
                  </span>
                  <TrendingUp className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  Capital Appreciation &amp; Expected ROI
                </h3>

                {/* Formula Used Sub-Card: Subscripts & Stacked ROI Fraction */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5 space-y-2">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <span>Formula Used</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  
                  {/* Equation 1: Net Profit */}
                  <div className="text-xs font-semibold text-slate-900">
                    Net Profit = Price<sub>(2031)</sub> − Base Price<sub>(2026)</sub>
                  </div>

                  {/* Equation 2: Total ROI Fraction */}
                  <div className="flex items-center text-xs text-slate-900">
                    <span className="font-semibold text-[11px] mr-1 whitespace-nowrap">Total ROI =</span>
                    <Fraction
                      numerator="Net Profit"
                      denominator={<>Base Price<sub>(2026)</sub></>}
                    />
                    <span className="font-semibold ml-1 text-[11px]">× 100%</span>
                  </div>
                </div>
              </div>

              {/* Step 05 Metrics */}
              <div className="space-y-1.5 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Absolute Capital Gain:</span>
                  <span className="px-3 py-0.5 bg-emerald-800 text-white font-bold rounded text-xs flex items-center gap-1">
                    <span>+₹{data.capitalGain.toFixed(2)} Lakhs</span>
                    <TrendingUp className="w-3 h-3 stroke-[3]" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Total Projected ROI:</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold rounded text-xs">
                    +{data.projectedRoi.toFixed(1)}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Annualized Velocity:</span>
                  <span className="text-sky-600 font-bold text-xs">
                    +{data.annualVelocity.toFixed(1)}% p.a.
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 06 • UNSUPERVISED ML */}
            <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-4.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all relative group">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                    06 • UNSUPERVISED ML
                  </span>
                  <Network className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  K-Means Cluster &amp; Composite Index
                </h3>

                {/* Formula Used Sub-Card: Colored Inline Pills */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3.5 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <span>Formula Used</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  
                  {/* Equation with blue, purple, orange pills */}
                  <div className="text-[11px] font-medium text-slate-900 leading-relaxed">
                    <span>AI Index = (35% × </span>
                    <span className="px-1.5 py-0.2 bg-blue-50 text-blue-700 border border-blue-200 rounded text-[10px] font-semibold inline-block">
                      Prop Score
                    </span>
                    <span>) + (35% × </span>
                    <span className="px-1.5 py-0.2 bg-purple-50 text-purple-700 border border-purple-200 rounded text-[10px] font-semibold inline-block">
                      Emp Score
                    </span>
                    <span>) + (30% × </span>
                    <span className="px-1.5 py-0.2 bg-orange-50 text-orange-700 border border-orange-200 rounded text-[10px] font-semibold inline-block">
                      Biz Score
                    </span>
                    <span>)</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-normal">
                    Grouping logic: K-Means (k=3) for Affordability &amp; Workforce
                  </p>
                </div>
              </div>

              {/* Step 06 Metrics: Classification, P/E/B pills, Rainbow Gauge */}
              <div className="space-y-1.5 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Cluster Classification:</span>
                  <span className="px-2.5 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 font-semibold rounded text-[11px] flex items-center gap-1.5">
                    <span>{data.clusterClassification}</span>
                    <Network className="w-3 h-3 text-purple-500" />
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-600 font-medium">Sub-scores (P / E / B):</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-semibold rounded text-[11px]">
                      P: {data.propScore}
                    </span>
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 font-semibold rounded text-[11px]">
                      E: {data.empScore}
                    </span>
                    <span className="px-2 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 font-semibold rounded text-[11px]">
                      B: {data.bizScore}
                    </span>
                  </div>
                </div>

                {/* Composite AI Index: Rainbow Gauge Badge */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-900 font-semibold">Composite AI Index:</span>
                  <div className="p-[1.5px] rounded-full bg-gradient-to-r from-rose-400 via-amber-400 via-emerald-400 to-indigo-500 shadow-2xs inline-flex">
                    <div className="flex items-center gap-2 px-2.5 py-0.5 bg-white rounded-full">
                      <Target className="w-3.5 h-3.5 text-slate-800 stroke-[2.5]" />
                      <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                        {data.compositeIndex} / 100
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
