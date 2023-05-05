import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class ActivityService {

    constructor(@InjectClient() private readonly con: Connection) { }


    async findAll() {
        const activity = await this.con.query('SELECT * FROM `activity` WHERE id="1"');
        return activity[0];
    }


    async scientific(data: any) {
        return await this.con
            .query('UPDATE `activity` SET `scientific`=? WHERE id="1"', data.text);
    }

    async international(data: any) {
        return await this.con
            .query('UPDATE `activity` SET `international`=?  WHERE id="1"', data.text);
    }

    async study(data: any) {
        return await this.con
            .query('UPDATE `activity` SET `study`=?  WHERE id="1"', data.text);
    }

    async social(data: any) {
        return await this.con
            .query('UPDATE `activity` SET `social`=?  WHERE id="1"', data.text);
    }
}
