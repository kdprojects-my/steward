/* ============================================================
   faq.js — Module 8: FAQ Accordion
   Steward Oversight Platform
   ============================================================ */

const FAQ_DATA = [
  {
    audience: 'general',
    q: 'How is Steward\'s fee structured and what does it cover?',
    a: 'The fee is paid entirely by the portfolio company — not by the family office. There is no upfront fee and no commission. The fee begins only once the company\'s funding goal has been committed and is variable based on the level of support the company requires. A company that is largely autonomous will pay less; one that needs more hands-on assistance will pay more. The fee structure is discussed and agreed at funding close. It covers all Steward oversight services, which may include:',
    list: ['Financial supervision and budget oversight', 'Accounting and financial management support', 'Legal guidance and corporate structure assistance', 'Cap table management and equity structuring', 'Operational setup and governance best practices', 'cGMP manufacturing support and coordination', 'Clinical trial assistance and regulatory navigation', 'Consultant identification and coordination across all of the above']
  },
  {
    audience: 'family',
    q: 'How are family offices protected if a company underperforms?',
    a: 'Protection is built in at two levels. First, capital is held in Steward-managed escrow until the full funding goal is reached — if a company does not hit its target, committed capital is returned in full. Second, Steward monitors each company\'s budget and ensures funds are allocated strictly according to the approved plan. Any material deviation is flagged to investors promptly. It is important to note that the majority of early-stage companies in this asset class will not succeed — the model is designed so that a small number of breakout performers drive the aggregate portfolio return.',
    list: []
  },
  {
    audience: 'family',
    q: 'How and how often is reporting delivered?',
    a: 'Steward delivers a consolidated semi-annual internal financial review covering all portfolio positions. This includes budget performance, variance analysis, and milestone status across every holding. In addition, Steward conducts quarterly milestone check-ins per company. All documents are organised and structured for internal review purposes.',
    list: []
  },
  {
    audience: 'family',
    q: 'What happens if a company runs out of runway?',
    a: 'Steward\'s budget oversight is designed to surface runway concerns before they become critical. Funds are allocated strictly according to the approved budget — Steward ensures capital is not deployed outside the agreed plan. If a company shows signs of financial pressure, Steward works with the company on options and keeps investors informed through regular reporting and any interim notifications needed.',
    list: []
  },
  {
    audience: 'family',
    q: 'Do family offices invest directly or through a fund?',
    a: 'Entirely directly. There is no fund structure, no blind pool, and no fund manager between you and your investment. Each ~$100K commitment goes into a Steward-managed escrow account for a specific named company. A company\'s full funding goal is met by aggregating multiple ~$100K commitments from different family offices. You know exactly where every dollar is deployed.',
    list: []
  },
  {
    audience: 'family',
    q: 'Who reviews deals before they reach us?',
    a: 'Every opportunity presented to family offices has passed two independent filters. First, Steward\'s expert team conducts an initial review of the company, its science, and its IP position. Second, the partnering law firm conducts an independent IP and science assessment and reviews deal terms. The full process takes approximately 45–60 days from application.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'What is the minimum requirement to apply?',
    a: 'The minimum requirement to qualify is filed intellectual property that you have control over. You must also submit a 2-page executive summary covering your product, team, amount required, study results, use of funds, and objective of funding. Applications that do not meet the IP requirement will not advance.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'How long does the review process take?',
    a: 'Steward\'s initial screening review takes approximately 45 days from receipt of a complete application. If your application advances to the law firm\'s independent IP and science review, the full process from application to family office presentation is approximately 45–60 days. You will be notified of your status at each stage.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'What kind of support does Steward provide beyond financial oversight?',
    a: 'Steward\'s role goes well beyond financial supervision. We understand that scientists and researchers often face significant operational and administrative gaps. Steward actively helps identify what is missing and connects companies with the right resources. Support areas include:',
    list: ['Accounting and financial management', 'Legal guidance and corporate structure', 'Cap table management and equity structuring', 'Operational setup and governance', 'cGMP manufacturing standards and coordination', 'Clinical trial assistance and regulatory navigation', 'Consultant identification across all of the above']
  },
  {
    audience: 'biotech',
    q: 'When are funds released to our company?',
    a: 'Funds are held in a Steward-managed escrow account and released only when your full funding goal has been reached. Your goal is met by aggregating multiple ~$100K commitments from different family offices. Once released, Steward ensures that funds are deployed strictly according to the approved budget plan.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'Can we apply if we have already received some funding?',
    a: 'Yes. Prior funding — whether from grants, angel investors, or other sources — does not disqualify you. You will be asked to disclose your current investors and funding history as part of the application. Steward evaluates each application on the strength of the science, IP, team, and plan.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'Are there cap table management requirements once funding is committed?',
    a: 'Yes. Once funding is committed, portfolio companies are required to maintain a professionally managed cap table using a recognised platform such as Carta or equivalent. Companies must certify the number of shares issued to each investor, ensure all equity issuances are accurately recorded, and provide Steward with confirmation that investor equity has been properly documented. These requirements remain in effect throughout the investment period and are a condition of the ongoing oversight relationship.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'What financial records and accounting access does Steward require?',
    a: 'As part of its oversight mandate, Steward requires view-only access to the company\'s accounting system — such as QuickBooks Online — or a maintained shared drive containing bank statements and accounts reconciliation records. All financial records must be current, meaning dated within the last 30 days. Steward may conduct spot checks of accounting books at any time. Failure to maintain current records or provide the required access may result in the suspension of further capital distributions.',
    list: []
  },
  {
    audience: 'biotech',
    q: 'Can we make changes to our approved budget after funding is released?',
    a: 'Material budget changes require prior review and approval by Steward. Any increase exceeding 20% in a single budget line requires a formal waiver with written justification before the increase is incurred — for example, if animal studies were budgeted at $500K and costs are projected to reach $600K, a waiver must be submitted and approved. Salary increases are capped at 3% annually; any compensation increase above this threshold also requires a waiver with explanation. These controls exist to protect investor capital and ensure funds are deployed as represented at the time of commitment.',
    list: []
  },
  {
    audience: 'general',
    q: 'Is Steward a for-profit or non-profit entity?',
    a: 'Steward is structured as a non-profit entity. This is fundamental to the model — Steward\'s mission is to provide professional oversight infrastructure that makes direct early-stage biotech investment viable, not to generate profit from transactions. The variable monthly fee from portfolio companies covers Steward\'s operating costs.',
    list: []
  },
  {
    audience: 'general',
    q: 'What is the realistic expectation for portfolio outcomes?',
    a: 'Transparency is central to the Steward model. The majority of early-stage biotech companies in any portfolio will not succeed — a 60% or higher failure rate is a realistic and widely accepted industry benchmark. The model is designed with this in mind: approximately ~$100K per position across ~20 companies means the aggregate outcome is driven by the one or two breakout performers. Investors who understand this dynamic and have a 10-year horizon are best positioned to benefit.',
    list: []
  },
  {
    audience: 'general',
    q: 'What sectors does Steward focus on?',
    a: 'Steward focuses on early-stage companies in three sectors: biotechnology, healthcare, and medical devices. The programme is open to pre-clinical and early clinical stage companies. Diagnostics and other life science sub-sectors may also be considered on a case-by-case basis.',
    list: []
  },
  {
    audience: 'general',
    q: 'Who are Steward\'s legal and professional partners?',
    a: 'Steward works with a partnering law firm that provides independent IP review, scientific assessment, and deal term evaluation for every qualifying application. Steward also retains an escrow attorney to manage capital commitments. Partner details are available upon request.',
    list: []
  }
];

