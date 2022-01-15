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
    }

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