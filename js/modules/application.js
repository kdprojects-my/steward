/* ============================================================
   application.js — Module 7: Multi-Step Application Form
   Steward Oversight Platform
   ============================================================ */

const STEPS = [
  { label: 'Company basics' },
  { label: 'Executive summary' },
  { label: 'Science & IP' },
  { label: 'Funding details' },
  { label: 'Review & submit' }
];

const FUNDING_RANGES = [
  'Under $500K',
  '$500K – $1M',
  '$1M – $1.5M',
  '$1.5M – $2M',
  '$2M – $3M',
  '$3M – $5M',
  'Over $5M'
];

const FUNDING_PURPOSES = [
  'IND enabling study',
  'Phase 1a — SAD/MAD',
  'Phase 1b — Patient expansion / combination',
  'Phase 2'
];

let appStep = 0;
let appData = {
  companyName: '', sector: '', stage: '', website: '',
  contactName: '', contactEmail: '', contactPhone: '',
  productSummary: '', teamSummary: '', useOfFunds: '', fundingObjective: '',
  execSummaryFile: null,
  ipFiled: false, ipDescription: '', studyType: '', studyResults: '',
  ipFile: null, studyFile: null,
  amountRequired: '', fundingPurpose: '', timeline: '', currentInvestors: '',
  agreeTerms: false, agreeIP: false
};

function initApplication() {
  renderAppProgress();
  renderAppStep();
}

function appNavigate(dir) {
  saveCurrentStep();
  if (!validateCurrentStep()) {
    showValidationError();
    return;
  }
  appStep += dir;
  renderAppProgress();
  renderAppStep();
  window.scrollTo({ top: document.getElementById('application')?.offsetTop - 80 || 0, behavior: 'smooth' });
}

function appJumpTo(i) {
  if (i <= appStep) {
    saveCurrentStep();
    appStep = i;
    renderAppProgress();
    renderAppStep();
  }
}

function toggleAppCheck(key) {
  saveCurrentStep();
  appData[key] = !appData[key];
  renderAppStep();
}

function handleFileAttach(event, key) {
  appData[key] = event.target.files[0]?.name || null;
  saveCurrentStep();
  renderAppStep();
}

function saveCurrentStep() {
  const g = id => document.getElementById(id);
  if (appStep === 0) {
    appData.companyName  = g('f_companyName')?.value  || '';
    appData.website      = g('f_website')?.value      || '';
    appData.sector       = g('f_sector')?.value       || '';
    appData.stage        = g('f_stage')?.value        || '';
    appData.contactName  = g('f_contactName')?.value  || '';
    appData.contactEmail = g('f_contactEmail')?.value || '';
    appData.contactPhone = g('f_contactPhone')?.value || '';
  } else if (appStep === 1) {
    appData.productSummary   = g('f_productSummary')?.value   || '';
    appData.teamSummary      = g('f_teamSummary')?.value      || '';
    appData.useOfFunds       = g('f_useOfFunds')?.value       || '';
    appData.fundingObjective = g('f_fundingObjective')?.value || '';
  } else if (appStep === 2) {
    appData.ipDescription = g('f_ipDescription')?.value || '';
    appData.studyType     = g('f_studyType')?.value     || '';
    appData.studyResults  = g('f_studyResults')?.value  || '';
  } else if (appStep === 3) {
    appData.amountRequired  = g('f_amountRequired')?.value  || '';
    appData.fundingPurpose  = g('f_fundingPurpose')?.value  || '';
    appData.timeline        = g('f_timeline')?.value        || '';
    appData.currentInvestors = g('f_currentInvestors')?.value || '';
  }
}

function validateCurrentStep() {
  if (appStep === 0) return appData.companyName && appData.sector && appData.stage && appData.contactName && appData.contactEmail && appData.contactPhone;
  if (appStep === 1) return appData.productSummary && appData.teamSummary && appData.useOfFunds && appData.fundingObjective;
  if (appStep === 2) return appData.ipFiled && appData.ipDescription && appData.studyType && appData.studyResults;
  if (appStep === 3) return appData.amountRequired && appData.fundingPurpose && appData.timeline;
  return true;
}

function showValidationError() {
  alert('Please complete all required fields before continuing.');
}

function submitApplication() {
  saveCurrentStep();
  if (!appData.agreeIP || !appData.agreeTerms) {
    alert('Please confirm both statements before submitting.');
    return;
  }
  appStep = 5;
  renderAppProgress();
  renderAppStep();
}

