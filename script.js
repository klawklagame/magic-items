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
    desc:"เหมาะกับงานวิจัยที่เวลายาว/เลเวลท้าย ๆ",
    tips:["ใช้กับทหารหรือเครื่องจักรที่ใช้เวลา 10 วันขึ้นไป","ต้องวิจัยก่อนถึงจะใช้ได้"],
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
    desc:"ดีสำหรับคนที่เลเวลยังไม่ตันแต่ต้องตีวอร์/วอร์ลีก",
    tips:["ใช้เวลาตีวอร์/วอร์ลีก","ใช้เมื่อมีเวลาเล่นจริง 1 ชั่วโมง"],
    prices:{ buy:[{type:"gems",value:300}], sell:{gems:10} }
  },
  {id:"resourcepotion", name:"น้ำยาทรัพยากร", category:"น้ำยา",
    image: IMG_BASE+"resourcepotion.webp",
    headline:"บูสต์เหมืองทั้งหมดให้ผลิตทรัพยากรไวขึ้นสองเท่าเป็นเวลา 1 ชั่วโมง",
    desc:"ควรใช้กับเหมืองที่มีเลเวลสูงเพื่อผลิตทรัพยากรได้มากขึ้น",
    tips:["ใช้ตอนคลังเก็บทรัพยากรมีทรัพยากรน้อย","ส่วนมากแกล้วจะขายทิ้ง"],
    prices:{ buy:[{type:"300",value:500}], sell:{gems:10} }
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
    desc:"เหมาะสำหรับใช้เวลาวอร์/วอร์ลีก",
    tips:["ใช้พร้อมกับน้ำยาพลัง"],
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
    tips:["เลือกช่วงที่ต้องใช้ทหารซูเปอร์จริง ๆ","เก็บไว้ใช้เวลาไม่เหลือน้ำดำ"],
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
    tips:["กดตอนหลอดแทบว่าง"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"runeofelixir", name:"รูนน้ำอมฤต", category:"รูน",
    image: IMG_BASE+"runeofelixir.webp",
    headline:"เติมน้ำอมฤตให้เต็มคลัง",
    desc:"วางแผนใช้เพื่ออัปเกรดทันที",
    tips:["อัปคลังให้สุดก่อน"],
    prices:{ buy:[{type:"gems",value:1000}], sell:{gems:50} }
  },
  {id:"runeofdarkelixir", name:"รูนน้ำอมฤตมืด", category:"รูน",
    image: IMG_BASE+"runeofdarkelixir.webp",
    headline:"เติมน้ำอมฤตมืดให้เต็มคลัง",
    desc:"ดีมากช่วงอัปผู้กล้า/สัตว์เลี้ยง",
    tips:["วางแผนใช้ให้คุ้ม เติมเต็มคลัง ใช้กับหลายสิ่ง"],
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
    tips:["ใช้คู่กับหอนาฬืกา/โหลดาวช่างก่อสร้าง"],
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

const track   = document.getElementById('track');
const dotsWrap = document.getElementById('dots');
const allPanel = document.getElementById('allPanel');
const allGrid  = document.getElementById('allGrid');
const closeAll = document.getElementById('closeAll');
const btnAll   = document.getElementById('btnAll');

function priceChip(p){
  const icon = p.type==='gems'   ? '<i class="gem"></i>'
             : p.type==='league' ? '<i class="league"></i>'
             : p.type==='raid'   ? '<i class="raid"></i>' : '';
  return `<span class="price">${icon}${p.label || (p.value ?? 'ตั้งค่า')}</span>`;
}

ITEMS.forEach((it, i) => {
  const buyChips = (it.prices?.buy?.length)
    ? it.prices.buy.map(p => priceChip(p)).join('')
    : `<span class="price"><i class="gem"></i>ซื้อ ตั้งค่า</span>`;
  const sellChip = it.prices?.sell?.gems != null
    ? `<span class="price"><i class="gem"></i>ขาย ${it.prices.sell.gems}</span>` : '';
  const tips = (it.tips||[]).map(t=>`<li>${t}</li>`).join('');

  const slide = document.createElement('article');
  slide.className = 'slide';
  slide.dataset.id = it.id;
  slide.innerHTML = `
    <div class="magic-card">
        <div class="media">
            <img src="${it.image}" alt="${it.name}">
        </div>
        <div class="content">
            <div class="h1">${it.name} <span class="badge">${it.category}</span></div>
            <div class="meta">${it.headline||''}</div>
            <div class="desc">${it.desc||''}</div>
            ${tips ? `<ul class="tips">${tips}</ul>` : ''}
            <div class="prices">${buyChips}${sellChip}</div>
        </div>
    </div>`;
  track.appendChild(slide);

  const d = document.createElement('div');
  d.className = 'dot'+(i===0?' active':'');
  d.addEventListener('click', ()=>go(i));
  dotsWrap.appendChild(d);

  const tile = document.createElement('button');
  tile.className = 'tile';
  tile.setAttribute('role','listitem');
  tile.innerHTML = `<img src="${it.image}" alt=""><div class="tname">${it.name}</div>`;
  tile.addEventListener('click', ()=>{ go(i); toggleAll(false); });
  allGrid.appendChild(tile);
});

const slides  = Array.from(track.children);
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0, width = 0;

function clamp(n,min,max){ return Math.max(min, Math.min(n,max)); }
function setTransform(px){ track.style.transform = `translate3d(${px}px,0,0)`; }
function toX(i){ return -i * width; }
function size(){ width = track.clientWidth; go(index, false); }
function go(i, animate=true){
  index = clamp(i, 0, slides.length-1);
  track.classList.toggle('animating', animate);
  setTransform(toX(index));
  updateUI();
  if(animate){ setTimeout(()=>track.classList.remove('animating'), 280); }
}
function updateUI(){
  prevBtn.disabled = (index===0);
  nextBtn.disabled = (index===slides.length-1);
  Array.from(dotsWrap.children).forEach((d,di)=>d.classList.toggle('active', di===index));
}

prevBtn.addEventListener('click', ()=>go(index-1));
nextBtn.addEventListener('click', ()=>go(index+1));
window.addEventListener('keydown', (e)=>{
  if(allPanel.classList.contains('open')){
    if(e.key==='Escape') toggleAll(false);
    return;
  }
  if(e.key==='ArrowLeft')  go(index-1);
  if(e.key==='ArrowRight') go(index+1);
});

// ── Unified Swipe System ──
const SWIPE_MIN   = 35;   // px minimum distance
const SWIPE_VEL   = 0.28; // px/ms fast-flick threshold
const DIR_LOCK    = 7;    // px before direction decided
const EDGE_RESIST = 0.18; // fraction at first/last slide

let sw = { active: false, dragging: false, dir: null, x0: 0, y0: 0, x: 0, t0: 0 };

function swipeStart(x, y) {
  if (allPanel.classList.contains('open')) return;
  sw = { active: true, dragging: false, dir: null, x0: x, y0: y, x, t0: Date.now() };
  track.classList.remove('animating');
}

function swipeMove(x, y) {
  if (!sw.active) return;
  const dx = x - sw.x0;
  const dy = y - sw.y0;

  if (!sw.dir) {
    if (Math.abs(dx) < DIR_LOCK && Math.abs(dy) < DIR_LOCK) return;
    sw.dir = Math.abs(dx) >= Math.abs(dy) ? 'h' : 'v';
    if (sw.dir === 'v') { sw.active = false; return; }
    sw.dragging = true;
  }

  if (!sw.dragging) return;
  sw.x = x;

  let d = dx;
  if ((index === 0 && dx > 0) || (index === slides.length - 1 && dx < 0)) {
    d = dx * EDGE_RESIST;
  }
  setTransform(toX(index) + d);
}

function swipeEnd() {
  if (!sw.dragging) { sw.active = false; return; }
  sw.active = false;
  sw.dragging = false;

  const dx  = sw.x - sw.x0;
  const vel = Math.abs(dx) / Math.max(1, Date.now() - sw.t0);

  if (Math.abs(dx) > SWIPE_MIN || vel > SWIPE_VEL) {
    go(dx < 0 ? index + 1 : index - 1);
  } else {
    go(index);
  }
}

// Pointer events — mouse & stylus only
track.addEventListener('pointerdown', e => {
  if (e.pointerType === 'touch') return;
  swipeStart(e.clientX, e.clientY);
  track.setPointerCapture(e.pointerId);
});
track.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  swipeMove(e.clientX, e.clientY);
});
track.addEventListener('pointerup',     e => { if (e.pointerType !== 'touch') swipeEnd(); });
track.addEventListener('pointercancel', e => { if (e.pointerType !== 'touch') swipeEnd(); });

