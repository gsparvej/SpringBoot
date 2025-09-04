import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Machine } from '../../../model/Production/machine.model';
import { MachineService } from '../../service/Production/machine-service';

@Component({
  selector: 'app-machine-list-component',
  standalone: false,
  templateUrl: './machine-list-component.html',
  styleUrl: './machine-list-component.css'
})
export class MachineListComponent implements OnInit {



  machines: Machine[] = [];
  machineForm!: FormGroup


  constructor(
    private machineservice: MachineService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.machineForm = this.fb.group({
      machineCode: ['', Validators.required],
      status: ['', Validators.required]

    })

    this.loadAllMachines();
  }


  addMachine(): void {

    const machine: Machine = this.machineForm.value;
    this.machineservice.createMachine(machine).subscribe({
      next: (or) => {
        console.log(or, 'Machine Added Successfully !');
        this.machineForm.reset();
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadAllMachines(): void {
    this.machineservice.getAllMachine().subscribe((data) => {
      this.machines = data;
      this.cdr.detectChanges();
    });
  }

}
