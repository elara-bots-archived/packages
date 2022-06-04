module.exports = class SlashBuilder extends null {
    static get TEXT_BASED_CHANNELS() {
        return [ 0, 5, 11, 12 ]
    }

    static get types() {
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

    static get context() {
        return {
            user: (name, locale) => this.create(name, "", { type: this.types.context.user, locale }),
            message: (name, locale) => this.create(name, "", { type: this.types.context.message, locale })
        }
    };
    
    static choice(name, value) {
        return { name, value };
    };

    static option(data) {
        let _data = { ...data };
        if (_data.locale?.names) _data.name_localizations = _data.locale.names;
        if (_data.locale?.descriptions) _data.description_localizations = _data.locale.descriptions;
        if ("locale" in _data) delete _data["locale"];
        return _data;
    };

    static create(name, description, options = { }) {
        let obj = { name, description };
        if (options?.locale?.names) obj.name_localizations = options.locale.names;
        if (options?.locale?.descriptions) obj.description_localizations = options.locale.descriptions;
        if (options?.options?.length) obj.options = options.options;
        if (options?.type) obj.type = options.type;

        // TODO: Remove this, as it's deprecated.
        if ("defaultPermission" in options) obj.default_permission = options.defaultPermission;
        else if ("default_permission" in options) obj.default_permission = options.default_permission;

        if ("dmPermission" in options) obj.dm_permission = options.dmPermission;
        else if ("dm_permission" in options) obj.dm_permission = options.dm_permission;
        
        if ("default_member_permissions" in options) obj.default_member_permissions = options.default_member_permissions;
        else if ("defaultMemberPermissions" in options) obj.default_member_permissions = options.defaultMemberPermissions;
        return obj;
    };
};