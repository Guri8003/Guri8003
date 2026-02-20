const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');
  
  // Wait for boot 
  await page.waitForTimeout(3000); 

  // Check top active
  let activeHref = await page.evaluate(() => {
    let active = document.querySelector('.nav-link.active');
    return active ? active.getAttribute('href') : null;
  });
  console.log("Top of page active link:", activeHref);
  
  // Scroll to Projects
  await page.evaluate(() => {
    document.getElementById('projects').scrollIntoView();
  });
  await page.waitForTimeout(1000); // Wait for scroll and intersection observer
  
  // Check active after scroll
  activeHref = await page.evaluate(() => {
    let active = document.querySelector('.nav-link.active');
    return active ? active.getAttribute('href') : null;
  });
  console.log("Projects section active link:", activeHref);
  
  await page.screenshot({ path: 'nav_projects_active.png' });

  await browser.close();
})();
