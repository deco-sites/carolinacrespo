import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @format rich-text
   */
  emailTitle?: string;
  /**
   * @format textarea
   */
  emailDescription?: string;
  emailAddress?: string;
  /**
   * @format rich-text
   */
  phoneTitle?: string;
  /**
   * @format textarea
   */
  phoneDescription?: string;
  phoneNumber?: string;
  /**
   * @format rich-text
   */
  addressTitle?: string;
  /**
   * @format textarea
   */
  addressDescription?: string;
  address?: string;
}

export default function ContactSection({
  title = "Entre em contato",
  subtitle = "Estamos aqui para ajudar com suas dúvidas e agendamentos.",
  emailTitle = "Email",
  emailDescription = "Envie suas perguntas para o nosso email.",
  emailAddress = "contato@exemplo.com.br",
  phoneTitle = "Telefone",
  phoneDescription = "Ligue para agendar uma consulta ou esclarecer dúvidas.",
  phoneNumber = "(11) 1234-5678",
  addressTitle = "Endereço",
  addressDescription = "Visite nosso consultório para atendimento personalizado.",
  address = "Rua Exemplo, 123, São Paulo, SP",
}: Props) {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-xl text-gray-500">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">{emailTitle}</h3>
            <p className="mt-2 text-base text-gray-500 text-center">{emailDescription}</p>
            <a href={`mailto:${emailAddress}`} className="mt-3 text-indigo-600 hover:text-indigo-500">{emailAddress}</a>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">{phoneTitle}</h3>
            <p className="mt-2 text-base text-gray-500 text-center">{phoneDescription}</p>
            <a href={`tel:${phoneNumber}`} className="mt-3 text-indigo-600 hover:text-indigo-500">{phoneNumber}</a>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">{addressTitle}</h3>
            <p className="mt-2 text-base text-gray-500 text-center">{addressDescription}</p>
            <address className="mt-3 text-indigo-600 not-italic">{address}</address>
          </div>
        </div>
      </div>
    </section>
  );
}