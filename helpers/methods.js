import { testData } from '../testData/testData';
import fs from 'fs';

export async function sendImageFaceDetection(imgPath) {
    const image = fs.readFileSync('testData/matchingPic.jpg');
    const base64image = image.toString('base64');
    const body = testData.bodies.detectBody(base64image);
    return await requestAPI('api/detect?logRequest=false', 'POST', JSON.stringify(body))
}

export async function requestAPI(path, method, body) {
    return await fetch(process.env.URL + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Origin': 'https://faceapi.regulaforensics.com',
            'Referer': 'https://faceapi.regulaforensics.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.7390.37 Safari/537.36'
        },
        body: body,
    })
}

