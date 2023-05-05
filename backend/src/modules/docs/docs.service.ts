import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class DocsService {

    constructor(@InjectClient() private readonly con: Connection) { }


    async findAll() {
        const docs = await this.con.query('SELECT * FROM `docs` WHERE id="1"');
        return docs[0];
    }


    async nizom(data: any) {
        return await this.con
            .query('UPDATE `docs` SET `nizom`=? WHERE id="1"', data.text);
    }

    async meyor(data: any) {
        return await this.con
            .query('UPDATE `docs` SET `meyor`=?  WHERE id="1"', data.text);
    }

    async grant(data: any) {
        return await this.con
            .query('UPDATE `docs` SET `grant`=?  WHERE id="1"', data.text);
    }
}
