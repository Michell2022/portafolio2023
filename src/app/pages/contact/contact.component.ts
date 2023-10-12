import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isModalVisible: boolean = false;

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      asunto: ['', Validators.required],
      message: ['', Validators.required]

    });
  }


  submitForm() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Enviando formData a través de una solicitud HTTP POST usando HttpClient.
      this.http.post('https://formspree.io/f/mpzgkwoq', formData).subscribe(response => {

        this.openModal(); // Abre el modal
        // Restablece los campos del formulario
        this.contactForm.reset();
      });
    }
  }

  openModal() {
    this.isModalVisible = true;
    // Oculta el modal después de 3 segundos
    setTimeout(() => {
      this.isModalVisible = false;
    }, 3000);
  }


}

