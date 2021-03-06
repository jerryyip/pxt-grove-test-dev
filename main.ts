
const initRegisterArray: number[] = [
    0xEF, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37, 0x07, 0x38, 0x17,
    0x39, 0x06, 0x3A, 0x12, 0x3F, 0x00, 0x40, 0x02, 0x41, 0xFF, 0x42, 0x01, 0x46, 0x2D, 0x47, 0x0F,
    0x48, 0x3C, 0x49, 0x00, 0x4A, 0x1E, 0x4B, 0x00, 0x4C, 0x20, 0x4D, 0x00, 0x4E, 0x1A, 0x4F, 0x14,
    0x50, 0x00, 0x51, 0x10, 0x52, 0x00, 0x5C, 0x02, 0x5D, 0x00, 0x5E, 0x10, 0x5F, 0x3F, 0x60, 0x27,
    0x61, 0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xF7, 0x65, 0x03, 0x66, 0xD9, 0x67, 0x03, 0x68, 0x01,
    0x69, 0xC8, 0x6A, 0x40, 0x6D, 0x04, 0x6E, 0x00, 0x6F, 0x00, 0x70, 0x80, 0x71, 0x00, 0x72, 0x00,
    0x73, 0x00, 0x74, 0xF0, 0x75, 0x00, 0x80, 0x42, 0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20,
    0x85, 0x00, 0x86, 0x10, 0x87, 0x00, 0x88, 0x05, 0x89, 0x18, 0x8A, 0x10, 0x8B, 0x01, 0x8C, 0x37,
    0x8D, 0x00, 0x8E, 0xF0, 0x8F, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1E, 0x93, 0x0D, 0x94, 0x0A,
    0x95, 0x0A, 0x96, 0x0C, 0x97, 0x05, 0x98, 0x0A, 0x99, 0x41, 0x9A, 0x14, 0x9B, 0x0A, 0x9C, 0x3F,
    0x9D, 0x33, 0x9E, 0xAE, 0x9F, 0xF9, 0xA0, 0x48, 0xA1, 0x13, 0xA2, 0x10, 0xA3, 0x08, 0xA4, 0x30,
    0xA5, 0x19, 0xA6, 0x10, 0xA7, 0x08, 0xA8, 0x24, 0xA9, 0x04, 0xAA, 0x1E, 0xAB, 0x1E, 0xCC, 0x19,
    0xCD, 0x0B, 0xCE, 0x13, 0xCF, 0x64, 0xD0, 0x21, 0xD1, 0x0F, 0xD2, 0x88, 0xE0, 0x01, 0xE1, 0x04,
    0xE2, 0x41, 0xE3, 0xD6, 0xE4, 0x00, 0xE5, 0x0C, 0xE6, 0x0A, 0xE7, 0x00, 0xE8, 0x00, 0xE9, 0x00,
    0xEE, 0x07, 0xEF, 0x01, 0x00, 0x1E, 0x01, 0x1E, 0x02, 0x0F, 0x03, 0x10, 0x04, 0x02, 0x05, 0x00,
    0x06, 0xB0, 0x07, 0x04, 0x08, 0x0D, 0x09, 0x0E, 0x0A, 0x9C, 0x0B, 0x04, 0x0C, 0x05, 0x0D, 0x0F,
    0x0E, 0x02, 0x0F, 0x12, 0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07,
    0x16, 0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1A, 0x05, 0x1B, 0x0C, 0x1C, 0x2A, 0x1D, 0x01,
    0x1E, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26, 0x00, 0x27, 0x39, 0x28, 0x7F,
    0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1A, 0x33, 0x1A, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01,
    0x37, 0xFF, 0x38, 0x36, 0x39, 0x07, 0x3A, 0x00, 0x3E, 0xFF, 0x3F, 0x00, 0x40, 0x77, 0x41, 0x40,
    0x42, 0x00, 0x43, 0x30, 0x44, 0xA0, 0x45, 0x5C, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4A, 0x1E,
    0x4B, 0x1E, 0x4C, 0x00, 0x4D, 0x00, 0x4E, 0xA0, 0x4F, 0x80, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00,
    0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5A, 0x08, 0x5B, 0x94, 0x5C, 0xE8, 0x5D, 0x08,
    0x5E, 0x3D, 0x5F, 0x99, 0x60, 0x45, 0x61, 0x40, 0x63, 0x2D, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00,
    0x67, 0x97, 0x68, 0x01, 0x69, 0xCD, 0x6A, 0x01, 0x6B, 0xB0, 0x6C, 0x04, 0x6D, 0x2C, 0x6E, 0x01,
    0x6F, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76, 0x31, 0x77, 0x01,
    0x7C, 0x84, 0x7D, 0x03, 0x7E, 0x01
];


