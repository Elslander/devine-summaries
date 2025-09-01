const sheetID = "1eGvmfGhlgX8uwDqkIpMWLJG6P7BGKiIoeP6uouGaH_E";
const gid = "0";
const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&gid=${gid}`;

const formatDate = (googleDateString) => {
  const match = googleDateString.match(/Date\((\d+), (\d+), (\d+), (\d+), (\d+), (\d+)\)/);
  if(!match) return googleDateString;
  const [, year, month, day] = match.map(Number);
  const dd = String(day).padStart(2, '0');
  const mm = String(month + 1).padStart(2, '0');
  return `${dd}-${mm}-${year}`;
}

const fetchQuestions = async() => {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const rows = json.table.rows;

    const questionsContainer = document.querySelector('.main__questions');

    rows.forEach(row => {
      const [timestamp, type, subject, details, response] = row.c.map(cell => cell ? cell.v : "");

      if(type === "Question") {
        const formattedDate = formatDate(timestamp);

        const article = document.createElement('article');
        article.classList.add('questions__question');
        article.innerHTML = `
          <h3 class="question__title">${details}</h3>
          <p class="question__reply">${response || "No reply yet."}</p>
          <div class="question__info">
            <p class="info__date">${formattedDate}</p>
            <p class="info__${subject.toLowerCase().replace(/\s+/g, '-')}">${subject}</p>
          </div>
        `;
        questionsContainer.appendChild(article);
      }
    });

    document.querySelector("main").appendChild(questionsContainer);
  } catch (error) {
    console.error("Error fetching sheet data:", error);
  }
}

fetchQuestions();