let faqTab = 'all';
let faqOpenIdx = null;

function initFAQ() {
  document.querySelectorAll('.faq-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      faqTab = btn.dataset.tab;
      faqOpenIdx = null;
      document.querySelectorAll('.faq-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFAQ();
    });
  });
  renderFAQ();
}

function toggleFAQ(idx) {
  faqOpenIdx = faqOpenIdx === idx ? null : idx;
  renderFAQ();
}

function renderFAQ() {
  const filtered = FAQ_DATA.filter(f =>
    faqTab === 'all' || f.audience === faqTab || f.audience === 'general'
  );
  const mid = Math.ceil(filtered.length / 2);
  const col1 = filtered.slice(0, mid);
  const col2 = filtered.slice(mid);

  const renderItem = (f, globalIdx) => {
    const isOpen = faqOpenIdx === globalIdx;
    const listHTML = f.list && f.list.length
      ? `<ul class="faq-a-list">${f.list.map(l => `<li>${l}</li>`).join('')}</ul>`
      : '';
    return `
      <div class="faq-item ${isOpen ? 'open' : ''}" onclick="toggleFAQ(${globalIdx})">
        <div class="faq-q">
          <span class="faq-q-text">${f.q}</span>
          <div class="faq-chevron">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 3L4 5.5 6.5 3" stroke="${isOpen ? '#e5a83d' : 'rgba(255,255,255,0.4)'}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="faq-a">
          <div class="faq-a-text">${f.a}${listHTML}</div>
        </div>
      </div>`;
  };

  const wrap = document.getElementById('faqWrap');
  if (wrap) {
    wrap.innerHTML = `
      <div class="faq-col">${col1.map((f, i) => renderItem(f, i)).join('')}</div>
      <div class="faq-col">${col2.map((f, i) => renderItem(f, mid + i)).join('')}</div>`;
  }
}
