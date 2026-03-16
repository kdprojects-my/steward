/* ============================================================
   services.js — Module 5: Expandable Service Cards
   Steward Oversight Platform
   ============================================================ */

const SERVICES_DATA = [
  {
    num: '01',
    title: 'Deal sourcing & initial screening',
    body: 'Steward\'s team proactively identifies and screens early-stage companies — ensuring only qualified, IP-protected opportunities reach the family office network.',
    detail: 'Steward operates a two-track sourcing model: inbound applications through the platform, and proactive outreach by Steward\'s expert team. Every company must pass Steward\'s initial review before advancing to the law firm\'s independent IP and science assessment.',
    points: ['Proactive outreach to promising early-stage companies', 'Expert initial review by Steward\'s team', 'Filed IP ownership is a minimum requirement', '2-page executive summary required to qualify', 'Only qualified companies advance to law firm', 'Consistent eligibility criteria applied throughout']
  },
  {
    num: '02',
    title: 'Internal financial review & reporting',
    body: 'Steward conducts a semi-annual internal review of each portfolio company\'s financials and delivers a consolidated report to all family office investors.',
    detail: 'Twice a year, Steward reviews each company\'s financial performance, organises supporting documentation, and delivers a single consolidated report to all investors. Steward provides internal oversight — ensuring records are structured, complete, and ready for any internal review the family office may require.',
    points: ['Semi-annual internal financial review per company', 'Single consolidated report for all investors', 'Budget performance and variance analysis included', 'Documents structured and organised for internal review', 'Historical reporting archive maintained by Steward', 'Delivered on a fixed, pre-agreed schedule']
  },
  {
    num: '03',
    title: 'Budget oversight & financial controls',
    body: 'Steward monitors each company\'s budget against its approved plan — ensuring capital is deployed according to the agreed plan at all times.',
    detail: 'Steward reviews each company\'s financial performance against its approved budget on a regular basis. Any material variance is flagged to investors promptly. Steward ensures funds are allocated strictly according to the approved budget — capital cannot be deployed outside the agreed plan.',
    points: ['Ongoing budget monitoring against approved plan', 'Variance analysis with prompt investor notification', 'Capital deployment tracked against agreed milestones', 'Funds allocated strictly per approved budget', 'Tranche releases linked to milestone achievement', 'Companies supported in maintaining financial discipline']
  },
  {
    num: '04',
    title: 'Escrow management',
    body: 'All committed capital is managed by Steward\'s retained escrow attorney — released only when a company\'s full funding goal is reached.',
    detail: 'Steward retains an escrow attorney to manage a dedicated escrow account for each portfolio company. Capital committed by family offices is held securely until the full funding target is met. If a company does not reach its goal, all committed capital is returned in full.',
    points: ['Dedicated escrow account per portfolio company', 'Managed by Steward\'s retained escrow attorney', 'Capital held until full funding goal is met', 'Full return of funds if goal is not reached', 'Real-time funding progress visible to all parties', 'Release authorised only upon full funding confirmation']
  },
  {
    num: '05',
    title: 'Milestone reporting',
    body: 'Steward tracks each company\'s progress against agreed milestones quarterly — with a deeper review included in each semi-annual report.',
    detail: 'At the time of funding, each company and Steward agree on a milestone framework. Progress is assessed quarterly and a concise update is shared with all investors. Any material deviation is flagged promptly. Semi-annual reports include a fuller milestone review alongside the financial summary.',
    points: ['Milestone framework agreed at funding close', 'Quarterly progress check-ins per company', 'Deviations flagged to investors promptly', 'Deeper milestone review in semi-annual report', 'Milestone achievement tied to tranche releases', 'Full milestone history maintained throughout']
  },
  {
    num: '06',
    title: 'Advisory services',
    body: 'Steward actively helps portfolio companies identify and fill operational gaps — from accounting and legal to cGMP manufacturing and clinical assistance.',
    detail: 'Early-stage companies often face significant operational and administrative gaps. Steward identifies what is missing and connects companies with the right resources — whether internal guidance or the right consultant. Support areas include accounting, legal, cap table management, cGMP manufacturing, clinical trial assistance, and more.',
    points: ['Advisory access between board meetings', 'Identifies missing operational capabilities', 'Connects companies with appropriate consultants', 'Accounting, legal, and cap table support', 'cGMP manufacturing and clinical assistance', 'Steward acts as a neutral, independent resource']
  }
];

let activeServiceIdx = null;

function initServices() {
  renderServices();
}

function toggleService(i) {
  const panel = document.getElementById('detailExpand');
  if (!panel) return;

  if (activeServiceIdx === i) {
    activeServiceIdx = null;
    panel.classList.remove('visible');
    renderServices();
    return;
  }

  activeServiceIdx = i;
  const s = SERVICES_DATA[i];

  const tagEl = document.getElementById('expandTag');
  const titleEl = document.getElementById('expandTitle');
  const bodyEl = document.getElementById('expandBody');
  const pointsEl = document.getElementById('expandPoints');

  if (tagEl)    tagEl.textContent   = `Service ${s.num}`;
  if (titleEl)  titleEl.textContent = s.title;
  if (bodyEl)   bodyEl.textContent  = s.detail;
  if (pointsEl) pointsEl.innerHTML  = s.points.map(p =>
    `<div class="expand-point"><div class="expand-dot"></div>${p}</div>`
  ).join('');

  panel.classList.add('visible');
  renderServices();
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.map((s, i) => `
    <div class="svc-card ${activeServiceIdx === i ? 'active' : ''}" onclick="toggleService(${i})">
      <div class="svc-num">${s.num}</div>
      <div class="svc-title">${s.title}</div>
      <div class="svc-body">${s.body}</div>
    </div>`).join('');
}
