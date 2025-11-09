import { FaceMatchingTab } from "./tabs/FaceMatchingTab"; 
import { FaceDetectionTab } from "./tabs/FaceDetectionTab";
import { ImageQualityTab } from "./tabs/imageQualityTab";
import { LivenessTab } from "./tabs/LivenessTab";

export class TabFactory {
    constructor(page) {
        this.page = page;
        this.matchingTab = new FaceMatchingTab(this.page);
        this.detectionTab = new FaceDetectionTab(this.page);
        this.qualityTab = new ImageQualityTab(this.page);
        this.livenessTab = new LivenessTab(this.page);
    }
}