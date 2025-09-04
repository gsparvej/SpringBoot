import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Line } from '../../../model/Production/line.model';
import { LineService } from '../../service/Production/line-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-line-list-component',
  standalone: false,
  templateUrl: './line-list-component.html',
  styleUrl: './line-list-component.css'
})
export class LineListComponent implements OnInit {


  lines: Line[] = [];
  lineForm!: FormGroup


  constructor(
    private lineService: LineService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.lineForm = this.fb.group({
      lineCode: ['', Validators.required],
      floor: ['', Validators.required],
      capacityPerHour: ['', Validators.required]
    })

    this.getAllLines();
  }


  addLine(): void {

    const line: Line = this.lineForm.value;
    this.lineService.createLine(line).subscribe({
      next: (or) => {
        console.log(or, 'Line Successfully !');
        this.lineForm.reset();
         this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAllLines(): void {
    this.lineService.getAllLine().subscribe((data) => {
      this.lines = data;
      this.cdr.detectChanges();
    });
  }





}
