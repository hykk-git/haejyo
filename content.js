// 웹 페이지에 주입되어 개인정보 동의 옵션을 분석하고 오버레이를 추가하는 스크립트

function analyzeText(text) {
    // 위험 옵션 분석 로직 (모델 API 호출)
    return fetch('https://your-api-endpoint.com/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }).then(response => response.json());
  }
  
  function addOverlay(node, risk) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.textContent = 'High Risk Option';
    overlay.style.position = 'absolute';
    overlay.style.backgroundColor = 'red';
    overlay.style.color = 'white';
    overlay.style.padding = '5px';
    overlay.style.zIndex = '1000';
    node.style.position = 'relative';
    node.appendChild(overlay);
  }
  
  document.querySelectorAll('p, li, div').forEach(node => {
    const text = node.innerText;
    analyzeText(text).then(result => {
      if (result.risk === 'High') {
        addOverlay(node, result.risk);
      }
    });
  });
  