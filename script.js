
const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");

const questions = [
  "當你與人初次互動時，通常是？",
  "如果別人對你訴苦，你通常會？",
  "你在人群中，感覺是？",
  "當孩子或動物靠近你時，你的第一反應是？",
  "在安靜空間中，你的存在感是？",
  "你與動物的關係通常是？",
  "你對孩子的感覺是？",
  "你如何理解氣場？",
  "別人對你的評價常是？",
  "你走在路上的感覺是？"
];
const options = [
  ["A. 安靜觀察", "B. 主動微笑", "C. 看狀況調整"],
  ["A. 靜聽給建議", "B. 感同身受", "C. 引導對方"],
  ["A. 觀察者", "B. 內向但被接近", "C. 融入自如"],
  ["A. 像朋友互動", "B. 自然接納", "C. 驚喜又溫馨"],
  ["A. 不說話但被注意", "B. 場域安定下來", "C. 對部分人吸引力"],
  ["A. 主動親近", "B. 溫柔就靠近", "C. 常常圍過來"],
  ["A. 能玩在一起", "B. 喜歡觀察他們", "C. 他們很靈"],
  ["A. 感受到能量", "B. 溫暖感受", "C. 別人說我有磁場"],
  ["A. 有安全感", "B. 溫暖有趣", "C. 深度神秘"],
  ["A. 與世界和平共處", "B. 世界在觀察我", "C. 常被搭話"]
];

function createQuiz() {
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${i + 1}. ${q}</p>`;
    options[i].forEach((opt, j) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${"ABC"[j]}" required />
          ${opt}
        </label><br/>
      `;
    });
    quizForm.appendChild(div);
  });
}

submitBtn.addEventListener("click", () => {
  const formData = new FormData(quizForm);
  const answers = questions.map((_, i) => formData.get(`q${i}`));
  const result = getPersonalityType(answers);
  window.location.href = `results/${result}.html`;
});

function getPersonalityType(answers) {
  const count = { A: 0, B: 0, C: 0 };
  answers.forEach(a => count[a]++);
  if (count.B >= 6) return "light";
  if (count.A >= 6) return "guide";
  return "healer";
}

createQuiz();
