Singapore Family Trip · 메시지 카드 기능

파일
- message-cards.html
- assets/css/message-cards.css
- assets/js/trip-data.js
- assets/js/message-cards.js
- index-message-card-snippet.html
- UPDATE-ME.txt

적용
1) 위 폴더 구조 그대로 저장소 루트에 업로드
2) 현재 index.html 메뉴에 index-message-card-snippet.html의 버튼 1개 추가
3) index → 💬 메시지 카드 → message-cards.html 진입
4) 팜플렛 화면에는 링크를 추가하지 않음

기능
- 카테고리
- 이번 여행 특화 카드
- 일반 카드
- 검색
- 즐겨찾기(localStorage)
- 영어 복사
- Web Speech API TTS
- 상대방에게 보여주는 큰 화면
- Fullscreen API
- 모바일 우선

주의
- TTS와 Fullscreen은 브라우저 지원 범위에 따라 동작함.
- 여행 예약정보는 assets/js/trip-data.js에서 수정.
