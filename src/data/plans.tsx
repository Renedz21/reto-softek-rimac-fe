import { IStepHead } from "../models/IStepHead"

export const PLANS = {
    TITLE: '¿Para quién deseas cotizar?',
    SUB_TITLE: 'Selecciona la opción que se ajuste más a tus necesidades.',
    OPTIONS: [
        {
            ID: 1,
            NAME: 'for_me',
            TITLE: 'Para mí',
            SUB_TITLE: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
            ICON: {
                IMAGE: '/assets/icons/ForMe.svg',
                ALT: 'Icon For Me'
            }
        },
        {
            ID: 2,
            NAME: 'for_you',
            TITLE: 'Para alguien más',
            SUB_TITLE: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
            ICON: {
                IMAGE: '/assets/icons/ForYou.svg',
                ALT: 'Icon For You'
            }
        }
    ]
}

export const STEP_HEAD: IStepHead[] = [
    {
        id: 1,
        title: 'Planes y coberturas',
        completed: true
    },
    {
        id: 2,
        title: 'Resumen',
        completed: false
    }
]