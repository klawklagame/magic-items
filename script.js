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
const track = document.getElementById('track');
const dotsWrap = document.getElementById('dots');
const allPanel = document.getElementById('allPanel');
const allGrid  = document.getElementById('allGrid');
const closeAll = document.getElementById('closeAll');
const btnAll   = document.getElementById('btnAll');

function priceChip(p){
  const icon = p.type==='gems' ? '<i class="gem"></i>'
             : p.type==='league' ? '<i class="league"></i>'
             : p.type==='raid' ? '<i class="raid"></i>' : '';
  return `<span class="price">${icon}${p.label || (p.value ?? 'ตั้งค่า')}</span>`;
}

ITEMS.forEach((it, i) => {
  const buyChips = (it.prices?.buy?.length)
    ? it.prices.buy.map(p => priceChip(p)).join('')
    : `<span class="price"><i class="gem"></i>ซื้อ ตั้งค่า</span>`;
  const sellChip = it.prices?.sell?.gems!=null
    ? `<span class="price"><i class="gem"></i>ขาย ${it.prices.sell.gems}</span>` : '';
  const tips = (it.tips||[]).map(t=>`<li>${t}</li>`).join('');

  const slide = document.createElement('article');
  slide.className = 'slide';
  slide.dataset.id = it.id;
  slide.innerHTML = `
    <div class="media"><img src="${it.image}" alt="${it.name}"></div>
    <section>
      <div class="h1">${it.name} <span class="badge">${it.category}</span></div>
      <div class="meta">${it.headline||''}</div>
      <div class="desc">${it.desc||''}</div>
      ${tips?`<ul class="tips">${tips}</ul>`:''}
      <div class="prices">${buyChips}${sellChip}</div>
    </section>`;
  track.appendChild(slide);

  const d = document.createElement('div');
  d.className = 'dot'+(i===0?' active':'');
  d.addEventListener('click',()=>go(i));
  dotsWrap.appendChild(d);

  const tile = document.createElement('button');
  tile.className = 'tile';
  tile.setAttribute('role','listitem');
  tile.innerHTML = `<img src="${it.image}" alt=""><div class="tname">${it.name}</div>`;
  tile.addEventListener('click',()=>{ go(i); toggleAll(false); });
  allGrid.appendChild(tile);
});

const slides = Array.from(track.children);
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0, startX = 0, currentX = 0, dragging = false, width = 0;

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
  if(e.key==='ArrowLeft') go(index-1);
  if(e.key==='ArrowRight') go(index+1);
});

const THRESH = 80;
track.addEventListener('pointerdown', (e)=>{
  if(allPanel.classList.contains('open')) return;
  dragging = true; startX = e.clientX; currentX = startX;
  track.setPointerCapture(e.pointerId);
  track.classList.remove('animating');
});
track.addEventListener('pointermove', (e)=>{
  if(!dragging) return;
  currentX = e.clientX;
  const delta = currentX - startX;
  setTransform(toX(index) + delta);
});
function endDrag(){
  if(!dragging) return;
  dragging = false;
  const delta = currentX - startX;
  if(Math.abs(delta) > THRESH){
    if(delta < 0) go(index+1); else go(index-1);
  }else{
    go(index);
  }
}
track.addEventListener('pointerup', endDrag);
track.addEventListener('pointercancel', endDrag);
window.addEventListener('resize', size);
size();

const allPanelEl = document.getElementById('allPanel');
function toggleAll(state){
  allPanelEl.classList.toggle('open', state);
  allPanelEl.setAttribute('aria-hidden', String(!state));
}
document.getElementById('btnAll').addEventListener('click', ()=>toggleAll(true));
document.getElementById('closeAll').addEventListener('click', ()=>toggleAll(false));
allPanelEl.addEventListener('click', (e)=>{ if(e.target===allPanelEl) toggleAll(false); });