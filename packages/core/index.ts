import { NestFactory, NestApplication } from '@nestjs/core';
import { ApplicationOptions } from '@scribble/common/interfaces';
import { AppModule } from './src/app.module';

export class ScribbleApplication {
    private app: NestApplication;
    constructor(
        private options: ApplicationOptions = {}
    ) {
        Object.assign(this.options, <ApplicationOptions>{
            host: '127.0.0.1',
            port: 3000,
            name: 'ScribblePress',
            sloan: '',
            plugins: [],
            themes: []
        });
    }

    async boot() {
        console.log('THIS BOOT ', this.options);
        this.app = await NestFactory.create(AppModule);
        return this.app.listen(this.options.port);
    }
}