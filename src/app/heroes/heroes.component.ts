import { Component , OnInit} from '@angular/core';
import { Hero } from '../hero';

/**
 * HeroesComponent 这是一个组件(类)
 */
@Component({
  selector: 'hero-app',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
      id:1,
      name:"windStorm"
  };


  // 构造器--构造一个服务组件（如果需要使用服务，则必须）
  constructor(){}


  // 初始化操作，所有的逻辑代码必须放置在方法体中
  ngOnInit(){

  }
}