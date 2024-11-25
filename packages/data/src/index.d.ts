import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Test. */
export interface ITest {

    /** Test string */
    string?: (string|null);

    /** Test uint32 */
    uint32?: (number|null);

    /** Test inner */
    inner?: (Test.IInner|null);

    /** Test float */
    float?: (number|null);
}

/** Represents a Test. */
export class Test implements ITest {

    /**
     * Constructs a new Test.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITest);

    /** Test string. */
    public string: string;

    /** Test uint32. */
    public uint32: number;

    /** Test inner. */
    public inner?: (Test.IInner|null);

    /** Test float. */
    public float: number;

    /**
     * Creates a new Test instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Test instance
     */
    public static create(properties?: ITest): Test;

    /**
     * Encodes the specified Test message. Does not implicitly {@link Test.verify|verify} messages.
     * @param message Test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Test message, length delimited. Does not implicitly {@link Test.verify|verify} messages.
     * @param message Test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Test message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Test;

    /**
     * Decodes a Test message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Test;

    /**
     * Verifies a Test message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Test message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Test
     */
    public static fromObject(object: { [k: string]: any }): Test;

    /**
     * Creates a plain object from a Test message. Also converts values to other types if specified.
     * @param message Test
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Test to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Test
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Test {

    /** Properties of an Inner. */
    interface IInner {

        /** Inner int32 */
        int32?: (number|null);

        /** Inner innerInner */
        innerInner?: (Test.Inner.IInnerInner|null);

        /** Inner outer */
        outer?: (IOuter|null);
    }

    /** Represents an Inner. */
    class Inner implements IInner {

        /**
         * Constructs a new Inner.
         * @param [properties] Properties to set
         */
        constructor(properties?: Test.IInner);

        /** Inner int32. */
        public int32: number;

        /** Inner innerInner. */
        public innerInner?: (Test.Inner.IInnerInner|null);

        /** Inner outer. */
        public outer?: (IOuter|null);

        /**
         * Creates a new Inner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Inner instance
         */
        public static create(properties?: Test.IInner): Test.Inner;

        /**
         * Encodes the specified Inner message. Does not implicitly {@link Test.Inner.verify|verify} messages.
         * @param message Inner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Test.IInner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Inner message, length delimited. Does not implicitly {@link Test.Inner.verify|verify} messages.
         * @param message Inner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Test.IInner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Inner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Inner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Test.Inner;

        /**
         * Decodes an Inner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Inner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Test.Inner;

        /**
         * Verifies an Inner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Inner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Inner
         */
        public static fromObject(object: { [k: string]: any }): Test.Inner;

        /**
         * Creates a plain object from an Inner message. Also converts values to other types if specified.
         * @param message Inner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Test.Inner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Inner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Inner
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Inner {

        /** Properties of an InnerInner. */
        interface IInnerInner {

            /** InnerInner long */
            long?: (number|Long|null);

            /** InnerInner enum */
            "enum"?: (Test.Enum|null);

            /** InnerInner sint32 */
            sint32?: (number|null);
        }

        /** Represents an InnerInner. */
        class InnerInner implements IInnerInner {

            /**
             * Constructs a new InnerInner.
             * @param [properties] Properties to set
             */
            constructor(properties?: Test.Inner.IInnerInner);

            /** InnerInner long. */
            public long: (number|Long);

            /** InnerInner enum. */
            public enum: Test.Enum;

            /** InnerInner sint32. */
            public sint32: number;

            /**
             * Creates a new InnerInner instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InnerInner instance
             */
            public static create(properties?: Test.Inner.IInnerInner): Test.Inner.InnerInner;

            /**
             * Encodes the specified InnerInner message. Does not implicitly {@link Test.Inner.InnerInner.verify|verify} messages.
             * @param message InnerInner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Test.Inner.IInnerInner, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link Test.Inner.InnerInner.verify|verify} messages.
             * @param message InnerInner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Test.Inner.IInnerInner, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InnerInner message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InnerInner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Test.Inner.InnerInner;

            /**
             * Decodes an InnerInner message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InnerInner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Test.Inner.InnerInner;

            /**
             * Verifies an InnerInner message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InnerInner
             */
            public static fromObject(object: { [k: string]: any }): Test.Inner.InnerInner;

            /**
             * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
             * @param message InnerInner
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Test.Inner.InnerInner, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InnerInner to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InnerInner
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Enum enum. */
    enum Enum {
        ONE = 0,
        TWO = 1,
        THREE = 2,
        FOUR = 3,
        FIVE = 4
    }
}

/** Properties of an Outer. */
export interface IOuter {

    /** Outer bool */
    bool?: (boolean[]|null);

    /** Outer double */
    double?: (number|null);
}

/** Represents an Outer. */
export class Outer implements IOuter {

    /**
     * Constructs a new Outer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOuter);

    /** Outer bool. */
    public bool: boolean[];

    /** Outer double. */
    public double: number;

    /**
     * Creates a new Outer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Outer instance
     */
    public static create(properties?: IOuter): Outer;

    /**
     * Encodes the specified Outer message. Does not implicitly {@link Outer.verify|verify} messages.
     * @param message Outer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOuter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Outer message, length delimited. Does not implicitly {@link Outer.verify|verify} messages.
     * @param message Outer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOuter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Outer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Outer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Outer;

    /**
     * Decodes an Outer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Outer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Outer;

    /**
     * Verifies an Outer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Outer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Outer
     */
    public static fromObject(object: { [k: string]: any }): Outer;

    /**
     * Creates a plain object from an Outer message. Also converts values to other types if specified.
     * @param message Outer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Outer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Outer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Outer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