function renderAppProgress() {
  const wrap = document.getElementById('appProgress');
  if (!wrap) return;

  if (appStep >= 5) { wrap.innerHTML = ''; return; }

  wrap.innerHTML = STEPS.map((s, i) => {
    const cls     = i < appStep ? 'done' : i === appStep ? 'active' : '';
    const nameCls = i < appStep ? 'done' : i === appStep ? 'active' : '';
    const lineCls = i < appStep ? 'done' : '';
    const icon    = i < appStep
      ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="rgba(200,146,42,0.8)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : (i + 1);
    return `
      <div class="prog-step" onclick="appJumpTo(${i})">
        <div class="prog-circle ${cls}">${icon}</div>
        <span class="prog-name ${nameCls}">${s.label}</span>
      </div>
      ${i < STEPS.length - 1 ? `<div class="prog-line ${lineCls}"></div>` : ''}`;
  }).join('');
}

function attachBtn(label, fileKey) {
  const hasFile = appData[fileKey];
  return `
    <div class="attach-row">
      <label class="attach-btn ${hasFile ? 'attached' : ''}">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2 9l3-3 2 2 3-4 1 1" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
          <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
        </svg>
        ${hasFile ? '✓ ' + appData[fileKey] : label}
        <input type="file" style="display:none" accept=".pdf,.doc,.docx" onchange="handleFileAttach(event,'${fileKey}')">
      </label>
      <span class="attach-note">PDF or DOCX · max 10MB</span>
    </div>`;
}

function renderSidebar() {
  return `
    <div class="sidebar-card amber-card">
      <div class="step-indicator">${String(appStep + 1).padStart(2, '0')}</div>
      <div class="step-of">Step ${appStep + 1} of ${STEPS.length}</div>
      <div class="sidebar-title amber">Application tips</div>
      <div class="sidebar-item"><div class="si-dot"></div><div><strong style="color:var(--text-bright);font-weight:500;display:block;font-size:12px;">Keep it concise</strong><span style="font-size:11.5px;">Your 2-page executive summary should be clear and direct.</span></div></div>
      <div class="sidebar-item"><div class="si-dot"></div><div><strong style="color:var(--text-bright);font-weight:500;display:block;font-size:12px;">IP is essential</strong><span style="font-size:11.5px;">Filed IP you control is the minimum requirement.</span></div></div>
      <div class="sidebar-item"><div class="si-dot"></div><div><strong style="color:var(--text-bright);font-weight:500;display:block;font-size:12px;">Study data matters</strong><span style="font-size:11.5px;">Animal or human study results are required.</span></div></div>
      <div class="sidebar-item" style="margin-bottom:0"><div class="si-dot"></div><div><strong style="color:var(--text-bright);font-weight:500;display:block;font-size:12px;">Be specific on funding</strong><span style="font-size:11.5px;">Clearly state the amount, purpose, and milestones.</span></div></div>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-title">What happens next</div>
      <div class="sidebar-item"><div class="si-dot"></div>Steward reviews your application within 30–45 days</div>
      <div class="sidebar-item"><div class="si-dot"></div>Qualified applications advance to law firm IP review</div>
      <div class="sidebar-item"><div class="si-dot"></div>You are notified of your status at each stage</div>
      <div class="sidebar-item" style="margin-bottom:0"><div class="si-dot"></div>No capital commitment required at application stage</div>
    </div>`;
}

function renderAppStep() {
  const wrap = document.getElementById('appFormWrap');
  if (!wrap) return;

  if (appStep >= 5) {
    wrap.style.gridTemplateColumns = '1fr';
    wrap.innerHTML = renderSuccessScreen();
    return;
  }

  wrap.style.gridTemplateColumns = '1fr 300px';

  const steps = [renderStep0, renderStep1, renderStep2, renderStep3, renderStep4];
  wrap.innerHTML = `${steps[appStep]()}<div class="sidebar">${renderSidebar()}</div>`;
}

