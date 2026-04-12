'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

interface PersonAlloc {
  name: string;
  role: string;
  monthlyCost: number;
  // allocation % per business line
  classroom: number;
  photobooth: number;
  outsourcing: number;
  accent: number;
  festival: number;
}

// Per-person base capacity at 100% allocation
interface PersonCapacity {
  // 학원 영업: max new academies/month this person can generate
  classroomSales: number;
  // 학원 마케팅: multiplier on sales (1.0 = no effect)
  classroomMarketing: number;
  // 학원 개발: dev capacity unit (product readiness)
  classroomDev: number;
  // 외주: max projects deliverable/month
  outsourcingDelivery: number;
  // 외주 영업: max projects acquirable/month
  outsourcingSales: number;
  // 포토부스: max monthly revenue (만원)
  photoboothRevBase: number;
  // 축제: max monthly revenue (만원)
  festivalRevBase: number;
  // 악센트 오프라인 기여도 (0~1)
  accentOfflineContrib: number;
  // 악센트 온라인 기여도 (0~1)
  accentOnlineContrib: number;
}

const MONTHS = ['4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const CAP_FIELDS: { key: keyof PersonCapacity; label: string; short: string; unit: string; step: number; max: number; color: string }[] = [
  { key: 'classroomSales', label: '학원 영업력', short: '학영업', unit: '개/월', step: 0.5, max: 10, color: 'text-emerald-400' },
  { key: 'classroomMarketing', label: '학원 마케팅', short: '학마케', unit: '부스트', step: 0.1, max: 2, color: 'text-emerald-300' },
  { key: 'classroomDev', label: '학원 개발력', short: '학개발', unit: '유닛', step: 0.1, max: 3, color: 'text-emerald-200' },
  { key: 'outsourcingSales', label: '외주 영업력', short: '외영업', unit: '건/월', step: 0.1, max: 5, color: 'text-blue-400' },
  { key: 'outsourcingDelivery', label: '외주 개발력', short: '외개발', unit: '건/월', step: 0.1, max: 5, color: 'text-blue-300' },
  { key: 'photoboothRevBase', label: '포토부스 매출', short: '포토', unit: '만/월', step: 50, max: 2000, color: 'text-violet-400' },
  { key: 'festivalRevBase', label: '축제 매출', short: '축제', unit: '만/월', step: 50, max: 2000, color: 'text-rose-400' },
  { key: 'accentOfflineContrib', label: '악센트 오프', short: '악오프', unit: '기여도', step: 0.05, max: 1, color: 'text-amber-400' },
  { key: 'accentOnlineContrib', label: '악센트 온라인', short: '악온라', unit: '기여도', step: 0.05, max: 1, color: 'text-amber-300' },
];

// Default capacities
const DEFAULT_CAPACITIES: Record<string, PersonCapacity> = {
  '유재영': { classroomSales: 4, classroomMarketing: 0, classroomDev: 0, outsourcingDelivery: 0, outsourcingSales: 1.5, photoboothRevBase: 0, festivalRevBase: 0, accentOfflineContrib: 0.3, accentOnlineContrib: 0.1 },
  '유선화': { classroomSales: 0, classroomMarketing: 0.6, classroomDev: 0, outsourcingDelivery: 0, outsourcingSales: 0.3, photoboothRevBase: 0, festivalRevBase: 100, accentOfflineContrib: 0.4, accentOnlineContrib: 0.5 },
  '이동주': { classroomSales: 1, classroomMarketing: 0, classroomDev: 0, outsourcingDelivery: 0, outsourcingSales: 0.5, photoboothRevBase: 100, festivalRevBase: 100, accentOfflineContrib: 0.3, accentOnlineContrib: 0.2 },
  '김주연': { classroomSales: 0, classroomMarketing: 0, classroomDev: 1.2, outsourcingDelivery: 1.0, outsourcingSales: 0, photoboothRevBase: 0, festivalRevBase: 0, accentOfflineContrib: 0, accentOnlineContrib: 0.2 },
  '김제연': { classroomSales: 0, classroomMarketing: 0, classroomDev: 1.0, outsourcingDelivery: 0.8, outsourcingSales: 0, photoboothRevBase: 0, festivalRevBase: 0, accentOfflineContrib: 0, accentOnlineContrib: 0 },
  '김주희': { classroomSales: 1.5, classroomMarketing: 0, classroomDev: 0, outsourcingDelivery: 0, outsourcingSales: 0.5, photoboothRevBase: 500, festivalRevBase: 600, accentOfflineContrib: 0, accentOnlineContrib: 0 },
};

/* ═══════════════════════════════════════════
   MINI COMPONENTS
   ═══════════════════════════════════════════ */

