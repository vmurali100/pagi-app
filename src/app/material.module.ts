import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatTableDataSource, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatProgressSpinnerModule,MatTableModule,MatPaginatorModule,MatSortModule],
  exports: [MatButtonModule, MatCheckboxModule,MatProgressSpinnerModule,MatTableModule,MatPaginatorModule,MatSortModule],
})
export class CustomMaterialModule { }