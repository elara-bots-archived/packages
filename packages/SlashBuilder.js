module.exports = class SlashBuilder {
    constructor() {
        this.TEXT_BASED_CHANNELS = [ 0, 5, 11, 12 ];
    };

    get types() {
        return {
            sub_command: 1,
            sub_group: 2,
            string: 3,
            integer: 4,
            boolean: 5,
            user: 6,
            channel: 7,
            role: 8,
            mentionable: 9,
            number: 10,
            context: {
                user: 2,
                message: 3
            }
        };
    }

    get context() {
        return {
            user: (name) => this.create(name, "", { type: 2 }),
            message: (name) => this.create(name, "", { type: 3 })
        }
    };
    
    choice(name, value) {
        return { name, value };
    };

    option(data) {
        return data;
    };

    create(name, description, options = { }) {
        let obj = { name, description };
        if (options?.options?.length) obj.options = options.options;
        if (options.type) obj.type = options.type;
        if (typeof options.defaultPermission === "boolean") obj.default_permission = options.defaultPermission;
        else if (typeof options.default_permission === "boolean") obj.default_permission = options.default_permission;
        return obj;
    };
};