function NumInput({ value, onChange, min = 0, max = 99999, step = 1, disabled = false, className = '', width = 'w-16' }: {
  value: number; onChange: (v: number) => void;
  min?: number; max?: number; step?: number; disabled?: boolean; className?: string; width?: string;
}) {
  return (
    <input
      type="number" min={min} max={max} step={step} value={value} disabled={disabled}
      onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || 0)))}
      className={`${width} text-center text-[11px] font-mono bg-slate-900/80 border border-slate-700/40 rounded px-1 py-1
        focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600/30
        disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    />
  );
}

function AllocInput({ value, onChange, isValid }: { value: number; onChange: (v: number) => void; isValid: boolean }) {
  return (
    <input
      type="number" min={0} max={100} step={5} value={value}
      onChange={(e) => onChange(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
      className={`w-11 text-center text-[10px] font-mono bg-slate-900/80 border rounded px-0.5 py-0.5
        focus:outline-none focus:ring-1 focus:ring-emerald-600/30
        ${isValid ? 'border-slate-700/40 text-slate-300' : 'border-red-600/60 text-red-300'}`}
    />
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export default function ScenarioCalculatorSlide() {
  /* ── 인력 연동 토글 ── */
  const [linkedMode, setLinkedMode] = useState(false);

  /* ── 인력별 기여도 가중치 (편집 가능) ── */
  const [capacities, setCapacities] = useState<Record<string, PersonCapacity>>(
    () => JSON.parse(JSON.stringify(DEFAULT_CAPACITIES))
  );

  const updateCapacity = useCallback((name: string, field: keyof PersonCapacity, val: number) => {
    setCapacities(prev => ({
      ...prev,
      [name]: { ...prev[name], [field]: val },
    }));
  }, []);

  const resetCapacities = useCallback(() => {
    setCapacities(JSON.parse(JSON.stringify(DEFAULT_CAPACITIES)));
  }, []);

  /* ── 인력 배치 ── */
  const [people, setPeople] = useState<PersonAlloc[]>([
    { name: '유재영', role: 'CEO/영업', monthlyCost: 400, classroom: 60, photobooth: 0, outsourcing: 10, accent: 20, festival: 10 },
    { name: '유선화', role: 'CMO/마케팅', monthlyCost: 300, classroom: 40, photobooth: 0, outsourcing: 0, accent: 60, festival: 0 },
    { name: '이동주', role: '재무/운영', monthlyCost: 300, classroom: 20, photobooth: 10, outsourcing: 20, accent: 40, festival: 10 },
    { name: '김주연', role: 'CTO/개발', monthlyCost: 400, classroom: 80, photobooth: 0, outsourcing: 20, accent: 0, festival: 0 },
    { name: '김제연', role: '개발', monthlyCost: 350, classroom: 70, photobooth: 0, outsourcing: 30, accent: 0, festival: 0 },
    { name: '김주희', role: '영업/행사', monthlyCost: 250, classroom: 10, photobooth: 40, outsourcing: 0, accent: 0, festival: 50 },
  ]);

  const updatePerson = useCallback((idx: number, field: keyof PersonAlloc, val: number) => {
    setPeople(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  }, []);

  /* ── 글로벌 설정 ── */
  const [startingCash, setStartingCash] = useState(10000);
  const [additionalFixedCost, setAdditionalFixedCost] = useState(500);
  const [classroomPrice, setClassroomPrice] = useState(5);
  const [classroomChurnRate, setClassroomChurnRate] = useState(5);
  const [classroomStartAcademies, setClassroomStartAcademies] = useState(0);
  const [outsourcingAvgPrice, setOutsourcingAvgPrice] = useState(500);
  const [accentOfflineBase, setAccentOfflineBase] = useState(1500);
  const [accentOnlineBase, setAccentOnlineBase] = useState(100);
  const [accentEndMonthIdx, setAccentEndMonthIdx] = useState(3); // 0-based: 3 = 7월까지 유지

  /* ── 월별 수동 입력값 (인력연동 OFF일 때 사용) ── */
  const [manualClassroomNew, setManualClassroomNew] = useState([3, 5, 7, 10, 10, 10, 13, 12, 10]);
  const [manualOutsourcingCount, setManualOutsourcingCount] = useState([0.5, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1]);
  const [manualPhotoboothRev, setManualPhotoboothRev] = useState([0, 0, 300, 300, 500, 500, 300, 300, 200]);
  const [manualFestivalRev, setManualFestivalRev] = useState([0, 100, 200, 200, 300, 300, 200, 200, 100]);

  const setMonthVal = useCallback((setter: React.Dispatch<React.SetStateAction<number[]>>, idx: number, val: number) => {
    setter(prev => { const next = [...prev]; next[idx] = val; return next; });
  }, []);

  /* ── 인력 연동 시 계산되는 값 ── */
  const linkedValues = useMemo(() => {
    if (!linkedMode) return null;

    const classroomNew: number[] = [];
    const outsourcingCount: number[] = [];
    const photoboothRev: number[] = [];
    const festivalRev: number[] = [];

    for (let m = 0; m < 9; m++) {
      // 학원 신규 영업 계산
      // Sales capacity: sum of each person's classroomSales * (their classroom% / 100)
      let salesCapacity = 0;
      let marketingBoost = 1.0;
      let devReadiness = 0;
      let devRequired = 1.0; // Need at least 1.0 dev unit

      people.forEach(p => {
        const cap = capacities[p.name];
        if (!cap) return;
        salesCapacity += cap.classroomSales * (p.classroom / 100);
        marketingBoost += cap.classroomMarketing * (p.classroom / 100);
        devReadiness += cap.classroomDev * (p.classroom / 100);
      });

      // Dev readiness caps the sales (can't sell what you can't build/support)
      const devFactor = Math.min(1, devReadiness / devRequired);
      const rawClassroomSales = salesCapacity * marketingBoost * devFactor;
      classroomNew.push(Math.round(rawClassroomSales * 10) / 10);

      // 외주 계산
      let outsourcingSalesCapacity = 0;
      let outsourcingDeliveryCapacity = 0;

      people.forEach(p => {
        const cap = capacities[p.name];
        if (!cap) return;
        outsourcingSalesCapacity += cap.outsourcingSales * (p.outsourcing / 100);
        outsourcingDeliveryCapacity += cap.outsourcingDelivery * (p.outsourcing / 100);
      });

      // Can only do min(what you can sell, what you can deliver)
      const rawOutsourcing = Math.min(outsourcingSalesCapacity, outsourcingDeliveryCapacity);
      outsourcingCount.push(Math.round(rawOutsourcing * 10) / 10);

      // 포토부스 계산
      let pbRev = 0;
      people.forEach(p => {
        const cap = capacities[p.name];
        if (!cap) return;
        pbRev += cap.photoboothRevBase * (p.photobooth / 100);
      });
      photoboothRev.push(Math.round(pbRev));

      // 축제/행사 계산
      let festRev = 0;
      people.forEach(p => {
        const cap = capacities[p.name];
        if (!cap) return;
        festRev += cap.festivalRevBase * (p.festival / 100);
      });
      festivalRev.push(Math.round(festRev));
    }

    return { classroomNew, outsourcingCount, photoboothRev, festivalRev };
  }, [linkedMode, people, capacities]);

  /* ── 최종 사용 값 (연동 or 수동) ── */
  const effectiveClassroomNew = linkedMode && linkedValues ? linkedValues.classroomNew : manualClassroomNew;
  const effectiveOutsourcing = linkedMode && linkedValues ? linkedValues.outsourcingCount : manualOutsourcingCount;
  const effectivePhotobooth = linkedMode && linkedValues ? linkedValues.photoboothRev : manualPhotoboothRev;
  const effectiveFestival = linkedMode && linkedValues ? linkedValues.festivalRev : manualFestivalRev;

  /* ── 월별 결과 계산 ── */
  const totalMonthlyCost = useMemo(() =>
    people.reduce((s, p) => s + p.monthlyCost, 0) + additionalFixedCost
  , [people, additionalFixedCost]);

  const results = useMemo(() => {
    const res: {
      month: string;
      newAcademies: number;
      churnedAcademies: number;
      cumAcademies: number;
      classroomMRR: number;
      outsourcingProjects: number;
      outsourcingRev: number;
      photoboothRev: number;
      festivalRev: number;
      accentOffline: number;
      accentOnline: number;
      totalRevenue: number;
      fixedCost: number;
      profitLoss: number;
      cash: number;
    }[] = [];

    let cumAcademies = classroomStartAcademies;
    let cash = startingCash;

    for (let i = 0; i < 9; i++) {
      const newAcademies = Math.round(effectiveClassroomNew[i]);
      cumAcademies += newAcademies;
      const churned = Math.round(cumAcademies * (classroomChurnRate / 100));
      cumAcademies = Math.max(0, cumAcademies - churned);
      const classroomMRR = cumAcademies * classroomPrice;

      const outsourcingProjects = effectiveOutsourcing[i];
      const outsourcingRev = Math.round(outsourcingProjects * outsourcingAvgPrice);

      const photoboothRev = effectivePhotobooth[i];
      const festivalRev = effectiveFestival[i];

      const isAccentActive = i <= accentEndMonthIdx;
      const accentOff = isAccentActive ? accentOfflineBase : 0;
      const accentOn = isAccentActive ? accentOnlineBase : 0;

      const totalRevenue = classroomMRR + outsourcingRev + photoboothRev + festivalRev + accentOff + accentOn;
      const fixedCost = totalMonthlyCost;
      const profitLoss = totalRevenue - fixedCost;
      cash += profitLoss;

      res.push({
        month: MONTHS[i],
        newAcademies,
        churnedAcademies: churned,
        cumAcademies,
        classroomMRR,
        outsourcingProjects,
        outsourcingRev,
        photoboothRev,
        festivalRev,
        accentOffline: accentOff,
        accentOnline: accentOn,
        totalRevenue,
        fixedCost,
        profitLoss,
        cash,
      });
    }
    return res;
  }, [effectiveClassroomNew, effectiveOutsourcing, effectivePhotobooth, effectiveFestival,
    classroomStartAcademies, classroomChurnRate, classroomPrice, outsourcingAvgPrice,
    accentOfflineBase, accentOnlineBase, accentEndMonthIdx, startingCash, totalMonthlyCost]);

  /* ── KPI ── */
  const finalCash = results[results.length - 1]?.cash ?? 0;
  const minCash = Math.min(...results.map(r => r.cash));
  const minCashMonth = results.find(r => r.cash === minCash)?.month ?? '';
  const runway = (() => { const neg = results.findIndex(r => r.cash < 0); return neg === -1 ? 9 : neg; })();
  const bep = results.findIndex(r => r.profitLoss >= 0);
  const finalMRR = results[results.length - 1]?.classroomMRR ?? 0;
  const totalYearRev = results.reduce((s, r) => s + r.totalRevenue, 0);
  const totalYearCost = results.reduce((s, r) => s + r.fixedCost, 0);

  const fmt = (n: number) => n.toLocaleString();
  const fmtSign = (n: number) => (n >= 0 ? `+${n.toLocaleString()}` : n.toLocaleString());

  /* ── Personnel allocation validity ── */
  const personTotals = people.map(p => p.classroom + p.photobooth + p.outsourcing + p.accent + p.festival);

  /* ── Linked mode capacity preview ── */
  const capacityPreview = useMemo(() => {
    if (!linkedMode) return null;
    let salesCap = 0, mktBoost = 1.0, devReady = 0;
    let outSales = 0, outDev = 0;
    let pbRev = 0, festRev = 0;
    let accentOffCont = 0, accentOnCont = 0;

    people.forEach(p => {
      const c = capacities[p.name];
      if (!c) return;
      salesCap += c.classroomSales * (p.classroom / 100);
      mktBoost += c.classroomMarketing * (p.classroom / 100);
      devReady += c.classroomDev * (p.classroom / 100);
      outSales += c.outsourcingSales * (p.outsourcing / 100);
      outDev += c.outsourcingDelivery * (p.outsourcing / 100);
      pbRev += c.photoboothRevBase * (p.photobooth / 100);
      festRev += c.festivalRevBase * (p.festival / 100);
      accentOffCont += c.accentOfflineContrib * (p.accent / 100);
      accentOnCont += c.accentOnlineContrib * (p.accent / 100);
    });

    const devFactor = Math.min(1, devReady / 1.0);
    return {
      classroomPerMonth: Math.round(salesCap * mktBoost * devFactor * 10) / 10,
      salesCap: Math.round(salesCap * 10) / 10,
      mktBoost: Math.round(mktBoost * 100) / 100,
      devFactor: Math.round(devFactor * 100),
      outsourcingPerMonth: Math.round(Math.min(outSales, outDev) * 10) / 10,
      outSales: Math.round(outSales * 10) / 10,
      outDev: Math.round(outDev * 10) / 10,
      photoboothMonthly: Math.round(pbRev),
      festivalMonthly: Math.round(festRev),
      accentOffPct: Math.round(accentOffCont * 100),
      accentOnPct: Math.round(accentOnCont * 100),
    };
  }, [linkedMode, people, capacities]);

  /* ── Tab ── */
  const [activeTab, setActiveTab] = useState<'monthly' | 'people' | 'settings'>('monthly');

  /* ── Accent allocation summary for linked mode ── */
  const linkedAccentOff = useMemo(() => {
    if (!linkedMode) return accentOfflineBase;
    let contrib = 0;
    people.forEach(p => {
      const c = capacities[p.name];
      if (c) contrib += c.accentOfflineContrib * (p.accent / 100);
    });
    return Math.round(accentOfflineBase * Math.min(1, contrib));
  }, [linkedMode, people, capacities, accentOfflineBase]);

  const linkedAccentOn = useMemo(() => {
    if (!linkedMode) return accentOnlineBase;
    let contrib = 0;
    people.forEach(p => {
      const c = capacities[p.name];
      if (c) contrib += c.accentOnlineContrib * (p.accent / 100);
    });
    return Math.round(accentOnlineBase * Math.min(1, contrib));
  }, [linkedMode, people, capacities, accentOnlineBase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 flex items-start justify-center p-3 pt-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03),transparent_60%)]" />

      <div className="max-w-[1500px] w-full relative z-10">
        {/* ═══ HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-3"
        >
          <div>
            <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-3 py-0.5 mb-1">
              <span className="text-emerald-400 text-[10px] font-medium tracking-wider">INTERACTIVE SIMULATOR</span>
            </div>
            <h2 className="text-xl font-bold text-slate-100">시나리오 시뮬레이터</h2>
          </div>

          {/* 인력 연동 토글 */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
              linkedMode
                ? 'bg-emerald-950/50 border-emerald-600/50'
                : 'bg-slate-800/40 border-slate-700/40'
            }`}>
              <span className="text-[11px] text-slate-400">인력 배치 연동</span>
              <button
                onClick={() => setLinkedMode(!linkedMode)}
                className={`relative w-10 h-5 rounded-full transition-all ${
                  linkedMode ? 'bg-emerald-600' : 'bg-slate-600'
                }`}
              >
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                  linkedMode ? 'left-5.5' : 'left-0.5'
                }`} style={{ left: linkedMode ? '22px' : '2px' }} />
              </button>
              <span className={`text-[10px] font-bold ${linkedMode ? 'text-emerald-400' : 'text-slate-500'}`}>
                {linkedMode ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ═══ KPI CARDS ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-3"
        >
          {[
            { label: '런웨이', value: runway >= 9 ? '9개월+' : `${runway}개월`, color: runway >= 9 ? 'text-emerald-400' : runway >= 6 ? 'text-amber-400' : 'text-red-400', border: runway >= 9 ? 'border-emerald-800/40' : 'border-red-800/40' },
            { label: '12월 잔여현금', value: `${fmt(finalCash)}만`, color: finalCash > 0 ? 'text-emerald-400' : 'text-red-400', border: finalCash > 0 ? 'border-emerald-800/40' : 'border-red-800/40' },
            { label: '최저 현금', value: `${fmt(minCash)}만 (${minCashMonth})`, color: minCash > 0 ? 'text-amber-400' : 'text-red-400', border: 'border-amber-800/40' },
            { label: '12월 학원MRR', value: `${fmt(finalMRR)}만`, color: 'text-emerald-400', border: 'border-emerald-800/40' },
            { label: '손익분기', value: bep >= 0 ? MONTHS[bep] : '미도달', color: bep >= 0 ? 'text-emerald-400' : 'text-red-400', border: bep >= 0 ? 'border-emerald-800/40' : 'border-red-800/40' },
            { label: '연간 순이익', value: `${fmtSign(totalYearRev - totalYearCost)}만`, color: totalYearRev - totalYearCost >= 0 ? 'text-emerald-400' : 'text-red-400', border: totalYearRev - totalYearCost >= 0 ? 'border-emerald-800/40' : 'border-red-800/40' },
          ].map((k, i) => (
            <div key={i} className={`bg-slate-900/60 rounded-lg p-2 border ${k.border}`}>
              <p className="text-[8px] text-slate-500 mb-0.5">{k.label}</p>
              <p className={`text-sm font-bold font-mono ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </motion.div>

        {/* ═══ TABS ═══ */}
        <div className="flex bg-slate-800/30 rounded-lg p-0.5 gap-0.5 mb-2">
          {([
            { key: 'monthly', label: '월별 매출 입력', icon: '📊' },
            { key: 'people', label: '인력 배치' + (linkedMode ? ' (연동 ON)' : ''), icon: '👥' },
            { key: 'settings', label: '기본 설정', icon: '⚙️' },
          ] as const).map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`flex-1 py-1.5 rounded-md text-[11px] font-medium transition-all flex items-center justify-center gap-1 ${
                activeTab === t.key ? 'bg-slate-700 text-slate-100' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-[10px]">{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {/* ═══ TAB CONTENT ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* ────── TAB: 월별 매출 입력 ────── */}
          {activeTab === 'monthly' && (
            <div className="space-y-2">
              {/* Input grid */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="bg-slate-900/80 text-slate-400">
                        <th className="px-2 py-2 text-left font-medium sticky left-0 bg-slate-900 z-20 min-w-[130px]">항목</th>
                        {MONTHS.map(m => (
                          <th key={m} className="px-1 py-2 text-center font-medium min-w-[70px]">{m}</th>
                        ))}
                        <th className="px-2 py-2 text-center font-bold text-slate-200 min-w-[80px] bg-slate-800/40">합계</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 학원 신규 영업 */}
                      <tr className="border-t border-emerald-800/20 bg-emerald-950/10">
                        <td className="px-2 py-1.5 font-medium text-emerald-400 sticky left-0 bg-emerald-950/20 z-10">
                          학원 신규 영업 (개)
                          {linkedMode && <span className="text-[8px] text-emerald-600 ml-1">연동</span>}
                        </td>
                        {MONTHS.map((_, i) => (
                          <td key={i} className="px-1 py-1 text-center">
                            <NumInput
                              value={Math.round(effectiveClassroomNew[i] * 10) / 10}
                              onChange={(v) => setMonthVal(setManualClassroomNew, i, v)}
                              disabled={linkedMode}
                              max={50}
                              width="w-14"
                              className="text-emerald-300"
                            />
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-emerald-300 bg-slate-800/20">
                          {Math.round(effectiveClassroomNew.reduce((a, b) => a + b, 0))}
                        </td>
                      </tr>

                      {/* 학원 이탈 */}
                      <tr className="border-t border-slate-800/20">
                        <td className="px-2 py-1.5 font-medium text-red-400/70 sticky left-0 bg-slate-900/80 z-10 text-[9px]">
                          └ 이탈 (자동: {classroomChurnRate}%)
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-red-400/60 text-[9px]">
                            -{r.churnedAcademies}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono text-red-400/60 text-[9px] bg-slate-800/20">
                          -{results.reduce((s, r) => s + r.churnedAcademies, 0)}
                        </td>
                      </tr>

                      {/* 학원 누적 */}
                      <tr className="border-t border-slate-800/20">
                        <td className="px-2 py-1.5 font-medium text-emerald-300 sticky left-0 bg-slate-900/80 z-10 text-[9px]">
                          └ 누적 학원 수
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-emerald-300 font-bold text-[10px]">
                            {r.cumAcademies}개
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono text-emerald-300 font-bold text-[10px] bg-slate-800/20">
                          {results[results.length - 1]?.cumAcademies ?? 0}개
                        </td>
                      </tr>

                      {/* 학원 MRR */}
                      <tr className="border-t border-emerald-800/20 bg-emerald-950/5">
                        <td className="px-2 py-1.5 font-medium text-emerald-200 sticky left-0 bg-emerald-950/10 z-10">
                          학원 MRR (만원)
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-emerald-200 font-semibold">
                            {fmt(r.classroomMRR)}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono text-emerald-200 font-bold bg-slate-800/20">
                          {fmt(results.reduce((s, r) => s + r.classroomMRR, 0))}
                        </td>
                      </tr>

                      {/* 구분선 */}
                      <tr><td colSpan={11} className="h-1 bg-slate-800/30" /></tr>

                      {/* 외주 건수 */}
                      <tr className="bg-blue-950/10">
                        <td className="px-2 py-1.5 font-medium text-blue-400 sticky left-0 bg-blue-950/10 z-10">
                          외주 수주 (건)
                          {linkedMode && <span className="text-[8px] text-blue-600 ml-1">연동</span>}
                        </td>
                        {MONTHS.map((_, i) => (
                          <td key={i} className="px-1 py-1 text-center">
                            <NumInput
                              value={effectiveOutsourcing[i]}
                              onChange={(v) => setMonthVal(setManualOutsourcingCount, i, v)}
                              disabled={linkedMode}
                              max={10} step={0.5}
                              width="w-14"
                              className="text-blue-300"
                            />
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-blue-300 bg-slate-800/20">
                          {effectiveOutsourcing.reduce((a, b) => a + b, 0).toFixed(1)}
                        </td>
                      </tr>

                      {/* 외주 매출 */}
                      <tr className="border-t border-slate-800/20">
                        <td className="px-2 py-1.5 font-medium text-blue-200 sticky left-0 bg-slate-900/80 z-10 text-[9px]">
                          └ 외주 매출 (×{fmt(outsourcingAvgPrice)}만)
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-blue-200 text-[10px]">
                            {fmt(r.outsourcingRev)}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono text-blue-200 font-bold text-[10px] bg-slate-800/20">
                          {fmt(results.reduce((s, r) => s + r.outsourcingRev, 0))}
                        </td>
                      </tr>

                      {/* 구분선 */}
                      <tr><td colSpan={11} className="h-1 bg-slate-800/30" /></tr>

                      {/* 포토부스 */}
                      <tr className="bg-violet-950/10">
                        <td className="px-2 py-1.5 font-medium text-violet-400 sticky left-0 bg-violet-950/10 z-10">
                          포토부스 (만원)
                          {linkedMode && <span className="text-[8px] text-violet-600 ml-1">연동</span>}
                        </td>
                        {MONTHS.map((_, i) => (
                          <td key={i} className="px-1 py-1 text-center">
                            <NumInput
                              value={effectivePhotobooth[i]}
                              onChange={(v) => setMonthVal(setManualPhotoboothRev, i, v)}
                              disabled={linkedMode}
                              max={5000} step={50}
                              width="w-14"
                              className="text-violet-300"
                            />
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-violet-300 bg-slate-800/20">
                          {fmt(effectivePhotobooth.reduce((a, b) => a + b, 0))}
                        </td>
                      </tr>

                      {/* 축제 */}
                      <tr className="border-t border-slate-800/20 bg-rose-950/10">
                        <td className="px-2 py-1.5 font-medium text-rose-400 sticky left-0 bg-rose-950/10 z-10">
                          축제/행사 (만원)
                          {linkedMode && <span className="text-[8px] text-rose-600 ml-1">연동</span>}
                        </td>
                        {MONTHS.map((_, i) => (
                          <td key={i} className="px-1 py-1 text-center">
                            <NumInput
                              value={effectiveFestival[i]}
                              onChange={(v) => setMonthVal(setManualFestivalRev, i, v)}
                              disabled={linkedMode}
                              max={5000} step={50}
                              width="w-14"
                              className="text-rose-300"
                            />
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-rose-300 bg-slate-800/20">
                          {fmt(effectiveFestival.reduce((a, b) => a + b, 0))}
                        </td>
                      </tr>

                      {/* 구분선 */}
                      <tr><td colSpan={11} className="h-1 bg-slate-800/30" /></tr>

                      {/* 악센트 오프라인 */}
                      <tr className="bg-amber-950/10">
                        <td className="px-2 py-1.5 font-medium text-amber-400 sticky left-0 bg-amber-950/10 z-10">
                          악센트 오프라인 (만원)
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-amber-300">
                            {r.accentOffline > 0 ? fmt(r.accentOffline) : <span className="text-slate-600">-</span>}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-amber-300 bg-slate-800/20">
                          {fmt(results.reduce((s, r) => s + r.accentOffline, 0))}
                        </td>
                      </tr>

                      {/* 악센트 온라인 */}
                      <tr className="border-t border-slate-800/20 bg-amber-950/5">
                        <td className="px-2 py-1.5 font-medium text-amber-300/70 sticky left-0 bg-amber-950/5 z-10">
                          악센트 온라인 (만원)
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-amber-300/70">
                            {r.accentOnline > 0 ? fmt(r.accentOnline) : <span className="text-slate-600">-</span>}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-amber-300/70 bg-slate-800/20">
                          {fmt(results.reduce((s, r) => s + r.accentOnline, 0))}
                        </td>
                      </tr>

                      {/* ═══ 구분선 (굵게) ═══ */}
                      <tr><td colSpan={11} className="h-1.5 bg-slate-700/40" /></tr>

                      {/* 총 매출 */}
                      <tr className="bg-slate-800/20">
                        <td className="px-2 py-2 font-bold text-slate-100 sticky left-0 bg-slate-800/30 z-10">총 매출</td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-2 text-center font-mono font-bold text-slate-100">
                            {fmt(r.totalRevenue)}
                          </td>
                        ))}
                        <td className="px-2 py-2 text-center font-mono font-bold text-slate-100 bg-slate-700/30 text-[11px]">
                          {fmt(totalYearRev)}
                        </td>
                      </tr>

                      {/* 고정비 */}
                      <tr className="border-t border-slate-800/30">
                        <td className="px-2 py-1.5 font-medium text-red-400/70 sticky left-0 bg-slate-900/80 z-10">
                          고정비
                        </td>
                        {results.map((r, i) => (
                          <td key={i} className="px-1 py-1.5 text-center font-mono text-red-400/60">
                            {fmt(r.fixedCost)}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-center font-mono font-bold text-red-400/70 bg-slate-800/20">
                          {fmt(totalYearCost)}
                        </td>
                      </tr>

                      {/* 손익 */}
                      <tr className="border-t border-slate-700/40 bg-slate-800/10">
                        <td className="px-2 py-2 font-bold text-slate-200 sticky left-0 bg-slate-800/20 z-10">월 손익</td>
                        {results.map((r, i) => (
                          <td key={i} className={`px-1 py-2 text-center font-mono font-bold ${r.profitLoss >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {fmtSign(r.profitLoss)}
                          </td>
                        ))}
                        <td className={`px-2 py-2 text-center font-mono font-bold bg-slate-700/30 ${totalYearRev - totalYearCost >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {fmtSign(totalYearRev - totalYearCost)}
                        </td>
                      </tr>

                      {/* 잔여 현금 */}
                      <tr className="border-t-2 border-slate-600/40 bg-cyan-950/10">
                        <td className="px-2 py-2 font-bold text-cyan-300 sticky left-0 bg-cyan-950/15 z-10">잔여 현금</td>
                        {results.map((r, i) => (
                          <td key={i} className={`px-1 py-2 text-center font-mono font-bold ${
                            r.cash < 0 ? 'text-red-400 bg-red-950/20' : r.cash === minCash ? 'text-amber-400 bg-amber-950/10' : 'text-cyan-300'
                          }`}>
                            {fmt(r.cash)}
                          </td>
                        ))}
                        <td className={`px-2 py-2 text-center font-mono font-bold bg-slate-700/30 ${finalCash >= 0 ? 'text-cyan-300' : 'text-red-400'}`}>
                          {fmt(finalCash)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cash chart */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 p-3">
                <h4 className="text-[10px] font-bold text-slate-400 mb-2">현금 추이 (시작: {fmt(startingCash)}만원)</h4>
                <div className="flex items-end gap-1.5 h-16">
                  {results.map((r, i) => {
                    const maxV = Math.max(startingCash, ...results.map(x => Math.abs(x.cash)));
                    const h = Math.max(3, (Math.abs(r.cash) / maxV) * 64);
                    const isNeg = r.cash < 0;
                    const isMin = r.cash === minCash && minCash < startingCash * 0.5;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <span className={`text-[7px] font-mono mb-0.5 ${isNeg ? 'text-red-400' : 'text-slate-500'}`}>
                          {fmt(r.cash)}
                        </span>
                        <div
                          className={`w-full rounded-t transition-all ${
                            isNeg ? 'bg-red-500/60' : isMin ? 'bg-amber-500/50' : r.profitLoss >= 0 ? 'bg-emerald-500/40' : 'bg-slate-600/40'
                          }`}
                          style={{ height: `${h}px` }}
                        />
                        <span className="text-[7px] text-slate-600 mt-0.5">{MONTHS[i].replace('월', '')}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Revenue composition */}
                <div className="mt-2 pt-2 border-t border-slate-800/30">
                  <div className="flex gap-3 justify-center flex-wrap">
                    {[
                      { label: '학원AI', val: results.reduce((s, r) => s + r.classroomMRR, 0), color: 'bg-emerald-500', tc: 'text-emerald-400' },
                      { label: '외주', val: results.reduce((s, r) => s + r.outsourcingRev, 0), color: 'bg-blue-500', tc: 'text-blue-400' },
                      { label: '포토', val: results.reduce((s, r) => s + r.photoboothRev, 0), color: 'bg-violet-500', tc: 'text-violet-400' },
                      { label: '축제', val: results.reduce((s, r) => s + r.festivalRev, 0), color: 'bg-rose-500', tc: 'text-rose-400' },
                      { label: '악센트', val: results.reduce((s, r) => s + r.accentOffline + r.accentOnline, 0), color: 'bg-amber-500', tc: 'text-amber-400' },
                    ].map(x => (
                      <div key={x.label} className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-sm ${x.color}`} />
                        <span className="text-[8px] text-slate-500">{x.label}</span>
                        <span className={`text-[8px] font-mono font-bold ${x.tc}`}>{fmt(x.val)}만</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ────── TAB: 인력 배치 ────── */}
          {activeTab === 'people' && (
            <div className="space-y-2">
              {linkedMode && (
                <div className="bg-emerald-950/30 rounded-lg border border-emerald-700/30 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-300">인력 연동 모드 활성 — 배분율이 영업·매출 수치를 자동 결정합니다</span>
                  </div>
                  {capacityPreview && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      <div className="bg-slate-900/60 rounded p-2">
                        <p className="text-[8px] text-emerald-400 mb-0.5">학원 신규/월</p>
                        <p className="text-sm font-mono font-bold text-emerald-300">{capacityPreview.classroomPerMonth}개</p>
                        <p className="text-[8px] text-slate-500">영업력 {capacityPreview.salesCap} × 마케팅 {capacityPreview.mktBoost}x × 개발 {capacityPreview.devFactor}%</p>
                      </div>
                      <div className="bg-slate-900/60 rounded p-2">
                        <p className="text-[8px] text-blue-400 mb-0.5">외주/월</p>
                        <p className="text-sm font-mono font-bold text-blue-300">{capacityPreview.outsourcingPerMonth}건</p>
                        <p className="text-[8px] text-slate-500">영업 {capacityPreview.outSales} · 개발 {capacityPreview.outDev}</p>
                      </div>
                      <div className="bg-slate-900/60 rounded p-2">
                        <p className="text-[8px] text-violet-400 mb-0.5">포토부스/월</p>
                        <p className="text-sm font-mono font-bold text-violet-300">{fmt(capacityPreview.photoboothMonthly)}만</p>
                      </div>
                      <div className="bg-slate-900/60 rounded p-2">
                        <p className="text-[8px] text-rose-400 mb-0.5">축제/월</p>
                        <p className="text-sm font-mono font-bold text-rose-300">{fmt(capacityPreview.festivalMonthly)}만</p>
                      </div>
                      <div className="bg-slate-900/60 rounded p-2">
                        <p className="text-[8px] text-amber-400 mb-0.5">악센트 기여도</p>
                        <p className="text-sm font-mono font-bold text-amber-300">오프 {capacityPreview.accentOffPct}% · 온 {capacityPreview.accentOnPct}%</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Personnel grid */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="bg-slate-900/80 text-slate-400">
                        <th className="px-2 py-2 text-left font-medium min-w-[100px]">이름</th>
                        <th className="px-2 py-2 text-left font-medium min-w-[80px]">역할</th>
                        <th className="px-2 py-2 text-center font-medium">인건비</th>
                        <th className="px-2 py-2 text-center font-medium text-emerald-400">학원 %</th>
                        <th className="px-2 py-2 text-center font-medium text-violet-400">포토 %</th>
                        <th className="px-2 py-2 text-center font-medium text-blue-400">외주 %</th>
                        <th className="px-2 py-2 text-center font-medium text-amber-400">악센트 %</th>
                        <th className="px-2 py-2 text-center font-medium text-rose-400">축제 %</th>
                        <th className="px-2 py-2 text-center font-medium">합계</th>
                      </tr>
                    </thead>
                    <tbody>
                      {people.map((p, idx) => {
                        const total = personTotals[idx];
                        const isValid = total === 100;
                        return (
                          <tr key={p.name} className="border-t border-slate-800/30">
                            <td className="px-2 py-1.5 font-bold text-slate-200">{p.name}</td>
                            <td className="px-2 py-1.5 text-slate-500">{p.role}</td>
                            <td className="px-2 py-1.5 text-center">
                              <NumInput
                                value={p.monthlyCost} onChange={(v) => updatePerson(idx, 'monthlyCost', v)}
                                min={0} max={1000} step={10} width="w-14" className="text-slate-300"
                              />
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <AllocInput value={p.classroom} onChange={(v) => updatePerson(idx, 'classroom', v)} isValid={isValid} />
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <AllocInput value={p.photobooth} onChange={(v) => updatePerson(idx, 'photobooth', v)} isValid={isValid} />
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <AllocInput value={p.outsourcing} onChange={(v) => updatePerson(idx, 'outsourcing', v)} isValid={isValid} />
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <AllocInput value={p.accent} onChange={(v) => updatePerson(idx, 'accent', v)} isValid={isValid} />
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <AllocInput value={p.festival} onChange={(v) => updatePerson(idx, 'festival', v)} isValid={isValid} />
                            </td>
                            <td className={`px-2 py-1.5 text-center font-mono font-bold ${isValid ? 'text-emerald-400' : 'text-red-400'}`}>
                              {total}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-slate-700/40 bg-slate-800/20">
                        <td className="px-2 py-2 font-bold text-slate-300">합계</td>
                        <td className="px-2 py-2"></td>
                        <td className="px-2 py-2 text-center font-mono font-bold text-red-400">
                          {fmt(people.reduce((s, p) => s + p.monthlyCost, 0))}만
                        </td>
                        {(['classroom', 'photobooth', 'outsourcing', 'accent', 'festival'] as const).map(field => {
                          const weighted = people.reduce((s, p) => s + (p[field] * p.monthlyCost), 0);
                          const totalCost = people.reduce((s, p) => s + p.monthlyCost, 0);
                          const pct = totalCost > 0 ? Math.round(weighted / totalCost) : 0;
                          return (
                            <td key={field} className="px-2 py-2 text-center font-mono text-[9px] text-slate-400">
                              가중 {pct}%
                            </td>
                          );
                        })}
                        <td className="px-2 py-2"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Capacity weights editor */}
              {linkedMode && (
                <div className="bg-slate-900/60 rounded-xl border border-emerald-800/30 overflow-hidden">
                  <div className="px-3 py-2 bg-emerald-950/20 border-b border-emerald-800/30 flex items-center justify-between">
                    <div>
                      <h4 className="text-[11px] font-bold text-emerald-300">인력별 기여도 가중치 (직접 편집 가능)</h4>
                      <p className="text-[9px] text-slate-500 mt-0.5">각 인력이 해당 사업에 100% 투입 시 발생하는 최대 성과</p>
                    </div>
                    <button
                      onClick={resetCapacities}
                      className="text-[9px] px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/40 transition-colors"
                    >
                      기본값 복원
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[9px]">
                      <thead>
                        <tr className="bg-slate-900/80 text-slate-500">
                          <th className="px-2 py-1.5 text-left font-medium sticky left-0 bg-slate-900 z-10 min-w-[70px]">이름</th>
                          {CAP_FIELDS.map(f => (
                            <th key={f.key} className={`px-1 py-1.5 text-center font-medium min-w-[60px] ${f.color}`}>
                              <div>{f.short}</div>
                              <div className="text-[7px] text-slate-600 font-normal">{f.unit}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {people.map(p => (
                          <tr key={p.name} className="border-t border-slate-800/30">
                            <td className="px-2 py-1 font-bold text-slate-300 sticky left-0 bg-slate-900/80 z-10">{p.name}</td>
                            {CAP_FIELDS.map(f => (
                              <td key={f.key} className="px-0.5 py-0.5 text-center">
                                <input
                                  type="number"
                                  min={0}
                                  max={f.max}
                                  step={f.step}
                                  value={capacities[p.name]?.[f.key] ?? 0}
                                  onChange={(e) => updateCapacity(p.name, f.key, Math.max(0, Math.min(f.max, Number(e.target.value) || 0)))}
                                  className={`w-full text-center text-[10px] font-mono bg-slate-800/60 border border-slate-700/30 rounded px-0.5 py-1
                                    focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600/20
                                    ${(capacities[p.name]?.[f.key] ?? 0) > 0 ? 'text-slate-200' : 'text-slate-600'}`}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-3 py-2 bg-slate-900/40 border-t border-slate-800/30">
                    <p className="text-[8px] text-slate-500 leading-relaxed">
                      <span className="text-emerald-400 font-bold">학원 = </span>(영업력 합 × 학원%) × (1 + 마케팅 부스트 합) × min(1, 개발력 합)
                      <span className="mx-2">|</span>
                      <span className="text-blue-400 font-bold">외주 = </span>min(외영업 합, 외개발 합) × 외주%
                      <span className="mx-2">|</span>
                      <span className="text-violet-400 font-bold">포토 = </span>포토 매출 합 × 포토%
                      <span className="mx-2">|</span>
                      <span className="text-rose-400 font-bold">축제 = </span>축제 매출 합 × 축제%
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ────── TAB: 기본 설정 ────── */}
          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* 자금 */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 p-4">
                <h4 className="text-xs font-bold text-cyan-400 mb-3">자금</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">시작 보유 현금 (만원)</label>
                    <NumInput value={startingCash} onChange={setStartingCash} min={0} max={100000} step={500} width="w-full" className="text-cyan-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">추가 고정비 (사무실·서버 등, 만원/월)</label>
                    <NumInput value={additionalFixedCost} onChange={setAdditionalFixedCost} min={0} max={5000} step={50} width="w-full" className="text-red-300 text-sm py-2" />
                  </div>
                  <div className="pt-2 border-t border-slate-700/40">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">인건비 합계</span>
                      <span className="font-mono font-bold text-slate-300">{fmt(people.reduce((s, p) => s + p.monthlyCost, 0))}만/월</span>
                    </div>
                    <div className="flex justify-between text-[11px] mt-1">
                      <span className="text-slate-400">월 총 고정비</span>
                      <span className="font-mono font-bold text-red-400">{fmt(totalMonthlyCost)}만/월</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 학원 AI 설정 */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 p-4">
                <h4 className="text-xs font-bold text-emerald-400 mb-3">학원 AI 설정</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">학원당 월 구독료 (만원)</label>
                    <NumInput value={classroomPrice} onChange={setClassroomPrice} min={1} max={50} step={1} width="w-full" className="text-emerald-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">월 이탈률 (%)</label>
                    <NumInput value={classroomChurnRate} onChange={setClassroomChurnRate} min={0} max={50} step={1} width="w-full" className="text-red-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">시작 시 기존 학원 수</label>
                    <NumInput value={classroomStartAcademies} onChange={setClassroomStartAcademies} min={0} max={100} step={1} width="w-full" className="text-emerald-300 text-sm py-2" />
                  </div>
                </div>
              </div>

              {/* 외주 & 악센트 */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800/50 p-4">
                <h4 className="text-xs font-bold text-blue-400 mb-3">외주 & 악센트</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">외주 건당 평균 금액 (만원)</label>
                    <NumInput value={outsourcingAvgPrice} onChange={setOutsourcingAvgPrice} min={50} max={10000} step={50} width="w-full" className="text-blue-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">악센트 오프라인 월매출 (만원)</label>
                    <NumInput value={accentOfflineBase} onChange={setAccentOfflineBase} min={0} max={5000} step={100} width="w-full" className="text-amber-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">악센트 온라인 월매출 (만원)</label>
                    <NumInput value={accentOnlineBase} onChange={setAccentOnlineBase} min={0} max={2000} step={10} width="w-full" className="text-amber-300 text-sm py-2" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">악센트 유지 기간 (마지막 월)</label>
                    <select
                      value={accentEndMonthIdx}
                      onChange={(e) => setAccentEndMonthIdx(Number(e.target.value))}
                      className="w-full text-[11px] font-mono bg-slate-900/80 border border-slate-700/40 rounded px-2 py-2 text-amber-300 focus:border-amber-600 focus:outline-none"
                    >
                      {MONTHS.map((m, i) => (
                        <option key={i} value={i}>{m}까지 유지 → {i < 8 ? `${MONTHS[i + 1]}부터 종료` : '연말까지'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
