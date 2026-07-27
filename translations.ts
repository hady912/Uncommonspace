import { EventType, StudioZone, PricingPackage, Review, FAQ } from '../types';

import heroImg from '../assets/images/hero_uncommon_space_1785184394514.jpg';
import zoneLoungeImg from '../assets/images/studio_zone_lounge_1785184407422.jpg';
import celebrationSetImg from '../assets/images/event_celebration_set_1785184420290.jpg';

export const UI_TEXT = {
  brandName: {
    en: 'UNCOMMON SPACE',
    ar: 'أنكومون سبيس',
  },
  tagline: {
    en: 'Creative rental space + event venue | For Photo, Video & Celebrations',
    ar: 'مساحة إبداعية للتوظيف والاحتفالات | للصور، الفيديو والاحتفالات',
  },
  locationShort: {
    en: 'Qurtubah, Riyadh',
    ar: 'قرطبة، الرياض',
  },
  nav: {
    about: { en: 'About', ar: 'عن المساحة' },
    events: { en: 'Event Types', ar: 'أنواع الفعاليات' },
    zones: { en: 'Studio Sets', ar: 'أركان الاستوديو' },
    pricing: { en: 'Pricing & Packages', ar: 'الباقات والأسعار' },
    calculator: { en: 'Cost Calculator', ar: 'حاسبة التكلفة' },
    contact: { en: 'Contact & Location', ar: 'الموقع والتواصل' },
    bookNow: { en: 'Book Your Session', ar: 'احجز الآن' },
    whatsAppBtn: { en: 'Book via WhatsApp', ar: 'حجز عبر الواتساب' },
  },
  hero: {
    badge: {
      en: 'Qurtubah, Riyadh — Premier Creative Space',
      ar: 'قرطبة، الرياض — المساحة الإبداعية الأولى',
    },
    titleLine1: {
      en: 'Where Moments Become',
      ar: 'حيث تصبح اللحظات',
    },
    titleLine2: {
      en: 'Uncommon.',
      ar: 'غير عادية.',
    },
    subheadline: {
      en: "Riyadh's premier versatile space designed for editorial photo shoots, brand campaigns, masterclasses, and intimate, aesthetic celebrations.",
      ar: 'المساحة الأكثر تميزاً في الرياض المصممة لجلسات التصوير التحريرية، حملات العلامات التجارية، ورش العمل، والاحتفالات الخاصة والأنيقة.',
    },
    exploreBtn: {
      en: 'Explore Spaces',
      ar: 'استكشف المساحات',
    },
    stats: [
      { number: '180', label: { en: 'Sqm Total Area', ar: 'متر مربع مساحة إجمالية' } },
      { number: '100%', label: { en: 'Natural Light & Blackout', ar: 'إضاءة طبيعية وتعتيم كامل' } },
      { number: '4+', label: { en: 'Aesthetic Studio Sets', ar: 'أركان تصوير مصممة' } },
      { number: 'Qurtubah', label: { en: 'Prime Riyadh Hub', ar: 'موقع مميز بقرطبة' } },
    ]
  },
  about: {
    title: { en: 'Designed for Creative Freedom', ar: 'صُمِّمَت للحرية الإبداعية' },
    subtitle: { 
      en: 'Uncommon Space is a thoughtfully curated, flexible venue in Qurtubah, Riyadh. Built with tactile plaster textures, arched entryways, and soft neutral palettes, every corner serves as a canvas for your visual story or celebration.',
      ar: 'أنكومون سبيس هي مساحة مرنة ومصممة بعناية في حي قرطبة بالرياض. بأسطحها الجصية الملموسة، وأقواسها العصرية، وألوانها المحايدة الهادئة، تُشكِّل كل زاوية فيها لوحة فنية لقصتك البصرية أو احتفالك الخاص.'
    },
    highlightsTitle: { en: 'Venue Amenities & Logistics', ar: 'مميزات المكان والتجهيزات' },
    highlights: [
      {
        icon: 'Sun',
        title: { en: 'Abundant Natural Sunlight', ar: 'إضاءة طبيعية غزيرة' },
        desc: { en: 'Floor-to-ceiling soft diffusion curtains with golden hour light and optional 100% blackout capability.', ar: 'ستائر ناعمة ممتدة من السقف للأرض لتوفر ضوء الساعة الذهبية مع إمكانية التعتيم الكامل.' }
      },
      {
        icon: 'Palette',
        title: { en: 'Curated Props & Furniture', ar: 'أثاث وإكسسوارات منتقاة' },
        desc: { en: 'Designer bouclé seating, travertine pedestals, ceramic vases, backdrop rolls, and archways.', ar: 'كراسي بوكليه فاخرة، قواعد ترافرتين، فازات سيراميك، خلفيات تصوير ملونة، وأقواس معمارية.' }
      },
      {
        icon: 'Sparkles',
        title: { en: 'Glam Makeup & Changing Suite', ar: 'غرفة ماكياج وتبديل ملا بس' },
        desc: { en: 'Private vanity station with Hollywood lit mirrors, garment rack, steamer, and full privacy.', ar: 'محطة ماكياج خاصة بمرايا مضاءة، معلاق ملابس، كاوية بخار، وخصوصية تامة.' }
      },
      {
        icon: 'Coffee',
        title: { en: 'Coffee & Refreshment Bar', ar: 'ركن القهوة والمشروبات' },
        desc: { en: 'Complimentary specialty coffee setup, espresso machine, filtered water, and tea station.', ar: 'ركن قهوة مختصة مجاني، آلة إسبرسو، مياه نقية، وتشكيلة من الشاي.' }
      },
      {
        icon: 'Wifi',
        title: { en: 'High-Speed Wi-Fi & Audio', ar: 'إنترنت سريع وسماعات' },
        desc: { en: 'Seamless high-speed optical Wi-Fi for live streams and Bluetooth ambient sound system.', ar: 'إنترنت ألياف بصرية سريع للبث المباشر ونظام صوتي بل bluetooth أجواء هادئة.' }
      },
      {
        icon: 'Truck',
        title: { en: 'Seamless Freight & Catering Access', ar: 'سهولة التحميل والضيافة' },
        desc: { en: 'Ground floor direct access for easy equipment unloading and catering setups.', ar: 'مدخل مباشر بالدور الأرضي لسهولة تنزيل معدات التصوير وتجهيزات الكاترينج والضيافة.' }
      }
    ]
  },
  pricing: {
    title: { en: 'Simple, Transparent Pricing', ar: 'أسعار واضحة وباقات مرنة' },
    subtitle: { en: 'Opening Prices — Choose hourly studio rental or full-day venue access.', ar: 'أسعار الافتتاح — اختر الإيجار بالساعة لجلسات التصوير أو حجز اليوم الكامل.' },
    depositNotice: {
      en: 'A Deposit of 300 SR is required. Refunds will be processed within 7 Business days.',
      ar: 'مطلوب عربون / تأمين بقيمة 300 ريال. يتم استرجاع المبلغ خلال 7 أيام عمل.',
    },
    cta: { en: 'Book Session on WhatsApp', ar: 'احجز عبر الواتساب' }
  },
  contact: {
    title: { en: 'Visit & Connect With Us', ar: 'تفضل بزيارتنا وتواصل معنا' },
    subtitle: { en: 'Located in the heart of Qurtubah, Riyadh. Available for viewings by appointment.', ar: 'في قلب حي قرطبة، الرياض. يسعدنا استقبالكم للزيارة والمعاينة بموعد مسبق.' },
    addressLabel: { en: 'Location Address', ar: 'عنوان الموقع' },
    addressVal: { en: 'Qurtubah District, Riyadh 13326, Kingdom of Saudi Arabia', ar: 'حي قرطبة، الرياض 13326، المملكة العربية السعودية' },
    hoursLabel: { en: 'Operating Hours', ar: 'ساعات العمل' },
    hoursVal: { en: 'Daily: 8:00 AM – 11:00 PM (By Reservation)', ar: 'يومياً: 8:00 صباحاً – 11:00 مساءً (بحجز مسبق)' },
    phoneLabel: { en: 'WhatsApp & Phone', ar: 'الواتساب والهاتف' },
    phoneVal: { en: '+966 53 550 5230', ar: '5230 550 53 966+' },
    instagramLabel: { en: 'Instagram', ar: 'إنستغرام' },
    instagramVal: { en: '@uncommonspace.sa', ar: 'uncommonspace.sa@' },
    formTitle: { en: 'Send a Booking Inquiry', ar: 'إرسال طلب استفسار عن حجز' },
    formName: { en: 'Your Name', ar: 'الاسم الكريم' },
    formPhone: { en: 'WhatsApp Mobile Number', ar: 'رقم الجوال (واتساب)' },
    formDate: { en: 'Preferred Date', ar: 'التاريخ المفضل' },
    formEventType: { en: 'Event / Shoot Category', ar: 'نوع الفعالية أو الجلسة' },
    formMessage: { en: 'Additional Details / Setup Requests', ar: 'تفاصيل إضافية أو طلبات خاصة' },
    formSubmit: { en: 'Submit Inquiry via WhatsApp', ar: 'إرسال الطلب عبر الواتساب' },
  },
  reviews: {
    title: { en: 'Loved by Riyadh Creators & Hosts', ar: 'آراء المبدعين وصناع المحتوى في الرياض' },
    subtitle: { en: 'What fashion brands, photographers, and event hosts say about Uncommon Space.', ar: 'ماذا يقول صُنَّاع العلامات التجارية والمصورون ومضيفو الاحتفالات عن أنكومون سبيس.' }
  },
  faq: {
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
  }
};

