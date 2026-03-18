/* ============================================================
   workflow.js — Module 3: Three-Perspective Workflow
   Steward Oversight Platform
   ============================================================ */

const WORKFLOW_DATA = {
  biotech: [
    {
      label: 'Initial screening',
      tag: 'Step 1 — Biotech',
      title: 'Apply and qualify through initial screening',
      body: 'Submit a 2-page executive summary to Steward to determine if you qualify. This single document should contain everything needed for an initial assessment — all key information is expected to fit within two pages.',
      extra: 'req_grid',
      points: []
    },
    {
      label: 'IP & science review',
      tag: 'Step 2 — Biotech',
      title: 'Your IP and science is independently evaluated',
      body: 'The partnering law firm conducts an independent review of your intellectual property, scientific approach, and deal terms — providing an objective assessment for prospective investors.',
      points: ['Patent attorney reviews IP position and freedom to operate', 'Scientific advisory team evaluates the research foundation', 'Deal terms reviewed for structure and investor fairness', 'Findings summarised in a standardised review report']
    },
    {
      label: 'Deal terms set',
      tag: 'Step 3 — Biotech',
      title: 'Terms structured and presented to investors',
      body: 'Once the review is complete, investment terms are finalised. Family offices are presented with the opportunity alongside the law firm\'s independent review.',
      points: ['Investment terms structured with legal guidance', 'Steward prepares a standardised investor brief', 'Family offices invited to commit at ~$50K–$250K per position', 'Funding goal established with a defined close date']
    },
    {
      label: 'Escrow & funding goal',
      tag: 'Step 4 — Biotech',
      title: 'Capital held in escrow until your goal is reached',
      body: 'Committed capital from family offices is held in escrow by Steward. Funds are only released to the company once the full funding goal has been met — protecting both parties. Your funding goal is reached by combining multiple ~$50K–$250K commitments from different family offices.',
      points: ['No capital accessed until funding threshold is reached', 'Escrow managed by Steward\'s retained escrow attorney', 'Real-time funding progress visible to all parties', 'Full goal reached → funds released to company']
    },
    {
      label: 'Ongoing oversight',
      tag: 'Step 5 — Biotech',
      title: 'Internal oversight begins from day one of funding',
      body: 'Once funded, Steward provides structured internal oversight. A flat fee — paid by the company after commitment — covers financial supervision, reporting, budget oversight, and advisory services.',
      points: ['Semi-annual internal financial review', 'Quarterly milestone check-ins', 'Flat fee covers all Steward oversight services', 'Advisory access and operational support available']
    },
    {
      label: 'Milestone reporting',
      tag: 'Step 6 — Biotech',
      title: 'Milestones tracked and reported transparently',
      body: 'Steward maintains a milestone framework agreed at the time of funding. Progress against each milestone is reported to investors, building trust and demonstrating momentum.',
      points: ['Milestones defined collaboratively at funding close', 'Quarterly progress check-ins per company', 'Steward flags any material deviations promptly', 'Milestone achievement unlocks next budget tranche']
    },
    {
      label: 'Exit & liquidity',
      tag: 'Step 7 — Biotech',
      title: 'Structured pathway to exit or follow-on funding',
      body: 'As the company matures, Steward supports the transition to a liquidity event — whether that\'s an acquisition, IPO, or follow-on institutional round.',
      points: ['Steward coordinates with legal counsel on exit structure', 'Investor communications managed through the platform', 'Final financial review and reporting delivered at exit', 'Portfolio dashboard updated to reflect completed position']
    }
  ],

  family: [
    {
      label: 'Receive curated deal flow',
      tag: 'Step 1 — Family Office',
      title: 'Steward-curated deal flow, independently verified',
      body: 'Every company presented to family offices has already cleared two filters: Steward\'s own initial expert review, and the law firm\'s independent IP and science assessment. You only see opportunities that have earned their place.',
      extra: 'trust_badge',
      points: ['Steward\'s sourcing team actively identifies and screens companies', 'Inbound applicants pass Steward\'s initial screening and qualification', 'Only qualified companies proceed to law firm assessment', 'You receive a standardised brief — never unfiltered deal flow']
    },
    {
      label: 'Law firm final review',
      tag: 'Step 2 — Family Office',
      title: 'Law firm provides final sign-off before you invest',
      body: 'Before committing capital, the law firm delivers a final review of deal terms and IP — giving your money manager an independent professional opinion to rely on.',
      points: ['Patent attorney confirms IP validity and deal structure', 'Review document provided directly to family office', 'Terms assessed for investor protections and fairness', 'Basis for confident capital commitment']
    },
    {
      label: 'Commit capital',
      tag: 'Step 3 — Family Office',
      title: 'Commit ~$50K–$250K per position — directly, not through a fund',
      body: 'Capital commitments are made directly to each company\'s escrow — no fund manager, no management fee, no blind pool. You know exactly where every dollar is going. Each company\'s full funding goal is reached by aggregating multiple ~$50K–$250K per position commitments from different family offices.',
      points: ['~$50K–$250K per position across up to 15 companies', 'Direct investment — full visibility into each holding', 'Capital held in Steward-managed escrow until goal is met', '~$2M total deployed over a two-year window']
    },
    {
      label: 'Escrow confirmation',
      tag: 'Step 4 — Family Office',
      title: 'Your capital is protected until the funding goal is reached',
      body: 'Committed funds are held securely in escrow. If a company fails to reach its funding goal, capital is returned in full — eliminating the risk of underfunded investments.',
      points: ['Escrow managed by Steward\'s retained escrow attorney', 'Capital returned if funding goal is not reached', 'Full funding confirmation before any release', 'Immediate notification at every stage']
    },
    {
      label: 'Ongoing reporting',
      tag: 'Step 5 — Family Office',
      title: 'Consolidated reporting across your entire portfolio',
      body: 'Rather than tracking 15 companies individually, Steward delivers a single consolidated report covering all your portfolio positions — organised and structured for internal review on a defined schedule.',
      points: ['Semi-annual consolidated internal financial review', 'Budget performance and variance analysis per company', 'Quarterly milestone status across all holdings', 'Documents structured for your internal review needs']
    },
    {
      label: 'Milestone visibility',
      tag: 'Step 6 — Family Office',
      title: 'Track progress against defined milestones',
      body: 'Every company in the portfolio has defined milestones agreed at funding close. Steward monitors and reports against these — so you always know where each company stands.',
      points: ['Quarterly progress check-ins per company', 'Deviations flagged to investors promptly', 'Deeper milestone review in semi-annual report', 'Tranche releases tied to milestone achievement']
    },
    {
      label: 'Exit & returns',
      tag: 'Step 7 — Family Office',
      title: 'Portfolio outcomes over a 10-year horizon',
      body: 'The majority of early-stage companies will not succeed — this is expected and built into the model. The portfolio is designed so that a small number of breakout performers drive exceptional aggregate returns over a 10-year horizon, with capped downside of ~$50K–$250K per position.',
      points: ['Full exit reporting and final review per position', 'Portfolio performance summary at each liquidity event', 'Steward coordinates all investor communications at exit', 'Reinvestment options presented for returned capital']
    }
  ],

  steward: [
    {
      label: 'Source & screen companies',
      tag: 'Step 1 — Steward',
      title: 'Two-track deal sourcing with expert initial review',
      body: 'Steward operates both an inbound application platform and a proactive sourcing function. All applicants must submit a qualifying 2-page executive summary and demonstrate filed IP they control before advancing.',
      extra: 'two_track',
      points: ['Proactive outreach to identified early-stage companies', 'Expert initial review conducted by Steward\'s team', 'Inbound applications screened against qualification criteria including filed IP', 'Only qualified companies advance to law firm assessment']
    },
    {
      label: 'Coordinate IP review',
      tag: 'Step 2 — Steward',
      title: 'Steward coordinates the law firm\'s review process',
      body: 'Steward manages the relationship with the partnering law firm — ensuring IP, science, and deal terms are reviewed consistently and delivered to family offices in a standardised format.',
      points: ['Law firm briefed with full application materials', 'Review timeline managed and communicated to all parties', 'Standardised review report template enforced', 'Findings delivered to family office pipeline']
    },
    {
      label: 'Structure the deal',
      tag: 'Step 3 — Steward',
      title: 'Steward prepares the investor brief and terms',
      body: 'Once legal review is complete, Steward prepares the standardised investor brief and coordinates with the law firm to finalise deal terms before presenting to the family office group.',
      points: ['Investor brief prepared using a consistent format', 'Funding goal and close date established', 'Deal terms reviewed for investor protection provisions', 'Brief distributed to family office network']
    },
    {
      label: 'Manage escrow',
      tag: 'Step 4 — Steward',
      title: 'Steward holds and manages all escrow accounts',
      body: 'Capital committed by family offices flows into Steward-managed escrow. Steward monitors funding progress, notifies all parties in real time, and releases funds upon goal completion.',
      points: ['Separate escrow account per portfolio company', 'Managed by Steward\'s retained escrow attorney', 'Real-time funding progress tracked and reported', 'Release authorised only upon full funding confirmation']
    },
    {
      label: 'Internal oversight',
      tag: 'Step 5 — Steward',
      title: 'Active financial supervision and operational oversight',
      body: 'From day one of funding, Steward provides active internal oversight — reviewing financials, monitoring budgets, advising on operational gaps, and ensuring capital is deployed according to the approved plan.',
      points: ['Semi-annual internal financial review per company', 'Budget monitoring and variance analysis', 'Identifies missing operational capabilities — accounting, legal, cap table, cGMP, clinical', 'Connects companies with appropriate consultants as needed']
    },
    {
      label: 'Milestone management',
      tag: 'Step 6 — Steward',
      title: 'Steward monitors and reports on all milestones',
      body: 'Steward maintains a milestone registry for each portfolio company — tracking progress, flagging deviations, and releasing budget tranches as milestones are achieved.',
      points: ['Milestone framework agreed at funding close', 'Quarterly progress check-ins per company', 'Material deviations flagged to investors promptly', 'Tranche approvals managed through the oversight process']
    },
    {
      label: 'Exit coordination',
      tag: 'Step 7 — Steward',
      title: 'Steward manages all exit and liquidity processes',
      body: 'At exit, Steward coordinates with legal counsel, prepares the final internal review, manages investor communications, and ensures a clean, well-documented close to each portfolio position.',
      points: ['Final internal review and closing report per company', 'Investor communications managed through the platform', 'Coordination with legal counsel on exit mechanics', 'Portfolio updated — position marked complete']
    }
  ]
};

