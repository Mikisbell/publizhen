import { Printer, Package, Monitor, Layers, PenTool, Megaphone } from 'lucide-react';

export const menuData = {
    productos: [
        {
            category: "Gran Formato",
            icon: Printer,
            color: "text-[var(--color-signal-pink)]",
            items: [
                { name: 'Gigantografías', path: '/productos' },
                { name: 'Vinilos Adhesivos', path: '/productos' },
                { name: 'Lonas Mesh', path: '/productos' },
                { name: 'Microperforado', path: '/productos' },
                { name: 'Backlight', path: '/productos' }
            ]
        },
        {
            category: "Material P.O.P",
            icon: Package,
            color: "text-[var(--color-signal-orange)]",
            items: [
                { name: 'Exhibidores', path: '/productos' },
                { name: 'Stands', path: '/productos' },
                { name: 'Roll-ups', path: '/productos' },
                { name: 'Cajas de Luz', path: '/productos' },
                { name: 'Señalética', path: '/productos' }
            ]
        }
    ],
    servicios: [
        {
            category: "Servicios Técnicos",
            items: [
                {
                    name: 'Instalación',
                    description: 'Montaje profesional en altura o superficie.',
                    icon: Monitor,
                    path: '/servicios'
                },
                {
                    name: 'Mantenimiento',
                    description: 'Reparación y limpieza de estructuras.',
                    icon: Layers,
                    path: '/servicios'
                }
            ]
        }
    ],
    branding: [
        {
            category: "Estudio Creativo",
            items: [
                {
                    name: 'Identidad Visual',
                    description: 'Logotipos y manuales de marca.',
                    icon: PenTool,
                    path: '/branding'
                },
                {
                    name: 'Diseño Publicitario',
                    description: 'Campañas visuales y medios impresos.',
                    icon: Megaphone,
                    path: '/branding'
                }
            ]
        }
    ]
};