function renderStep0() {
  return `
    <div class="form-panel fade-in">
      <div class="step-title">Company basics</div>
      <p class="step-desc">Tell us about your company and primary contact.</p>
      <div class="field-row">
        <div><label class="field-label">Company name <span>*</span></label><input class="field-input" type="text" placeholder="e.g. Helix Therapeutics" id="f_companyName" value="${appData.companyName}"></div>
        <div><label class="field-label">Website <span>optional</span></label><input class="field-input" type="text" placeholder="https://" id="f_website" value="${appData.website}"></div>
      </div>
      <div class="field-row">
        <div>
          <label class="field-label">Sector <span>*</span></label>
          <select class="field-input" id="f_sector">
            <option value="" ${!appData.sector ? 'selected' : ''}>Select sector</option>
            <option value="biotech" ${appData.sector === 'biotech' ? 'selected' : ''}>Biotechnology</option>
            <option value="healthcare" ${appData.sector === 'healthcare' ? 'selected' : ''}>Healthcare</option>
            <option value="meddevice" ${appData.sector === 'meddevice' ? 'selected' : ''}>Medical Device</option>
            <option value="diagnostics" ${appData.sector === 'diagnostics' ? 'selected' : ''}>Diagnostics</option>
            <option value="other" ${appData.sector === 'other' ? 'selected' : ''}>Other life sciences</option>
          </select>
        </div>
        <div>
          <label class="field-label">Development stage <span>*</span></label>
          <select class="field-input" id="f_stage">
            <option value="" ${!appData.stage ? 'selected' : ''}>Select stage</option>
            <option value="preclinical" ${appData.stage === 'preclinical' ? 'selected' : ''}>Pre-clinical</option>
            <option value="phase1" ${appData.stage === 'phase1' ? 'selected' : ''}>Phase I</option>
            <option value="phase2" ${appData.stage === 'phase2' ? 'selected' : ''}>Phase II</option>
            <option value="discovery" ${appData.stage === 'discovery' ? 'selected' : ''}>Discovery / early research</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div><label class="field-label">Primary contact name <span>*</span></label><input class="field-input" type="text" placeholder="Full name" id="f_contactName" value="${appData.contactName}"></div>
        <div><label class="field-label">Contact email <span>*</span></label><input class="field-input" type="email" placeholder="name@company.com" id="f_contactEmail" value="${appData.contactEmail}"></div>
      </div>
      <div class="field-group">
        <label class="field-label">Contact phone <span>*</span></label>
        <input class="field-input" type="tel" placeholder="+1 (000) 000-0000" id="f_contactPhone" value="${appData.contactPhone}" style="max-width:260px;">
      </div>
      <div class="form-nav"><span></span><button class="btn-form-next" onclick="appNavigate(1)">Continue →</button></div>
    </div>`;
}

function renderStep1() {
  return `
    <div class="form-panel fade-in">
      <div class="step-title">Executive summary</div>
      <p class="step-desc">Your 2-page executive summary should cover all of the following. You may also attach your summary document below.</p>
      <div class="field-group">
        <label class="field-label">Attach executive summary <span>optional</span></label>
        ${attachBtn('Attach 2-page executive summary', 'execSummaryFile')}
      </div>
      <div class="divider"></div>
      <div class="field-group"><label class="field-label">Product summary <span>*</span></label><textarea class="field-input" placeholder="Describe your product, technology, or therapy." id="f_productSummary" style="min-height:90px;">${appData.productSummary}</textarea></div>
      <div class="field-group"><label class="field-label">Team summary <span>*</span></label><textarea class="field-input" placeholder="List key team members, credentials, and relevant expertise." id="f_teamSummary">${appData.teamSummary}</textarea></div>
      <div class="field-group"><label class="field-label">Use of funds <span>*</span></label><textarea class="field-input" placeholder="How will the capital be allocated? e.g. 40% R&D, 30% clinical operations." id="f_useOfFunds">${appData.useOfFunds}</textarea></div>
      <div class="field-group"><label class="field-label">Objective of funding <span>*</span></label><textarea class="field-input" placeholder="What specific milestones will this round achieve?" id="f_fundingObjective">${appData.fundingObjective}</textarea></div>
      <div class="form-nav"><button class="btn-form-back" onclick="appNavigate(-1)">← Back</button><button class="btn-form-next" onclick="appNavigate(1)">Continue →</button></div>
    </div>`;
}

