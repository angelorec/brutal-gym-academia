import { Plan, Modality, ScheduleItem } from './types';

export const NAV_LINKS = [
  { name: "SOBRE", href: "#about", decoration: "decoration-primary" },
  { name: "PLANOS", href: "#plans", decoration: "decoration-accent-pink" },
  { name: "MODALIDADES", href: "#modalities", decoration: "decoration-accent-yellow" },
  { name: "HORÁRIOS", href: "#schedule", decoration: "decoration-primary" }
];

export const IMAGES = {
  HERO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoYR1fIQRhfaqz075WlBer25JkBP6RZzfQ9_xqsrFa8Q-trk6C4KxMtuf1NEzVEfOS6xzKzx9kX2g5E6uPv8X1E7jiKm0Qo92yAk1r3a3Mz-QGXU0HfgWeC2TgTVvRuKdirjiXyVgr1ORZyGTQ1ORlME-ILUG_RQhJzTLl3DvMvIji7Les-6DF20HP3F4zvyfhCpumnirmaFSleBgeBE-j5UeInHgy605wnfiuVEIS3v8vCpVsunAcTbMpXItdE-QxYbw35nzT6XO5',
  GALLERY_1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl2ZW7eFNoCDqJfGl17bo6G56ZVTfh_6wHzzkr4OvGfCx_Bb_thhUw-Thvnfg-RaIiEoHqCJ-MHAnbd3j7IN-x5YW4i-3CFWleqGbVeAD1V3bjGNoNv_7gFEbLLisuLzyCisVJQEjQ5hXMHid1sfttU4PmSaKTifbtYgi172zqJ-TYN1N8fq5FpxXuQm5ineFsaQqnOWIUGLSvunGRQX01Q-Bbh7A7XaTrw-_SreincldqJPgV85hHsJu2j2dDH3sAaaR7z4nu5M3q',
  GALLERY_2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS3V62DQmFoNtwWnTsBQRJBZbkRB7EjUp0FkDoD2fiyrCeGGA1vgXA-xQIDheMLcQtFkS_UYX4jwPX2cbemRsiM4jwgE4S8xqmHsRqAB1xuXdokf0VtO8CuwiPHQeoSm0hiDAnhTrWJ6296zRzxvaBnM5fVVapMFFXLY1k9McmkFU4YskCFyiTiNAdEvU5ESIzst8P6KRTSHfasfqkOe6DX0_hQoN4ro0nKwQtmOgbzNeXuvgVcdC51WEe9IvjKZbQB5GJ92OgotGx',
  GALLERY_3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA1IW_lB0piQJismRb_d1CgNEW2HnLoRqL6dUoAnjZkCLnMYgiCBbth8oNLoVyPwtTnwrdW7RmgvFlXLN_QFwJnfreaslWfGSi6r3uO2bvrV7OVZJQaRt3dLjq8pbTcaPnXIaVcTvEtXgKRShOGRC3O_R9u9ts6ilHdiGjPk1SOVkgKB8tqr0-J2lM7cCcKD7s1tVOUfMUUDX5gtc_YUuaYZow8Z8WuFz9YpTedYX46L4Ee-rCYwPCnfkFs6GJ6QwtO7gDkKek6sv6',
  GALLERY_4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs-tT9ktu7df1zwgEKVdJ189wUrJ7Svc2mjJpavdDQYYW3zPplImTL7b_DzHk38AtgwP8361QzIiUHt_DASB2TK9_KdnY_lyJBkQPbvk9rKQzEuhGifjjpeuKZ9r6qR_a5bVnLzSd0ekxz52iTOGNRh0NT5X2PqDN-X0JAhRW8ZnJC_koxunhKSymxbvBJGB_ZZdNGc70AdtAwG8uzPQyFGOtT4BZgkoidXZNGg67XFz0ul0z-nsWZUBuBlYTZry3Iwbcb4JULzNI4',
  GALLERY_5: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACZ74nYURk6B4N1HuCGJaVBSBEEYcNVnl1frwxrMXboH8wCN2iQ1kwk_cHdFO6Fx6T7pELncO1kXpQ9UBTuWeWj6kyggfyMyC8RNvnt6_NLCoYN0tNCpz-5vEt-F_vsvylTsh6xEOaqgFRAgmVP__H50kLvXWrDvCe-Q2X5JuRxJoPga90Y_9ZeazbTkTQRpPV_PrEyQsj4FmSQN2oc4uSfdqXW4nCltAoU5BV3pF8pIEc73u5eUmfgRbk7TbdvL2KX2I9FE4SeXtD'
};

