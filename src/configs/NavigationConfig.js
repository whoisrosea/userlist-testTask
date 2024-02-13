import {
  DashboardOutlined,
  MobileOutlined,
  TeamOutlined,
  UserOutlined,
  ShopOutlined,
  GiftOutlined,
  ShoppingOutlined,
  PictureOutlined,
  SettingOutlined,
  FileTextOutlined,
  MailOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-default",
        path: `${APP_PREFIX_PATH}/main/default`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-catalog-goods",
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: "Товары",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: "Категории",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: "Коллекции",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-combos",
            path: `${APP_PREFIX_PATH}/main/catalog/combos`,
            title: "Комплекты",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-clients-clientsList",
            path: `${APP_PREFIX_PATH}/main/clients/clientsList`,
            title: "Список клиентов",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-clients-clientsGroups",
            path: `${APP_PREFIX_PATH}/main/clients/clientsGroups`,
            title: "Группы клиентов",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-banners",
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-promocodes",
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-offlineMarkets",
        path: `${APP_PREFIX_PATH}/main/offlineMarkets`,
        title: "Офлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-offlineMarkets-addresses",
            path: `${APP_PREFIX_PATH}/main/offlineMarkets/addresses`,
            title: "Адреса",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-offlineMarkets-geozones",
            path: `${APP_PREFIX_PATH}/main/offlineMarkets/geozones`,
            title: "Геозоны",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-employees",
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: "Сотрудники",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-mailings",
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: "systems",
    path: `${APP_PREFIX_PATH}/systems`,
    title: "Системные",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "systems-settings",
        path: `${APP_PREFIX_PATH}/systems/settings`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "systems-mobileApp",
        path: `${APP_PREFIX_PATH}/systems/mobileApp`,
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "systems-logs",
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree, ...systemsNavTree];

export default navigationConfig;