function renderStep2() {
  return `
    <div class="form-panel fade-in">
      <div class="step-title">Science & IP</div>
      <p class="step-desc">Intellectual property ownership is a minimum requirement. Attach supporting documents below.</p>
      <div class="field-group">
        <label class="field-label">IP status <span>*</span></label>
        <div class="check-group">
          <div class="check-item" onclick="toggleAppCheck('ipFiled')">
            <div class="check-box ${appData.ipFiled ? 'checked' : ''}">
              ${appData.ipFiled ? `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="rgba(200,146,42,0.9)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
            </div>
            <span class="check-label">I confirm we have filed IP that we have control over <span style="color:var(--amber);font-size:11px;">(required)</span></span>
          </div>
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">IP description <span>*</span></label>
        <textarea class="field-input" placeholder="Describe your IP — patent numbers or filing references, type of IP, and what it protects." id="f_ipDescription">${appData.ipDescription}</textarea>
        <label class="field-label" style="margin-top:10px;">Attach IP documentation <span>optional</span></label>
        ${attachBtn('Attach patent filing or IP summary', 'ipFile')}
      </div>
      <div class="divider"></div>
      <div class="field-row">
        <div>
          <label class="field-label">Study type <span>*</span></label>
          <select class="field-input" id="f_studyType">
            <option value="" ${!appData.studyType ? 'selected' : ''}>Select study type</option>
            <option value="animal" ${appData.studyType === 'animal' ? 'selected' : ''}>Animal study</option>
            <option value="human" ${appData.studyType === 'human' ? 'selected' : ''}>Human / clinical study</option>
            <option value="invitro" ${appData.studyType === 'invitro' ? 'selected' : ''}>In vitro / lab study</option>
            <option value="computational" ${appData.studyType === 'computational' ? 'selected' : ''}>Computational / modelling</option>
            <option value="multiple" ${appData.studyType === 'multiple' ? 'selected' : ''}>Multiple study types</option>
          </select>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:flex-end;">
          <label class="field-label">Attach study data <span>optional</span></label>
          ${attachBtn('Attach study results or data', 'studyFile')}
        </div>
      </div>
      <div class="field-group"><label class="field-label">Study results summary <span>*</span></label><textarea class="field-input" placeholder="Summarise your study results. Include key findings, efficacy indicators, and safety observations." id="f_studyResults" style="min-height:100px;">${appData.studyResults}</textarea></div>
      <div class="form-nav"><button class="btn-form-back" onclick="appNavigate(-1)">← Back</button><button class="btn-form-next" onclick="appNavigate(1)">Continue →</button></div>
    </div>`;
}

function renderStep3() {
  const amountOptions = FUNDING_RANGES.map(r =>
    `<option value="${r}" ${appData.amountRequired === r ? 'selected' : ''}>${r}</option>`
  ).join('');
  const purposeOptions = FUNDING_PURPOSES.map(p =>
    `<option value="${p}" ${appData.fundingPurpose === p ? 'selected' : ''}>${p}</option>`
  ).join('');

  return `
    <div class="form-panel fade-in">
      <div class="step-title">Funding details</div>
      <p class="step-desc">Tell us about the funding you are seeking, its purpose, and your current financing history.</p>
      <div class="field-row">
        <div>
          <label class="field-label">Amount requested <span>*</span></label>
          <select class="field-input" id="f_amountRequired">
            <option value="" ${!appData.amountRequired ? 'selected' : ''}>Select range</option>
            ${amountOptions}
          </select>
        </div>
        <div>
          <label class="field-label">Funding purpose <span>*</span></label>
          <select class="field-input" id="f_fundingPurpose">
            <option value="" ${!appData.fundingPurpose ? 'selected' : ''}>Select purpose</option>
            ${purposeOptions}
          </select>
        </div>
      </div>
      <div class="field-row">
        <div>
          <label class="field-label">Deployment timeline <span>*</span></label>
          <select class="field-input" id="f_timeline">
            <option value="" ${!appData.timeline ? 'selected' : ''}>Select timeline</option>
            <option value="6mo" ${appData.timeline === '6mo' ? 'selected' : ''}>Within 6 months</option>
            <option value="12mo" ${appData.timeline === '12mo' ? 'selected' : ''}>Within 12 months</option>
            <option value="18mo" ${appData.timeline === '18mo' ? 'selected' : ''}>12–18 months</option>
            <option value="24mo" ${appData.timeline === '24mo' ? 'selected' : ''}>18–24 months</option>
          </select>
        </div>
        <div>
          <label class="field-label">Current investors or prior funding <span>optional</span></label>
          <input class="field-input" type="text" placeholder="e.g. NIH grant, angel round" id="f_currentInvestors" value="${appData.currentInvestors}">
        </div>
      </div>
      <div class="field-group"><label class="field-label">Anything else you'd like us to know <span>optional</span></label><textarea class="field-input" placeholder="Additional context, partnerships, regulatory status, or anything else relevant." id="f_extra"></textarea></div>
      <div class="form-nav"><button class="btn-form-back" onclick="appNavigate(-1)">← Back</button><button class="btn-form-next" onclick="appNavigate(1)">Review application →</button></div>
    </div>`;
}

function renderStep4() {
  const rows = [
    ['Company',           `${appData.companyName || '—'} · ${appData.sector || '—'} · ${appData.stage || '—'}`],
    ['Contact',           `${appData.contactName || '—'} · ${appData.contactEmail || '—'} · ${appData.contactPhone || '—'}`],
    ['Product summary',   appData.productSummary ? appData.productSummary.slice(0, 100) + '…' : '—'],
    ['Executive summary', appData.execSummaryFile ? '✓ ' + appData.execSummaryFile : 'Not attached'],
    ['IP status',         appData.ipFiled ? 'Filed IP confirmed' : 'Not confirmed — required'],
    ['IP document',       appData.ipFile ? '✓ ' + appData.ipFile : 'Not attached'],
    ['Study type',        appData.studyType || '—'],
    ['Study data',        appData.studyFile ? '✓ ' + appData.studyFile : 'Not attached'],
    ['Amount requested',  appData.amountRequired || '—'],
    ['Funding purpose',   appData.fundingPurpose || '—'],
    ['Timeline',          appData.timeline || '—']
  ];

  return `
    <div class="form-panel fade-in">
      <div class="step-title">Review & submit</div>
      <p class="step-desc">Review your application summary before submitting. Go back to edit any section.</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
        ${rows.map(([l, v]) => `<div class="review-row"><span class="review-label">${l}</span><span class="review-val">${v}</span></div>`).join('')}
      </div>
      <div class="check-group" style="margin-bottom:20px;">
        <div class="check-item" onclick="toggleAppCheck('agreeIP')">
          <div class="check-box ${appData.agreeIP ? 'checked' : ''}">${appData.agreeIP ? `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="rgba(200,146,42,0.9)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}</div>
          <span class="check-label" style="font-size:12px;">I confirm the information is accurate and that we hold filed IP we control</span>
        </div>
        <div class="check-item" onclick="toggleAppCheck('agreeTerms')">
          <div class="check-box ${appData.agreeTerms ? 'checked' : ''}">${appData.agreeTerms ? `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="rgba(200,146,42,0.9)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}</div>
          <span class="check-label" style="font-size:12px;">I agree to Steward's application terms and understand this does not constitute a commitment of funding</span>
        </div>
      </div>
      <div class="form-nav"><button class="btn-form-back" onclick="appNavigate(-1)">← Back</button><button class="btn-form-next" style="padding:10px 28px;" onclick="submitApplication()">Submit application →</button></div>
    </div>`;
}

function renderSuccessScreen() {
  return `
    <div class="form-panel fade-in">
      <div class="success-screen">
        <div class="success-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3L4 7.5v6.5c0 6.1 4.3 11.8 10 13 5.7-1.2 10-6.9 10-13V7.5L14 3z" stroke="rgba(200,146,42,0.7)" stroke-width="0.8" stroke-linejoin="round"/>
            <path d="M9 14l3.5 3.5 6.5-7" stroke="rgba(200,146,42,1)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="success-title">Application received</div>
        <p class="success-body">Thank you for applying to the Steward programme. Your application will be reviewed within 30–45 days. You will be notified at each stage of the process.</p>
        <div class="success-steps">
          <div class="success-step"><div class="ss-num">1</div><div class="ss-text"><strong style="color:var(--text-bright);font-weight:500;">Steward initial review</strong> — our team reviews your application and executive summary (30–45 days)</div></div>
          <div class="success-step"><div class="ss-num">2</div><div class="ss-text"><strong style="color:var(--text-bright);font-weight:500;">IP & science assessment</strong> — qualified applications advance to the law firm's independent review</div></div>
          <div class="success-step"><div class="ss-num">3</div><div class="ss-text"><strong style="color:var(--text-bright);font-weight:500;">Family office presentation</strong> — qualified companies are presented to the family office network</div></div>
          <div class="success-step"><div class="ss-num">4</div><div class="ss-text"><strong style="color:var(--text-bright);font-weight:500;">Funding & escrow</strong> — committed capital held in escrow until your full funding goal is reached</div></div>
        </div>
      </div>
    </div>`;
}