const TWO_TRACK_HTML = `
  <div class="two-track">
    <div class="track-box track-inbound">
      <div class="track-label track-label-in">Inbound applications</div>
      <div class="track-desc">Early-stage companies discover Steward and apply directly through the platform at any time.</div>
    </div>
    <div class="track-box track-proactive">
      <div class="track-label track-label-pro">Proactive sourcing</div>
      <div class="track-desc">Steward's team actively identifies promising companies, conducts an initial expert review, and invites them into the process.</div>
    </div>
  </div>`;

const TRUST_BADGE_HTML = `
  <div class="trust-badge">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z" stroke="rgba(200,146,42,0.7)" stroke-width="0.8" stroke-linejoin="round"/>
      <path d="M5 8l2 2 4-3" stroke="rgba(200,146,42,0.9)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="trust-badge-text">Every company you see has passed two filters — Steward's initial expert review, then the law firm's independent IP and science assessment.</span>
  </div>`;

const REQ_GRID_HTML = `
  <div class="gate-badge">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z" stroke="rgba(200,146,42,0.7)" stroke-width="0.8" stroke-linejoin="round"/>
      <path d="M5 8l2 2 4-3" stroke="rgba(200,146,42,0.9)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="gate-badge-text">Minimum to qualify: filed IP that you have control over</span>
  </div>
  <div class="req-section-title">2-page executive summary must include</div>
  <div class="req-two-col">
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Product summary</strong>Description of the product, technology, or therapy</div></div>
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Team summary</strong>Key members, credentials, and expertise</div></div>
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Amount required</strong>Total funding sought and deployment timeline</div></div>
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Study results</strong>Animal / human study results supporting the science</div></div>
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Use of funds</strong>How capital will be allocated across the business</div></div>
    <div class="req-row"><div class="req-check"><div class="req-check-inner"></div></div><div class="req-row-text"><strong>Objective of funding</strong>Specific milestones this round is designed to achieve</div></div>
  </div>`;

