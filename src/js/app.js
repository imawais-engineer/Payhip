const brand = { name: 'FlowStack', logoText: 'MASoft Labs', tagline: 'Build Faster. Automate Smarter.' };

const dashboardSections = ['Dashboard Home', 'Products', 'Orders', 'Customers', 'Analytics', 'Coupons', 'Email Marketing', 'Settings'];
const metrics = [
  ['Total Sales', '4,892', '+18.2%'], ['Total Revenue', '$128,450', '+24.8%'], ['Products Published', '42', '+6'], ['Customers', '9,614', '+31.4%'], ['Monthly Growth', '22.7%', '+4.1%']
];
const products = [
  ['AI Workflow OS', 'Reusable prompt chains, AI agents, and automations for operators.', '$79', 'AI Workflows'],
  ['n8n Revenue Kit', 'Production-ready lead routing, CRM sync, and checkout automations.', '$129', 'n8n Templates'],
  ['SaaS Launch Stack', 'Billing, onboarding, and support playbooks for micro-SaaS builders.', '$149', 'SaaS Tools'],
  ['Engineer Velocity Pack', 'Templates for code reviews, CI, docs, and team rituals.', '$59', 'Software Engineering']
];
const categories = ['AI Workflows', 'n8n Templates', 'Automation Systems', 'SaaS Tools', 'Software Engineering Resources'];
const orders = [
  ['Avery Stone', 'n8n Revenue Kit', 'Paid', '$129'], ['Mina Patel', 'AI Workflow OS', 'Paid', '$79'], ['Chris Wong', 'SaaS Launch Stack', 'Pending', '$149'], ['Jordan Lee', 'Engineer Velocity Pack', 'Paid', '$59']
];
const performance = [
  ['n8n Revenue Kit', '1,248', '8.9%', '$48,920'], ['AI Workflow OS', '1,036', '7.4%', '$36,170'], ['SaaS Launch Stack', '842', '6.8%', '$31,508'], ['Engineer Velocity Pack', '691', '5.9%', '$11,852']
];
const testimonials = [
  ['“The n8n templates paid for themselves in a week.”', 'Dana, Ops Founder'], ['“FlowStack feels like a premium SaaS, not a file shop.”', 'Riley, Creator'], ['“Our automation backlog finally became shippable.”', 'Sam, Agency Lead']
];
const faqs = [
  ['Can I embed this in Payhip?', 'Yes. The layout is static HTML, Tailwind classes, CSS, and vanilla JavaScript suitable for Payhip custom HTML/CSS or supported code injection areas.'],
  ['Is the dashboard connected to Payhip data?', 'This template ships with demo data. Replace the arrays in app.js with exported Payhip data, webhook-fed JSON, or your own API responses.'],
  ['What products is it optimized for?', 'AI workflows, n8n templates, automation systems, SaaS tools, and software engineering resources.']
];

const $ = (id) => document.getElementById(id);
const moneyClass = 'font-black text-white';

