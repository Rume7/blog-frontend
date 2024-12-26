import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: BlogListComponent }
      ]),
      SharedModule
    ],
    declarations: [
      BlogListComponent,
      BlogDetailComponent
    ]
  })
  export class BlogModule { }
