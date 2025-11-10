export const testData = {
    bodies: {
        detectBody: (img64) =>
            ({
                "processParam": {
                    "attributes": {
                        "config": [
                            {
                                "name": "Age"
                            },
                            {
                                "name": "EyeRight"
                            },
                            {
                                "name": "EyeLeft"
                            },
                            {
                                "name": "Emotion"
                            },
                            {
                                "name": "Smile"
                            },
                            {
                                "name": "Glasses"
                            },
                            {
                                "name": "HeadCovering"
                            },
                            {
                                "name": "ForeheadCovering"
                            },
                            {
                                "name": "Mouth"
                            },
                            {
                                "name": "MedicalMask"
                            },
                            {
                                "name": "Occlusion"
                            },
                            {
                                "name": "StrongMakeup"
                            },
                            {
                                "name": "Headphones"
                            }
                        ]
                    },
                    "onlyCentralFace": false,
                    "outputImageParams": {
                        "crop": {
                            "size": [
                                106,
                                134
                            ],
                            "type": 1
                        }
                    }
                },
                "image": img64,
            })

        }
    }

