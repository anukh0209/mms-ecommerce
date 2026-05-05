// Translation dictionary for all supported languages
export type Language = 'en' | 'mn' | 'cn';

export const translations = {
  en: {
    // Header
    showroom: 'Showroom',
    contactUs: 'Contact Us',
    registration: 'Registration',
    search: 'Search',
    wishlist: 'Wishlist',
    cart: 'Cart',
    account: 'Account',
    logout: 'Logout',
    menu: 'Menu',
    
    // Navigation
    powerTools: 'Power Tools',
    handTools: 'Hand Tools',
    accessories: 'Accessories',
    storage: 'Storage',
    workGear: 'Work Gear',
    
    // Hero
    heroTitle: 'MMS',
    heroSubtitle: 'THE FUTURE IS ELECTRIC',
    heroDescription: 'Professional electrical products supplier for Mining, Construction and Energy sector of Mongolia',
    viewProducts: 'View Products',
    
    // Categories
    categories: 'Categories',
    solar: 'Solar',
    switchboard: 'Switchboard',
    battery: 'Battery Tools',
    cable: 'Cable',
    construction: 'Construction',
    mining: 'Mining',
    
    // Products
    newArrivals: 'New Arrivals',
    viewAll: 'View All',
    outOfStock: 'Out of Stock',
    inStock: 'In Stock',
    addToCart: 'Add to Cart',
    new: 'NEW',
    trending: 'TRENDING',
    
    // Contact
    contactTitle: 'CONTACT US',
    contactDescription: 'We are happy to hear your questions and suggestions. Please fill out the form below to contact us.',
    address: 'Address',
    addressValue: 'MMS Green Building, Archivist street 512, Khan-Uul district, Ulaanbaatar 17101, Mongolia',
    phone: 'Phone',
    phoneValue: '+976-7711-1999, 89664141',
    email: 'Email',
    emailValue: 'sales@source.mn',
    formTitle: 'Send Message',
    lastName: 'Last Name',
    firstName: 'First Name',
    message: 'Message',
    questionType: 'Question Type',
    productRelated: 'Product Related',
    serviceRelated: 'Service Related',
    other: 'Other',
    submit: 'Submit',
    sending: 'Sending...',
    
    // Cart
    cartTitle: 'Cart',
    cartEmpty: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    total: 'Total',
    checkout: 'Checkout',
    clearCart: 'Clear Cart',
    loginRequired: 'Please login to checkout',
    
    // Auth
    login: 'Login',
    loginDescription: 'Login with your account',
    register: 'Register',
    registerDescription: 'Create a new account',
    name: 'Name',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    loginButton: 'Login',
    registerButton: 'Register',
    loggingIn: 'Logging in...',
    registering: 'Registering...',
    noAccount: 'Don\'t have an account?',
    hasAccount: 'Already have an account?',
    loginSuccess: 'Login successful!',
    registerSuccess: 'Registration successful! Redirecting to login...',
    loginRequiredCart: 'Please login to view cart',
    loginRequiredAdd: 'Please login to add to cart',
    
    // Footer
    products: 'Products',
    company: 'Company',
    aboutUs: 'About Us',
    whereToBuy: 'Where To Buy',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
    contactInfo: 'Contact Info',
    social: 'Social',
    followUs: 'Follow us',
    copyright: '© 2026 MMS - The Future Is Electric. All rights reserved.',
    
    // Validation
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email',
    minPassword: 'Password must be at least 6 characters',
    passwordMatch: 'Passwords do not match',
    minName: 'Name must be at least 2 characters',
    
    // Errors
    emailExists: 'This email is already registered',
    invalidCredentials: 'Invalid email or password',
    logoutSuccess: 'Logout successful',
  },
  mn: {
    // Header
    showroom: 'Шоурум',
    contactUs: 'Холбоо барих',
    registration: 'Бүртгүүлэх',
    search: 'Хайх',
    wishlist: 'Хадгалах',
    cart: 'Сагс',
    account: 'Бүртгэл',
    logout: 'Гарах',
    menu: 'Цэс',
    
    // Navigation
    powerTools: 'Цахилгаан багаж',
    handTools: 'Гар багаж',
    accessories: 'Дагалдах хэрэгсэл',
    storage: 'Хадгалалт',
    workGear: 'Ажлын хувцас',
    
    // Hero
    heroTitle: 'MMS',
    heroSubtitle: 'ИРЭЭДҮЙ ЦАХИЛГААН',
    heroDescription: 'Уул уурхай, барилга, эрчим хүчний салбарын мэргэжлийн цахилгаан бараа нийлүүлэгч',
    viewProducts: 'БҮТЭЭГДЭХҮҮН ХАРАХ',
    
    // Categories
    categories: 'АНГИЛАЛУУД',
    solar: 'Нарны эрчим хүч',
    switchboard: 'Самбар',
    battery: 'Батарейт багаж',
    cable: 'Кабель',
    construction: 'Барилга',
    mining: 'Уул уурхай',
    
    // Products
    newArrivals: 'ШИНЭ БҮТЭЭГДЭХҮҮН',
    viewAll: 'БҮГДИЙГ ХАРАХ',
    outOfStock: 'Дууссан',
    inStock: 'Бэлэн',
    addToCart: 'САГСАНД НЭМЭХ',
    new: 'ШИНЭ',
    trending: 'ТРЭНД',
    
    // Contact
    contactTitle: 'ХОЛБОО БАРИХ',
    contactDescription: 'Бид таны асуулт, саналыг сонсохдоо баяртай байх болно. Доорх маягтыг бөглөж бидэнтэй холбогдоно уу.',
    address: 'ХАЯГ',
    addressValue: 'MMS Green Building, Archivist street 512, Хан-Уул дүүрэг, Улаанбаатар 17101, Монгол',
    phone: 'УТАС',
    phoneValue: '+976-7711-1999, 89664141',
    email: 'ИМЭЙЛ',
    emailValue: 'sales@source.mn',
    formTitle: 'ИЛГЭЭХ МАЯГТ',
    lastName: 'ОВОГ',
    firstName: 'НЭР',
    message: 'МЕССЕЖ',
    questionType: 'АСУУЛТЫН ТӨРӨЛ',
    productRelated: 'Бүтээгдэхүүнтэй холбоотой',
    serviceRelated: 'Үйлчилгээтэй холбоотой',
    other: 'Бусад',
    submit: 'ИЛГЭЭХ',
    sending: 'ИЛГЭЭЖ БАЙНА...',
    
    // Cart
    cartTitle: 'САГС',
    cartEmpty: 'Сагс хоосон байна',
    continueShopping: 'Дэлгүүр хэсэх',
    total: 'НИЙТ',
    checkout: 'ТӨЛБӨР ТӨЛӨХ',
    clearCart: 'САГС ХООСЛОХ',
    loginRequired: 'Төлбөр төлөхийн тулд нэвтэрнэ үү',
    
    // Auth
    login: 'НЭВТРЭХ',
    loginDescription: 'Бүртгэлээ ашиглан нэвтэрнэ үү',
    register: 'БҮРТГҮҮЛЭХ',
    registerDescription: 'Шинэ бүртгэл үүсгэнэ үү',
    name: 'НЭР',
    password: 'НУУЦ ҮГ',
    confirmPassword: 'НУУЦ ҮГ ДАВТАХ',
    loginButton: 'НЭВТРЭХ',
    registerButton: 'БҮРТГҮҮЛЭХ',
    loggingIn: 'НЭВТЭРЧ БАЙНА...',
    registering: 'БҮРТГЭЖ БАЙНА...',
    noAccount: 'Бүртгэл байхгүй юу?',
    hasAccount: 'Бүртгэлтэй юу?',
    loginSuccess: 'Амжилттай нэвтэрлээ!',
    registerSuccess: 'Амжилттай бүртгэгдлээ! Нэвтрэх хуудас руу шилжиж байна...',
    loginRequiredCart: 'Сагс харахын тулд нэвтэрнэ үү',
    loginRequiredAdd: 'Сагсанд нэмэхийн тулд нэвтэрнэ үү',
    
    // Footer
    products: 'БҮТЭЭГДЭХҮҮН',
    company: 'КОМПАНИ',
    aboutUs: 'Бидний тухай',
    whereToBuy: 'Хаанаас авах',
    terms: 'Үйлчилгээний нөхцөл',
    privacy: 'Нууцлалын бодлого',
    contactInfo: 'ХОЛБОГДОХ',
    social: 'СОШИАЛ',
    followUs: 'Биднийг дагаарай',
    copyright: '© 2026 MMS - The Future Is Electric. Бүх эрх хуулиар хамгаалагдсан.',
    
    // Validation
    required: 'Энэ талбарыг бөглөнө үү',
    invalidEmail: 'Зөв имэйл хаяг оруулна уу',
    minPassword: 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой',
    passwordMatch: 'Нууц үг таарахгүй байна',
    minName: 'Нэр хамгийн багадаа 2 үсэг байх ёстой',
    
    // Errors
    emailExists: 'Энэ имэйл хаяг бүртгэлтэй байна',
    invalidCredentials: 'Имэйл хаяг эсвэл нууц үг буруу байна',
    logoutSuccess: 'Амжилттай гарлаа',
  },
  cn: {
    // Header
    showroom: '展厅',
    contactUs: '联系我们',
    registration: '注册',
    search: '搜索',
    wishlist: '收藏',
    cart: '购物车',
    account: '账户',
    logout: '退出',
    menu: '菜单',
    
    // Navigation
    powerTools: '电动工具',
    handTools: '手动工具',
    accessories: '配件',
    storage: '存储',
    workGear: '工作装备',
    
    // Hero
    heroTitle: 'MMS',
    heroSubtitle: '未来是电动的',
    heroDescription: '蒙古国采矿、建筑和能源行业的专业电气产品供应商',
    viewProducts: '查看产品',
    
    // Categories
    categories: '分类',
    solar: '太阳能',
    switchboard: '配电板',
    battery: '电池工具',
    cable: '电缆',
    construction: '建筑',
    mining: '采矿',
    
    // Products
    newArrivals: '新品上市',
    viewAll: '查看全部',
    outOfStock: '缺货',
    inStock: '有货',
    addToCart: '加入购物车',
    new: '新品',
    trending: '热门',
    
    // Contact
    contactTitle: '联系我们',
    contactDescription: '我们很乐意听取您的问题和建议。请填写以下表格与我们联系。',
    address: '地址',
    addressValue: 'MMS Green Building, Archivist street 512, Khan-Uul district, Ulaanbaatar 17101, Mongolia',
    phone: '电话',
    phoneValue: '+976-7711-1999, 89664141',
    email: '邮箱',
    emailValue: 'sales@source.mn',
    formTitle: '发送消息',
    lastName: '姓',
    firstName: '名',
    message: '留言',
    questionType: '问题类型',
    productRelated: '产品相关',
    serviceRelated: '服务相关',
    other: '其他',
    submit: '提交',
    sending: '发送中...',
    
    // Cart
    cartTitle: '购物车',
    cartEmpty: '购物车是空的',
    continueShopping: '继续购物',
    total: '总计',
    checkout: '结账',
    clearCart: '清空购物车',
    loginRequired: '请登录以结账',
    
    // Auth
    login: '登录',
    loginDescription: '使用您的账户登录',
    register: '注册',
    registerDescription: '创建新账户',
    name: '姓名',
    password: '密码',
    confirmPassword: '确认密码',
    loginButton: '登录',
    registerButton: '注册',
    loggingIn: '登录中...',
    registering: '注册中...',
    noAccount: '没有账户？',
    hasAccount: '已有账户？',
    loginSuccess: '登录成功！',
    registerSuccess: '注册成功！正在跳转到登录页面...',
    loginRequiredCart: '请登录以查看购物车',
    loginRequiredAdd: '请登录以添加到购物车',
    
    // Footer
    products: '产品',
    company: '公司',
    aboutUs: '关于我们',
    whereToBuy: '购买地点',
    terms: '使用条款',
    privacy: '隐私政策',
    contactInfo: '联系信息',
    social: '社交',
    followUs: '关注我们',
    copyright: '© 2026 MMS - The Future Is Electric. 版权所有。',
    
    // Validation
    required: '此字段为必填项',
    invalidEmail: '请输入有效的电子邮件',
    minPassword: '密码必须至少6个字符',
    passwordMatch: '密码不匹配',
    minName: '姓名必须至少2个字符',
    
    // Errors
    emailExists: '此电子邮件已注册',
    invalidCredentials: '电子邮件或密码错误',
    logoutSuccess: '退出成功',
  }
};

export type Translations = typeof translations.en;