const sh1107gFont: number[] = [
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00,
  0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00,
  0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00,
  0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00,
  0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00,
  0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00,
  0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00,
  0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00,
  0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00,
  0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00,
  0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00,
  0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00,
  0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00,
  0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00,
  0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00,
  0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00,
  0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00,
  0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00,
  0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00,
  0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00,
  0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00,
  0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00,
  0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00,
  0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00,
  0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00,
  0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00,
  0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00,
  0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00,
  0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00,
  0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00,
  0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00,
  0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00,
  0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00,
  0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00,
  0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00,
  0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00,
  0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00,
  0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00,
  0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00,
  0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00,
  0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00,
  0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00,
  0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00,
  0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00,
  0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00,
  0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00,
  0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00,
  0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00,
  0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00,
  0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00,
  0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00,
  0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00,
  0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00,
  0x00,0x3F,0x40,0x38,0x40,0x3F,0x00,0x00,
  0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00,
  0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00,
  0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00,
  0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00,
  0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00,
  0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00,
  0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00,
  0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00,
  0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00,
  0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00,
  0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00,
  0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00,
  0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00,
  0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00,
  0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00,
  0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00,
  0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00,
  0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00,
  0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00,
  0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00,
  0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00,
  0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00,
  0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00,
  0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00,
  0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00,
  0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00,
  0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00,
  0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00,
  0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00,
  0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00,
  0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00,
  0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00,
  0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00,
  0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00,
  0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00,
  0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00,
  0x00,0x00,0x7F,0x00,0x00,0x00,0x00,0x00,
  0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00,
  0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00,
  0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00 
];

let TubeTab: number [] = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
    0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
];

/**
 * Grove Gestures
 */
enum GroveGesture {
    //% block=None
    None = 0,
    //% block=Right
    Right = 1,
    //% block=Left
    Left = 2,
    //% block=Up
    Up = 3,
    //% block=Down
    Down = 4,
    //% block=Forward
    Forward = 5,
    //% block=Backward
    Backward = 6,
    //% block=Clockwise
    Clockwise = 7,
    //% block=Anticlockwise
    Anticlockwise = 8,
    //% block=Wave
    Wave = 9
}

enum GroveJoystickPins {
    //% block=P0
    P0 = 7,
    //% block=P1
    P1 = 8,
    //% block=P2
    P2 = 9,
    //% block=P3
    P3 = 10,
    //% block=P10
    P10 = 17
}

enum GroveJoystickKey {
    //% block=None
    None = 0,
    //% block=Up
    Up = 1,
    //% block=Down
    Down = 2,
    //% block=Left
    Left = 3,
    //% block=Right
    Right = 4,
    //% block=UpperLeft
    UL = 5,
    //% block=LowerLeft
    LL = 6,
    //% block=UpperRight
    UR = 7,
    //% block=LowerRight
    LR = 8,
    //% block=Press
    Press = 9
}