export const EVENT_TYPES: EventType[] = [
  {
    id: 'social-celebrations',
    category: 'celebrations',
    title: {
      en: 'Social Celebrations & Gatherings',
      ar: 'الاحتفالات الخاصة واللقاءات',
    },
    subtitle: {
      en: 'Birthdays, Bridal Showers, Graduation Parties & Dinner Gatherings',
      ar: 'أعياد الميلاد، حفلات الشوير، التخرج، ومآدب العشاء الخاصة',
    },
    description: {
      en: 'Create unforgettable intimate memories in an aesthetic setting. Uncommon Space offers custom table setups, cake display pedestals, ambient lighting, and complete privacy for your special moments.',
      ar: 'اصنع ذكريات لا تُنسى في أجواء أنيقة. تقدم أنكومون سبيس تنسيقات طاولات مخصصة، قواعد لعرض الكيك، إضاءة خافتة ساحرة، وخصوصية تامة للحظاتكم الخاصة.',
    },
    image: celebrationSetImg,
    capacity: {
      en: 'Up to 25 Guests',
      ar: 'يتسع لغاية 25 ضيفاً',
    },
    suitableFor: {
      en: [
        'Adult & Kids Birthday Celebrations',
        'Bridal Showers & Engagement Dinners',
        'Gender Reveal Parties',
        'Graduation & Success Parties',
        'Private Family Gatherings',
      ],
      ar: [
        'أعياد ميلاد الكبار والأطفال',
        'حفلات ما قبل الزفاف والعشاء',
        'حفلات كشف جنس المولود',
        'حفلات التخرج والنجاح',
        'اللقاءات العائلية الخاصة',
      ],
    },
    features: {
      en: [
        'Modular seating & banquet table options',
        'Dedicated cake & dessert display area',
        'Bluetooth surround sound audio system',
        'Private makeup & gown preparation suite',
        'Catering & cake delivery coordinator access',
      ],
      ar: [
        'خيارات طاولات ومقاعد قابلة للتعديل',
        'منطقة مخصصة لعرض الكيك والحلويات',
        'نظام صوتي ستيريو عالي الدقة',
        'جناح خاص لتحضيرات الماكياج والأزياء',
        'تسهيل دخول شركات الضيافة والكاترينج',
      ],
    },
    popularPackageId: 'celebration-package',
  },
  {
    id: 'brand-fashion',
    category: 'brand',
    title: {
      en: 'Brand & Fashion Sessions',
      ar: 'جلسات التصوير والأزياء للعلامات التجارية',
    },
    subtitle: {
      en: 'Abaya Collections, Perfumes, Commercial Photography & Video',
      ar: 'مجموعات العبايات، العطور، التصوير التجاري والفيديو',
    },
    description: {
      en: 'Engineered for fashion lookbooks, perfume launches, and luxury campaign shoots. Enjoy versatile backdrop rolls, high ceilings, continuous softbox lighting, and tactile plaster walls.',
      ar: 'مصممة خصيصاً لوكبوك الأزياء، إطلاق العطور، وحملات العلامات الفاخرة. استمتع بخلفيات ملونة متعددة، أسقف مرتفعة، إضاءة استوديو مستمرة، وجدران جصية راقية.',
    },
    image: heroImg,
    capacity: {
      en: 'Production Crew & Models (Up to 15)',
      ar: 'طاقم الإنتاج والعارضات (لغاية 15 شخصاً)',
    },
    suitableFor: {
      en: [
        'Abaya & Couture Fashion Lookbooks',
        'Perfume & Luxury Product Photography',
        'E-Commerce Flat-Lays & On-Model Shoots',
        'Social Media Reels & Brand Campaign Videos',
        'Commercial Advertisements & Press Kits',
      ],
      ar: [
        'تصوير مجموعات العبايات والأزياء',
        'تصوير العطور والمنتجات الفاخرة',
        'التصوير المكتبي والإلكتروني للمتاجر',
        'فيديوهات المجلات ووسائل التواصل الاجتماعي',
        'الإعلانات التجارية والمواد الصحفية',
      ],
    },
    features: {
      en: [
        'Multiple paper & fabric backdrop rolls',
        'Continuous daylight softboxes & reflectors',
        'Full-length arch mirrors & steamer',
        'High-speed optical Wi-Fi for live tethering',
        'Ground-floor freight access for racks',
      ],
      ar: [
        'خلفيات تصوير ورقية وقماشية متعددة',
        'إضاءة استوديو مستمرة ومشتتات الضوء',
        'مرايا قوسية طويلة وكاوية بخار',
        'إنترنت سريع جداً لنقل الصور فورياً',
        'مدخل أرضي ميسر لنقل ملابس العرض',
      ],
    },
    popularPackageId: 'hourly-creative',
  },
  {
    id: 'workshops-seasonal',
    category: 'workshops',
    title: {
      en: 'Workshops, Courses & Seasonal Events',
      ar: 'ورش العمل، الدورات والفعاليات الموسمية',
    },
    subtitle: {
      en: 'Masterclasses, Creative Workshops, Eid, Valentine & New Year Sets',
      ar: 'ماستر كلاس، ورش العمل الفنية، وتنسيقات الأعياد والمناسبات',
    },
    description: {
      en: 'A inspiring setting for instructors and creators to host masterclasses, flower arranging, art sessions, or seasonal campaign installations with flexible seating.',
      ar: 'بيئة مُلهمة للمدربين والمبدعين لإقامة ورش العمل، تنسيق الزهور، جلسات الفن، أو تجهيزات الحملات الموسمية مع ترتيب مقاعد مرن.',
    },
    image: zoneLoungeImg,
    capacity: {
      en: 'Up to 20 Attendees',
      ar: 'يتسع لغاية 20 متدرباً/ضيفاً',
    },
    suitableFor: {
      en: [
        'Floral Design & Art Masterclasses',
        'Photography & Lighting Workshops',
        'Beauty & Makeup Education Courses',
        'Eid & Ramadan Seasonal Displays',
        'Pop-up Showrooms & Product Teasers',
      ],
      ar: [
        'ورش تنسيق الزهور والفنون الرسم',
        'دورات التصوير الفوتوغرافي والإضاءة',
        'ورش تعليم الماكياج والعناية بالبشرة',
        'تنسيقات الأعياد والمناسبات الموسمية',
        'معارض مصغرة وإطلاق المنتجات',
      ],
    },
    features: {
      en: [
        'Flexible workshop tables & chair configurations',
        'Projection screen & presentation board available',
        'Specialty espresso & beverage bar station',
        'Aesthetic photo backdrop for student graduation photos',
        'Convenient parking in Qurtubah district',
      ],
      ar: [
        'طاولات وكراسي ورش عمل قابلة لإعادة الترتيب',
        'شاشة عرض ولوح تقديم متوفر',
        'ركن القهوة والمشروبات المختصة',
        'زاوية تصوير أنيقة لالتقاط صور المشاركين',
        'مواقف سيارات مريحة في حي قرطبة',
      ],
    },
    popularPackageId: 'full-day-takeover',
  },
];

