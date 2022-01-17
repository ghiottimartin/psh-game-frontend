import { normalize, schema } from 'normalizr';


export function normalizeData(myData){
    const stats = new schema.Entity('stats', {}, {idAttribute: "id"});

    const mySchemas = [stats];

    return normalize(myData, mySchemas);
}


