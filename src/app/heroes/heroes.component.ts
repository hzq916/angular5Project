import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
//将模拟数据导入到
// import { HEROES } from '../heroes';
import { HeroService  } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // 在这里先给变量hero确定其数据类型，然后在赋值
  hero: Hero = {
    id:1,
    name:'windstorm'
  };
  //在这里定义一个变量，并将模拟的数据赋值
  heroes:Hero[];
  //网构造函数中添加一个私有heroService，类型为HeroService
  //在这里做了两件事，声明了一个私有属性，并且标记为一个HeroService注入点
  //会返回Observable，因为它最终会使用 Angular 的 HttpClient.get 方法来获取英雄数据，而 HttpClient.get() 会返回 Observable。
  constructor(private heroService: HeroService) { }

  //创建一个函数，从服务中获取这些英雄的数据
 
  getHeroes(): void {
    //Observable.subscribe() 是关键的差异点,调用服务中的方法会返回一个Observable
    //这里就实现了一步加载数据，当获取到返回的Observable对象，才会进行后边的赋值操作
   this.heroService.getHeroes()
   .subscribe( heroes =>  this.heroes = heroes);
    console.log(this.heroes)
  }

  ngOnInit() {
    this.getHeroes()
  }

}