let wfTab = 'biotech';
let wfStep = 0;

function initWorkflow() {
  // Tab buttons
  document.querySelectorAll('.wf-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wfTab = btn.dataset.tab;
      wfStep = 0;
      document.querySelectorAll('.wf-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWorkflow();
    });
  });
  renderWorkflow();
}

function wfNavigate(dir) {
  const len = WORKFLOW_DATA[wfTab].length;
  wfStep = Math.max(0, Math.min(len - 1, wfStep + dir));
  renderWorkflow();
}

function wfSelectStep(i) {
  wfStep = i;
  renderWorkflow();
}

function renderWorkflow() {
  const data = WORKFLOW_DATA[wfTab];
  const s = data[wfStep];
  const len = data.length;

  // Step list
  const listEl = document.getElementById('wfStepList');
  if (listEl) {
    listEl.innerHTML = data.map((item, i) => `
      <div class="step-item ${i === wfStep ? 'active' : i < wfStep ? 'done' : ''}" onclick="wfSelectStep(${i})">
        <div class="step-num-wrap">
          ${i < wfStep
            ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="rgba(200,146,42,0.7)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            : `<span class="step-num">${String(i + 1).padStart(2, '0')}</span>`
          }
        </div>
        <span class="step-text">${item.label}</span>
      </div>`).join('');
  }

  // Detail bg number
  const bgNum = document.getElementById('wfDetailNum');
  if (bgNum) bgNum.textContent = wfStep + 1;

  // Extra content
  let extraHTML = '';
  if (s.extra === 'two_track') extraHTML = TWO_TRACK_HTML;
  if (s.extra === 'trust_badge') extraHTML = TRUST_BADGE_HTML;
  if (s.extra === 'req_grid') extraHTML = REQ_GRID_HTML;

  const pointsHTML = s.points.length
    ? `<div class="detail-points">${s.points.map(p => `<div class="detail-point"><div class="point-dot"></div>${p}</div>`).join('')}</div>`
    : '';

  const contentEl = document.getElementById('wfDetailContent');
  if (contentEl) {
    contentEl.innerHTML = `
      <div class="fade-in">
        <span class="detail-tag">${s.tag}</span>
        <h3 class="detail-title">${s.title}</h3>
        <p class="detail-body">${s.body}</p>
        ${extraHTML}
        ${pointsHTML}
      </div>`;
  }

  // Progress dots
  const progressEl = document.getElementById('wfProgress');
  if (progressEl) {
    progressEl.innerHTML = data.map((_, i) =>
      `<div class="prog-dot ${i === wfStep ? 'active' : i < wfStep ? 'done' : ''}"></div>`
    ).join('');
  }

  // Nav buttons
  const prevBtn = document.getElementById('wfPrev');
  const nextBtn = document.getElementById('wfNext');
  if (prevBtn) prevBtn.disabled = wfStep === 0;
  if (nextBtn) nextBtn.disabled = wfStep === len - 1;
}
