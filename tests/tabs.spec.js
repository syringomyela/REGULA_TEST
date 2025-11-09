import { test } from '../utils/fixture'


test.describe('Tabs content assertions', async () => {
    test.beforeEach(async ({ pages}) => {
        await pages.regulaPage.openStartPage();
    });
    ([
        { tabName: 'matchingTab', description: 'Face matching' },
        { tabName: 'detectionTab', description: 'Face detection' },
        { tabName: 'qualityTab', description: 'Face image quality' },
        { tabName: 'livenessTab', description: 'Liveness detection' }
    ]).forEach(({ tabName, description }) => {
        test(`Open ${description} tab and assert its content`, async ({ pages, tabs }) => {
            await pages.regulaPage.openTab(tabName);
            await tabs[tabName].assertTabContentPresence();
        })
    })

})

