const IMG_BASE = "https://klawkla.com/content/images/2025/08/";
const ITEMS = [
  {id:"bookofbuilding", name:"ตำราสิ่งก่อสร้าง", category:"ตำรา",
    image: IMG_BASE+"bookofbuilding.webp",
    headline:"ข้ามเวลาอัปเกรดสิ่งก่อสร้างหรืออาวุธทันที",
    desc:"ใช้กับสิ่งก่อสร้างหรืออาวุธที่ใช้เวลานานมากเพื่อความคุ้มค่า",
    tips:["ใช้กับสิ่งก่อสร้างหรืออาวุธที่ใช้เวลา 10 วันขึ้นไป","วางแผนให้ช่างก่อสร้างว่างรับงานต่อได้ทันที"],
    prices:{ buy:[{type:"gems",value:925}], sell:{gems:50} }
  },
  {id:"bookoffighting", name:"ตำราการต่อสู้", category:"ตำรา",
    image: IMG_BASE+"bookoffighting.webp",
    headline:"ข้ามเวลาอัปเกรดทหารหรือเครื่องจักรในห้องทดลองทันที",
    desc:"เหมาะกับงานวิจัยที่เวลานาน/เลเวลท้าย ๆ",
    tips:["ใช้กับทหารหรือเครื่องจักรที่ใช้เวลาอัปเกรด 10 วันขึ้นไป","ต้องวิจัยก่อนถึงจะใช้ได้"],
    prices:{ buy:[{type:"gems",value:925}], sell:{gems:50} }
  },
  {id:"bookofspells", name:"ตำราอาคม", category:"ตำรา",
    image: IMG_BASE+"bookofspells.webp",
    headline:"ข้ามเวลาอัปเกรดอาคมในห้องทดลองทันที",
    desc:"ใช้กับอาคมที่ใช้เวลาอัปเกรดนาน ๆ/เลเวลท้าย ๆ",
    tips:["เลือกอาคมที่ใช้ในสูตรหลักหรือสูตรที่จะเล่นก่อน"],
    prices:{ buy:[{type:"gems",value:925}], sell:{gems:50} }
  },
  {id:"bookofheroes", name:"ตำราผู้กล้า", category:"ตำรา",
    image: IMG_BASE+"bookofheroes.webp",
    headline:"ข้ามเวลาอัปเกรดผู้กล้าหรือสัตว์เลี้ยงทันที",
    desc:"คุ้มมากตอนมีวอร์ลีก เพราะผู้กล้าไม่ต้องนอน",
    tips:["ใช้กับการอัปเกรดที่มีเวลา 7 วันขึ้นไป"],
    prices:{ buy:[{type:"gems",value:500}], sell:{gems:50} }
  },
  {id:"bookofeverything", name:"ตำราสรรพสิ่ง", category:"ตำรา",
    image: IMG_BASE+"bookofeverything.webp",
    headline:"ข้ามเวลาการอัปเกรดใดก็ได้หนึ่งอย่าง",
    desc:"ไพ่เด็ดไว้แก้งานชน/ช่วงอีเวนต์",
    tips:["เก็บไว้ใช้ในเวลาจำเป็นจริง ๆ","ใช้กับสิ่งก่อสร้างที่ใช้เวลาอัปเกรดนาน 10 วันขึ้นไปคุ้มกว่า"],
    prices:{ buy:[{type:"gems",value:925}], sell:{gems:50} }
  },
  {id:"powerpotion", name:"น้ำยาพลัง", category:"น้ำยา",
    image: IMG_BASE+"powerpotion.webp",
    headline:"บูสต์ทหาร อาคม ให้เป็นเลเวลสูงสุดของห้องทดลอง 1 ชั่วโมง",
    desc:"ดีสำหรับคนที่เลเวลยังไม่ตันแต่ต้องตีวอร์/วอร์ลีก/โหมดจัดอันดับ",
    tips:["ใช้เวลาตีวอร์/วอร์ลีก","ใช้เมื่อมีเวลาเล่นจริง 1 ชั่วโมง"],
    prices:{ buy:[{type:"gems",value:300}], sell:{gems:10} }
  },
  {id:"resourcepotion", name:"น้ำยาทรัพยากร", category:"น้ำยา",
    image: IMG_BASE+"resourcepotion.webp",
    headline:"บูสต์เหมืองทั้งหมดให้ผลิตทรัพยากรไวขึ้นสองเท่าเป็นเวลา 1 ชั่วโมง",
    desc:"ควรใช้กับเหมืองที่มีเลเวลสูงเพื่อผลิตทรัพยากรได้มากขึ้น",
    tips:["ใช้ตอนคลังเก็บทรัพยากรมีทรัพยากรน้อย","ส่วนมากแกล้วจะขายทิ้ง"],
    prices:{ buy:[{type:"gems",value:500}], sell:{gems:10} }
  },
  {id:"builderpotion", name:"น้ำยาช่างก่อสร้าง", category:"น้ำยา",
    image: IMG_BASE+"builderpotion.webp",
    headline:"บูสต์ช่างก่อสร้างให้ทำงานเร็วขึ้น 10 เท่าเป็นเวลา 1 ชั่วโมง",
    desc:"ประหยัดเวลา ~9 ชั่วโมงต่อช่าง 1 คน ต่อการใช้หนึ่งขวด",
    tips:["ใช้ตอนช่างก่อสร้างทุกคนกำลังทำงาน"],
    prices:{ buy:[{type:"gems",value:285}], sell:{gems:10} }
  },
  {id:"clocktowerpotion", name:"น้ำยาหอนาฬิกา", category:"น้ำยา",
    image: IMG_BASE+"clocktowerpotion.webp",
    headline:"บูสต์หอนาฬิกาในเมืองกลางคืนเป็นเวลา 30 นาที",
    desc:"ใช้เพื่อเร่งการอัปเกรดและวิจัย",
    tips:["ใช้ทันทีเมื่อได้มา","หากไม่เน้นเมืองกลางคืน ขายทิ้งก็ไม่เลวครับ"],
    prices:{ buy:[{type:"gems",value:75}], sell:{gems:10} }
  },
  {id:"heropotion", name:"น้ำยาผู้กล้า", category:"น้ำยา",
    image: IMG_BASE+"heropotion.webp",
    headline:"บูสต์ผู้กล้าและสัตว์เลี้ยงให้เป็นเลเวลสูงสุดของบ้าน",
    desc:"เหมาะสำหรับใช้เวลาวอร์/วอร์ลีก/ตีโหมดจัดอันดับ",
    tips:["ใช้พร้อมกับน้ำยาพลังได้ดี"],
    prices:{ buy:[{type:"gems",value:300}], sell:{gems:10} }
  },
  {id:"researchpotion", name:"น้ำยาวิจัย", category:"น้ำยา",
    image: IMG_BASE+"researchpotion.webp",
    headline:"เร่งการวิจัย 24 เท่าเป็นเวลา 1 ชั่วโมง",
    desc:"เร่งการวิจัยให้เสร็จเร็วขึ้น",
    tips:["ใช้พร้อมกันได้หลายขวด","ใช้ 1 ขวด ลดเวลา 1 วัน"],
    prices:{ buy:[{type:"gems",value:120}], sell:{gems:10} }
  },
  {id:"superpotion", name:"น้ำยาซูเปอร์", category:"น้ำยา",
    image: IMG_BASE+"superpotion.webp",
    headline:"เปิดใช้งานทหารซูเปอร์ได้ทันทีเป็นเวลา 3 วัน",
    desc:"ทดลองคอมโบใหม่หรือตีวอร์",
    tips:["เลือกช่วงที่ต้องใช้ทหารซูเปอร์จริง ๆ","เก็บไว้ใช้เวลาไม่เหลือน้ำดำ/ประหยัดน้ำดำ"],
    prices:{ buy:[{type:"gems",value:300}], sell:{gems:10} }
  },
  {id:"petpotion", name:"น้ำยาสัตว์เลี้ยง", category:"น้ำยา",
    image: IMG_BASE+"petpotion.webp",
    headline:"เร่งการอัปเกรดสัตว์เลี้ยง 24 เท่าเป็นเวลา 1 ชั่วโมง",
    desc:"ช่วยเร่งการอัปเกรดให้สัตว์เลี้ยงพร้อมใช้งานเร็วขึ้น",
    tips:["ใช้กับสัตว์เลี้ยงที่ต้องการเร่งการอัปเกรด"],
    prices:{ buy:[], sell:{gems:10} }
  },
  {id:"builderstarjar", name:"โหลดาวช่างก่อสร้าง", category:"น้ำยา",
    image: IMG_BASE+"builderstarjar.webp",
    headline:"ปลดล็อคการทำโบนัสดาวในเมืองกลางคืน 1 ครั้ง",
    desc:"เร่งรอบโบนัสดาวในเมืองกลางคืน",
    tips:["ใช้เวลาต้องการทรัพยากรก้อนโต"],
    prices:{ buy:[{type:"gems",value:100}], sell:{gems:10} }
  },
  {id:"runeofgold", name:"รูนทองคำ", category:"รูน",
    image: IMG_BASE+"runeofgold.webp",
    headline:"เติมทองคำให้เต็มคลัง",
    desc:"อัปคลังให้ใหญ่สุดก่อนใช้ จะคุ้มที่สุด",
    tips:["อัปคลังให้สุดก่อน","กดใช้ตอนคลังแทบว่าง"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"runeofelixir", name:"รูนน้ำอมฤต", category:"รูน",
    image: IMG_BASE+"runeofelixir.webp",
    headline:"เติมน้ำอมฤตให้เต็มคลัง",
    desc:"วางแผนใช้เพื่ออัปเกรดทันที",
    tips:["อัปคลังให้สุดก่อน","กดใช้ตอนคลังแทบว่าง"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"runeofdarkelixir", name:"รูนน้ำอมฤตมืด", category:"รูน",
    image: IMG_BASE+"runeofdarkelixir.webp",
    headline:"เติมน้ำอมฤตมืดให้เต็มคลัง",
    desc:"ดีมากช่วงอัปผู้กล้า/สัตว์เลี้ยง",
    tips:["อัปคลังให้สุดก่อน","กดใช้ตอนคลังแทบว่าง"],
    prices:{ buy:[{type:"gems",value:2000}], sell:{gems:50} }
  },
  {id:"runeofbuildergold", name:"รูนทองคำช่างก่อสร้าง", category:"รูน",
    image: IMG_BASE+"runeofbuildergold.webp",
    headline:"เติมทองคำในเมืองกลางคืนให้เต็มคลัง",
    desc:"ช่วยเร่งฝั่งเมืองกลางคืน",
    tips:["วางแผนอัปเมืองกลางคืนให้ต่อเนื่อง"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"runeofbuilderelixir", name:"รูนน้ำอมฤตช่างก่อสร้าง", category:"รูน",
    image: IMG_BASE+"runeofbuilderelixir.webp",
    headline:"เติมน้ำอมฤตในเมืองกลางคืนให้เต็มคลัง",
    desc:"ใช้กับเมืองกลางคืนที่ใช้น้ำอมฤตมาก",
    tips:["ใช้เวลาคลังแทบว่าง"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"hammerofbuilding", name:"ค้อนสิ่งก่อสร้าง", category:"ค้อน",
    image: IMG_BASE+"hammerofbuilding.webp",
    headline:"อัปเกรดสิ่งก่อสร้างหรืออาวุธฟรีและทันที",
    desc:"คุ้มกับสิ่งก่อสร้างหรืออาวุธที่มีเวลายาวมาก ๆ",
    tips:["คูลดาวน์การซื้อชนิดเดิม 7 วัน"],
    prices:{ buy:[{type:"league",value:120}], sell:{gems:100} }
  },
  {id:"hammeroffighting", name:"ค้อนการต่อสู้", category:"ค้อน",
    image: IMG_BASE+"hammeroffighting.webp",
    headline:"อัปเกรดทหารหรือเครื่องจักรฟรีและทันที",
    desc:"รวมค่าวัตถุดิบแล้ว ไม่ต้องรอเวลา",
    tips:["ใช้กับเลเวลท้าย ๆ ที่แพง/นาน"],
    prices:{ buy:[{type:"league",value:120}], sell:{gems:100} }
  },
  {id:"hammerofspells", name:"ค้อนอาคม", category:"ค้อน",
    image: IMG_BASE+"hammerofspells.webp",
    headline:"อัปเกรดอาคมฟรีและทันที",
    desc:"ดีมากกับอาคมที่เราใช้",
    tips:["รอเลเวลท้ายเพื่อความคุ้ม"],
    prices:{ buy:[{type:"league",value:120}], sell:{gems:100} }
  },
  {id:"hammerofheroes", name:"ค้อนผู้กล้า", category:"ค้อน",
    image: IMG_BASE+"hammerofheroes.webp",
    headline:"อัปเกรดผู้กล้าหรือสัตว์เลี้ยงฟรีและทันที",
    desc:"ไม่ต้องให้ผู้กล้านอน—เหมาะก่อนวอร์/วอร์ลีก",
    tips:["ไม่ค่อยแนะนำให้ซื้อ ซื้อค้อนอื่น ๆ คุ้มกว่า"],
    prices:{ buy:[{type:"league",value:165}], sell:{gems:100} }
  },
  {id:"wallring", name:"แหวนกำแพง", category:"อื่น ๆ",
    image: IMG_BASE+"wallring.webp",
    headline:"ใช้อัปเกรดกำแพงได้ทันที",
    desc:"แหวน 1 วงมีมูลค่าเท่ากับทองคำหรือน้ำอมฤต 1,000,000",
    tips:["ใช้อัปกำแพงเลเวล 12 ขึ้นไป"],
    prices:{ buy:[{type:"gems",value:35}], sell:{gems:5} }
  },
  {id:"shovelofobstacles", name:"พลั่วแห่งสิ่งกีดขวาง", category:"อื่น ๆ",
    image: IMG_BASE+"shovelofobstacles.webp",
    headline:"ใช้เพื่อย้ายของสะสม เช่น เค้ก ต้นแคลชมาส",
    desc:"จัดหมู่บ้านให้สวย/เก็บของตามชอบ",
    tips:["รับจากเกมแคลนทุกครั้ง"],
    prices:{ buy:[{type:"gems",value:500}], sell:{gems:50} }
  }
];

const CAT_CLASS = {
  'ตำรา': 'book',
  'น้ำยา': 'potion',
  'รูน': 'rune',
  'ค้อน': 'hammer',
  'อื่น ๆ': 'misc',
};
const CAT_ORDER = ['ตำรา', 'น้ำยา', 'รูน', 'ค้อน', 'อื่น ๆ'];

const filters = document.getElementById('filters');
const rail     = document.getElementById('rail');
const stage    = document.getElementById('stage');
const detail   = document.getElementById('detail');
const prevBtn  = document.getElementById('prev');
const nextBtn  = document.getElementById('next');

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])
);
const catKeyOf = (it) => CAT_CLASS[it.category] || 'misc';

const PRICE_EMOJI = { gems: '💎', league: '🏅', raid: '🪙' };
function priceChip(p, cls = '') {
  const e = PRICE_EMOJI[p.type];
  const icon = e ? `<span class="price-ic" aria-hidden="true">${e}</span>` : '';
  return `<span class="price ${cls}">${escapeHtml(p.label ?? p.value ?? 'ตั้งค่า')}${icon}</span>`;
}

/* ── Build category filter chips ── */
const chipFrag = document.createDocumentFragment();
const allChip = document.createElement('button');
allChip.type = 'button';
allChip.className = 'chip is-active';
allChip.dataset.cat = 'all';
allChip.textContent = 'ทั้งหมด';
chipFrag.appendChild(allChip);
CAT_ORDER.forEach((cat) => {
  const c = document.createElement('button');
  c.type = 'button';
  c.className = 'chip';
  c.dataset.cat = cat;
  c.style.setProperty('--c', `var(--cat-${CAT_CLASS[cat]})`);
  c.textContent = cat;
  chipFrag.appendChild(c);
});
filters.appendChild(chipFrag);
const chips = Array.from(filters.children);

/* ── Build rail item buttons ── */
const railFrag = document.createDocumentFragment();
ITEMS.forEach((it, i) => {
  const key = catKeyOf(it);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'item';
  btn.dataset.index = i;
  btn.dataset.cat = it.category;
  btn.style.setProperty('--acc', `var(--cat-${key})`);
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-label', `${it.name} · ${it.category}`);
  btn.innerHTML = `
    <span class="item-ico"><img src="${it.image}" alt="" width="46" height="46" loading="${i < 6 ? 'eager' : 'lazy'}" decoding="async"></span>
    <span class="item-text">
      <span class="item-name">${escapeHtml(it.name)}</span>
      <span class="item-cat">${escapeHtml(it.category)}</span>
    </span>`;
  railFrag.appendChild(btn);
});
rail.appendChild(railFrag);
const itemBtns = Array.from(rail.children);

/* ── State ── */
let index = 0;                 // current ITEMS index
let activeBtn = itemBtns[0];
let filterCat = 'all';
let visible = ITEMS.map((_, i) => i);   // visible indices in current filter

const isVisible = (i) => filterCat === 'all' || ITEMS[i].category === filterCat;

/* ── Render the stage detail with morph-in animation ── */
function renderDetail(i) {
  const it = ITEMS[i];
  const key = catKeyOf(it);

  const buyChips = it.prices?.buy?.length
    ? it.prices.buy.map(p => priceChip(p, 'price--buy')).join('')
    : '<span class="price price--buy">ตั้งค่า</span>';
  const sellChip = it.prices?.sell?.gems != null
    ? priceChip({ type: 'gems', label: 'ขาย ' + it.prices.sell.gems }, 'price--sell') : '';
  const tipsHtml = (it.tips || []).map(t => `<li>${escapeHtml(t)}</li>`).join('');

  stage.style.setProperty('--acc', `var(--cat-${key})`);

  detail.className = 'detail';   // reset → re-arm animation
  detail.innerHTML = `
    <div class="detail-media">
      <span class="media-glow" aria-hidden="true"></span>
      <span class="media-ring" aria-hidden="true"></span>
      <img class="media-img" src="${it.image}" alt="${escapeHtml(it.name)}" width="168" height="168"
           fetchpriority="high" decoding="async">
    </div>
    <div class="detail-head" style="--d:60ms">
      <span class="eyebrow">${String(i + 1).padStart(2, '0')} · ${escapeHtml(it.category)}</span>
      <h2 class="detail-name">${escapeHtml(it.name)}</h2>
      <p class="detail-headline">${escapeHtml(it.headline || '')}</p>
    </div>
    <div class="detail-body" style="--d:130ms">
      <p class="detail-desc">${escapeHtml(it.desc || '')}</p>
      ${tipsHtml ? `<ul class="detail-tips">${tipsHtml}</ul>` : ''}
      <div class="detail-prices">
        <div class="prices-label">ราคา</div>
        <div class="price-chips">${buyChips}${sellChip}</div>
      </div>
    </div>`;

  void detail.offsetWidth;       // force reflow
  detail.classList.add('is-in');
  stage.scrollTop = 0;
}

function updateNavButtons() {
  const pos = visible.indexOf(index);
  prevBtn.disabled = pos <= 0;
  nextBtn.disabled = pos >= visible.length - 1;
}

/* ── Select an item by ITEMS index ── */
function select(i, { scrollIntoView = true } = {}) {
  if (i == null || i < 0 || i >= ITEMS.length) return;
  index = i;

  if (activeBtn !== itemBtns[i]) {
    activeBtn.classList.remove('is-active');
    activeBtn.removeAttribute('aria-selected');
    activeBtn = itemBtns[i];
  }
  activeBtn.classList.add('is-active');
  activeBtn.setAttribute('aria-selected', 'true');

  if (scrollIntoView) {
    activeBtn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  renderDetail(i);
  updateNavButtons();
}

/* step through the currently visible items */
function step(dir) {
  const pos = visible.indexOf(index);
  const next = visible[pos + dir];
  if (next != null) select(next);
}

/* ── Filtering ── */
function applyFilter(cat) {
  filterCat = cat;
  chips.forEach(c => c.classList.toggle('is-active', c.dataset.cat === cat));

  visible = [];
  itemBtns.forEach((btn, i) => {
    const show = isVisible(i);
    btn.classList.toggle('hidden', !show);
    if (show) visible.push(i);
  });

  if (!isVisible(index) && visible.length) {
    select(visible[0]);
  } else {
    updateNavButtons();
  }
  rail.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

/* ── Events ── */
rail.addEventListener('click', (e) => {
  const btn = e.target.closest('.item');
  if (btn) select(parseInt(btn.dataset.index, 10));
});

filters.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (chip) applyFilter(chip.dataset.cat);
});

prevBtn.addEventListener('click', () => step(-1));
nextBtn.addEventListener('click', () => step(1));

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { step(1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { step(-1); e.preventDefault(); }
});

/* ── Swipe on the stage (prev/next within filtered list) ── */
const SWIPE_MIN = 45;
let sw = { active: false, dir: null, x0: 0, y0: 0 };

stage.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  sw = { active: true, dir: null, x0: t.clientX, y0: t.clientY };
}, { passive: true });

stage.addEventListener('touchmove', (e) => {
  if (!sw.active || sw.dir) return;
  const t = e.touches[0];
  const dx = t.clientX - sw.x0, dy = t.clientY - sw.y0;
  if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
  sw.dir = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
}, { passive: true });

stage.addEventListener('touchend', (e) => {
  if (!sw.active) return;
  sw.active = false;
  if (sw.dir !== 'h') return;
  const dx = e.changedTouches[0].clientX - sw.x0;
  if (Math.abs(dx) > SWIPE_MIN) step(dx < 0 ? 1 : -1);
}, { passive: true });

/* ── Init ── */
select(0, { scrollIntoView: false });
