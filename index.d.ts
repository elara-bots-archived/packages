declare module "@elara-services/packages" {
    type array = string[];

    export class AES {
        public constructor(key: string);
        private key: string;
        private header: string;
        public encrypt(input: string): string
        public decrypt(encrypted: string): string;
    }

    export const Languages: object = "" | {};
    export class Minesweeper {
        public constructor(options?: {
            rows?: number;
            columns?: number;
            mines?: number;
            emote?: string
        });

        public rows: number;
        public columns: number;
        public mines: number;
        public matrix: array;
        public types: {
            mine: string;
            numbers: array
        };

        public generateEmptyMatrix(): void;
        public plantMines(): void;
        public getNumberOfMines(x: number, y: number): string;
        public start(): string | array[] | null;
    }

    export type ChannelTypes = 'GUILD_TEXT' | 'DM' | 'GUILD_VOICE' | 'GROUP_DM' | 'GUILD_CATEGORY' | 'GUILD_NEWS' | 'GUILD_STORE' | 'GUILD_NEWS_THREAD' | 'GUILD_PUBLIC_THREAD' | 'GUILD_PRIVATE_THREAD' | 'GUILD_STAGE_VOICE';

    export type SlashOptions = {
        type: number;
        name: string;
        description: string;
        required?: boolean;
        channel_types?: ChannelTypes[];
        autocomplete?: boolean;
        min_value?: number;
        max_value?: number;
        choices?: { name: string, value: string }[];
        options?: SlashOptions[];
    };

    export type Slash = {
        type?: number;
        defaultPermission?: boolean;
        default_permission?: boolean;
        options?: SlashOptions[];
    };

    export class SlashBuilder {
        public constructor();
        public types: {
            sub_command: number,
            sub_group: number,
            string: number,
            integer: number,
            boolean: number,
            user: number,
            channel: number,
            role: number,
            mentionable: number,
            number: number
        };

        public context: {
            user(name: string): Slash;
            message(name: string): Slash;
        };

        public choice(name: string, value: string|number): { name: string, value: string|number };
        public option(data: SlashOptions): Slash;
        public create(name: string, description: string, options: Slash): Slash;
    };

    export class BitField<S extends string, N extends number | bigint = number> {
        public constructor(bits?: BitFieldResolvable<S, N>);
        public bitfield: N;
        public add(...bits: BitFieldResolvable<S, N>[]): BitField<S, N>;
        public any(bit: BitFieldResolvable<S, N>): boolean;
        public equals(bit: BitFieldResolvable<S, N>): boolean;
        public freeze(): Readonly<BitField<S, N>>;
        public has(bit: BitFieldResolvable<S, N>): boolean;
        public missing(bits: BitFieldResolvable<S, N>, ...hasParams: readonly unknown[]): S[];
        public remove(...bits: BitFieldResolvable<S, N>[]): BitField<S, N>;
        public serialize(...hasParams: readonly unknown[]): Record<S, boolean>;
        public toArray(...hasParams: readonly unknown[]): S[];
        public toJSON(): N extends number ? number : string;
        public valueOf(): N;
        public [Symbol.iterator](): IterableIterator<S>;
        public static FLAGS: Record<string, number | bigint>;
        public static resolve(bit?: BitFieldResolvable<string, number | bigint>): number | bigint;
    };

    export class UserFlags extends BitField<UserFlagsString> {
        public static FLAGS: Record<UserFlagsString, number>;
        public static resolve(bit?: BitFieldResolvable<UserFlagsString, number>): number;
    };
    export class Permissions extends BitField<PermissionString, bigint> {
        public any(permission: PermissionResolvable, checkAdmin?: boolean): boolean;
        public has(permission: PermissionResolvable, checkAdmin?: boolean): boolean;
        public missing(bits: BitFieldResolvable<PermissionString, bigint>, checkAdmin?: boolean): PermissionString[];
        public serialize(checkAdmin?: boolean): Record<PermissionString, boolean>;
        public toArray(): PermissionString[];
      
        public static ALL: bigint;
        public static DEFAULT: bigint;
        public static STAGE_MODERATOR: bigint;
        public static FLAGS: PermissionFlags;
        public static resolve(permission?: PermissionResolvable): bigint;
      }

    export type RecursiveArray<T> = ReadonlyArray<T | RecursiveArray<T>>;
    export type RecursiveReadonlyArray<T> = ReadonlyArray<T | RecursiveReadonlyArray<T>>;
    export type PermissionResolvable = BitFieldResolvable<PermissionString, bigint>;
    export type BitFieldResolvable<T extends string, N extends number | bigint> =
        | RecursiveReadonlyArray<T | N | `${bigint}` | Readonly<BitField<T, N>>>
        | T
        | N
        | `${bigint}`
        | Readonly<BitField<T, N>>;

    export type UserFlagsString =
        | 'DISCORD_EMPLOYEE'
        | 'PARTNERED_SERVER_OWNER'
        | 'HYPESQUAD_EVENTS'
        | 'BUGHUNTER_LEVEL_1'
        | 'HOUSE_BRAVERY'
        | 'HOUSE_BRILLIANCE'
        | 'HOUSE_BALANCE'
        | 'EARLY_SUPPORTER'
        | 'TEAM_USER'
        | 'BUGHUNTER_LEVEL_2'
        | 'VERIFIED_BOT'
        | 'EARLY_VERIFIED_BOT_DEVELOPER'
        | 'DISCORD_CERTIFIED_MODERATOR'
        | 'BOT_HTTP_INTERACTIONS';
    
    export type PermissionString =
        | 'CREATE_INSTANT_INVITE'
        | 'KICK_MEMBERS'
        | 'BAN_MEMBERS'
        | 'ADMINISTRATOR'
        | 'MANAGE_CHANNELS'
        | 'MANAGE_GUILD'
        | 'ADD_REACTIONS'
        | 'VIEW_AUDIT_LOG'
        | 'PRIORITY_SPEAKER'
        | 'STREAM'
        | 'VIEW_CHANNEL'
        | 'SEND_MESSAGES'
        | 'SEND_TTS_MESSAGES'
        | 'MANAGE_MESSAGES'
        | 'EMBED_LINKS'
        | 'ATTACH_FILES'
        | 'READ_MESSAGE_HISTORY'
        | 'MENTION_EVERYONE'
        | 'USE_EXTERNAL_EMOJIS'
        | 'VIEW_GUILD_INSIGHTS'
        | 'CONNECT'
        | 'SPEAK'
        | 'MUTE_MEMBERS'
        | 'DEAFEN_MEMBERS'
        | 'MOVE_MEMBERS'
        | 'USE_VAD'
        | 'CHANGE_NICKNAME'
        | 'MANAGE_NICKNAMES'
        | 'MANAGE_ROLES'
        | 'MANAGE_WEBHOOKS'
        | 'MANAGE_EMOJIS_AND_STICKERS'
        | 'USE_APPLICATION_COMMANDS'
        | 'REQUEST_TO_SPEAK'
        | 'MANAGE_THREADS'
        | 'CREATE_PUBLIC_THREADS'
        | 'CREATE_PRIVATE_THREADS'
        | 'USE_EXTERNAL_STICKERS'
        | 'SEND_MESSAGES_IN_THREADS'
        | 'START_EMBEDDED_ACTIVITIES'
        | 'MODERATE_MEMBERS'
        | 'MANAGE_EVENTS';
    export function randomWeight(objects: object[]): object;
    export function randomWords(options?: {
        exactly?: boolean;
        maxLength?: number;
        min?: number;
        max?: number;
        wordsPerString?: number;
        formatter(word: string): void;
        separator: string;
        join: string;
    }): string | string[];
}