/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf108" block="Grove"
namespace grove {
    const gestureEventId = 3100;
    const joystickEventID = 3101;
    let lastGesture = GroveGesture.None;
    let lastJoystick = GroveJoystickKey.None;
    let joystick: GroveJoystick = undefined;
    let paj7620: PAJ7620 = undefined;
    let distanceBackup: number = 0;
    /**
     * Do something when a gesture is detected by Grove - Gesture
     * @param gesture type of gesture to detect
     * @param handler code to run
     */
    //% blockId=grove_gesture_create_event block="on Gesture|%gesture"
    export function onGesture(gesture: GroveGesture, handler: () => void) {
        control.onEvent(gestureEventId, gesture, handler);
        if (!paj7620) {
            paj7620.init();
            control.inBackground(() => {
                while(true) {
                    const gesture = paj7620.read();
                    if (gesture != lastGesture) {
                        lastGesture = gesture;
                        control.raiseEvent(gestureEventId, lastGesture);
                    }
                    basic.pause(50);
                }
            })
        }
    }


    /**
     * Do something when a key is detected by Grove - Thumb Joystick
     * @param key type of joystick to detect
     * @param xpin
     * @param ypin
     * @param handler code to run
     */
    //% blockId=grove_joystick_create_event block="on Key|%key| at x pin|%xpin| and y pin|%ypin|"
    export function onJoystick(key: GroveJoystickKey, xpin: GroveJoystickPins, ypin: GroveJoystickPins, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while(true) {
                const key = joystick.read(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key; 
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(200);
            }
        })
        
    }

    
    /**
     * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=grove_ultrasonic_centimeters block="Ultrasonic Sensor (in cm) at|%pin"
    export function measureInCentimeters(pin: DigitalPin): number
    {
        let duration = 0;
        let RangeInCentimeters = 0;
        
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);        
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = duration * 153 / 29 / 2 / 100;
               
        if(RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);
        
        return RangeInCentimeters;
    }
    
    /**
     * Create a new driver Grove - Ultrasonic Sensor to measure distances in inch
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=grove_ultrasonic_inches block="Ultrasonic Sensor (in inch) at|%pin"
    export function measureInInches(pin: DigitalPin): number
    {
        let duration = 0;
        let RangeInInches = 0;
        
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);        
        duration = pins.pulseIn(pin, PulseValue.High, 100000); // Max duration 100 ms
        
        RangeInInches = duration * 153 / 74 / 2 / 100;
        
        if(RangeInInches > 0) distanceBackup = RangeInInches;
        else RangeInInches = distanceBackup;
        
        basic.pause(50);
        
        return RangeInInches;
    }
    
    /**
     * Create a new driver Grove - 4-Digit Display
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=grove_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    export function createDisplay(clkPin: DigitalPin, dataPin: DigitalPin): TM1637
    {
        let display = new TM1637();
        
        display.buf = pins.createBuffer(4);
        display.clkPin = clkPin;
        display.dataPin = dataPin;
        display.brightnessLevel = 0;
        display.pointFlag = false;
        display.clear();
        
        return display;
    }
    
    /**
     * 
     */
    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);

            buf[0] = addr;
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x73, buf, false);
        }

        private paj7620ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);

            buf[0] = addr;

            pins.i2cWriteBuffer(0x73, buf, false);

            buf = pins.i2cReadBuffer(0x73, 1, false);

            return buf[0];
        }

        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xEF, 0);
            else if (bank == 1) this.paj7620WriteReg(0xEF, 1);
        }

        private paj7620Init() {
            let temp:number = 0;

            this.paj7620SelectBank(0);

            temp = this.paj7620ReadReg(0);
            if (temp == 0x20) {
                for (let i = 0; i < 438; i += 2) {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }

            this.paj7620SelectBank(0);
        }

        /**
         * Create a new driver of Grove - Gesture
         */
        //% blockId=grove_gesture_init block="%strip|initiate the Grove - Gesture"
        //% advanced=true
        init() {
            this.paj7620Init();
            basic.pause(200);
        }

        /**
         * Detect and recognize the gestures from Grove - Gesture
         */
        //% blockId=grove_gesture_read block="%strip|get gesture"
        //% advanced=true
        read(): number {
            let data:number = 0, result = 0;

            data = this.paj7620ReadReg(0x43);
            switch (data) {
                case 0x01:
                    result = GroveGesture.Right;
                break;

                case 0x02:
                    result = GroveGesture.Left;
                break;

                case 0x04:
                    result = GroveGesture.Up;
                break;

                case 0x08:
                    result = GroveGesture.Down;
                break;

                case 0x10:
                    result = GroveGesture.Forward;
                break;

                case 0x20:
                    result = GroveGesture.Backward;
                break;

                case 0x40:
                    result = GroveGesture.Clockwise;
                break;

                case 0x80:
                    result = GroveGesture.Anticlockwise;
                break;

                default:
                    data = this.paj7620ReadReg(0x44);
                    if (data == 0x01)
                        result = GroveGesture.Wave;
                break;
            }

            return result;
        }
    }
    
    /**
     * 
     */
    export class TM1637
    {
        clkPin: DigitalPin;
        dataPin: DigitalPin;
        brightnessLevel: number;     
        pointFlag: boolean;
        buf: Buffer;

        private writeByte(wrData: number) 
        {
            for(let i = 0; i < 8; i ++)
            {
                pins.digitalWritePin(this.clkPin, 0);
                if(wrData & 0x01)pins.digitalWritePin(this.dataPin, 1);
                else pins.digitalWritePin(this.dataPin, 0);
                wrData >>= 1;
                pins.digitalWritePin(this.clkPin, 1);
            }
            
            pins.digitalWritePin(this.clkPin, 0); // Wait for ACK
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.clkPin, 1);
        }
        
        private start()
        {
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 0);
        }
        
        private stop()
        {
            pins.digitalWritePin(this.clkPin, 0);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
        }
        
        private coding(dispData: number): number
        {
            let pointData = 0;
            
            if(this.pointFlag == true)pointData = 0x80;
            else if(this.pointFlag == false)pointData = 0;
            
            if(dispData == 0x7f)dispData = 0x00 + pointData;
            else dispData = TubeTab[dispData] + pointData;
            
            return dispData;
        } 

        /**
         * Show a 4 digits number on display
         * @param dispData value of number
         */
        //% blockId=grove_tm1637_display_number block="%strip|show number|%dispData"
        show(dispData: number)
        {       
            if(dispData < 10)
            {
                this.bit(dispData, 3);
                this.bit(0x7f, 2);
                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
                
                this.buf[3] = dispData;
                this.buf[2] = 0x7f;
                this.buf[1] = 0x7f;
                this.buf[0] = 0x7f;
            }
            else if(dispData < 100)
            {
                this.bit(dispData % 10, 3);
                this.bit((dispData / 10) % 10, 2);
                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
                
                this.buf[3] = dispData % 10;
                this.buf[2] = (dispData / 10) % 10;
                this.buf[1] = 0x7f;
                this.buf[0] = 0x7f;
            }
            else if(dispData < 1000)
            {
                this.bit(dispData % 10, 3);
                this.bit((dispData / 10) % 10, 2);
                this.bit((dispData / 100) % 10, 1);
                this.bit(0x7f, 0);
                
                this.buf[3] = dispData % 10;
                this.buf[2] = (dispData / 10) % 10;
                this.buf[1] = (dispData / 100) % 10;
                this.buf[0] = 0x7f;
            }
            else
            {
                this.bit(dispData % 10, 3);
                this.bit((dispData / 10) % 10, 2);
                this.bit((dispData / 100) % 10, 1);
                this.bit((dispData / 1000) % 10, 0);
                
                this.buf[3] = dispData % 10;
                this.buf[2] = (dispData / 10) % 10;
                this.buf[1] = (dispData / 100) % 10;
                this.buf[0] = (dispData / 1000) % 10;
            }
        }
        
        /**
         * Set the brightness level of display at from 0 to 7
         * @param level value of brightness level
         */
        //% blockId=grove_tm1637_set_display_level block="%strip|brightness level to|%level"
        //% level.min=0 level.max=7
        set(level: number)
        {
            this.brightnessLevel = level;
            
            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }
        
        /**
         * Show a single number from 0 to 9 at a specified digit of Grove - 4-Digit Display
         * @param dispData value of number
         * @param bitAddr value of bit number
         */
        //% blockId=grove_tm1637_display_bit block="%strip|show single number|%dispData|at digit|%bitAddr"
        //% dispData.min=0 dispData.max=9
        //% bitAddr.min=0 bitAddr.max=3
        //% advanced=true
        bit(dispData: number, bitAddr: number)
        {
            if((dispData == 0x7f) || ((dispData <= 9) && (bitAddr <= 3)))
            {
                let segData = 0;
                
                segData = this.coding(dispData);
                this.start();
                this.writeByte(0x44);
                this.stop();
                this.start();
                this.writeByte(bitAddr | 0xc0);
                this.writeByte(segData);
                this.stop();
                this.start();
                this.writeByte(0x88 + this.brightnessLevel);
                this.stop();
                
                this.buf[bitAddr] = dispData;
            }
        }
        
        /**
         * Turn on or off the colon point on Grove - 4-Digit Display
         * @param pointEn value of point switch
         */
        //% blockId=grove_tm1637_display_point block="%strip|turn|%point|colon point"
        //% advanced=true
        point(point: boolean)
        {
            this.pointFlag = point;
            
            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }
        
        /**
         * Clear the display
         */
        //% blockId=grove_tm1637_display_clear block="%strip|clear"
        //% advanced=true
        clear()
        {
            this.bit(0x7f, 0x00);
            this.bit(0x7f, 0x01);
            this.bit(0x7f, 0x02);
            this.bit(0x7f, 0x03);
        }
    }


    export class GroveJoystick
    {
        /**
         * Detect position from Grove - Thumb Joystick
         * @param xpin
         * @param ypin
         */
        //% blockId=grove_joystick_read block="Read key of joystickon at|%xpin|and|%ypin"
        //% advanced=true
        read(xpin: GroveJoystickPins, ypin: GroveJoystickPins): number {
            let xdata = 0, ydata = 0, result = 0;
            let x :number = xpin;
            let y :number = ypin;

            xdata = pins.analogReadPin(<AnalogPin>x);
            ydata = pins.analogReadPin(<AnalogPin>y);
            if (xdata > 1000) {
                // result = GroveJoystickKey.Press;
                result = 9;
            }
            else if (xdata > 600) {
                if (ydata > 600) result = GroveJoystickKey.UR;
                else if (ydata < 400) result = GroveJoystickKey.LR;
                else result = GroveJoystickKey.Right;
            }
            else if (xdata < 400) {
                if (ydata > 600) result = GroveJoystickKey.UL;
                else if (ydata < 400) result = GroveJoystickKey.LL;
                else result = GroveJoystickKey.Left;
            }
            else {
                if (ydata > 600) result = GroveJoystickKey.Up;
                else if (ydata < 400) result = GroveJoystickKey.Down;
                else result = GroveJoystickKey.None;
            }
            
            return result;
        }
    }

    export class SH1107G 
    {
        // i2c_addr : number = 0x3c;

        private sendData(data:number) {
            let buf: Buffer = pins.createBuffer(2);
            buf[0] = 0x40; // SeeedGrayOLED_Data_Mode
            buf[1] = data;

            pins.i2cWriteBuffer(0x3c, buf, false);
            // pins.i2cWriteBuffer(0x3c, buf);
        }

        private sendCommand(cmd:number) {
            
            let buf: Buffer = pins.createBuffer(2);
            buf[0] = 0x80;  // SeeedGrayOLED_Command_Mode
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x3c, buf, false);
            // pins.i2cWriteBuffer(0x3c, buf);
        }

        init() {
            this.sendCommand(0xae);  //Display OFF 
            this.sendCommand(0xd5);  // Set Dclk
            this.sendCommand(0x50);  // 100Hz
            this.sendCommand(0x20);  // Set row address
            this.sendCommand(0x81);  // Set contrast control
            this.sendCommand(0x80);  
            this.sendCommand(0xa0);  // Segment remap
            this.sendCommand(0xa4);  // Set Entire Display ON 
            this.sendCommand(0xa6);  // Normal display
            this.sendCommand(0xad);  // Set external VCC
            this.sendCommand(0x80);
            this.sendCommand(0xc0);  // Set Common scan direction
            this.sendCommand(0xd9);  // Set phase leghth
            this.sendCommand(0x1f);
            this.sendCommand(0xdb);  // Set Vcomh voltage
            this.sendCommand(0x27);
            this.sendCommand(0xaf);  // Display ON
            this.sendCommand(0xb0);
            this.sendCommand(0x00);
            this.sendCommand(0x11);
        }

        setContrastLevel(level:number) {
            this.sendCommand(0x81);   // SeeedGrayOLED_Set_ContrastLevel_Cmd
            this.sendCommand(level);
        }

        setHorizontalMode() {
            this.sendCommand(0xa0);
            this.sendCommand(0xc8);
        }

        setVerticalMode() {
            this.sendCommand(0xa0);
            this.sendCommand(0xc0);
        }

        // range of row&col?
        setTextXY(row:number, col:number) {
            let col_l:number = 0;
            if (col % 2 == 0) {
                col_l = 0x08;
            }
            else {
                col_l = 0x00;
            }
            this.sendCommand(0xb0+row);
            this.sendCommand(col_l);
            this.sendCommand(0x10+(col/2));
        }

        // 
        clearDisplay() {
            for(let i:number=0; i<16;i++){
                this.sendCommand(0xb0+i);
                this.sendCommand(0x0);
                this.sendCommand(0x10);
                for(let j=0; j<128;j++){ 
                  this.sendData(0x00);  
                }
            }
        }

        // 
        private putChar(c:number) {
            if (c < 32 || c > 127) {
                c = 0; // space
            }
            else {
                c = c-32;
            }

            for(let i=0; i< 8;i++){
                this.sendData(sh1107gFont[c*8+i]);
            }
        }

        putString(s:string) {
            for (let n=0;n<s.length;n++){
                this.putChar(s.charCodeAt(n));
            }
        }

        putNumber(num:number) {
            this.putString(num.toString());
        }

        // 滚动
        // setHorizontalScrollProperties
        // activateScroll
        // deactivateScroll

        // setNormalDisplay
        // setInverseDisplay

        //% blockId=sh1107g_drawBitmap block="draw bitmap start at |%x| |%y|, size |%length| x |%width|, bitmap:|%bitmap|"
        //% x.min=0 x.max=15
        //% y.min=0 y.max=127
        //% row_number.min=0 row_number.max=15
        //% column_number.min=0 column_number.max=127
        drawBitmap(x_start:number,y_start:number,row_number:number,column_number:number,bitmap:number[]) {
            let x_end = x_start+row_number;
            let y_end = y_start+column_number;
            if (x_end > 16) x_end = 16;
            if (y_end > 128) y_end = 128;
            let x_offset = 0, y_offset = 0;

            for (let i=x_start; i<x_end; i++) {
                y_offset = 0;
                for (let j=y_start; j<y_end; j++) {
                    let temp_byte = bitmap[column_number*x_offset+y_offset];
                    y_offset++;
                    this.sendCommand(0xb0+i);
                    this.sendCommand(j % 16);
                    this.sendCommand(j/16 + 0x10);
                    this.sendData(temp_byte);
                }
                x_offset ++ ;
            }
            
        }
    }

    // export class GroveHicell {

    // }
}