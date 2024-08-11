function showSection(section) {
    // 모든 섹션 숨기기
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');

    // 선택된 섹션 보이기
    document.querySelector(`.${section}`).style.display = 'block';
}

// 예시 데이터 (추후 서버나 데이터베이스로 대체 가능)
const comicsData = [
    { title: 'Comic 1', cover: 'cover1.jpg', content: 'comic1.html' },
    { title: 'Comic 2', cover: 'cover2.jpg', content: 'comic2.html' }
];

function loadComics() {
    const comicsContainer = document.querySelector('.comics');
    comicsData.forEach(comic => {
        const comicItem = document.createElement('div');
        comicItem.className = 'comic-item';
        comicItem.innerHTML = `
            <h2>${comic.title}</h2>
            <img src="${comic.cover}" alt="${comic.title}">
            <a href="${comic.content}" target="_blank">읽기</a>
        `;
        comicsContainer.appendChild(comicItem);
    });
}

// 페이지 로드 시 만화 로드
document.addEventListener('DOMContentLoaded', () => {
    loadComics();
    showSection('comics'); // 초기 섹션으로 만화 표시
});
