import { Socket } from "net";

type Nullable<T> = T | null | undefined
export declare abstract class Event {
    protected constructor();
    static Event_init_$Create$(seen1: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event;
    static get CloseProject(): {
        serializer(): any/* kotlinx.serialization.KSerializer<typeof Event.CloseProject> */;
    } & Event & any/* kotlinx.serialization.internal.SerializerFactory */;
    static get Companion(): {
        serializer(): any/* kotlinx.serialization.KSerializer<Event> */;
    } & any/* kotlinx.serialization.internal.SerializerFactory */;
}
export declare namespace Event {
    class OpenProject extends Event {
        constructor(projectName: string);
        get projectName(): string;
        copy(projectName?: string): Event.OpenProject;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OpenProject_init_$Create$(seen1: number, projectName: Nullable<string>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.OpenProject;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.OpenProject> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.OpenProject> */;
    }
    class StartBuild extends Event {
        constructor(buildId: string);
        get buildId(): string;
        copy(buildId?: string): Event.StartBuild;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static StartBuild_init_$Create$(seen1: number, buildId: Nullable<string>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.StartBuild;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.StartBuild> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.StartBuild> */;
    }
    class SuccessBuild extends Event {
        constructor(buildId: string);
        get buildId(): string;
        copy(buildId?: string): Event.SuccessBuild;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static SuccessBuild_init_$Create$(seen1: number, buildId: Nullable<string>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.SuccessBuild;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.SuccessBuild> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.SuccessBuild> */;
    }
    class FailedBuild extends Event {
        constructor(buildId: string);
        get buildId(): string;
        copy(buildId?: string): Event.FailedBuild;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static FailedBuild_init_$Create$(seen1: number, buildId: Nullable<string>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.FailedBuild;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.FailedBuild> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.FailedBuild> */;
    }
    class Typed extends Event {
        constructor(char: any/* kotlin.Char */);
        get char(): any/* kotlin.Char */;
        copy(char?: any/* kotlin.Char */): Event.Typed;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static Typed_init_$Create$(seen1: number, char: any/* kotlin.Char */, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.Typed;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.Typed> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.Typed> */;
    }
    class OpenFile extends Event {
        constructor(fileName: string, fileTypeData: FileTypeData);
        get fileName(): string;
        get fileTypeData(): FileTypeData;
        copy(fileName?: string, fileTypeData?: FileTypeData): Event.OpenFile;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OpenFile_init_$Create$(seen1: number, fileName: Nullable<string>, fileTypeData: Nullable<FileTypeData>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.OpenFile;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.OpenFile> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.OpenFile> */;
    }
    class CloseFile extends Event {
        constructor(fileName: string, fileTypeData: FileTypeData);
        get fileName(): string;
        get fileTypeData(): FileTypeData;
        copy(fileName?: string, fileTypeData?: FileTypeData): Event.CloseFile;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CloseFile_init_$Create$(seen1: number, fileName: Nullable<string>, fileTypeData: Nullable<FileTypeData>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): Event.CloseFile;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<Event.CloseFile> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<Event.CloseFile> */;
    }
}
export declare class FileTypeData {
    constructor(idName: string, displayName: string, fileTypeExtension: string);
    get idName(): string;
    get displayName(): string;
    get fileTypeExtension(): string;
    copy(idName?: string, displayName?: string, fileTypeExtension?: string): FileTypeData;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    static FileTypeData_init_$Create$(seen1: number, idName: Nullable<string>, displayName: Nullable<string>, fileTypeExtension: Nullable<string>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): FileTypeData;
    static get Companion(): {
        serializer(): any/* kotlinx.serialization.KSerializer<FileTypeData> */;
    };
    static get $serializer(): {
    } & any/* kotlinx.serialization.internal.GeneratedSerializer<FileTypeData> */;
}
export declare abstract class ServerProtocol {
    protected constructor();
    static ServerProtocol_init_$Create$(seen1: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): ServerProtocol;
    static get Hello(): {
        serializer(): any/* kotlinx.serialization.KSerializer<typeof ServerProtocol.Hello> */;
    } & ServerProtocol & any/* kotlinx.serialization.internal.SerializerFactory */;
    static get End(): {
        serializer(): any/* kotlinx.serialization.KSerializer<typeof ServerProtocol.End> */;
    } & ServerProtocol & any/* kotlinx.serialization.internal.SerializerFactory */;
    static get Error(): {
        serializer(): any/* kotlinx.serialization.KSerializer<typeof ServerProtocol.Error> */;
    } & ServerProtocol & any/* kotlinx.serialization.internal.SerializerFactory */;
    static get Companion(): {
        serializer(): any/* kotlinx.serialization.KSerializer<ServerProtocol> */;
    } & any/* kotlinx.serialization.internal.SerializerFactory */;
}
export declare namespace ServerProtocol {
    class SendEvent extends ServerProtocol {
        constructor(event: Event);
        get event(): Event;
        copy(event?: Event): ServerProtocol.SendEvent;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static SendEvent_init_$Create$(seen1: number, event: Nullable<Event>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): ServerProtocol.SendEvent;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<ServerProtocol.SendEvent> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<ServerProtocol.SendEvent> */;
    }
}
export declare function convertByteArray<T extends ServerProtocol>(serverProtocol: T): Int8Array;
export declare const PORT: number;
export declare const HeaderSize: number;
export declare class Client {
    constructor();
    get socket(): Socket;
    send(v: ServerProtocol): void;
}
export as namespace chiiugo_protocol_core;