export const STUDIO_ZONES: StudioZone[] = [
  {
    id: 'sunlit-lounge',
    title: {
      en: 'The Sunlit Plaster Lounge',
      ar: 'الصالة الجصية المضاءة بالشمس',
    },
    tagline: {
      en: 'Warm textures, arched alcoves & bouclé comfort',
      ar: 'ملمس دافئ، أقواس جدارية، وراحة البوكليه',
    },
    description: {
      en: 'Featuring soft cream plaster walls, curved architectural arches, a designer beige bouclé sofa, and organic travertine side tables illuminated by natural daylight.',
      ar: 'تتميز بجدران جصية كريمية ناعمة، أقواس معمارية منحنية، أريكة بوكليه فاخرة، وطاولات ترافرتين إيطالية تحيط بها الإضاءة الطبيعية.',
    },
    image: zoneLoungeImg,
    dimensions: '6m x 5m (30 sqm)',
    highlights: {
      en: [
        'Warm cream plaster wall backdrop',
        'Organic curved alcove arches',
        'Designer bouclé lounge chair & sofa',
        'Natural golden hour lighting setup',
      ],
      ar: [
        'خلفية جدارية جصية ناعمة',
        'أقواس معمارية منحنية وأنيقة',
        'أريكة وكراسي بوكليه فاخرة',
        'إضاءة ذهبية طبيعية طوال النهار',
      ],
    },
  },
  {
    id: 'editorial-cyclorama',
    title: {
      en: 'The Editorial & Backdrop Corner',
      ar: 'استوديو الخلفيات والتصوير التحريري',
    },
    tagline: {
      en: 'Seamless backdrop paper, studio lights & fashion stands',
      ar: 'ورق خلفيات سلس، إضاءات استوديو، وحوامل تصوير',
    },
    description: {
      en: 'Equipped with multiple color backdrop rolls (Savage paper backdrops in Beige, White, Terracotta, Olive, Charcoal), studio flash strobes, softboxes, C-stands, and reflectors.',
      ar: 'مجهز برولات خلفيات تصوير ملونة متنوعة (بيج، أبيض، تيركوتا، زيتوني، رمادي)، إضاءات استوديو احترافية، ممتصات ومشتتات الضوء، وحوامل C-stands.',
    },
    image: heroImg,
    dimensions: '7m x 6m (42 sqm)',
    highlights: {
      en: [
        'Savage seamless backdrop paper rolls',
        'Continuous & strobe light modifiers',
        'Full-height clothing rack & steamer',
        'Tethering laptop table on wheels',
      ],
      ar: [
        'رولات خلفيات تصوير احترافية خالية من الفواصل',
        'إضاءات استوديو مستمرة وفلاشات مع مشتتات',
        'معلاق ملابس كبير وكاوية بخار عمودية',
        'طاولة حاسوب متحرّكة لمتابعة الصور فورياً',
      ],
    },
  },
  {
    id: 'banquet-set',
    title: {
      en: 'The Intimate Banquet Table',
      ar: 'ركن المأدبة والاحتفالات الخاصة',
    },
    tagline: {
      en: 'Aesthetic dining, dried florals & candlelight ambiance',
      ar: 'طاولة طعام راقية، زهور جافة، وأجواء الشموع',
    },
    description: {
      en: 'A stylized long dining table setup with linen tablecloths, ceramic stoneware, gold cutlery, tapered candles, and dry floral centerpieces for celebrations or food photography.',
      ar: 'طاولة طعام طويلة منسقة بمفارش كنان ناعمة، أواني سيراميك، أدوات مائدة مذهبة، شموع دافئة، وتنسيقات زهور أنيقة للفعاليات أو تصوير الأطعمة.',
    },
    image: celebrationSetImg,
    dimensions: '8m x 4m (32 sqm)',
    highlights: {
      en: [
        'Seating for up to 16 guests at central table',
        'Curated linen tablecloths & napkin styling',
        'Candleholders & tapered candle ambiance',
        'Cake & welcome sign display pedestal',
      ],
      ar: [
        'مقاعد تتسع لـ 16 ضيفاً على الطاولة الرئيسية',
        'أقمشة كنان وتنسيقات مناديل فاخرة',
        'شمعدانات وأجواء الشموع الدافئة',
        'قواعد خاصة لعرض الكيك ولوحة الترحيب',
      ],
    },
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'hourly-creative',
    name: {
      en: 'Hourly Studio Rental',
      ar: 'إيجار الاستوديو بالساعة',
    },
    badge: {
      en: '150 SR / Hour',
      ar: '150 ريال / ساعة',
    },
    priceSAR: 150,
    unit: {
      en: 'per hour (Min 2 Hours)',
      ar: 'لكل ساعة (حد أدنى ساعتين)',
    },
    durationText: {
      en: 'Minimum 2 hours booking (300 SAR)',
      ar: 'حد أدنى ساعتين للحجز (300 ريال)',
    },
    description: {
      en: '150 SR / hour. Minimum 2 hours booking required. Perfect for photoshoots, lookbooks, and content creation.',
      ar: '150 ريال / ساعة. حد أدنى ساعتين للحجز (300 ريال). مثالية لتصوير الموضة، العبايات، والمنتجات.',
    },
    includes: {
      en: [
        'Full access to all Studio Sets & Lounge',
        'Choice of Backdrop Roll setup',
        'Glam Makeup Vanity & Changing Suite',
        'Complimentary Specialty Coffee & Water',
        'High-Speed Optical Wi-Fi',
        'Deposit: 300 SAR required (Refundable in 7 days)',
      ],
      ar: [
        'دخول كامل لجميع أركان الاستوديو والصالة',
        'تجهيز رول خلفية تصوير اختيارك',
        'جناح الماكياج وتبديل الملابس الخاص',
        'ركن القهوة المختصة والمياه مجاني',
        'إنترنت ألياف بصرية سريع جداً',
        'التأمين: 300 ريال مطلوب (يُسترجع خلال 7 أيام)',
      ],
    },
    idealFor: {
      en: 'Photographers, Abaya Brands, Content Creators',
      ar: 'المصورون، براندات العبايات، وصناع المحتوى',
    },
    isPopular: true,
  },
  {
    id: 'full-day-takeover',
    name: {
      en: 'Full Day Rental',
      ar: 'إيجار يوم كامل',
    },
    badge: {
      en: '1800 SR / Full Day',
      ar: '1800 ريال / يوم كامل',
    },
    priceSAR: 1800,
    unit: {
      en: 'full day (12 Hours)',
      ar: 'يوم كامل (12 ساعة)',
    },
    durationText: {
      en: '12 Hours Full Day Exclusive Access',
      ar: '12 ساعة دخول حصري بالكامل',
    },
    description: {
      en: '1800 SR / full day (12 Hours). Comprehensive exclusive venue access for production, campaigns & events.',
      ar: '1800 ريال / يوم كامل (12 ساعة). تغطية وحصرية كاملة للمكان للإنتاج، الحملات والفعاليات.',
    },
    includes: {
      en: [
        '12 Hours full venue exclusive takeover',
        'Full access to all studio backdrop rolls & lights',
        'Event tables & seating for up to 20 guests',
        'Unlimited specialty coffee bar station',
        'Presentation display screen & audio system',
        'Deposit: 300 SAR required (Refundable in 7 days)',
      ],
      ar: [
        '12 ساعة دخول حصري بالكامل للمكان',
        'دخول مفتوح لجميع رولات خلفيات ومعدات الاستوديو',
        'طاولات وكراسي الفعاليات لـ 20 شخصاً',
        'قهوة مختصة مفتوحة لفريق العمل أو الحضور',
        'شاشة عرض للتقديم ونظام صوتي عالي الدقة',
        'التأمين: 300 ريال مطلوب (يُسترجع خلال 7 أيام)',
      ],
    },
    idealFor: {
      en: 'Masterclasses, Commercial Shoots, Full Day Events',
      ar: 'ورش العمل، تصوير الحملات الضخمة، والفعاليات',
    },
    isPopular: false,
  },
];


