import { Controller, Get } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {

    @Get()
    findAll() {
        return [
            {
                "id": 1,
                "name": "nokah",
                "age": 65,
                "address": {
                    "straat": "stationstraat",
                    "nummer": 789,
                    "postcode": 2600
                }
            }
        ];
    }   
}
