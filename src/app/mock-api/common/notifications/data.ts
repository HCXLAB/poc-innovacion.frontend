/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const notifications = [
    {
        id: '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon: 'heroicons_mini:star',
        title: 'Idea Aprovada',
        description: 'Tu idea ha sido aprovada por nuestros moderadores!',
        time: now.minus({ minute: 25 }).toISO(), // 25 minutes ago
        read: false,
    },
    {
        id: '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image: 'images/avatars/male-04.jpg',
        description:
            '<strong>Usuario 1</strong> Ha añadido un comentario a tu idea <em>Chatbot con IA para autoatención en RRHH</em> Excelente idea para nuestro entorno laboral.</em>',
        time: now.minus({ minute: 50 }).toISO(), // 50 minutes ago
        read: true,
        link: '/dashboards/project',
        useRouter: true,
    },
 
   
    {
        id: 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image: 'images/avatars/male-06.jpg',
        description:
            '<strong>Usuario 2</strong> Ha añadido una nueva propuesta para tu idea.',
        time: now.minus({ hour: 7 }).toISO(), // 7 hours ago
        read: true,
        link: '/dashboards/project',
        useRouter: true,
    }
];