export const PLANS: Plan[] = [
  {
    name: "Basic",
    price: 89,
    features: ["Acesso livre à musculação", "Sem taxa de matrícula"],
    color: "bg-white",
    buttonColor: "bg-background-light hover:bg-black hover:text-white"
  },
  {
    name: "Pro",
    price: 129,
    highlight: true,
    features: ["Acesso Total (Todas Unidades)", "Aulas de Grupo Ilimitadas", "Convidado Grátis (2x/mês)"],
    color: "bg-primary",
    buttonColor: "bg-accent-yellow hover:bg-white"
  },
  {
    name: "Beast Mode",
    price: 199,
    features: ["Tudo do Plano Pro", "Personal Trainer (4x/mês)", "Consultoria Nutricional"],
    color: "bg-white",
    buttonColor: "bg-background-light hover:bg-black hover:text-white"
  }
];

export const MODALITIES: Modality[] = [
  {
    title: "Musculação",
    description: "Equipamentos de ponta para hipertrofia máxima. Ferro puro.",
    icon: "fitness_center",
    color: "bg-white",
    iconBgClass: "bg-primary group-hover:bg-black",
    iconColorClass: "text-white"
  },
  {
    title: "Funcional",
    description: "Movimentos naturais e integrados para performance real.",
    icon: "directions_run",
    color: "bg-white",
    iconBgClass: "bg-accent-yellow group-hover:bg-black",
    iconColorClass: "text-black group-hover:text-white"
  },
  {
    title: "Cross",
    description: "Alta intensidade. Supere seus limites em cada WOD.",
    icon: "timer",
    color: "bg-white",
    iconBgClass: "bg-background-dark group-hover:bg-white",
    iconColorClass: "text-white group-hover:text-black"
  },
  {
    title: "Cardio",
    description: "Resistência máxima. Esteiras, bikes e remo.",
    icon: "favorite",
    color: "bg-white",
    iconBgClass: "bg-accent-pink group-hover:bg-black",
    iconColorClass: "text-black group-hover:text-white"
  }
];

export const SCHEDULE_DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: "06:00",
    days: {
      "Seg": { name: "Cross Brutal", trainer: "Coach Rex", color: "bg-primary", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" },
      "Qua": { name: "Cross Brutal", trainer: "Coach Rex", color: "bg-primary", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" },
      "Sex": { name: "Cross Brutal", trainer: "Coach Rex", color: "bg-primary", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" }
    }
  },
  {
    time: "08:00",
    days: {
      "Ter": { name: "Iron Yoga", trainer: "Mestra Zen", color: "bg-accent-pink", textColorClass: "text-black", subTextColorClass: "text-white" },
      "Qui": { name: "Iron Yoga", trainer: "Mestra Zen", color: "bg-accent-pink", textColorClass: "text-black", subTextColorClass: "text-white" },
      "Sáb": { name: "Open Gym", trainer: "Livre", color: "bg-black", textColorClass: "text-white", subTextColorClass: "text-gray-400" },
      "Dom": { name: "Open Gym", trainer: "Livre", color: "bg-black", textColorClass: "text-white", subTextColorClass: "text-gray-400" }
    }
  },
  {
    time: "18:00",
    days: {
      "Seg": { name: "Boxe Raw", trainer: "Tyson Jr.", color: "bg-accent-yellow", textColorClass: "text-black", subTextColorClass: "text-black" },
      "Ter": { name: "Power Lift", trainer: "Big Ron", color: "bg-primary", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" },
      "Qua": { name: "Boxe Raw", trainer: "Tyson Jr.", color: "bg-accent-yellow", textColorClass: "text-black", subTextColorClass: "text-black" },
      "Qui": { name: "Power Lift", trainer: "Big Ron", color: "bg-primary", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" },
      "Sex": { name: "Boxe Raw", trainer: "Tyson Jr.", color: "bg-accent-yellow", textColorClass: "text-black", subTextColorClass: "text-black" },
    }
  },
  {
    time: "20:00",
    days: {
      "Seg": { name: "HIIT 30'", trainer: "Sarah C.", color: "bg-accent-pink", textColorClass: "text-black", subTextColorClass: "text-white" },
      "Qua": { name: "HIIT 30'", trainer: "Sarah C.", color: "bg-accent-pink", textColorClass: "text-black", subTextColorClass: "text-white" },
      "Sex": { name: "Happy Hour", trainer: "Bar do Gym", color: "bg-black", textColorClass: "text-accent-yellow", subTextColorClass: "text-white" }
    }
  }
];