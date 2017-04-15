import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(All: any, term?: any): any {
    if(term=== "All") return All;
    if(term=== undefined) return All;
     return All.filter(function(tend){
 	return tend.category.includes(term);
})
  }

}
