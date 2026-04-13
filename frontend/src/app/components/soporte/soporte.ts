import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soporte.html',
  styleUrl: './soporte.css'
})
export class SoporteComponent {
  closeSoporte = output<void>();

  // Maneja la pestaña activa: 'faq' o 'terms'
  activeTab = signal<'faq' | 'terms'>('faq');

  // FAQ: Estado individual
  faqs = signal([
    {
      pregunta: '¿Cómo retiro mis ganancias?',
      respuesta: 'Navega a tu Billetera y selecciona "Retirar". Los pagos se procesan directamente a tu cuenta bancaria dentro de las 24 horas hábiles posteriores, sin comisiones adicionales.',
      abierta: false
    },
    {
      pregunta: '¿De qué beneficios goza un usuario VIP?',
      respuesta: 'Los miembros VIP disfrutan de torneos élite exclusivos, atención de concierge 24/7 de forma ininterrumpida y un retorno de Cashback semanal superior al resto de las membresías.',
      abierta: false
    },
    {
      pregunta: '¿Mis datos están seguros en la plataforma?',
      respuesta: 'Totalmente. Utilizamos encriptación RSA de 256 bits para todas las transacciones financieras y el núcleo de juegos opera de forma transparente en servidores sellados, a prueba de intrusos.',
      abierta: false
    },
    {
      pregunta: '¿Qué pasa si olvido mi contraseña?',
      respuesta: 'No te preocupes. Puedes contactar a nuestro equipo de soporte directamente a exclusive@neonroyale.com y un agente te enviará un enlace de recuperación cifrado inmediatamente.',
      abierta: false
    },
    {
      pregunta: '¿Existe una aplicación nativa para móviles?',
      respuesta: 'Nuestra plataforma fue desarrollada bajo la filosofía Mobile-First, garantizando un funcionamiento 100% nativo al navegar desde Safari o Chrome. Las apps de catálogo llegarán a finales de este trimestre.',
      abierta: false
    }
  ]);

  toggleTabs(tab: 'faq' | 'terms') {
    this.activeTab.set(tab);
  }

  toggleFaq(index: number) {
    const updated = this.faqs().map((f, i) => {
      if (i === index) return { ...f, abierta: !f.abierta };
      return { ...f, abierta: false }; // Acordeón exclusivo (cierra las demás)
    });
    this.faqs.set(updated);
  }
}
