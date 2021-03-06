﻿var traitTemplates = {
    "Brightness": {
        "attributes": null,
        "commands": {
            "action.devices.commands.BrightnessAbsolute": {
                "brightness": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "brightness": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "CameraStream": {
        "attributes": {
            "cameraStreamSupportedProtocols": [
                "hls"
            ],
            "cameraStreamNeedAuthToken": false,
            "cameraStreamNeedDrmEncryption": false
        },
        "commands": {
            "action.devices.commands.GetCameraStream": {}
        },
        "state": {
            "cameraStreamAccessUrl": {
                "topic": null,
                "googleType": "string",
                "valueMap": [
                    {
                        "type": "static",
                        "google": "URL_OF_HLS_STREAM"
                    }
                ]
            },
            "cameraStreamReceiverAppId": {
                "topic": null,
                "googleType": "string",
                "valueMap": [
                    {
                        "type": "static",
                        "google": null
                    }
                ]
            },
            "cameraStreamAuthToken": {
                "topic": null,
                "googleType": "string",
                "valueMap": [
                    {
                        "type": "static",
                        "google": null
                    }
                ]
            }
        }
    },
    "ColorSetting": {
        "attributes": {
            "colorModel": "rgb",
            "colorTemperatureRange": {
                "temperatureMinK": 2000,
                "temperatureMaxK": 9000
            },
            "commandOnlyColorSetting": true
        },
        "commands": {
            "action.devices.commands.ColorAbsolute": {
                "color.name": "MQTT_COMMAND_TOPIC",
                "color.temperature": "MQTT_COMMAND_TOPIC",
                "color.spectrumRGB": "MQTT_COMMAND_TOPIC",
                "color.spectrumHSV.hue": "MQTT_COMMAND_TOPIC",
                "color.spectrumHSV.saturation": "MQTT_COMMAND_TOPIC",
                "color.spectrumHSV.value": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "color.temperatureK": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "color.spectrumRgb": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "color.spectrumHsv.hue": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "color.spectrumHsv.saturation": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "color.spectrumHsv.value": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "ColorSpectrum": {
        "attributes": {
            "colorModel": "rgb"
        },
        "commands": {
            "action.devices.commands.ColorAbsolute": {
                "color.name": "MQTT_COMMAND_TOPIC",
                "color.spectrumRGB": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "color.name": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "color.spectrumRgb": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "ColorTemperature": {
        "attributes": {
            "temperatureMinK": 2000,
            "temperatureMaxK": 6500
        },
        "commands": {
            "action.devices.commands.ColorAbsolute": {
                "color.name": "MQTT_COMMAND_TOPIC",
                "color.temperature": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "color.name": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "color.temperature": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "Dock": {
        "attributes": null,
        "commands": {
            "action.devices.commands.Dock": {}
        },
        "state": {
            "isDocked": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": null
            }
        }
    },
    "FanSpeed": {
        "attributes": {
            "availableFanSpeeds": {
                "speeds": [
                    {
                        "speed_name": "Low",
                        "speed_values": [
                            {
                                "speed_synonym": [
                                    "low"
                                ],
                                "lang": "en"
                            }
                        ]
                    },
                    {
                        "speed_name": "High",
                        "speed_values": [
                            {
                                "speed_synonym": [
                                    "high"
                                ],
                                "lang": "en"
                            }
                        ]
                    }
                ],
                "ordered": true
            },
            "reversable": false
        },
        "commands": {
            "action.devices.commands.SetFanSpeed": {
                "fanSpeed": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "currentFanSpeedSetting": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": [
                    {
                        "mqtt": "1",
                        "type": "value",
                        "google": "Low"
                    },
                    {
                        "mqtt": "4",
                        "type": "value",
                        "google": "High"
                    }
                ]
            }
        }
    },
    "Locator": {
        "attributes": null,
        "commands": {
            "action.devices.commands.Locate": {
                "silent": "MQTT_COMMAND_TOPIC",
                "lang": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "generatedAlert": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": null
            }
        }
    },
    "Modes": {
        "attributes": {
            "availableModes": [
                {
                    "name": "input source",
                    "name_values": [
                        {
                            "name_synonym": [
                                "activity"
                            ],
                            "lang": "en"
                        }
                    ],
                    "settings": [
                        {
                            "setting_name": "tv",
                            "setting_values": [
                                {
                                    "setting_synonym": [
                                        "tv",
                                        "television"
                                    ],
                                    "lang": "en"
                                }
                            ]
                        },
                        {
                            "setting_name": "meda player",
                            "setting_values": [
                                {
                                    "setting_synonym": [
                                        "chromecast"
                                    ],
                                    "lang": "en"
                                }
                            ]
                        }
                    ],
                    "ordered": false
                }
            ]
        },
        "commands": {
            "action.devices.commands.SetModes": {
                "updateModeSettings.input source": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "currentModeSettings.input source": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": [
                    {
                        "mqtt": "Watch TV",
                        "type": "value",
                        "google": "tv"
                    },
                    {
                        "mqtt": "Watch Chromecast",
                        "type": "value",
                        "google": "media player"
                    },
                    {
                        "mqtt": "Watch Roku",
                        "type": "value",
                        "google": "game console"
                    },
                    {
                        "mqtt": "PowerOff",
                        "type": "value",
                        "google": "off"
                    }
                ]
            }
        }
    },
    "OnOff": {
        "attributes": null,
        "commands": {
            "action.devices.commands.OnOff": {
                "on": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "on": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": [
                    {
                        "mqtt": "on",
                        "type": "value",
                        "google": true
                    },
                    {
                        "mqtt": "off",
                        "type": "value",
                        "google": false
                    }
                ]
            }
        }
    },
    "RunCycle": {
        "attributes": null,
        "commands": {},
        "state": {
            "currentCycle": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "nextCycle": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "lang": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "currentTotalRemainingTime": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "currentCycleRemainingTime": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
         }
    },
    "Scene": {
        "attributes": {
            "sceneReversible": true
        },
        "commands": {
            "action.devices.commands.ActivateScene": {
                "deactivate": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {}
    },
    "StartStop": {
        "attributes": {
            "pausable": false
        },
        "commands": {
            "action.devices.commands.StartStop": {
                "start": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "isRunning": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": null
            },
            "isPaused": {
                "topic": null,
                "googleType": "bool",
                "valueMap": null
            }
        }
    },
    "TemperatureControl": {
        "attributes": {
            "temperatureRange": {
                "minThresholdCelsius": 30,
                "maxThresholdCelsius": 100
            },
            "temperatureStepCelsius": 1,
            "temperatureUnitForUX": "C"
        },
        "commands": {
            "action.devices.commands.SetTemperature": {
                "temperature": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "temperatureSetpointCelsius": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "temperatureAmbientCelsius": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "TemperatureSetting": {
        "attributes": {
            "availableThermostatModes": "off,heat,cool,on",
            "thermostatTemperatureUnit": "F"
        },
        "commands": {
            "action.devices.commands.ThermostatTemperatureSetpoint": {
                "thermostatTemperatureSetpoint": "MQTT_COMMAND_TOPIC"
            },
            "action.devices.commands.ThermostatTemperatureSetRange": {
                "thermostatTemperatureSetpointHigh": "MQTT_COMMAND_TOPIC",
                "thermostatTemperatureSetpointLow": "MQTT_COMMAND_TOPIC"
            },
            "action.devices.commands.ThermostatSetMode": {
                "thermostatMode": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "thermostatMode": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "string",
                "valueMap": null
            },
            "thermostatTemperatureSetpoint": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "thermostatTemperatureAmbient": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "thermostatTemperatureSetpointHigh": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "thermostatTemperatureSetpointLow": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            },
            "thermostatHumidityAmbient": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "numeric",
                "valueMap": null
            }
        }
    },
    "Toggles": {
        "attributes": {
            "availableToggles": [{
                "name": "sterilization",
                "name_values": [{
                    "name_synonym": ["bio-clean", "ultrasound"],
                    "lang": "en"
                }]
            },
            {
                "name": "energysaving",
                "name_values": [{
                    "name_synonym": ["normal", "medium", "high"],
                    "lang": "en"
                }]
            }]
        },
        "commands": {
            "action.devices.commands.SetToggles": {
                "updateToggleSettings.sterilization": "MQTT_COMMAND_TOPIC",
                "updateToggleSettings.energysaving": "MQTT_COMMAND_TOPIC"
            }
        },
        "state": {
            "currentToggleSettings.sterilization": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": null
            },
            "currentToggleSettings.energysaving": {
                "topic": "MQTT_STATE_TOPIC",
                "googleType": "bool",
                "valueMap": null
            }
        }
    }
}