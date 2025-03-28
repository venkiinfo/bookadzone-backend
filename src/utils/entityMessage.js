
export function SuccessMessage(entity, action) {
    switch (action.type) {  
        case 'created':
            return `${entity} has been created Successfully`;
        case 'updated':
            return `${entity} has been created Successfully`;
        case 'deleted':
            return `${entity} has been created Successfully`;
        default:
            return '';
    }
}