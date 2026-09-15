
(function(){
  const T = window.TRIP_DATA || {};
  const hotel = T.hotel || {};
  const trip = T.trip || {};
  const jumbo = T.dining?.jumbo || {};
  const outbound = T.flights?.outbound || {};
  const returning = T.flights?.return || {};
  const reservations = (hotel.reservationNumbers || []).join(", ");

  function lines(parts){ return parts.filter(Boolean).join("\n"); }

  const cards = [
    {
      id:"trip-marriott-checkin-master", category:"trip", icon:"🏨",
      title:"Marriott 종합 체크인", special:true,
      en:lines([
        `Hello. We are checking in today at ${hotel.name || "Singapore Marriott Tang Plaza Hotel"}.`,
        `We have ${hotel.rooms || 4} rooms for the same family group of ${trip.travelers?.total || 11} guests.`,
        reservations ? `Our reservation numbers are ${reservations}.` : "",
        `Could you please place the four rooms as close to each other as possible?`,
        `We also requested twin beds for some rooms, a rollaway bed, and a step stool for the room with young children.`,
        `If an air purifier is available, we would appreciate one as well.`,
        `Could you please check all of these requests for us? Thank you.`
      ]),
      ko:lines([
        "오늘 Singapore Marriott Tang Plaza Hotel에 체크인합니다.",
        "11명 가족 일행이며 객실 4개가 모두 같은 일행입니다.",
        reservations ? `예약번호: ${reservations}` : "",
        "객실을 최대한 가까이 배정하고 기존 요청사항을 확인해 달라는 종합 카드입니다."
      ]),
      tags:"marriott check in four rooms reservation family nearby twin rollaway step stool air purifier"
    },
    {
      id:"trip-nearby-rooms",category:"trip",icon:"🚪",title:"4개 객실 근접 배정",special:true,
      en:"We have four rooms under the same family group. Could you please assign the rooms as close to each other as possible, preferably on the same floor?",
      ko:"같은 가족 일행의 객실 4개를 가능한 한 가깝게, 가능하면 같은 층에 배정해 주세요.",
      tags:"hotel room nearby same floor four rooms"
    },
    {
      id:"trip-platinum-upgrade",category:"trip",icon:"✨",title:"Platinum Upgrade 문의",special:true,
      en:`I am a ${hotel.loyalty?.program || "Marriott Bonvoy"} ${hotel.loyalty?.status || "Platinum Elite"} member. Could you please check whether any complimentary room upgrade is available for our stay?`,
      ko:"Marriott Bonvoy Platinum Elite 혜택으로 무료 객실 업그레이드가 가능한지 확인 부탁드립니다.",
      tags:"platinum upgrade marriott bonvoy"
    },
    {
      id:"trip-rollaway-step",category:"trip",icon:"🛏️",title:"Rollaway Bed / Step Stool 확인",special:true,
      en:"Could you please confirm whether the rollaway bed and the step stool for the room with young children have been arranged?",
      ko:"아이 동반 객실의 Rollaway Bed와 Step Stool 요청이 반영되었는지 확인해 주세요.",
      tags:"rollaway step stool child hotel"
    },
    {
      id:"trip-club-breakfast",category:"trip",icon:"🥐",title:"M Club / 조식 문의",special:true,
      en:`Could you please explain our M Club and breakfast benefits? I understand that breakfast is not included in our basic reservation, and the hotel offered a special adult rate of ${hotel.breakfast?.specialAdultRate || "S$25++"}.`,
      ko:"M Club과 조식 혜택을 설명해 주세요. 기본 예약에는 조식이 포함되지 않았고, 호텔 특별 성인 요금은 S$25++로 안내받았습니다.",
      tags:"m club breakfast marriott rate"
    },
    {
      id:"trip-late-checkout",category:"trip",icon:"🕓",title:"4PM Late Checkout",special:true,
      en:"Would it be possible to have a 4:00 PM late checkout on September 24? If 4:00 PM is not available for all four rooms, could you please tell us the latest available checkout time?",
      ko:"9월 24일 오후 4시 Late Checkout이 가능한지, 4개 객실 모두 어렵다면 가능한 가장 늦은 시간을 알려 주세요.",
      tags:"late checkout 4pm september 24"
    },
    {
      id:"trip-jumbo",category:"trip",icon:"🦀",title:"JUMBO 예약 확인",special:true,
      en:`Hello. We have a reservation at ${jumbo.name || "JUMBO Seafood - Riverside Point"} for ${jumbo.partySize || 11} people on September 22 at ${jumbo.time || "7:00 PM"}. The reservation ID is ${jumbo.reservationId || "6V5D9N"}. Could you please check our reservation?`,
      ko:`9월 22일 19:00, 11명 JUMBO Seafood 예약 확인 요청입니다. 예약번호: ${jumbo.reservationId || "6V5D9N"}`,
      tags:"jumbo seafood reservation riverside point 11"
    },
    {
      id:"trip-group-transport",category:"trip",icon:"🚐",title:"11명 단체 이동",special:true,
      en:"We are a group of 11 people, including three children, and we have several large suitcases. We need transportation that can accommodate everyone and all of our luggage together. What would you recommend?",
      ko:"아이 3명을 포함한 11명이고 큰 짐도 여러 개 있습니다. 사람과 짐이 모두 함께 이동할 수 있는 차량을 요청합니다.",
      tags:"11 people transport van luggage children"
    },
    {
      id:"trip-with-children",category:"trip",icon:"👨‍👩‍👧",title:"아이 동반 요청",special:true,
      en:"We are traveling with young children, including two three-year-olds. Could you please help us with an option that is comfortable and safe for the children?",
      ko:"만 3세 아이 2명을 포함해 어린아이들과 여행 중입니다. 아이들이 편하고 안전하게 이용할 수 있는 방법을 부탁드립니다.",
      tags:"children kid stroller family safe"
    },

    {id:"hotel-checkin",category:"hotel",icon:"🏨",title:"체크인",
      en:"Hello. I have a reservation under my name. Could you please help me with check-in?",
      ko:"제 이름으로 예약되어 있습니다. 체크인 부탁드립니다.",tags:"hotel checkin reservation"},
    {id:"hotel-luggage",category:"hotel",icon:"🧳",title:"짐 보관",
      en:"Could you please store our luggage until we are ready to leave for the airport?",
      ko:"공항으로 출발할 때까지 짐을 보관해 주실 수 있을까요?",tags:"hotel luggage storage"},
    {id:"hotel-room-problem",category:"hotel",icon:"🛠️",title:"객실 문제",
      en:"There seems to be a problem in our room. Could someone please come and check it?",
      ko:"객실에 문제가 있는 것 같습니다. 확인하러 와주실 수 있을까요?",tags:"hotel room problem help"},

    {id:"transport-destination",category:"transport",icon:"🚕",title:"이곳으로 가주세요",
      en:"Could you please take us to this location? We are traveling as a family group.",
      ko:"이 위치로 가주세요. 가족 단체로 이동 중입니다.",tags:"taxi grab destination"},
    {id:"transport-big-car",category:"transport",icon:"🚐",title:"큰 차량 필요",
      en:"We need a larger vehicle because we have several passengers, children, and luggage.",
      ko:"인원과 아이, 짐이 많아서 큰 차량이 필요합니다.",tags:"large vehicle van luggage"},
    {id:"transport-wait",category:"transport",icon:"⏳",title:"잠시 기다려 주세요",
      en:"Could you please wait a moment? The rest of our group is coming now.",
      ko:"잠시만 기다려 주세요. 나머지 일행이 지금 오고 있습니다.",tags:"wait group taxi"},

    {id:"food-reservation",category:"food",icon:"🍽️",title:"예약 확인",
      en:"Hello. We have a reservation for our group. Could you please check it for us?",
      ko:"단체 예약이 있습니다. 확인 부탁드립니다.",tags:"restaurant reservation"},
    {id:"food-kids",category:"food",icon:"🧒",title:"아이 먹을 메뉴",
      en:"Could you recommend something mild and not spicy for young children?",
      ko:"어린아이들이 먹을 수 있는 맵지 않고 순한 메뉴를 추천해 주세요.",tags:"kids mild not spicy restaurant"},
    {id:"food-share",category:"food",icon:"🥢",title:"여럿이 나눠 먹기",
      en:"We are sharing the dishes as a group. Could you please recommend a good amount of food for us?",
      ko:"여럿이 음식을 나눠 먹으려고 합니다. 적당한 주문량을 추천해 주세요.",tags:"share food group amount"},

    {id:"attraction-group",category:"attraction",icon:"🎢",title:"11명 함께 입장",
      en:"We are a group of 11 people. Is it possible for all of us to enter together?",
      ko:"11명 단체입니다. 모두 함께 입장할 수 있을까요?",tags:"attraction group 11 enter together"},
    {id:"attraction-child",category:"attraction",icon:"📏",title:"아이 이용 가능 여부",
      en:"Could you please check whether this child is allowed to use this attraction based on age and height?",
      ko:"아이의 나이와 키를 기준으로 이 시설을 이용할 수 있는지 확인해 주세요.",tags:"child height age ride"},
    {id:"attraction-stroller",category:"attraction",icon:"👶",title:"유모차",
      en:"Can we take the stroller inside, or is there a stroller parking area nearby?",
      ko:"유모차를 안으로 가지고 들어갈 수 있나요? 아니면 근처에 유모차 보관 장소가 있나요?",tags:"stroller parking attraction"},

    {id:"help-lost",category:"help",icon:"🆘",title:"도움이 필요합니다",
      en:"Excuse me. We need some help. Could you please assist us?",
      ko:"실례합니다. 도움이 필요합니다. 도와주실 수 있을까요?",tags:"help emergency assistance"},
    {id:"help-child-lost",category:"help",icon:"👧",title:"아이를 찾고 있습니다",
      en:"We cannot find one of the children in our group. Could you please help us contact security immediately?",
      ko:"일행 중 아이 한 명을 찾을 수 없습니다. 즉시 보안 담당자에게 연락해 주세요.",tags:"lost child security emergency"},
    {id:"help-medical",category:"help",icon:"🏥",title:"의료 도움",
      en:"Someone in our group needs medical assistance. Could you please help us find the nearest clinic or hospital?",
      ko:"일행 중 한 명이 의료 도움이 필요합니다. 가장 가까운 병원이나 진료소를 안내해 주세요.",tags:"medical clinic hospital emergency"}
  ];

  const CATS = [
    ["all","전체"],["fav","⭐ 즐겨찾기"],["trip","⭐ 이번 여행"],["hotel","🏨 호텔"],
    ["transport","🚕 교통"],["food","🍽️ 식당"],["attraction","🎢 관광지"],["help","🆘 긴급/도움"]
  ];

  const state = {
    category:"trip",
    query:"",
    fav:new Set(JSON.parse(localStorage.getItem("sg_message_card_favs") || "[]"))
  };

  const els = {
    cats:document.getElementById("mcCats"),
    grid:document.getElementById("mcGrid"),
    search:document.getElementById("mcSearch"),
    present:document.getElementById("mcPresent"),
    ptitle:document.getElementById("mcPresentTitle"),
    pen:document.getElementById("mcPresentEn"),
    pko:document.getElementById("mcPresentKo")
  };

  let activeCard = null;

  function esc(s){
    return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  }
  function saveFav(){ localStorage.setItem("sg_message_card_favs", JSON.stringify([...state.fav])); }
  function toast(msg){
    const t=document.getElementById("mcToast");t.textContent=msg;t.classList.add("show");
    clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),1400);
  }
  function copyText(text){
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(text).then(()=>toast("영어 문장을 복사했습니다."));
    }else{
      const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();
      document.execCommand("copy");ta.remove();toast("영어 문장을 복사했습니다.");
    }
  }
  function speak(text){
    if(!("speechSynthesis" in window)){toast("이 기기에서는 음성 읽기를 지원하지 않습니다.");return;}
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.88;speechSynthesis.speak(u);
  }
  function filtered(){
    const q=state.query.trim().toLowerCase();
    return cards.filter(c=>{
      const catok=state.category==="all" || (state.category==="fav"?state.fav.has(c.id):c.category===state.category);
      const hay=(c.title+" "+c.en+" "+c.ko+" "+(c.tags||"")).toLowerCase();
      return catok && (!q || hay.includes(q));
    });
  }
  function renderCats(){
    els.cats.innerHTML=CATS.map(([id,label])=>`<button class="mc-cat ${state.category===id?"on":""}" data-cat="${id}">${label}</button>`).join("");
  }
  function render(){
    renderCats();
    const list=filtered();
    if(!list.length){els.grid.innerHTML='<div class="mc-empty">검색 결과가 없습니다.</div>';return;}
    els.grid.innerHTML=list.map(c=>`
      <article class="mc-card ${c.special?"special":""}" data-id="${c.id}">
        <div class="mc-head">
          <div class="mc-label"><div class="mc-icon">${c.icon}</div><div><div class="mc-card-title">${esc(c.title)}</div><div class="mc-kind">${c.special?"이번 여행 데이터 연동":"일반 메시지"}</div></div></div>
          <button class="mc-star ${state.fav.has(c.id)?"on":""}" data-act="fav" aria-label="즐겨찾기">${state.fav.has(c.id)?"★":"☆"}</button>
        </div>
        <div class="mc-en">${esc(c.en).replace(/\n/g,"<br>")}</div>
        <div class="mc-ko">${esc(c.ko).replace(/\n/g,"<br>")}</div>
        <div class="mc-actions">
          <button class="show" data-act="show">📱 크게 보기</button>
          <button data-act="copy">📋 복사</button>
          <button data-act="tts">🔊 읽기</button>
        </div>
      </article>`).join("");
  }
  function openPresent(c){
    activeCard=c;
    els.ptitle.textContent=c.icon+" "+c.title;
    els.pen.textContent=c.en;
    els.pko.textContent=c.ko;
    els.present.classList.add("open");
    document.body.style.overflow="hidden";
  }
  function closePresent(){
    els.present.classList.remove("open");document.body.style.overflow="";
    if(document.fullscreenElement) document.exitFullscreen().catch(()=>{});
  }
  async function fullScreen(){
    try{
      if(!document.fullscreenElement) await els.present.requestFullscreen();
      else await document.exitFullscreen();
    }catch(e){toast("전체화면 전환을 지원하지 않는 환경입니다.");}
  }

  els.cats.onclick=e=>{
    const b=e.target.closest("[data-cat]");if(!b)return;state.category=b.dataset.cat;render();
  };
  els.search.oninput=e=>{state.query=e.target.value;render();};
  els.grid.onclick=e=>{
    const cardEl=e.target.closest(".mc-card");if(!cardEl)return;
    const c=cards.find(x=>x.id===cardEl.dataset.id);if(!c)return;
    const act=e.target.closest("[data-act]")?.dataset.act;
    if(act==="fav"){state.fav.has(c.id)?state.fav.delete(c.id):state.fav.add(c.id);saveFav();render();}
    if(act==="show")openPresent(c);
    if(act==="copy")copyText(c.en);
    if(act==="tts")speak(c.en);
  };
  document.getElementById("mcClose").onclick=closePresent;
  document.getElementById("mcPresentCopy").onclick=()=>activeCard&&copyText(activeCard.en);
  document.getElementById("mcPresentTts").onclick=()=>activeCard&&speak(activeCard.en);
  document.getElementById("mcPresentFull").onclick=fullScreen;
  render();
})();

