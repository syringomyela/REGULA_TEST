import { FaceMatchingTab } from "./tabs/FaceMatchingTab.js"; 
import { FaceDetectionTab } from "./tabs/FaceDetectionTab.js";
import { ImageQualityTab } from "./tabs/ImageQualityTab.js";
import { LivenessTab } from "./tabs/LivenessTab.js";

export class TabFactory {
    constructor(page) {
        this.page = page;
        this.matchingTab = new FaceMatchingTab(this.page);
        this.detectionTab = new FaceDetectionTab(this.page);
        this.qualityTab = new ImageQualityTab(this.page);
        this.livenessTab = new LivenessTab(this.page);
    }
}