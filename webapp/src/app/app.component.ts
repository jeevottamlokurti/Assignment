import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LanguagesService } from './languages.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent {
  title = 'webapp';
  totalCount = 0;
  message=""
  currentPage={page:0};
  languages:any; 
  constructor(private primengConfig: PrimeNGConfig, private languageService: LanguagesService,private messageService: MessageService) { }
  ngOnInit() {
    this.paginate(this.currentPage);
    this.primengConfig.ripple = true;
    this.languageService.fetchCount().subscribe((res: any) => {
      this.totalCount = res[0]["count(*)"]
      console.log(this.totalCount,res)
    })
  }
  paginate(event: any) {
    console.log("Pagination call",event)
    this.currentPage=event;
    console.log(event.page)
    this.languageService.fetchPage(event.page + 1).subscribe((res: any) => {
      this.languages = res
      console.log("res,", res)
    }, (err) => {
      console.log("err,", err)
    })
  }
  deleteRecord(id:number){
    console.log(id,"delete")
    this.languageService.deleteRecord(id).subscribe(res=>{
      this.messageService.add({key: 'c',severity:'success', summary:'Record Deleted!', detail:`${id} record is deleted.`});
      this.paginate(this.currentPage);
    },(err)=>{
      this.messageService.add({key: 'c',severity:'error', summary:'Record Deletion Failed', detail:`${id} record is not deleted. Might be already deleted kindly refresh!`});
    })
  }
 
  onConfirm() {
    this.messageService.clear('c');
}

onReject() {
    this.messageService.clear('c');
}

clear() {
    this.messageService.clear();
}
}
