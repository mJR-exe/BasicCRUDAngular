import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadAdvancedDataSource, ProductReadAdvancedItem } from './product-read-advanced-datasource';

@Component({
  selector: 'app-product-read-advanced',
  templateUrl: './product-read-advanced.component.html',
  styleUrls: ['./product-read-advanced.component.css']
})
export class ProductReadAdvancedComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductReadAdvancedItem>;
  dataSource: ProductReadAdvancedDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ProductReadAdvancedDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