export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorName: 'Reem Al-Otaibi',
    authorRole: {
      en: 'Founder, Atelier Reem Abayas',
      ar: 'مؤسسة براند أتيلييه ريم للعبايات',
    },
    content: {
      en: 'Uncommon Space is hands-down the best creative studio in Riyadh! The natural light in Qurtubah is incredible for our abaya lookbooks. Clean plaster arches made our photoshoot look like an international fashion campaign.',
      ar: 'أنكومون سبيس هو أفضل استوديو تصوير في الرياض بلا منازع! الإضاءة الطبيعية في حي قرطبة رائعة جداً لمجموعات عباياتنا. الأقواس والجدران الجصية جعلت جلسة التصوير تبدو كحملة عالمية.',
    },
    rating: 5,
    date: 'July 2026',
    eventType: {
      en: 'Fashion Shoot',
      ar: 'تصوير أزياء',
    },
  },
  {
    id: 'rev-2',
    authorName: 'Lama & Faisal',
    authorRole: {
      en: 'Bridal Shower Hosts',
      ar: 'حفل شوير خاص',
    },
    content: {
      en: 'We hosted a bridal shower for my sister here. The team at Uncommon Space was beyond helpful, the candlelit banquet table setup was pure magic, and all our guests took gorgeous photos in every corner!',
      ar: 'أقمنا حفل شوير لأختي هنا. كان الفريق متعاوناً للغاية، وتنسيق طاولة الطعام والشموع كان ساحراً بمعنى الكلمة، والضيوف التقطوا أجمل الصور في كل زاوية!',
    },
    rating: 5,
    date: 'June 2026',
    eventType: {
      en: 'Bridal Shower',
      ar: 'حفل شوير',
    },
  },
  {
    id: 'rev-3',
    authorName: 'Tariq K. Photographer',
    authorRole: {
      en: 'Commercial & Perfume Photographer',
      ar: 'مصور تجاري وعطور',
    },
    content: {
      en: 'Super smooth booking, top-tier studio equipment, and high-speed Wi-Fi for live tethering. The location in Qurtubah has super easy parking for models and production trucks.',
      ar: 'حجز سلس للغاية، أجهزة ومعدات استوديو عالية الجودة، وإنترنت سريع لمتابعة التصوير. موقع قرطبة يوفر مواقف مريحة للعارضات وسيارة النقل.',
    },
    rating: 5,
    date: 'May 2026',
    eventType: {
      en: 'Perfume Campaign',
      ar: 'حملة تصوير عطور',
    },
  },
];

