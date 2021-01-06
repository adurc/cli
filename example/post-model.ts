import { AdurcModel } from '@adurc/core/dist/interfaces/model';

export const PostAdurcModel: AdurcModel = {
    accessorName: 'post',
    name: 'Post',
    source: 'adurc',
    directives: [],
    fields: [
        { name: 'id', type: 'int', nonNull: true, directives: [], collection: false, },
        { name: 'title', type: 'string', nonNull: true, directives: [], collection: false, },
        { name: 'content', type: 'string', nonNull: false, directives: [], collection: false, },
        { name: 'published', type: 'boolean', nonNull: true, directives: [], collection: false, },
        { name: 'authorId', type: 'int', nonNull: false, directives: [], collection: false, },
        { name: 'author', type: { model: 'User', source: 'mssql' }, nonNull: false, directives: [], collection: false, },
    ],
};
