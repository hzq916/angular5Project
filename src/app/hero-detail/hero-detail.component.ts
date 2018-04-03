import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';



//当子组件中的存在需要从父组件中获取数据的变量，就需要用带有@Input()装饰器的输入属性
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //在这里添加一个带有@Input()装饰器的hero属性,这是单向数据绑定
  @Input() hero:Hero;

  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  ngOnInit():void{
    this.getHero()
  }
  
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack ():void{
    this.location.back();
  }

}
