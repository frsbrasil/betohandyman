import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'PT';

interface TranslationDict {
    [key: string]: {
        EN: string;
        PT: string;
    };
}

const translations: TranslationDict = {
    // ─── Global ──────────────────────────────────────────────────────────────────
    brand: {
        EN: 'Fenland Property Maintenance.',
        PT: 'Fenland Property Maintenance.',
    },
    phoneNumber: {
        EN: '07384 631028',
        PT: '07384 631028',
    },
    email: {
        EN: 'info@fenlandmaintenance.co.uk',
        PT: 'info@fenlandmaintenance.co.uk',
    },

    // ─── Navbar ──────────────────────────────────────────────────────────────────
    navServices: { EN: 'Services', PT: 'Serviços' },
    navArea: { EN: 'Areas', PT: 'Área' },
    navGallery: { EN: 'Gallery', PT: 'Galeria' },
    navReviews: { EN: 'Reviews', PT: 'Avaliações' },
    navContact: { EN: 'Contact', PT: 'Contato' },
    navFreeQuote: { EN: 'Free Quote', PT: 'Orçamento Grátis' },
    navMobileQuote: { EN: 'Get a Free Quote', PT: 'Solicitar Orçamento Grátis' },

    // ─── Hero ─────────────────────────────────────────────────────────────────────
    heroSocialProof: {
        EN: 'Rated 4.9 · 60+ Google Reviews',
        PT: 'Avaliado em 4,9 · Mais de 60 avaliações no Google',
    },
    heroTitle: {
        EN: 'Property Maintenance Across Cambridgeshire',
        PT: 'Manutenção de Imóveis em Cambridgeshire',
    },
    heroSubtitle: {
        EN: 'Based in Ely, we carry out painting, carpentry, landscaping, handyman work and kitchen and bathroom fitting for homeowners and landlords across the fens.',
        PT: 'Com base em Ely, oferecemos serviços completos de manutenção de imóveis, incluindo pintura interna e externa, carpintaria, paisagismo, pequenos reparos e instalação de cozinhas e banheiros.',
    },
    heroCTA: { EN: 'Get a Free Quote', PT: 'Solicitar Orçamento Grátis' },
    heroHours: {
        EN: 'Mon to Sat, 7am to 6pm. Free quotes with no obligation. We usually reply within 2 hours.',
        PT: 'Seg. a Sáb., 7h às 18h. Orçamentos gratuitos e sem compromisso. Respondemos em até 2 horas.',
    },

    // ─── Credentials ──────────────────────────────────────────────────────────────
    credInsuredTitle: { EN: 'Fully Insured', PT: 'Totalmente Segurado' },
    credInsuredSub: { EN: 'Public Liability Cover', PT: 'Cobertura de Responsabilidade Civil' },
    credYearsTitle: { EN: '10+ Years', PT: 'Mais de 10 Anos' },
    credYearsSub: { EN: 'Serving Cambridgeshire', PT: 'Atendendo Cambridgeshire' },
    credTrustedTitle: { EN: 'Reliable Tradesman', PT: 'Profissional de Confiança' },
    credTrustedSub: { EN: 'Trusted Locally Since 2014', PT: 'Reconhecido Localmente Desde 2014' },
    credStarsTitle: { EN: '4.9 Stars', PT: '4,9 Estrelas' },
    credStarsSub: { EN: '60+ Google Reviews', PT: 'Mais de 60 Avaliações no Google' },

    // ─── How It Works ─────────────────────────────────────────────────────────────
    hiwTitle: { EN: 'Simple From Start to Finish', PT: 'Simples do Início ao Fim' },
    hiwSubtitle: {
        EN: 'We keep things straightforward. No chasing, no surprises, just good work done properly.',
        PT: 'Sem complicações. Sem surpresas. Só um bom trabalho feito com cuidado.',
    },
    hiwStep1Title: { EN: 'Get in Touch', PT: 'Entre em Contato' },
    hiwStep1Desc: {
        EN: 'Call us or fill in our quick form. We usually respond within 2 hours and can visit for a quote the same week.',
        PT: 'Ligue ou preencha nosso formulário rápido. Geralmente respondemos em 2 horas e podemos visitar para orçamento na mesma semana.',
    },
    hiwStep2Title: { EN: 'Free Quote & Schedule', PT: 'Orçamento Grátis & Agendamento' },
    hiwStep2Desc: {
        EN: 'We visit, assess the work and give you a clear written quote. No hidden costs. You choose a start date that suits you.',
        PT: 'Visitamos, avaliamos o trabalho e entregamos um orçamento escrito e claro. Sem custos ocultos. Você escolhe a data de início.',
    },
    hiwStep3Title: { EN: 'Pristine Results', PT: 'Resultado Impecável' },
    hiwStep3Desc: {
        EN: 'We work cleanly, protect your furniture and leave the place spotless. Most of our clients come back to us for their next job.',
        PT: 'Trabalhamos limpamente, protegemos seus móveis e deixamos tudo em ordem. A maioria dos nossos clientes volta para o próximo serviço.',
    },
    hiwCallNow: { EN: 'Call Now:', PT: 'Ligar Agora:' },

    // ─── Landlord CTA ─────────────────────────────────────────────────────────────
    landlordBadge: { EN: 'For Landlords & Letting Agents', PT: 'Para Proprietários & Imobiliárias' },
    landlordTitle: {
        EN: 'Fast Turnarounds. Minimal Disruption. Tenancy-Ready Results.',
        PT: 'Entrega Rápida. Mínima Perturbação. Resultado Pronto para Locação.',
    },
    landlordDesc: {
        EN: 'We work with landlords and letting agents across Ely and Cambridgeshire to get properties back on the market quickly. Whether it is an end-of-tenancy clean-up, an HMO repaint or ongoing maintenance across a portfolio, we are reliable, efficient and we will not let you down.',
        PT: 'Trabalhamos com proprietários e imobiliárias em Ely e Cambridgeshire para colocar imóveis de volta no mercado rapidamente. Seja uma reforma ao fim do contrato, uma repintura de HMO ou manutenção contínua de portfólio, somos confiáveis, eficientes e não vamos te decepcionar.',
    },
    landlordCTA: { EN: 'Property Owner Enquiry', PT: 'Consulta para Proprietário' },
    landlordFeature1Title: { EN: 'End-of-Tenancy Work', PT: 'Trabalho no Fim do Contrato' },
    landlordFeature1Desc: {
        EN: 'We know what letting inspections look for. Clean, crisp finishes that satisfy agents and tenants alike.',
        PT: 'Sabemos o que as vistorias de locação exigem. Acabamentos limpos e precisos que satisfazem agentes e inquilinos.',
    },
    landlordFeature2Title: { EN: 'Portfolio Maintenance', PT: 'Manutenção de Portfólio' },
    landlordFeature2Desc: {
        EN: 'Regular maintenance across multiple properties. One point of contact and a consistent standard every time.',
        PT: 'Manutenção regular em múltiplos imóveis. Um único ponto de contato e um padrão consistente sempre.',
    },
    landlordFeature3Title: { EN: 'Flexible Scheduling', PT: 'Agendamento Flexível' },
    landlordFeature3Desc: {
        EN: 'We work around void periods, tenant move-outs and inspection timelines. Same-week availability is often possible.',
        PT: 'Trabalhamos em torno dos períodos vagos, saída de inquilinos e prazos de vistoria. Disponibilidade na mesma semana é frequentemente possível.',
    },
    landlordFeature4Title: { EN: 'Clear Invoicing', PT: 'Faturamento Claro' },
    landlordFeature4Desc: {
        EN: 'Detailed invoices for every job, easy to pass on to landlords or use for tenant deposit deductions.',
        PT: 'Faturas detalhadas para cada serviço, fáceis de repassar a proprietários ou usar para deduções de caução.',
    },

    // ─── Gallery ──────────────────────────────────────────────────────────────────
    galleryTitle: { EN: 'Our Work Across Cambridgeshire', PT: 'Nossos Trabalhos por Cambridgeshire' },
    gallerySubtitle: {
        EN: 'From Ely townhouses to Cambridge period homes, we hold the same high standard on every job.',
        PT: 'De casas em Ely a imóveis históricos em Cambridge, mantemos o mesmo alto padrão em cada serviço.',
    },
    galleryCTA: { EN: 'Request a similar finish', PT: 'Solicite um acabamento similar' },
    galleryLabel1: { EN: 'Fitted Carpentry, Ely', PT: 'Carpintaria, Ely' },
    galleryLabel2: { EN: 'Garden Maintenance, Soham', PT: 'Manutenção de Jardim, Soham' },
    galleryLabel3: { EN: 'Interior Painting, March', PT: 'Pintura de Interior, March' },
    galleryLabel4: { EN: 'Kitchen Fitting, Chatteris', PT: 'Instalação de Cozinha, Chatteris' },

    reviewsTitle: { EN: 'What Our Customers Say', PT: 'O Que Nossos Clientes Dizem' },
    reviewsSubtitle: {
        EN: 'Trusted by homeowners and landlords across Ely, Cambridge, and Cambridgeshire.',
        PT: 'Confiados por proprietários e locadores em Ely, Cambridge e Cambridgeshire.',
    },
    review1Text: {
        EN: 'The team transformed our Victorian townhouse with incredible attention to detail. Immaculate, quiet, and the finish on the woodwork is simply flawless. Worth every penny.',
        PT: 'A equipe transformou nossa casa com uma atenção incrível aos detalhes. Imaculado, silencioso, e o acabamento na madeireira é simplesmente impecável. Valeu cada centavo.',
    },
    review1Date: { EN: '2 weeks ago', PT: 'Há 2 semanas' },
    review2Text: {
        EN: 'Finding reliable tradespeople in Cambridgeshire is hard — Fenland Property Maintenance are in a league of their own. They helped us with our kitchen fitting and the result was brilliant.',
        PT: 'Encontrar profissionais de confiança em Cambridgeshire é difícil — a Fenland Property Maintenance está em uma categoria à parte. Nos ajudaram com a instalação da cozinha e o resultado foi brilhante.',
    },
    review2Date: { EN: '1 month ago', PT: 'Há 1 mês' },
    review3Text: {
        EN: 'Professional from the first quote to the final walkthrough. They repaired extensive water damage before painting and you would never know it was there. Highly recommended.',
        PT: 'Profissional do primeiro orçamento até a vistoria final. Repararam danos extensos por umidade antes de pintar e você jamais diria que o problema existiu. Super recomendado.',
    },
    review3Date: { EN: '3 months ago', PT: 'Há 3 meses' },
    reviewsSource: {
        EN: 'Reviews sourced from Google Business Profile',
        PT: 'Avaliações extraídas do Google Meu Negócio',
    },
    review4Text: {
        EN: 'I use them for all my rental properties. Fast, tidy, and consistently brilliant. My tenants comment on how well the properties are presented. The best trade I have ever found.',
        PT: 'Uso para todos os meus imóveis alugados. Rápido, organizado e consistentemente excelente. Meus inquilinos comentam sempre sobre a ótima apresentação dos imóveis. O melhor profissional que já contratei.',
    },
    review5Text: {
        EN: 'Booked them for a full exterior repaint and they were outstanding. They flagged some rot issues I hadn\'t noticed, repaired them, and the house looks like new. Will use again.',
        PT: 'Contratei para uma repintura completa do exterior e foi excepcional. Identificaram problemas de apodrecimento que eu não havia notado, repararam, e a casa parece nova. Usarei novamente.',
    },
    review6Text: {
        EN: 'Gave us a clear quote, stuck to it, and completed ahead of schedule. Covered everything carefully and left zero mess. Exactly what you want from a tradesperson.',
        PT: 'Deram um orçamento claro, cumpriram o valor e terminaram antes do prazo. Cobriram tudo com cuidado e não deixaram nenhuma sujeira. Exatamente o que se espera de um profissional.',
    },

    // ─── Services ─────────────────────────────────────────────────────────────────
    servicesTitle: { EN: 'What We Do', PT: 'O Que Fazemos' },
    servicesSubtitle: {
        EN: 'Full property care from a quick repaint to a complete interior refresh. One reliable team, one point of contact.',
        PT: 'Cuidado completo do imóvel, de uma repintura rápida a uma reforma completa do interior. Uma equipe confiável, um único ponto de contato.',
    },
    service1Title: { EN: 'Painting & Decorating', PT: 'Pintura & Decoração' },
    service1Desc: {
        EN: 'Interior and exterior painting for homes and rental properties. Walls, ceilings, woodwork and feature walls. Quality materials and a finish that lasts.',
        PT: 'Pintura de interiores e exteriores para residências e imóveis alugados. Paredes, tetos, madeireira e paredes de destaque. Materiais de qualidade e acabamento duradouro.',
    },
    service2Title: { EN: 'End-of-Tenancy Refresh', PT: 'Reforma no Fim de Contrato' },
    service2Desc: {
        EN: 'Get your property back on the market quickly. We repaint walls, touch up scuffs and bring properties up to a lettable standard. We often finish within 2 to 3 days.',
        PT: 'Coloque seu imóvel de volta no mercado rapidamente. Repintamos paredes, corrigimos arranhões e deixamos o imóvel em condições de locação. Frequentemente concluímos em 2 a 3 dias.',
    },
    service3Title: { EN: 'Property Maintenance', PT: 'Manutenção de Imóveis' },
    service3Desc: {
        EN: 'From leaking taps to cracked plaster, we deal with the jobs that build up. Ideal for landlords with multiple properties or homeowners who want one trusted tradesman.',
        PT: 'De torneiras com vazamento a reboco rachado, cuidamos dos serviços que se acumulam. Ideal para locadores com múltiplos imóveis ou proprietários que querem um único profissional de confiança.',
    },
    service4Title: { EN: 'Carpentry & Joinery', PT: 'Carpintaria & Marcenaria' },
    service4Desc: {
        EN: 'Door hanging, shelving, skirting boards, dado rails and flat-pack assembly. All finished to a proper standard, not just put together and left.',
        PT: 'Instalação de portas, prateleiras, rodapés, frisos e montagem de móveis. Tudo com acabamento profissional, não apenas montado e deixado.',
    },
    service5Title: { EN: 'Minor Plumbing & Electrical', PT: 'Pequenos Reparos Hidráulicos & Elétricos' },
    service5Desc: {
        EN: 'Tap replacements, socket changes and light fittings. Safe, compliant work carried out by experienced tradespeople.',
        PT: 'Troca de torneiras, tomadas e luminárias. Trabalho seguro e em conformidade realizado por profissionais experientes.',
    },
    service6Title: { EN: 'Outdoor & Garden Care', PT: 'Jardim & Área Externa' },
    service6Desc: {
        EN: 'Fence repairs, decking treatment, exterior masonry painting, gutter clearing and seasonal upkeep. Keeping your property looking its best from the outside.',
        PT: 'Reparos em cercas, tratamento de decks, pintura de alvenaria externa, limpeza de calhas e manutenção sazonal. Mantendo seu imóvel sempre com a melhor aparência por fora.',
    },
    servicesCTA: { EN: 'Enquire About Any Service', PT: 'Consultar Sobre Qualquer Serviço' },

    // ─── Service Area ─────────────────────────────────────────────────────────────
    areaTitle: { EN: 'Where we operate', PT: 'Onde Atuamos' },
    areaSubtitle: {
        EN: 'We are based in Ely and serve a radius of approximately 20 miles, covering the main towns and villages in Cambridgeshire.',
        PT: 'Com base em Ely, oferecemos serviços completos de manutenção de imóveis, incluindo pintura interna e externa, carpintaria, paisagismo, pequenos reparos e instalação de cozinhas e banheiros.',
    },
    areaLabel: { EN: 'Service Area', PT: 'Área de Atendimento' },
    areaSectionLabel: { EN: 'Areas We Serve', PT: 'Áreas que Atendemos' },
    areaFlexDesc: {
        EN: 'Not sure if we serve your area? Give us a call. We are flexible and frequently serve the entire Fens region.',
        PT: 'Não tem certeza se atendemos a sua área? Ligue para nós. Somos flexíveis e frequentemente atendemos por toda a região dos Fens.',
    },
    areaNoteTitle: { EN: "Don't see your town?", PT: 'Não vê sua cidade?' },
    areaNoteDesc: {
        EN: 'If you are near one of these areas, we can probably still help. Get in touch to confirm our availability.',
        PT: 'Se você estiver perto de uma dessas áreas, provavelmente ainda podemos ajudar. Entre em contato para confirmar nossa disponibilidade.',
    },

    // ─── Contact ──────────────────────────────────────────────────────────────────
    contactTitle: { EN: 'Get Your Free Quote', PT: 'Solicite Seu Orçamento Grátis' },
    contactSubtitle: {
        EN: 'Fill in the form and we will get back to you within 2 hours. Prefer to talk? Give us a call. Phone enquiries are always welcome and there is no hard sell.',
        PT: 'Preencha o formulário e retornaremos em até 2 horas. Prefere falar? Ligue para nós. Sempre atendemos por telefone e não fazemos pressão.',
    },
    contactPhoneLabel: { EN: 'Call or WhatsApp', PT: 'Ligue ou WhatsApp' },
    contactEmailLabel: { EN: 'Email Us', PT: 'E-mail' },
    contactHours: { EN: 'Mon–Sat, 7am–6pm', PT: 'Seg.–Sáb., 7h–18h' },
    contactWhyChooseUsTitle: { EN: 'Why clients choose us', PT: 'Por que nos escolhem' },
    contactWhyChooseUs1: { EN: 'Free written quotes, no obligation', PT: 'Orçamentos escritos gratuitos, sem compromisso' },
    contactWhyChooseUs2: { EN: 'Fixed prices with no hidden extras', PT: 'Preços fixos sem custos ocultos' },
    contactWhyChooseUs3: { EN: 'Tidy, professional and respectful of your home', PT: 'Organizados, profissionais e respeitosos com o seu lar' },
    contactWhyChooseUs4: { EN: 'Fully insured to £5M public liability', PT: 'Totalmente segurados com cobertura de até £5M' },
    formName: { EN: 'Your Name', PT: 'Seu Nome' },
    formNamePlaceholder: { EN: 'e.g. John Smith', PT: 'Ex: João Silva' },
    formPhone: { EN: 'Phone Number', PT: 'Telefone' },
    formPhonePlaceholder: { EN: 'Your contact number', PT: 'Seu número para contato' },
    formLocation: { EN: 'Your Location', PT: 'Sua Localização' },
    formLocationPlaceholder: { EN: 'e.g. Ely, CB7', PT: 'Ex: Ely, CB7' },
    formMessage: { EN: 'What do you need done?', PT: 'O que você precisa?' },
    formMessagePlaceholder: { EN: 'Briefly describe the service you need...', PT: 'Descreva brevemente o serviço que deseja orçar...' },
    formSubmit: { EN: 'Send Request', PT: 'Enviar Solicitação' },
    contactSuccessTitle: { EN: 'Submission Received!', PT: 'Mensagem Enviada!' },
    contactSuccessDesc: { EN: 'Thank you for your message. We will get back to you shortly.', PT: 'Obrigado pelo contato. Falaremos com você em breve.' },
    contactSendAnother: { EN: 'Send another message', PT: 'Enviar outra mensagem' },
    contactFormTitle: { EN: 'Send us a message', PT: 'Envie-nos uma mensagem' },
    contactNameLabel: { EN: 'Your Name', PT: 'Seu Nome' },
    contactPhoneFormLabel: { EN: 'Phone Number', PT: 'Telefone' },
    contactEmailFormLabel: { EN: 'Email Address', PT: 'E-mail' },
    contactServiceLabel: { EN: 'Service Required', PT: 'Serviço Necessário' },
    contactServiceOptionUnsure: { EN: 'Unsure / Other', PT: 'Não tenho certeza / Outro' },
    contactMessageLabel: { EN: 'Your Message', PT: 'Sua Mensagem' },
    contactSubmitButton: { EN: 'Send Message', PT: 'Enviar Mensagem' },
    contactResponseTime: { EN: 'We usually respond within 2 hours', PT: 'Geralmente respondemos em até 2 horas' },
    contactSuccessMessage: { EN: 'We have received your message and will call you on {phone} shortly.', PT: 'Recebemos sua mensagem e ligaremos para {phone} em breve.' },
    contactHoursLabel: { EN: 'Working Hours', PT: 'Horário de Atendimento' },
    contactNamePlaceholder: { EN: 'e.g. John Smith', PT: 'Ex: João Silva' },
    contactPhonePlaceholder: { EN: 'Your contact number', PT: 'Seu número para contato' },
    contactEmailPlaceholder: { EN: 'Email Address', PT: 'Endereço de e-mail' },
    contactMessagePlaceholder: { EN: 'Briefly describe the service you need...', PT: 'Descreva brevemente o serviço que deseja orçar...' },

    // ─── Footer ──────────────────────────────────────────────────────────────────
    footerDesc: {
        EN: 'Property maintenance, handyman, painting, carpentry, kitchens, bathrooms and landscaping in Cambridgeshire.',
        PT: 'Manutenção de imóveis, marido de aluguel, pintura, carpintaria, cozinhas, banheiros e paisagismo em Cambridgeshire.',
    },
    footerPrivacy: { EN: 'Privacy Policy', PT: 'Política de Privacidade' },
    footerTerms: { EN: 'Terms of Service', PT: 'Termos de Serviço' },
    footerNav: { EN: 'Navigation', PT: 'Navegação' },
    footerContact: { EN: 'Contact', PT: 'Contato' },
    footerNote: { EN: 'Serving Ely and surrounding area.', PT: 'Atendendo Ely e região.' },
    footerBusiness: { EN: 'Information', PT: 'Informações' },
    footerHours: { EN: 'Mon to Sat 07:00 – 18:00', PT: 'Seg. a Sáb. 07h – 18h' },
    footerRights: { EN: 'All rights reserved.', PT: 'Todos os direitos reservados.' },
    navServicearea: { EN: 'Area', PT: 'Área' }, // Used for dynamic nav generation in footer
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('PT'); // Default to PT as requested

    const t = (key: string, params?: Record<string, string>) => {
        if (!translations[key]) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        let text = translations[key][language];
        if (params) {
            Object.entries(params).forEach(([k, v]) => {
                text = text.replace(`{${k}}`, v);
            });
        }
        return text;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
