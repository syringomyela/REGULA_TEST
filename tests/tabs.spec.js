import { test } from '../utils/fixture'
import {sendImageFaceDetection} from '../helpers/methods.js'

test.describe('Tabs content assertions', async () => {
    test.beforeEach(async ({ pages }) => {
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
    });
});

test.describe('Face detection tests', async() => {
        test.beforeEach(async ({ pages }) => {
        await pages.regulaPage.openStartPage();
    });
    test('Assert sending face detection API-request', async({pages, tabs, page}) => {
        await pages.regulaPage.openTab('detectionTab');
        const response = await sendImageFaceDetection('./testData/matchingPic.jpg');
        await tabs.detectionTab.assertResponseDetails(response);
    })
})