// Touch events — mobile
track.addEventListener('touchstart', e => {
  const t = e.touches[0];
  swipeStart(t.clientX, t.clientY);
}, { passive: true });

track.addEventListener('touchmove', e => {
  if (!sw.active) return;
  const t = e.touches[0];
  swipeMove(t.clientX, t.clientY);
  if (sw.dragging) e.preventDefault();
}, { passive: false });

track.addEventListener('touchend',    () => swipeEnd(), { passive: true });
track.addEventListener('touchcancel', () => swipeEnd(), { passive: true });

window.addEventListener('resize', size);

// Parallax Effect
let parallaxRaf = null;
function handleParallax(e) {
  if (parallaxRaf) return;
  parallaxRaf = requestAnimationFrame(() => {
    const shapes = document.querySelectorAll('.bg-shape');
    if (shapes.length === 0) { parallaxRaf = null; return; }
    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 20;
      const xOffset = (window.innerWidth  / 2 - e.clientX) / speed;
      const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
      const rotate  = i === 0 ? -15 : 0;
      shape.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotate}deg)`;
    });
    parallaxRaf = null;
  });
}
document.addEventListener('mousemove', handleParallax, { passive: true });

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    document.querySelectorAll('.bg-shape').forEach(shape => { shape.style.transform = ''; });
  }, 250);
}, { passive: true });

// Init
size();

function toggleAll(state){
  allPanel.classList.toggle('open', state);
  allPanel.setAttribute('aria-hidden', String(!state));
}
btnAll.addEventListener('click',   () => toggleAll(true));
closeAll.addEventListener('click', () => toggleAll(false));

/* ══════════════════════════════════════════════════
   ENHANCEMENTS
   ══════════════════════════════════════════════════ */

// 1. Patch go() to trigger card entrance animation on slide change
const _origGo = go;
go = function(i, animate) {
  if (animate === undefined) animate = true;
  _origGo(i, animate);
  if (animate && slides[index]) {
    const card = slides[index].querySelector('.magic-card');
    if (card) {
      card.classList.remove('card-entering');
      void card.offsetWidth;
      card.classList.add('card-entering');
      setTimeout(() => card.classList.remove('card-entering'), 700);
    }
  }
};

// 2. Ripple effect on showall click
document.querySelectorAll('.showall').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top  - size / 2;
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;position:absolute;`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// 3. Custom cursor — pointer devices only
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorDot  = document.createElement('div');
  const cursorRing = document.createElement('div');
  cursorDot.className  = 'cursor-dot';
  cursorRing.className = 'cursor-ring';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  }, { passive: true });

  (function ringLoop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    cursorRing.style.left = rx.toFixed(2) + 'px';
    cursorRing.style.top  = ry.toFixed(2) + 'px';
    requestAnimationFrame(ringLoop);
  })();

  const interactives = 'button, a, .dot, [role="listitem"], .tile';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.classList.add('cursor-hover');
      cursorRing.classList.add('cursor-hover');
    }, { passive: true });
    el.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('cursor-hover');
      cursorRing.classList.remove('cursor-hover');
    }, { passive: true });
  });

  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity  = '0';
    cursorRing.style.opacity = '0';
  }, { passive: true });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity  = '1';
    cursorRing.style.opacity = '1';
  }, { passive: true });
}