function render() {
  $('sidebarNav').innerHTML = dashboardSections.map((item, index) => `<a class="nav-item ${index === 0 ? 'active' : ''}" href="#dashboard"><span>${['⌘','□','◷','◎','↗','%','✉','⚙'][index]}</span>${item}</a>`).join('');
  $('metricCards').innerHTML = metrics.map(([label, value, trend]) => `<article class="glass-card rounded-3xl p-4"><p class="text-sm text-slate-400">${label}</p><p class="mt-3 text-2xl ${moneyClass}">${value}</p><p class="mt-2 text-sm font-bold text-accent">${trend}</p></article>`).join('');
  $('featuredProducts').innerHTML = products.map(([name, desc, price, tag]) => `<article class="group rounded-3xl border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-primary/50"><p class="mb-4 w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-blue-200">${tag}</p><h3 class="text-xl font-black">${name}</h3><p class="mt-3 min-h-20 text-sm leading-6 text-slate-300">${desc}</p><div class="mt-5 flex items-center justify-between"><span class="text-2xl font-black">${price}</span><button class="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">View</button></div></article>`).join('');
  $('categories').innerHTML = categories.map((item) => `<div class="rounded-3xl border border-white/10 bg-white/[.04] p-5 text-center font-bold text-slate-200">${item}</div>`).join('');
  $('ordersTable').innerHTML = orders.map(([customer, product, status, amount]) => `<tr><td class="py-4 font-semibold">${customer}</td><td class="py-4 text-slate-300">${product}</td><td class="py-4"><span class="rounded-full px-3 py-1 text-xs font-bold ${status === 'Paid' ? 'status-paid' : 'status-pending'}">${status}</span></td><td class="py-4 text-right font-black">${amount}</td></tr>`).join('');
  $('performanceTable').innerHTML = performance.map(([product, sales, conversion, revenue]) => `<tr><td class="py-4 font-semibold">${product}</td><td class="py-4 text-slate-300">${sales}</td><td class="py-4 text-accent font-bold">${conversion}</td><td class="py-4 text-right font-black">${revenue}</td></tr>`).join('');
  $('mixList').innerHTML = categories.slice(0, 4).map((item, index) => `<div><div class="mb-2 flex justify-between text-sm"><span>${item}</span><span class="font-bold">${[38,27,21,14][index]}%</span></div><div class="h-2 rounded-full bg-white/10"><div class="h-2 rounded-full bg-primary" style="width:${[38,27,21,14][index]}%"></div></div></div>`).join('');
  $('testimonialsGrid').innerHTML = testimonials.map(([quote, by]) => `<figure class="rounded-3xl border border-white/10 bg-white/[.04] p-6"><blockquote class="text-lg font-bold leading-8">${quote}</blockquote><figcaption class="mt-5 text-sm text-slate-400">${by}</figcaption></figure>`).join('');
  $('faqList').innerHTML = faqs.map(([q, a]) => `<details class="rounded-3xl border border-white/10 bg-white/[.04] p-5"><summary class="cursor-pointer font-bold">${q}</summary><p class="mt-3 text-slate-300">${a}</p></details>`).join('');
}

function drawChart(canvas, values, labels) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width; const height = canvas.height; const pad = 32;
  ctx.clearRect(0, 0, width, height);
  const max = Math.max(...values) * 1.1; const min = Math.min(...values) * .82;
  const points = values.map((value, i) => [pad + i * ((width - pad * 2) / (values.length - 1)), height - pad - ((value - min) / (max - min)) * (height - pad * 2)]);
  ctx.strokeStyle = 'rgba(148,163,184,.18)'; ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) { const y = pad + i * ((height - pad * 2) / 3); ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(width - pad, y); ctx.stroke(); }
  const gradient = ctx.createLinearGradient(0, pad, 0, height - pad); gradient.addColorStop(0, 'rgba(37,99,235,.42)'); gradient.addColorStop(1, 'rgba(37,99,235,0)');
  ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.lineTo(width - pad, height - pad); ctx.lineTo(pad, height - pad); ctx.closePath(); ctx.fillStyle = gradient; ctx.fill();
  ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.strokeStyle = '#2563EB'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.stroke();
  points.forEach(([x, y], i) => { ctx.fillStyle = '#22C55E'; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#94A3B8'; ctx.font = '13px Inter'; ctx.fillText(labels[i], x - 12, height - 8); });
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  drawChart($('heroChart'), [9, 12, 11, 16, 19, 23, 28], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
  drawChart($('revenueChart'), [18, 24, 21, 31, 37, 46, 58], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
  $('menuToggle').addEventListener('click', () => { const menu = $('mobileMenu'); const open = menu.classList.toggle('hidden') === false; $('menuToggle').setAttribute('aria-expanded', String(open)); });
  document.title = `${brand.name} | ${brand.logoText}`;
});
