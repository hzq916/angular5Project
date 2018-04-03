import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { of} from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './heroes';


//下边的装饰器是说明这个服务可能哦拥有被注入的依赖,无论有没有都要加上该装饰器
@Injectable()
export class HeroService {
//定义一个方法获取数据
 getHeroes(): Observable<Hero[]> {
   //请求到heroes之后发送一个消息,保存到messages数组中
   this.messageService.add('HeroService: fetched heroes');

  return of(HEROES);
}

getHero(id:number): Observable<Hero[]> {
  // Todo: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES.find(hero => hero.id === id));
}
  constructor(private messageService:MessageService) { }

}
