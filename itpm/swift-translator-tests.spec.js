const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
{
  tcId: 'Pos_Fun_0001',
  name: 'Convert a short informal greeting question',
  input: 'oyaa hondhin innavadha?',
  expected: 'ඔයා හොන්දින්  ඉන්නවද?',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},
{
  tcId: 'Pos_Fun_0002',
  name: 'Convert a simple daily need statement',
  input: 'mata vathura oonee.',
  expected: 'මට වතුර ඕනේ.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},
{
  tcId: 'Pos_Fun_0003',
  name: 'Convert a simple future plan',
  input: 'api heta yamu.',
  expected: 'අපි හෙට යමු.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},

// Compound Sentences
{
  tcId: 'Pos_Fun_004',
  name: 'Convert a compound sentence with mixed English words',
  input: 'mama documents tika balalaa email ekak evannam.',
  expected: 'මම documents ටික බලලා email එකක් එවන්නම්.',
  category: 'Functional',
  grammar: 'Compound sentence',
  length: 'M'
},
{
  tcId: 'Pos_Fun_005',
  name: 'Convert a conditional sentence',
  input: 'oyaa enavaanam api yamu.',
  expected: 'ඔයා එනවානම් අපි යමු.',
  category: 'Functional',
  grammar: 'Compound sentence',
  length: 'M'
},

// Complex Sentences
{
  tcId: 'Pos_Fun_006',
  name: 'Convert a compound sentence with mixed English words',
  input: 'mama office eken reports collect karala manager ge email ekata send karannam.',
  expected: 'මම office එකෙන් reports collect කරල manager ගෙ email එකට send කරන්නම්.',
  category: 'Functional',
  grammar: 'Complex sentence',
  length: 'L'
},

// Questions
{
  tcId: 'Pos_Fun_007',
  name: 'Convert plural question',
  input: 'oyaalaa ennee naeeddha?',
  expected: 'ඔයාලා එන්නේ නෑද්ද?',
  category: 'Functional',
  grammar: 'Interrogative (question)',
  length: 'S'
},
{
  tcId: 'Pos_Fun_008',
  name: 'Convert a polite request sentence',
  input: 'karuNaakaralaa podi udhavvak karanna puLuvandha?',
  expected: 'කරුණාකරලා පොඩ්ඩක් උදව්වක් කරන්න පුලුවන්ද?',
  category: 'Functional',
  grammar: 'Interrogative (question)',
  length: 'M'
},
{
  tcId: 'Pos_Fun_009',
  name: 'Polite question request',
  input: 'oyaata mata eeka kiyanna puluvandha',
  expected: 'ඔයාට මට ඒක කියන්න පුලුවන්ද',
  category: 'Functional',
  grammar: 'Interrogative (question)',
  length: 'S'
},

// Commands
{
  tcId: 'Pos_Fun_010',
  name: 'Convert a direct command',
  input: 'poddak inna.',
  expected: 'පොඩ්ඩක් ඉන්න.',
  category: 'Functional',
  grammar: 'Imperative (command)',
  length: 'S'
},
{
  tcId: 'Pos_Fun_011',
  name: 'Convert polite instruction',
  input: 'karuNaakaralaa eeka balanna.',
  expected: 'කරුණාකරලා ඒක බලන්න.',
  category: 'Functional',
  grammar: 'Imperative (command)',
  length: 'S'
},

// Greetings and Responses
{
  tcId: 'Pos_Fun_012',
  name: 'Convert a negative daily statement',
  input: 'mata adha enna baee.',
  expected: 'මට අද එන්න බැහැ.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'M'
},
{
  tcId: 'Pos_Fun_013',
  name: 'Affirmative response',
  input: 'ov hari',
  expected: 'ඔව් hari',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},

// Tense Variations
{
  tcId: 'Pos_Fun_014',
  name: 'Convert past tense sentence',
  input: 'api iiyee cinema giyaa.',
  expected: 'අපි ඊයේ cinema ගියා.',
  category: 'Functional',
  grammar: 'Past tense',
  length: 'S'
},
{
  tcId: 'Pos_Fun_015',
  name: 'Convert present tense activity',
  input: 'mama dhaen kaeema kanavaa.',
  expected: 'මම දැන් කෑම කනවා.',
  category: 'Functional',
  grammar: 'Present tense',
  length: 'S'
},

// Mixed Language
{
  tcId: 'Pos_Fun_016',
  name: 'Convert mixed app name',
  input: 'WhatsApp msg ekak yavanna.',
  expected: 'මට එWhatsApp msg එකක් යවන්න.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},
{
  tcId: 'Pos_Fun_017',
  name: 'Convert slang phrase',
  input: 'ela machan vaedee hari.',
  expected: 'එළ මචං වැඩේ හරි.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},

// Plural and Pronouns
{
  tcId: 'Pos_Fun_018',
  name: 'Convert plural pronoun sentence with mixed English words',
  input: 'Api report eka adha submit karanavaa.',
  expected: 'අපි report එක අද submit කරනවා',
  category: 'Functional',
  grammar: 'Plural form',
  length: 'S'
},

// Word Combinations
{
  tcId: 'Pos_Fun_019',
  name: 'Convert third-person sentence',
  input: 'eyaa office gihin inne.',
  expected: 'එයා office ගිහින් ඉන්නේ.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'M'
},

// Mixed Language
{
  tcId: 'Pos_Fun_020',
  name: 'Convert mixed English term',
  input: 'mage phone eka charge karanna oonee.',
  expected: 'මට phone එක charge කරන්න  ඕනේ.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},
{
  tcId: 'Pos_Fun_021',
  name: 'Convert sentence with place name',
  input: 'api Colombo yanna hadhannee.',
  expected: 'අපි Colombo යන්න හදන්නේ.',
  category: 'Functional',
  grammar: 'Present tense',
  length: 'S'
},

// Punctuation
{
  tcId: 'Pos_Fun_022',
  name: 'Convert repeated word emphasis',
  input: 'lassanai lassanai.',
  expected: 'ලස්සනයි ලස්සනයි.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'S'
},

// Numbers and Formats
{
  tcId: 'Pos_Fun_023',
  name: 'Currency amount',
  input: 'mata Rs. 1500 vitharai thiyennee.',
  expected: 'මට Rs. 1500 විතරයි තියෙන්නේ.',
  category: 'Functional',
  grammar: 'Simple sentence',
  length: 'M'
},

// Medium Length
{
  tcId: 'Pos_Fun_024',
  name: 'Convert time expression',
  input: 'mclass eka 8.30 AM ta patan gannavaa.',
  expected: 'class එක 8.30 AMට පටන් ගන්නවා.',
  category: 'Functional',
  grammar: 'Compound sentence',
  length: 'M'
}

  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Incorrect handling of joined words',
      input: 'mamagedarayanavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Handling spelling errors in Singlish',
      input: 'mmaa geddhara yannavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Slang-heavy informal sentence',
      input: 'ela machan api gedhara yamu',
      expected: 'ඇයි මචන් අපි ගෙදර යමු',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම office යනවාඅද meeting එකක් තියෙනවා',
      expected: 'මම office යනවා\nඅද meeting එකක් තියෙනවා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Unsupported English abbreviation',
      input: 'mama heta enavaa ASAP',
      expected: 'මම හෙට එනවා ASAP',
      category: 'language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Repeated word emphasis handling',
      input: 'hari hari hari lassanai',
      expected: 'හරි හරි හරි ලස්සනයි',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Currency format handling',
      input: 'mata Rs. 5000 onee',
      expected: 'මට Rs. 5000 ඕනේ',
      category: 'Mixed Singlish + English',
      grammar: 'Presenttense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Multiple Space Handling',
      input: 'mama    gedhara   yanavaa',
      expected: 'මම ගෙදර යනවා',
      category: ' places ',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Repeated Character Handling',
      input: 'suba aluth awruddkk',
      expected: 'සුබ අලුත් අවුරුද්ද',
      category: 'Typographic error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Invalid characters',
      input: 'mama ??? Karanavaa',
      expected: 'මම ??? කරනවා',
      category: 'language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Responsive UI on mobile',
    input: 'mama gedhara yanna hadhanavaa, obata maava hambavenna puLuvandha?',
    partialInput: 'මම ගෙදර යන්න හදනවා, ඔබට මාව හම්බවෙන්න පුළුවන්ද?',
    expectedFull: 'මම ගෙදර යන්න හදනවා, ඔබට මාව හම්බවෙන්න පුළුවන්ද?',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'M'
  }
  
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
