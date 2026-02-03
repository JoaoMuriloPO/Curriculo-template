const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  // caminho absoluto do arquivo HTML
  const htmlPath = path.resolve(__dirname, "index.html");

  await page.goto(`file://${htmlPath}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "CV_Joao_Murilo.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "20mm",
      bottom: "20mm",
      left: "20mm",
    },
  });

  await browser.close();
  console.log("✅ PDF gerado com sucesso!");
})();
