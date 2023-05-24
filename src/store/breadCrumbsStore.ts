import {defineStore} from "pinia";

export const useBreadCrumbs = defineStore('breadCrumsStore', {
  state: () =>({
    items: [] as Pages []
  }),
  getters:{

  },
  actions:{
      addPage(text:string,disable:boolean,href:string){
        const index = this.items.findIndex(pag => pag.text === text);
        console.log(index);
        if (index != -1)
          this.items.splice(index,this.items.length - index );
        if (this.items.length > 0)
          this.items[this.items.length -1].disabled = false;
        this.items.push(new Pages(text,true,href));
      },
      cleanAll(){
        this.items = [];
      }


  }
})
class Pages{
  text:string;
  disabled:boolean;
  href:string;

  constructor(text:string,disable:boolean,href:string) {
    this.text = text;
    this.disabled = disable;
    this.href = href;
  }

}
