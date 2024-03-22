
export const visits = {
    'type': 'array',
    'items': {
        'type': 'object',
        'properties': {
            'address': {'type': 'string'},
            'houmer_name': {'type': 'string', nullable: true},
            'visitor_name': {'type': 'string'},
            'scheduled_at': {'type': 'string'},
            'status': {'type': 'string'},
            'created_at': {'type': 'string'},
            'updated_at': {'type': 'string'},
            'id': {'type': 'number'},
            'resolution_comment': {'type': 'string', nullable: true}
        },
        'required': ['address', 'houmer_name', 'visitor_name', 'scheduled_at', 'status', 'created_at', 'updated_at', 'id', 'resolution_comment'],
        'additionalProperties': false
    }
};

export const visit = {
    'type': 'object',
    'properties': {
        'address': {'type': 'string'},
        'houmer_name': {'type': 'string', nullable: true},
        'visitor_name': {'type': 'string'},
        'scheduled_at': {'type': 'string'},
        'status': {'type': 'string'},
        'created_at': {'type': 'string'},
        'updated_at': {'type': 'string'},
        'id': {'type': 'number'},
        'resolution_comment': {'type': 'string', nullable: true}
    },
    'required': ['address', 'houmer_name', 'visitor_name', 'scheduled_at', 'status', 'created_at', 'updated_at', 'id', 'resolution_comment'],
    'additionalProperties': false
};


