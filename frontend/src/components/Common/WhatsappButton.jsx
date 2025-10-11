import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code, no + or special characters)
    const phoneNumber = '918004727186';
    // Optional: Pre-filled message
    const message = 'Hello! I would like to book an appointment.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <MessageCircle size={24} />
        <span>Book an Appointment</span>
      </button>
    </div>
  );
}