export const FAQS: FAQ[] = [
  {
    question: {
      en: 'Where is Uncommon Space located in Riyadh?',
      ar: 'أين تقع مساحة أنكومون سبيس في الرياض؟',
    },
    answer: {
      en: 'We are conveniently located in Qurtubah District, Riyadh, Saudi Arabia with easy street parking and ground floor loading access.',
      ar: 'نقع في حي قرطبة بالرياض، المملكة العربية السعودية. يتميز الموقع بمواقف سيارات واسعة ومدخل أرضي ميسر لنقل المعدات.',
    },
  },
  {
    question: {
      en: 'How do I book a session or event at Uncommon Space?',
      ar: 'كيف يمكنني حجز جلسة أو فعالية في أنكومون سبيس؟',
    },
    answer: {
      en: 'You can book directly via WhatsApp (+966 53 550 5230) or by submitting the online inquiry form. A fixed deposit of 300 SAR is required to secure your booking, which will be fully refunded within 7 business days after your session.',
      ar: 'يمكنكم الحجز مباشرة عبر الواتساب (5230 550 53 966+) أو تعبئة نموذج الاستفسار بالموقع. يتطلب الحجز تأمين/عربون ثابت بقيمة 300 ريال سعودي لتثبيت الموعد، ويتم استرجاع المبلغ بالكامل خلال 7 أيام عمل بعد الجلسة.',
    },
  },
  {
    question: {
      en: 'Are external catering and cake deliveries allowed for celebrations?',
      ar: 'هل يُسمح بإحضار الضيافة والكيك الخارجي للاحتفالات؟',
    },
    answer: {
      en: 'Yes! You are welcome to bring your own catering, cake, drinks, or decor stylists. We provide a kitchenette and fridge for food preparation.',
      ar: 'بالتأكيد! يسعدنا استقبال الضيافة والكيك المفضل لديكم أو منسقي الحفلات. كما نوفر مطبخاً تحضيرياً وثلاجة مخصصة.',
    },
  },
  {
    question: {
      en: 'Is there a private room for outfit changes and makeup?',
      ar: 'هل تتوفر غرفة خاصة لتبديل الملابس والماكياج؟',
    },
    answer: {
      en: 'Yes, we have a dedicated private Glam Suite equipped with Hollywood mirrors, clothing racks, a clothes steamer, and full privacy for models and guests.',
      ar: 'نعم، نوفر جناح ماكياج وتجهيز خاص مجهز بمرايا هوليوود المضاءة، معاليق ملابس، كاوية بخار عمودية، وخصوصية تامة.',
    },
  },
  {
    question: {
      en: 'What is your cancellation and date change policy?',
      ar: 'ما هي سياسة الإلغاء أو تعديل موعد الحجز؟',
    },
    answer: {
      en: 'Date reschedules are free of charge if requested at least 48 hours prior to your reservation. Deposits are fully transferable to new dates within 60 days.',
      ar: 'يمكن تعديل موعد الحجز مجاناً في حال إبلاغنا قبل 48 ساعة على الأقل من الموعد. وتُحوّل الدفعة المقدمة لصالح الموعد الجديد خلال 60 يوماً.',
    },
  },
];
